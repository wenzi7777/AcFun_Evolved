// declare type of unsafeWindow
interface unsafeWindow extends Window {
    $: typeof import('jquery')
}
declare const unsafeWindow: unsafeWindow

// declare type of version infos
declare const ACFUN_EVOLVED_VERSION: typeof import('git-revision-webpack-plugin')
declare const GIT_HASH: typeof import('git-revision-webpack-plugin')

/*
将给定的样式添加到文档并返回注入的样式元素。
* */
declare function GM_addStyle(css: string): void;

/*
创建一个由“tag_name”指定的 HTML 元素并应用所有给定的“属性”并返回注入的 HTML 元素。
* */
declare function GM_addElement(tag_name: string, attributes: object)

/*
创建一个由“tag_name”指定的 HTML 元素并应用所有给定的“属性”并返回注入的 HTML 元素。如果给出了“parent_node”，则将其附加到它或以其他方式附加到文档头或体。
* */
declare function GM_addElement(parent_node: HTMLElement, tag_name: string, attributes: object)

/*
从存储中删除“名称”。
* */
declare function GM_deleteValue(name: string): void;

/*
列出存储的所有名称。
* */
declare function GM_listValues(): string[];

/*
将更改侦听器添加到存储并返回侦听器 ID。
'name' 是观察变量的名称。
回调函数的“remote”参数显示该值是从另一个选项卡的实例 (true) 还是在此脚本实例 (false) 中修改的。
因此，不同浏览器选项卡的脚本可以使用此功能相互通信。
* */
declare function GM_addValueChangeListener(name: string, listener: GM_Types.ValueChangeListener): number;

/*
按 ID 删除更改​​侦听器。
* */
declare function GM_removeValueChangeListener(listenerId: number): void;

/*
设置本地存储'name'的值。
* */
declare function GM_setValue(name: string, value: any): void;

/*
从存储中获取 'name' 的值。
* */
declare function GM_getValue(name: string, defaultValue ?: any): any;

/*
将消息打印到控制台。
* */
declare function GM_log(message: string): any;

/*
获取脚本头中预定义的@resource 标记的内容。
* */
declare function GM_getResourceText(name: string): string;

/*
获取脚本标头处预定义 @resource 标记的 base64 编码 URI。
* */
declare function GM_getResourceURL(name: string): string;

/*
在运行此脚本的页面的 Tampermonkey 菜单中注册要显示的菜单，并返回菜单命令 ID。
* */
declare function GM_registerMenuCommand(name: string, listener: Function, accessKey ?: string): number;

/*
使用给定的菜单命令 ID 取消注册先前由 GM_registerMenuCommand 注册的菜单命令。
* */
declare function GM_unregisterMenuCommand(id: number): void;

/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string, options: GM_Types.OpenTabOptions): void;
/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string, loadInBackground: boolean): void;
/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string): void;

/*
创建一个 xmlHttpRequest。
* */
declare function GM_xmlhttpRequest<CONTEXT_TYPE>(details: GM_Types.XHRDetails<CONTEXT_TYPE>): GM_Types.AbortHandle<void>;

/*
将给定的 URL 下载到本地磁盘。
* */
declare function GM_download(details: GM_Types.DownloadDetails): GM_Types.AbortHandle<boolean>;
/*
将给定的 URL 下载到本地磁盘。
* */
declare function GM_download(url: string, filename: string): GM_Types.AbortHandle<boolean>;

/*
只要此选项卡处于打开状态，就获取一个持久对象。
* */
declare function GM_getTab(callback: (obj: object) => any): void;

/*
保存选项卡对象以在页面卸载后重新打开它。
* */
declare function GM_saveTab(obj: object): void;

/*
获取所有选项卡对象作为散列以与其他脚本实例通信。
* */
declare function GM_getTabs(callback: (objs: { [key: number]: object }) => any): void;

/*
显示 HTML5 桌面通知和/或突出显示当前选项卡。
* */
declare function GM_notification(details: GM_Types.NotificationDetails, ondone: Function): void;
/*
显示 HTML5 桌面通知和/或突出显示当前选项卡。
* */
declare function GM_notification(text: string, title: string, image: string, onclick: Function): void;

/*
将数据复制到剪贴板。参数 'info' 可以是像“{ type: 'text', mimetype: 'text/plain'}”这样的对象，或者只是一个表示类型的字符串（“text”或“html”）。
* */
declare function GM_setClipboard(data: string, info ?: string | { type?: string, mimetype?: string }): void;