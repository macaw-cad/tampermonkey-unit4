# V0.10.4 - 2026-05-18

* Fixed issues when used with german locale in browser (NaN, import not working)

# V0.10.3 - 2026-05-15

* JSON import: better handling of unknown work orders
* Time entry: show summary of breaks and working hours at the bottom
* Working hours: fixes calculations and warnings
* First try for i18n - some text might be german when browser uses German as primary language

# V0.10.2 - 2026-05-12

* JSON import: some errors fixed, better handling of breaks
* Working hours
    * added new summary
    * config allows entry of hours/week (default: 40)

# V0.10.1 - 2026-05-08

* updated all node dependencies to latest version (npm audit w/o errors)
* complete rewrite of JSON import
    * added import for working hours + sanity checks
    * new JSON format for import (old format is still accepted for legacy reasons)
    * progress indicator for import
* config button now located below search field