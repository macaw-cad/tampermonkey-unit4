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


}