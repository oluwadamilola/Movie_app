import { useEffect, useState } from 'react';
import api from "../api/api";


const useApiData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const makeRequest = async() => {
            setLoading(true);
            try {
                const response = await api.get("/character");
                setData(response.data.results);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        makeRequest();


    }, []);
    return {
        data,
        loading,
        error
    }


}

export default useApiData