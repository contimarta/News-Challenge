import axios from "axios";

export const fetchNews = async () => {
    try {
        const responseData = await axios.get(process.env.REACT_APP_DATA_SERVICE_URL);
        return(responseData.data.response.results)
    } catch (e) {
        return {error: e.code, message: e.message} ;
    }
};


