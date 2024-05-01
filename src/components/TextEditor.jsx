import { Editor } from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const TextEditor = ({ config }) => {
  const { code, setCode } = useContext(AppContext);

  const editorOnMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
  };

  const onChange = (value) => {
    const _code = { ...code };
    _code[config.slug] = value;
    setCode(_code);
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-start ${
        config.language !== "javascript" && "border-r"
      } border-border relative`}
    >
      <div className="bg-background text-white px-2 py-1.5 text-sm w-full flex items-center gap-1 absolute top-0 left-0">
        <img src={config.icon} />
        <h1 className="text-xs">{config.title}</h1>
      </div>
      <Editor
        className="mt-8"
        theme="vs-dark"
        options={{
          fontSize: "14px",
          minimap: {
            enabled: false,
          },
          wordWrap: true,
        }}
        value={code[config.slug]}
        language={config.language}
        onMount={editorOnMount}
        onChange={onChange}
      />
    </div>
  );
};
export default TextEditor;
