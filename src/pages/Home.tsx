import { useState } from 'react';
import AddCoin from '../components/AddCoin/AddCoin';
import AssetBlock from '../components/AssetBlock';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../hook';
import { assetsData, assetsStatus } from '../redux/slices/assets/slice';
import { TCoinDataExtended } from '../types/types';

const Home: React.FC = () => {
    const assets: TCoinDataExtended[] = useAppSelector(assetsData); // купленные монеты
    let status: string = useAppSelector(assetsStatus);

    return (
        <div className="bg-blackMain text-white grow relative">
            <div className="max-w-1420 px-5 w-full h-full mx-auto">
                <AddCoin />
                {status === 'loading' && <Loading />}
                {status === 'success' && (
                    <div className="mx-auto mt-10">
                        <p className="font-bold text-lg mb-2">Assets</p>
                        {assets.map((asset) => (
                            <AssetBlock key={asset.id} asset={asset} />
                        ))}
                    </div>
                )}
                {status === 'failed' && (
                    <div className="mx-auto mt-10">
                        <p className="font-bold text-lg mb-2">Failed to load assets. Please try again later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
