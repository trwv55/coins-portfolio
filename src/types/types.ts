// Типы данных монеты используется при запросе fetchNewName()
export type TCoinData = {
    availableSupply: number;
    contractAddress: string;
    decimals: number;
    explorers: string[];
    icon: string;
    id: string;
    marketCap: number;
    name: string;
    price: number;
    priceBtc: number;
    priceChange1d: number;
    priceChange1h: number;
    priceChange1w: number;
    rank: number;
    redditUrl: string;
    symbol: string;
    totalSupply: number;
    twitterUrl: string;
    volume: number;
    websiteUrl: string;
}

// используется в NewAsset.tsx и FormAsset
export type TAddAssetsData = {
    name: string;
    amount: number | null;
    priceBuy: number | null;
    total: number | null;
}

// используется в Home.tsx
export type TCoinDataExtended = TCoinData & {
    amount: string;
    total: string;
}