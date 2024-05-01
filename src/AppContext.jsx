import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [code, setCode] = useState(localStorage.getItem('code') ? JSON.parse(localStorage.getItem('code')) : {
        "html": "<h3>Prototype right in your browser</h3>",
        "css": "/* Starter CSS */\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody{\n    background: linear-gradient(to bottom, #000000, #434343);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: sans-serif;\n}\nh3{\n    color: white;\n    font-size: 24px;\n    font-weight: 400;\n}",
        "js": ""
    });

    const value = {
        code,
        setCode
    };

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>;
};

export default AppContextProvider;