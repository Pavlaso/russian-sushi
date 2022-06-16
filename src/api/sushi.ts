import axios from "axios";
import { ISushi } from "../assets/types";

export const getSushiAPI = (category: string, filters: string) => {
    return axios.get<ISushi[]>(`/sushi?${category ==='Все' ? '' :`category=${category}`}&_sort=${filters}`).then(res => res.data)
} 