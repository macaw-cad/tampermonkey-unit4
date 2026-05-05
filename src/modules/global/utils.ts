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
}