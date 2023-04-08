import React, { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '@context/AppContext';
import Code from "@components/Code";

import '@styles/Playground.scss';

function RequestItem(props) {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState({});
    const { useAuthentication } = useContext(AppContext);
    const { authentication } = useAuthentication();

    const handleRequest = () => {
        if (!authentication.token && props.values.reqAuth) {
            setError("You must be logged in");
            setResult(null);
            return;
        }
        axios.get(props.values.reqUrl, {
            method: props.values.reqMethod,
            headers: {
                'Authorization': 'Bearer ' + authentication.token
            }
        })
            .then(response => {
                setResult(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setResult(null);
            });
    }

    const codeSnippets = {
        axios: `const axios = require("axios");

axios.get('${props.values.reqUrl}', {
method: '${props.values.reqMethod}',
    headers: {
        'Authorization': 'Bearer TOKEN'
    }
})
.then(response => console.log(response.data))
.catch(error => console.log(error.message));
`,
        javascript: `fetch('${props.values.reqUrl}', {
    method: '${props.values.reqMethod}',
    headers: {
        'Authorization': 'Bearer TOKEN'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.message));
`,
        python: `import requests
headers = {
    'Authorization': 'Bearer TOKEN'
}

response = requests.${props.values.reqMethod.toLowerCase()}('${props.values.reqUrl}', headers=headers)
`
    };

    const handleLanguageChange = (value, syntax) => {
        setLanguage({ value: value, syntax: syntax });
        document.querySelector('.card-code-snippet').style.display = 'block';
    };

    return (
        <div className="docs">
            <div className="card">
                <h2 className="card-title">{props.values.username}</h2>
                <Code code={`${props.values.reqMethod} ${props.values.reqUrl}`} language='nginx' />
                <p className="card-description">{props.values.desc}</p>
                <div className="card-languages">
                    <button
                        className={`card-language ${language.value === 'axios' && 'active'}`}
                        onClick={() => handleLanguageChange('axios', 'javascript')}
                    >
                        Axios
                    </button>
                    <button
                        className={`card-language ${language.value === 'javascript' && 'active'}`}
                        onClick={() => handleLanguageChange('javascript', 'javascript')}
                    >
                        JavaScript
                    </button>
                    <button
                        className={`card-language ${language.value === 'python' && 'active'}`}
                        onClick={() => handleLanguageChange('python', 'python')}
                    >
                        Python
                    </button>
                </div>
                <div className='card-code-snippet'>
                    <Code code={codeSnippets[language.value]} language={language.syntax} />
                </div>
                <button className="card-button" onClick={handleRequest}>Make request</button>
                {result && (
                    <div className="card-result">
                        <h3 className="card-result-title">Result:</h3>
                        <pre className="card-result-data">{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
                {error && (
                    <div className="card-result">
                        <h3 className="card-result-title">Error:</h3>
                        <pre className="card-result-data">{error}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RequestItem;