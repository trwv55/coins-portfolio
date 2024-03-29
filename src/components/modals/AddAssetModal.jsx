/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, assetsData, editAsset } from '../../redux/slices/assets/slice';
import FormAsset from '../FormAsset';

const AddAssetModal = ({ isOpen, asset, closeModal }) => {
    const assets = useSelector(assetsData); // купленные монеты
    const [tryAsset, setTryAsset] = useState(assets);
    const dispatch = useDispatch();
    const [addAssetsData, setAddAssetsData] = useState({
        name: asset.name,
        amount: '',
        price: null,
        total: null,
        countMoney: false,
    });

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-md min-h-96 min-w-[550px] relative">
                        <div className="text-gray-700 font-bold mb-4 text-center">Add Asset</div>
                        <button
                            className="text-gray-500 hover:text-gray-700 absolute top-2 right-8"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="flex items-center pb-4 border-b border-solid border-gray-850">
                            <img className="mr-2 w-11 h-11" src={asset.icon} alt="" />
                            <div className="text-gray-700 font-bold text-xl">{asset.name}</div>
                        </div>
                        <FormAsset
                            addAssetsData={addAssetsData}
                            setAddAssetsData={setAddAssetsData}
                            closeModal={closeModal}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AddAssetModal;
