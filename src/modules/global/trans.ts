const translations: {[key: string]: {[key: string]: string}} = {
    'en': {
        'error_date_cell_not_found': 'Could not find cell for date %1',
        'error_summary_workinghours': 'Error while summarizing working hours: %1',
        'summary_hours_present': 'Attendance<br><small style="color:gray">From > To</small>',
        'summary_booked_breaks': 'Total booked breaks',
        'summary_booked_working': 'Total booked working time entries',
        'missing_booked_hours': '%1 less booked hours than working hours',
        'missing_weekly_hours': '%1 less hours than expected (%2)',
        'summary_hours_working': 'Working hours<br><small style="color:gray">From > To w/o breaks/nonworking</small>',
        'missing_working_hours': 'Missing booked hours: %1',
        'additional_hours': 'Additional hours: %1',
        'break_min': 'You need at least %1 minutes break',
        'maxhours_exceeded': 'You must not work more than %1 hours a day',
        'sum_breaks': '∑ breaks',
        'sum_nonworking': '∑ non-working',
        'sum_working': '∑ working'
    
    },
    'de': {
        'error_date_cell_not_found': 'Zelle für Datum %1 wurde nicht gefunden',
        'error_summary_workinghours': 'Fehler beim Zusammenfassen der Arbeitsstunden: %1',
        'summary_hours_present': 'Anwesenheit<br><small style="color:gray">Von > Bis</small>',
        'summary_booked_breaks': 'Gebuchte Pausen',
        'summary_booked_working': 'Gebuchte Arbeitszeiteinträge',
        'missing_booked_hours': '%1 weniger Zeiteinträge als Arbeitsstunden',
        'missing_weekly_hours': '%1 weniger Stunden als erwartet (%2)',
        'summary_hours_working': 'Arbeitszeit<br><small style="color:gray">Von > Bis ohne Pausen/Nicht-Arbeitszeit</small>',
        'missing_working_hours': 'Fehlende Arbeitszeit: %1',
        'additional_hours': 'Zusätzliche Stunden: %1',
        'break_min': 'Du benötigst mindestens %1 Minuten Pause',
        'maxhours_exceeded': 'Du darfst nicht mehr als %1 Stunden pro Tag arbeiten',
        'sum_breaks': '∑ Pausen',
        'sum_nonworking': '∑ Nicht-Arbeitszeit',
        'sum_working': '∑ Arbeitszeit'
    }
};

/**
 * Return translated text for the given key based on the user's browser language.
 * If the translation for the current language is not available, it falls back to English.
 * If the English translation is also not available, it returns the key itself.
 * 
 * @param key The key for the translation.
 * @returns The translated text.
 */
export const trans = (key: string, ...args: string[]) => {
    const lang = navigator.language.split('-')[0];
    // Try to get the translation for the current language, if not available, fallback to English, if still not available, return the key itself
    const txt =  translations[lang][key] || translations['en'][key] || key;
    // Replace placeholders (%1, %2) with the corresponding argument from array
    return args.reduce((str, arg, index) => str.replace(`%${index + 1}`, arg), txt);
}