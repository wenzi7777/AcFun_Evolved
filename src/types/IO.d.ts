type RequestConfig = {
    isText?: boolean;
    body?: any;
};

type UploadCallbackResult = {
    file: File;
    content: string | ArrayBuffer | null | undefined;
};

type UploadCallback = (result: UploadCallbackResult) => void;

type ReadType = 'text' | 'arrayBuffer';