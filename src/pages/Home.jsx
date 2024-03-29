/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../redux/slices/crypto/slice';
import { fakeFetchCrypto, fakeFetchAssetes } from '../api';
import { calculatePercentageDifference } from '../utils';
import { setData, assetsData } from '../redux/slices/assets/slice';
import AssetBlock from '../components/AssetBlock';
import Loading from '../components/Loading';
import AddCoin from '../components/AddCoin/AddCoin';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const assets = useSelector(assetsData); // купленные монеты

    // добавим новые поля в Assets
    function handleAssets(assets, result) {
        return assets.map((asset) => {
            const coin = result.find((c) => c.id === asset.id);
            return {
                name: coin.name,
                amount: asset.amount,
                totalMoneyIn: asset.price * asset.amount,
                grow: asset.price < coin.price,
                totalMoneyNow: asset.amount * coin.price,
                totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                avgBuyPrice: '',
                growPercent: calculatePercentageDifference(asset.price, coin.price),
                ...coin,
            };
        });
    }

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetchCrypto();
            const assets = await fakeFetchAssetes();

            dispatch(setData(handleAssets(assets, result)));
            dispatch(setItems(result));
            setLoading(false);
        }
        preload();
    }, []);

    return (
        <div className="bg-blackMain text-white grow relative">
            <div className="max-w-1420 px-5 w-full h-full mx-auto">
                <AddCoin />
                {loading ? (
                    <Loading />
                ) : (
                    <div className="mx-auto mt-10">
                        <p className="font-bold text-lg mb-2">Assets</p>
                        {assets.map((asset) => (
                            <AssetBlock key={asset.id} asset={asset} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
