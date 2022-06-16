import { useEffect, useState } from "react";

export default function useToken() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Get the token from localStorage
        const localToken = sessionStorage.getItem("token");
        if (localToken) {
            setToken(localToken);
        }
    }, []);

    const saveTokenToStorage = (token) => {
        sessionStorage.setItem("token", token);
        setToken(token);
    };

    return { token, saveTokenToLocalStorage: saveTokenToStorage };
}
