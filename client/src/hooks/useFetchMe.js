import { useEffect, useState } from "react";
import axios from 'axios';

const useFetchMe = (api, options = {}) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        let config = {
            method: options.method,
            url: api,
            headers: options.headers
        };
        axios.request(config, { signal })
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