import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <pre>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );
}