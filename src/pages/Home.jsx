/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../redux/slices/crypto/slice';
import { fakeFetchCrypto, fakeFetchAssetes } from '../api';
import { percentDifference } from '../utils';
import { setData } from '../redux/slices/assets/slice';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

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
                growPercent: percentDifference(asset.price, coin.price),
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
        <div className="bg-blackMain text-white grow">
            <div className="container-app">Main Portfolio</div>
        </div>
    );
};

export default Main;
