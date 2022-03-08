import axios from "axios";
import { ISushi } from "../types/types";

export const getSushiAPI = (category: any, filters: any) => {
    return axios.get<ISushi[]>(`http://localhost:3001/sushi?${category ==='Все' ? '' :`category=${category}`}&_sort=${filters}`).then(res => res.data)
} 