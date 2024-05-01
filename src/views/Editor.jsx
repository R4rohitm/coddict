import TextEditor from "../components/TextEditor";
import Navbar from "../components/Navbar";
import HtmlLogo from "../assets/html.svg";
import CssLogo from "../assets/css.svg";
import JsLogo from "../assets/js.svg";
import Preview from "../components/Preview";
import Split from "react-split";
import { useEffect } from "react";

const Editor = () => {

    useEffect(() => {
        document.title = "Coddict | Editor";
    }, []);

    const editorConfig = [
        {
            slug: "html",
            language: "html",
            title: "HTML",
            icon: HtmlLogo,
        },
        {
            slug: "css",
            language: "css",
            title: "CSS",
            icon: CssLogo,
        },
        {
            slug: "js",
            language: "javascript",
            title: "Javascript",
            icon: JsLogo,
        },
    ];

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="h-[calc(100vh-3rem)]">
                <Split className="w-full h-[calc(100vh-3rem)]" direction="vertical">
                    <Split direction="horizontal" className="flex h-1/2" >
                        {editorConfig.map((config, index) => <TextEditor config={config} key={index} />)}
                    </Split>
                    <Preview />
                </Split>
            </div>
        </div>
    );
};
export default Editor;