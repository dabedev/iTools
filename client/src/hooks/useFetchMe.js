import { useEffect, useState } from "react";
import axios from 'axios';

const useFetchMe = (api, options = {}) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const config = {
            method: options.method,
            url: api,
            headers: options.headers
        };
        axios(config, { signal })
            .then((response) => {
                setState(response.data);
            })
            .catch((error) => {
                console.log(error);
            });


        return () => {
            controller.abort();
        }
    }, [])

    return state;
}

export default useFetchMe;