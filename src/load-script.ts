const loaded: string[] = [];

export function loadScript(url: string) {

    return new Promise((resolve, reject) => {

        if (loaded.indexOf(url) < 0) {

            let script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            
            script.onload = () => {
                loaded.push(url);
                resolve();
            };

            script.onerror = () => {
                reject();
            }

            document.head.appendChild(script);

        } else {
            resolve();
        }
    });
}