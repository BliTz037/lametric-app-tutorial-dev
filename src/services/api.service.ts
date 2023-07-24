import { Request, Response } from "express";
import { ECoinId, getPrice } from "./coinlore.service";

const iconDict: { [key: number]: number } = {
    [ECoinId.BTC]: 857,
    [ECoinId.ETH]: 17007
}

const currencyDict: { [key: string]: ECoinId } = {
    "BTC": ECoinId.BTC,
    "ETH": ECoinId.ETH
}

const getResponse = async (req: Request, res: Response) => {
    const currency: ECoinId = req.query.currency ? currencyDict[req.query.currency as string] || ECoinId.BTC : ECoinId.BTC;
    const currencyData = await getPrice(currency);
    const price = currencyData ? currencyData[0].price_usd : "N/A";
    const icon = iconDict[currency] || ECoinId.BTC;

    return res.status(200).json({
        frames: [
            {
                icon: icon,
                text: `${price} $`
            }
        ]
    });
};

export {
    getResponse
};