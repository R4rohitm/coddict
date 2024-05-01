import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../AppContext";

const Preview = () => {

    const { code } = useContext(AppContext);
    const previewIframe = useRef(undefined);

    useEffect(() => {
        const timeout = setTimeout(() => {
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
            localStorage.setItem('code', JSON.stringify(code));
        }, 300);

        return () => clearTimeout(timeout);
    }, [code]);

    return (
        <iframe ref={previewIframe} className="w-full h-full bg-white" />
    );
};
export default Preview;