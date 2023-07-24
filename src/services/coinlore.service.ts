import axios from 'axios';

enum ECoinId {
    BTC = 90,
    ETH = 80,
}

const getPrice = async (coinId: ECoinId): Promise<any> => {
    try {
        const response = await axios.get(`https://api.coinlore.net/api/ticker/?id=${coinId}`);
        if (!response.data || !response.data[0])
            return null;
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export {
    getPrice,
    ECoinId
}