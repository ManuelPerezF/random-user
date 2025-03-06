import { useState, useEffect } from 'react';

const BASE_URL = "https://randomuser.me/api/";

export const useRandomUserApi = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRandomUser = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            const data = await response.json();
            setUser(data.results[0]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomUser();
    }, []);

    return { user, fetchRandomUser, error, loading };
};