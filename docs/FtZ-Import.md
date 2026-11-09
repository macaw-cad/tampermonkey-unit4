# Excel import ("Florians tollige Zeiterfassung")

Notice: this is currently an experimental feature, you need to explicitly activate it
in the configuration ("Import data from Florians tollige Zeiterfassung Excel").

The import takes the day log of the "Florians tollige Zeiterfassung" Excel and enters
work orders, descriptions, hours, working hours (From/To) and breaks into your Unit4
timesheet.

# How to use

## 1. Copy the data from Excel

Click anywhere into the time entry area of the Excel and press **Ctrl+A**: Excel selects
all your time entries. Copy them with **Ctrl+C**.

Don't worry about selecting too much: pressing Ctrl+A a second time (or clicking into the
header and pressing Ctrl+A) selects the whole sheet, including the statistics and the week
summary. That works just as well, the import picks out the time entries in both cases.

## 2. Paste and import

1. Open your timesheet in Unit4 and click **Import** below the time entry table.
2. Paste the data into the dialog (Ctrl+V) and click **Start Import**.

The same button also accepts JSON data (see [JSON-Import.md](JSON-Import.md)),
the format is detected automatically.

## 3. Review (only if needed)

If something needs your attention, a review view is shown before the import starts:

* **Bookings without a work order** are listed as a warning. They cannot be imported,
  usually you want to fix them in the Excel and paste again. The import can be started
  anyway.
* **Bookings on days that are not part of the current timesheet** (e.g. a week split by the
  end of a month) are listed and skipped.
* **Incomplete or invalid work orders** (e.g. `950100-X` or `950100`) have to be corrected
  before the import can start. Below each of them, the matching work orders from Unit4 are
  suggested with their description (e.g. all `950100-*` work orders) - just click the right
  one, or type to search again. To be able to search, Unit4 needs a time entry row in
  editing mode, so the page reloads once and the dialog opens again by itself.
  Your corrections are remembered and prefilled the next time.
  The correction applies to all bookings of that work order. If some of them need a different
  one (e.g. `123456-10001` for development but `123456-10002` for meetings), click
  **abweichende Workorder** next to these bookings and pick their own work order.
* **Missing hours**: if your bookings stay below the "Normal hours" of the timesheet, you can
  tick a checkbox to book the missing hours as overtime compensation, see below.

## 4. Check and save

Since Unit4 reloads the page for many changes, the import takes a moment - a progress
indicator is shown in the top right corner. When it has finished, a summary is shown;
the **failed** button next to "Add" shows the last failures again.

The import does not save anything: check the result and hit **Save** when you are fine
with it.

# What gets imported

* **Work orders and descriptions**: the column "Echte Workorder" is used. Bookings with the
  same work order, activity and description are combined into one row, the hours are summed
  up per day.
* **Activity**: by default, Unit4 sets the default activity of the work order (usually 100).
  To book a different activity, add it in parentheses behind the work order in
  "Echte Workorder", e.g. `950000-10000 (908)` to book overtime.
* **Working hours (From/To)**: the earliest start and the latest end of each day.
* **Breaks**: the gaps between the bookings of a day, entered into the break row
  (activity 999) that Unit4 inserts automatically. Rows marked as "Pause" in the Excel are
  ignored, as the gap already covers them.
* **Vacation, overtime compensation, sick leave & co.** are booked with their duration only,
  see below.
* After the import, a sanity check verifies the break rules, the maximum working time per
  day and the weekly totals against the "Normal hours" of your timesheet.

# Vacation, overtime compensation & co.

The Excel calculates the duration from start and end, so bookings like vacation or overtime
compensation need times as well - but these times are no presence. Bookings on the following
work orders are therefore booked with their duration, but their times are neither used for the
working hours (From/To) nor for the breaks, and the sanity check does not count them as work:

| Work order     | What                                                                       |
|----------------|----------------------------------------------------------------------------|
| `950000-10000` | DE3 internal: vacation (900), bank holiday (906), child sick (905), overtime compensation (908), ... |
| `950100-10025` | DE3 sick leave                                                             |
| `940000-10000` | DE2 internal                                                               |
| `940100-10025` | DE2 sick leave                                                             |

Example: if you worked from 9:00 to 17:00 and book overtime compensation from 17:00 to 17:30,
the working hours are 9:00 - 17:00. A day with vacation or sick leave only gets the working hours
00:00 - 00:00 (no presence) instead of Unit4's default times.

If your country or company uses other work orders, adjust the list with the configuration
option "Work orders not counting as presence", one rule per line:

```
950200-10011           another work order (text behind the rule is ignored)
950300-*               "*" as wildcard
-950000-10000 (906)    a leading "-" adds an exception: bank holidays count as presence
-940000-10000          ... or removes a default rule completely
```

Your rules are combined with the defaults above, so new defaults that come with an update apply
automatically. If a default is missing or wrong for everybody, please tell us so it can be
fixed for all.

# Filling up missing hours with overtime compensation

If the bookings of the Excel data stay below the "Normal hours" of your timesheet, the review
view offers to book the missing hours as overtime compensation. It is unchecked by default and
shows how the hours would be distributed.

* The missing hours are distributed over the **days with bookings only** (including vacation or
  sick days), so part-time employees don't get hours on days they don't work. Each day is filled
  up towards its share of the normal hours, in quarter hours.
* The work order depends on the Unit4 client of your timesheet: `950000-10000 (908)` for DE3 and
  `940000-10000 (908)` for DE2. Other clients can be added (or the default changed) with the
  configuration option "Work order for overtime compensation per client", e.g.
  `NL 800000-10000 (908)`; `DE3 -` disables the offer for a client.
* Overtime compensation does not count as presence, so it does not change the working hours.
* Nothing is offered if the timesheet shows no "Normal hours" or there is no work order for
  your client. Bookings made directly in Unit4 (not in the Excel) are not taken into account.

# Descriptions

By default, the description is `<Ticket> <Comment>`, or just the comment if there is no
ticket. You can change this with the configuration option "FtZ description rules": a JSON
array of `{regex, template}` rules, the first rule whose regex matches the ticket wins.

Available placeholders: `{{Weekday}}`, `{{Start}}`, `{{End}}`, `{{Duration}}`,
`{{WorkOrder}}` (without an activity in parentheses), `{{WorkOrderInput}}`, `{{Ticket}}`,
`{{Comment}}`.

Example: use only the comment for internal tickets, ticket and comment otherwise:

```
[
    { "regex": "^INT-", "template": "{{Comment}}" },
    { "regex": ".+", "template": "{{Ticket}} {{Comment}}" }
]
```

Please keep the descriptions short, long texts are hard to read for everybody
processing the timesheets afterwards.

# Importing again

You can import the same week again, e.g. after correcting the Excel: rows that already
exist (same work order, activity and description) are updated instead of added a second time, and
hours that moved to another day are cleared. Rows, working hours and breaks that did not change
are skipped, so a repeated import only takes as long as the changes need.

If you changed the **work order or description** of a booking, the import cannot know that
it is the same booking: it adds a new row and the old one keeps its hours. The summary
then reports that the sum of hours does not match and lists the rows with hours on the
imported days that are not part of the import - delete the outdated ones. The same list
shows up if you imported only a part of the Excel data or booked something manually in
Unit4; in that case the rows are fine and you can ignore the message.
