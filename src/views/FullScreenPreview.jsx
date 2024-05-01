import { useEffect, useRef } from "react";

const FullScreenPreview = () => {

    const previewIframe = useRef(undefined);

    const setIframeContent = () => {
        const code = JSON.parse(localStorage.getItem('code'));
        const previewIframeDocument = previewIframe.current.contentDocument || previewIframe.current.contentWindow.document;
        previewIframeDocument.open();
        previewIframeDocument.write(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>${code.html}</body>
            <style>${code.css}</style>
            <script>${code.js}</script>
        </html>
    `);
        previewIframeDocument.close();
    };

    useEffect(() => {
        document.title = "Coddict | Preview";
        setIframeContent();
        window.addEventListener("storage", setIframeContent);
    }, []);

    return <div className="h-screen w-screen">
        <iframe ref={previewIframe} className="w-full h-full bg-white" />
    </div>;
};

export default FullScreenPreview;