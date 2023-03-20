import { useState, useCallback } from "react";

const UseFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null)
            setLoading(true)
            response = await fetch(url, options);
            json = await response.json();

        } catch (error) {
            json = null
            setError('Error nos dados')

        } finally {
            setLoading(false)
            setData(json);
            return { response, json }
        }
    }, []);
    return { data, error, loading, request }
};
export default UseFetch;
