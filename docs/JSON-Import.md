# JSON import

Notice: this is currently an experimental feature, you need to explicitly activate it
in the configuration.

# How to use

When you activated the feature in configuration, you will see a new button "Import JSON" below
the time entry table.

Clicking on that button will open a dialog where you need to paste in your JSON data.

Afterwards, the script will enter the data for you - since Unit4 is doing several
pare reloads as part of this process, the import will take a while.

After the import has finished, you can add, edit or delete data - but keep in mind
that the importer does not save anything, so you need to hit "Save" when you are
fine with the results on your own!

# JSON structure

The JSON structure for the import is a simple array of work items.

Each work item has these properties:

| name        | description
|-------------|------------
| workOrder   | the workorder, e.g. 940100-10005 for meeting hours in DE
| activity    | the activity, e.g. 100 for normal hours
| description | the description for the entry
| time        | array of time entries, see below

Each time entry has these properties:

| name        | description
|-------------|-------------
| date        | the date of the time entry, must match the format in Unit4 ("M/D")
| hours       | hours as string

## Example

```
[
    {
        "workOrder": "940100-10005", "activity": "100", "description": "Import test #1",
        "time": [
        { "date": "5/1", "hours": "1.5" },
        { "date": "5/2", "hours": "0.75" }
        ]
    },
    {
        "workOrder": "940100-10005", "activity": "100", "description": "Import test #2",
        "time": [
        { "date": "5/3", "hours": "1.25" },
        { "date": "5/5", "hours": "4.75" }
        ]
    }
]      
```