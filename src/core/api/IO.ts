import Logger from "./Logger";
import ACEV2Dialog from "../../plugins/ACEV2Dialog";
import I18n from "./I18n";

class IO {
    send({createRequest}: { createRequest: (xhr: XMLHttpRequest) => RequestConfig }): Promise<any> {
        const xhr = new XMLHttpRequest();
        const {isText = true, body} = createRequest(xhr);
        return new Promise((resolve, reject) => {
            xhr.addEventListener('load', () => resolve(isText ? xhr.responseText : xhr.response));
            xhr.addEventListener('error', () => reject(xhr.status));
            xhr.send(body);
        });
    }

    withCredentials({createRequest}: { createRequest: (xhr: XMLHttpRequest) => RequestConfig }) {
        return (xhr: XMLHttpRequest) => {
            xhr.withCredentials = true;
            return createRequest(xhr);
        };
    }

    blobRequest({url}: { url: string }) {
        return (xhr: XMLHttpRequest) => {
            xhr.responseType = 'blob';
            xhr.open('GET', url);
            return {
                isText: false,
            };
        };
    }

    getBlob({url}: { url: string }) {
        return this.send({createRequest: this.blobRequest({url})});
    }

    getBlobWithCredentials({url}: { url: string }) {
        return this.send({createRequest: this.withCredentials({createRequest: this.blobRequest({url})})});
    }

    textRequest({url}: { url: string }) {
        return (xhr: XMLHttpRequest) => {
            xhr.responseType = 'text';
            xhr.open('GET', url);
            return {
                isText: true,
            };
        };
    }

    getText({url}: { url: string }) {
        return this.send({createRequest: this.textRequest({url})});
    }

    getTextWithCredentials({url}: { url: string }) {
        return this.send({createRequest: this.withCredentials({createRequest: this.textRequest({url})})});
    }

    jsonRequest({url}: { url: string }) {
        return (xhr: XMLHttpRequest) => {
            xhr.responseType = 'json';
            xhr.open('GET', url);
            return {
                isText: false,
            };
        };
    }

    convertToJson(response: any) {
        if (typeof response === 'string') {
            return JSON.parse(response);
        }
        return response;
    }

    async getJson({url}: { url: string }) {
        const response = await this.send({createRequest: this.jsonRequest({url})});
        return this.convertToJson(response);
    }

    async getJsonWithCredentials({url}: { url: string }) {
        const response = await this.send({createRequest: this.withCredentials({createRequest: this.jsonRequest({url})})});
        return this.convertToJson(response);
    }

    postText({url, text}: { url: string; text: string }) {
        return this.send({
            createRequest: (xhr: XMLHttpRequest) => {
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                return {
                    isText: false,
                    body: text,
                };
            }
        });
    }

    postTextWithCredentials({url, text}: { url: string; text: string }) {
        return this.send({
            createRequest: (xhr: XMLHttpRequest) => {
                xhr.open('POST', url);
                xhr.withCredentials = true;
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                return {
                    isText: false,
                    body: text,
                };
            }
        });
    }

    postJson({url, json}: { url: string; json: object }) {
        return this.send({
            createRequest: (xhr: XMLHttpRequest) => {
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/json');
                return {
                    isText: false,
                    body: JSON.stringify(json),
                };
            }
        });
    }

    postJsonWithCredentials({url, json}: { url: string; json: object }) {
        return this.send({
            createRequest: (xhr: XMLHttpRequest) => {
                xhr.open('POST', url);
                xhr.withCredentials = true;
                xhr.setRequestHeader('Content-Type', 'application/json');
                return {
                    isText: false,
                    body: JSON.stringify(json),
                };
            }
        });
    }

    monkey(details: object) {
        return new Promise((resolve, reject) => {
            if (!GM_xmlhttpRequest) {
                Logger.error({message: 'Cannot resolve function GM_xmlhttpRequest'});
            }
            const fullDetails: any = {
                nocache: true,
                ...details,
                onload: (r: any) => resolve(r.response),
                onerror: (r: any) => {
                    const realObject = {
                        ...JSON.parse(JSON.stringify(r)),
                        toString() {
                            return JSON.stringify(this);
                        },
                    };
                    reject(realObject);
                },
            };
            if (!('method' in fullDetails)) {
                fullDetails.method = 'GET';
            }
            GM_xmlhttpRequest(fullDetails);
        });
    }

    ACEV2Download({object, filename}: { object: object; filename: string }) {
        const blob = new Blob([JSON.stringify(object)], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    ACEV2Upload({readType, callback}: { readType: ReadType; callback: UploadCallback }) {
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';

        input.addEventListener('change', (event: Event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files?.[0];
            if (!file) {
                Logger.error({message: 'No file selected'});
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                callback({content: result, file});
            };

            if (readType === 'text') {
                reader.readAsText(file);
            } else if (readType === 'arrayBuffer') {
                reader.readAsArrayBuffer(file);
            }
        });

        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }

    openPageInNewTab({url, manifest}: { url: string, manifest: manifest }) {
        ACEV2Dialog.showDialog({
            title: manifest.name + ' ' + I18n.t({key: 'wants-to-open-a-new-tab'}),
            content: `${I18n.t({key: 'target-url'})}: ${url} \n ${I18n.t({key: 'source-plugin-id'})}: ${manifest.id} \n ${I18n.t({key: 'ace-v2-runtime-does-not-responsible-for-the-content'})}`,
            okAction: () => window.open(url),
            cancelAction: () => {}
        })
    }
}

export default new IO();