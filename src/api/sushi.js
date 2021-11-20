import axios from "axios";

export const getSushiAPI = (category, filters) => {
    return axios(`http://localhost:3001/sushi?${category ==='Все' ? '' :`category=${category}`}&_sort=${filters}`).then(res => res.data)
}