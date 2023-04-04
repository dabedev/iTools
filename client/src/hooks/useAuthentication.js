import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

const useAuthentication = () => {
    const [authentication, setAuthentication] = useState(() => {
        const token = localStorage.getItem('token');
        const userData = JSON.parse(localStorage.getItem('userData'));
        return { token, userData };
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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

    const memoizedAuthentication = useMemo(() => {
        const token = getValue('token');
        const userData = JSON.parse(getValue('userData'));
        return { token, userData };
    }, [getValue]);

    const logout = useCallback(() => {
        delValue('token');
        delValue('userData');
        setAuthentication({ token: null, userData: null });
    }, [delValue]);

    useEffect(() => {
        setIsAuthenticated(!!authentication.token);
    }, [])

    useEffect(() => {
        setAuthentication(memoizedAuthentication);
    }, [memoizedAuthentication]);

    useEffect(() => {
        const lastRefreshDate = getValue('lastRefreshDate');
        const timeSinceLastRefresh = Date.now() - Number(lastRefreshDate);
        const shouldRefresh = timeSinceLastRefresh > 1000 * 60 * 60 * 4;
        const config = {
            method: 'GET',
            url: 'http://localhost:4000/auth/refresh-token',
            headers: {
                'Authorization': 'Bearer ' + authentication.token
            }
        };
        if (shouldRefresh) {
            axios(config)
                .then(response => {
                    const newToken = response.data.token;
                    setValue('token', newToken);
                    setValue('lastRefreshDate', Date.now().toString());
                    setAuthentication({ token: newToken, userData: authentication.userData });
                })
                .catch(error => {
                    console.log('Error refreshing token:', error);
                    delValue('token');
                    delValue('userData');
                    setAuthentication({ token: null, userData: null });
                });
        }
    }, []);

    return { authentication, setValue, getValue, delValue, isAuthenticated, logout };
};

export default useAuthentication;