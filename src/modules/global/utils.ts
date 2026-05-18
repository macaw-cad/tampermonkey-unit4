export class Utils {

    public static waitForElm(selector: string): Promise<HTMLElement> {
        return new Promise(resolve => {
            const ele = document.querySelector(selector) as HTMLElement;
            if (ele) {
                return resolve(ele);
            }

            const observer = new MutationObserver(mutations => {
                const ele = document.querySelector(selector) as HTMLElement;
                if (ele) {
                    observer.disconnect();
                    return resolve(ele);
                }
            });

            // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }


    public static showDialog(content: string) {
          // create modal import dialog
          const dialog = document.createElement("div");
          dialog.classList.add("modalDialog");

          const dialogEntry = document.createElement("textarea");
          dialogEntry.readOnly = true;
          dialogEntry.value = content;
          dialog.appendChild(dialogEntry);

          const dialogButtons = document.createElement("div");
          dialogButtons.classList.add("modalDialog__buttons");
          dialog.appendChild(dialogButtons);

          const dialogOK = document.createElement("button");
          dialogOK.setAttribute("type", "button");
          dialogOK.classList.add("RibbonInlineButton", "RibbonInlineButtonHappy");
          dialogOK.innerHTML = "<span>OK</span>";
          dialogOK.addEventListener('click', () => {
            document.body.removeChild(dialog);            
          });
          dialogButtons.appendChild(dialogOK);

          document.body.appendChild(dialog); 
    }

    public static difference(from: string, to: string): number {
        const startParts = from.split(':');
        const endParts = to.split(':');
        const startTime = parseInt(startParts[0]) + parseInt(startParts[1]) / 60;
        const endTime = parseInt(endParts[0]) + parseInt(endParts[1]) / 60;
        return endTime - startTime;
    }

    public static formatHours(hours: number): string {
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return (m > 0)  ?`${h}h ${m}m` : `${h}h`;
    }

    public static toNumber(value: string) : number {
        // handle different locale formats, e.g. 1,234.56 vs 1.234,56
        if (value.includes(',') && !value.includes('.')) {
            // format with comma as decimal separator, e.g. 1234,56 => 1234.56
            value = value.replace(',', '.');
        } else {
            // format with decimal dot
            value = value.replace(',', '');
        }
        return parseFloat(value);
    }

    public static toLocaleString(value: number): string {
        return value.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

}