import React, { useState, useEffect, useCallback, useMemo } from 'react';

const useAuthentication = () => {
    const [authentication, setAuthentication] = useState(() => {
        const token = localStorage.getItem('token');
        const userData = JSON.parse(localStorage.getItem('userData'));
        return { token, userData };
    });

    const setValue = useCallback((key, value) => {
        const valueString = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, valueString);
    }, []);

    const getValue = useCallback((key) => {
        return localStorage.getItem(key);
    }, []);

    const delValue = useCallback((key) => {
        localStorage.removeItem(key);
    }, []);

    const isAuthenticated = useMemo(() => {
        return !!authentication.token;
    }, [authentication.token]);

    const memoizedAuthentication = useMemo(() => {
        const token = getValue('token');
        const userData = JSON.parse(getValue('userData'));
        return { token, userData };
    }, [getValue]);

    useEffect(() => {
        setAuthentication(memoizedAuthentication);
    }, [memoizedAuthentication]);

    return { authentication, setValue, getValue, delValue, isAuthenticated };
};

export default useAuthentication;