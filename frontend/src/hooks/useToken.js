import { useEffect, useState } from "react";

export default function useToken() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Get the token from localStorage
        const localToken = localStorage.getItem("token");
        if (localToken) {
            setToken(localToken);
        }
    }, []);

    const saveTokenToLocalStorage = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    return { token, saveTokenToLocalStorage };
}
