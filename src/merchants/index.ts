import { request } from "../request";

export const getAllMerchants = () => request.get('https://cat-fact.herokuapp.com/facts')