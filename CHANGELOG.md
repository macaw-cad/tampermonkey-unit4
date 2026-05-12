# V0.10.1 - 2026-05-08

* updated all node dependencies to latest version (npm audit w/o errors)
* complete rewrite of JSON import
    * added import for working hours + sanity checks
    * new JSON format for import (old format is still accepted for legacy reasons)
    * progress indicator for import
* config button now located below search field

# V0.10.2 - 2026-05-12

* JSON import: some errors fixed, better handling of breaks
* Working hours
    * added new summary
    * config allows entry of hours/week (default: 40)