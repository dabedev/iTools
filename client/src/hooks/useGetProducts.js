import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (api, limit, offset) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const controller = new AbortController();
        const signal = controller.signal;

        const response = await axios(api, { signal });
        setProducts(response.data);

        return () => {
            controller.abort();
        }
    }, [])

    return products;
}

export default useGetProducts;