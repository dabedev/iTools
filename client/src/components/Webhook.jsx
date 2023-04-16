import React, { useState } from 'react';
import Code from "@components/Code";
import '@styles/Playground.scss';

function Webhook({ webhookUrl, width, height, title }) {
    const [language, setLanguage] = useState({});

    const codeSnippets = {
        html: `<iframe title='${title}' src='${webhookUrl}' width='${width}' height='${height}'></iframe>`,
    };

    const handleLanguageChange = (value, syntax) => {
        setLanguage({ value: value, syntax: syntax });
        document.querySelector('.card-code-snippet').style.display = 'block';
    };
    return (
        <div className="docs">
            <div className="card">
                <h2 className="card-title">{title}</h2>
                <div className="card-languages">
                    <button
                        className={`card-language ${language.value === 'html' && 'active'}`}
                        onClick={() => handleLanguageChange('html', 'html')}
                    >
                        HTML
                    </button>
                </div>
                <div className='card-code-snippet'>
                    <Code code={codeSnippets[language.value]} language={language.syntax} />
                </div>
                <iframe title={title} src={webhookUrl} width={width} height={height}></iframe>
            </div>
        </div>
    );
}

export default Webhook;