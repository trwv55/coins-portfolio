export type allCryptoProps = {
    id?:                    string;
    icon?:                  string;
    name?:                  string;
    symbol?:                string;
    rank?:                  number;
    price?:                 number;
    priceBtc?:              number;
    volume?:                number;
    marketCap?:             number;
    availableSupply?:       number;
    totalSupply?:           number;
    fullyDilutedValuation?: number;
    priceChange1h?:         number;
    priceChange1d?:         number;
    priceChange1w?:         number;
    redditUrl?:             string;
    twitterUrl?:            string;
    explorers?:             string[];
    websiteUrl?:            string;
    contractAddress?:       string;
    decimals?:              number;
}