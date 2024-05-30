import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetAuctionBidder = (auctionId: Number) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let auctionBidder;
        (async () => {

        try {
            const contract = getAuctionContract(readOnlyProvider)
            const user = await contract.getAunctionBidder(auctionId)
            console.log(user)
            auctionBidder = {

            }
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: auctionBidder})
        }
    })();
    }, [])
    return data 
}