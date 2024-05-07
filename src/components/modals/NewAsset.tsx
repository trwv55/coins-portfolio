import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssetsData } from '../../redux/slices/assets/slice';
import FormAsset from '../FormAsset';
import { TAddAssetsData, TCoinData } from '../../types/types';

type TNewAssetProps = {
    toggleModal: () => void,
    coin: TCoinData,
    openModal: boolean
}

// Указываем количество, цену новой монеты
const NewAsset = ({ toggleModal, coin, openModal }: TNewAssetProps) => {
    // NewAsset перерендерится каждый раз при печати в инпут т.к coin обновляется. нужно исправить
    const { id } = coin;
    const dispatch = useDispatch();
    const [addAssetsData, setAddAssetsData] = useState<TAddAssetsData>({
        name: '',
        amount: null,
        priceBuy: null,
        total: null,
    }); // запишем данные с модального окна чтобы добавить новую монету

    useEffect(() => {
        // обновляем addAssetsData.name когда пришел coin
        if (coin && coin.id !== undefined) {
            setAddAssetsData((prevData) => ({
                ...prevData,
                name: coin.id,
            }));
        }
    }, [coin]);

    // Получим данные из формы, добавим новую монету в стейт с кастомными полями
    const handleSubmit = (formData: TAddAssetsData) => {
        // const { name, amount, price, total } = formdata;
        dispatch(fetchAssetsData({ ...formData, coinId: id }));
        toggleModal();
    };

    return (
        <>
            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-md min-h-96 min-w-[550px] relative">
                        <div className="text-gray-700 font-bold mb-4 text-center">
                            Add New Asset
                        </div>
                        {coin && (
                            <div className="flex justify-center items-center">
                                <img className="w-10 h-10 mr-2" src={coin.icon} alt=""></img>
                                <p className="text-gray-700 font-bold text-2xl">{coin.name}</p>
                            </div>
                        )}
                        <button
                            className="text-gray-500 hover:text-gray-700 absolute top-2 right-8"
                            onClick={toggleModal}
                        >
                            &times;
                        </button>

                        <FormAsset
                            addAssetsData={addAssetsData}
                            setAddAssetsData={setAddAssetsData}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default NewAsset;
