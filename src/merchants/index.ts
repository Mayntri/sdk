import { request } from "../request";

export type getAllMerchantsResponse = {
    status: {
        verified: boolean
        feedback: string
        sentCount: number
    }
    _id: string
    user: string
    text: string
    source: string
    type: string
    createdAt: string
    updatedAt: string
    deleted: boolean
    used: boolean
}

export const getAllMerchants = () => request.get<getAllMerchantsResponse>('https://cat-fact.herokuapp.com/facts')