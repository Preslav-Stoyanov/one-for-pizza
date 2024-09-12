import { CartPizza } from "@/types";
import axios from "axios";

export const api = {
    getClientSecret,
};

async function getClientSecret(
    data: any,
): Promise<{ orderUuid: string; clientSecret: string } | undefined> {
    try {
        const res = await axios.post("orders", data);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}
