import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, assetsData } from '../redux/slices/assets/slice';
import { editAsset } from '../redux/slices/assets/slice';
import { TAddAssetsData, TAddAssetsDataEmpty } from '../types/types';

type TSetAddAssetsData = React.Dispatch<React.SetStateAction<TAddAssetsDataEmpty>>;

type TFormAssetProps = {
    addAssetsData: TAddAssetsDataEmpty;
    setAddAssetsData: TSetAddAssetsData;
    handleSubmit: (formData: TAddAssetsData) => void;
}

const FormAsset = ({ addAssetsData, setAddAssetsData, handleSubmit }: TFormAssetProps) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<TAddAssetsData>({
        name: addAssetsData.name || '',
        amount: addAssetsData.amount || '',
        priceBuy: addAssetsData.priceBuy || '',
        total: addAssetsData.total || '',
    });

    useEffect(() => {
        // полностью повторяется запись в стейт как в модальном компоненте NewAsset. ок?
        if (addAssetsData !== undefined) {
            setFormData((prevData) => ({
                ...prevData,
                name: addAssetsData.name,
            }));
        }
    }, [addAssetsData]);

    // обновим переданый State
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            let newAmount = prevData.amount;
            let newPrice = prevData.priceBuy;

            // Обновляем значения amount и price
            if (name === 'amount') {
                newAmount = value;
            } else if (name === 'priceBuy') {
                newPrice = +value;
            }

            // Вычисляем значение Total
            const newTotal =
                newAmount !== null && newPrice !== null && typeof newAmount === 'number' && typeof newPrice === 'number' && !isNaN(newAmount) && !isNaN(newPrice)
                    ? (newAmount * newPrice).toFixed(2)
                    : '';

            return {
                ...prevData,
                [name]: value,
                name: prevData.name,
                amount: newAmount,
                priceBuy: newPrice,
                total: +newTotal,
            };
        });
    };


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(formData);
    };

    return (
        <div>
            <form action="POST" onSubmit={submitForm}>
                <div className="flex flex-col text-gray-600 mt-3 w-full">
                    <label className="mb-4 flex justify-between items-center">
                        Amount <span className="text-red-600">*</span>
                        <input
                            className="border-solid border border-border border-gray-500 rounded-md w-9/12 h-11 ml-3 px-2"
                            type="number"
                            name="amount"
                            value={formData.amount?.toString() || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className="mb-4 flex justify-between items-center">
                        Price <span className="text-red-600">*</span>
                        <input
                            className="border-solid border border-border border-gray-700 rounded-md w-9/12 h-11 ml-3 px-2"
                            type="number"
                            name="priceBuy"
                            value={formData.priceBuy?.toString() || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className="mb-4 flex justify-between items-center">
                        Total
                        <input
                            className="border-solid border border-border border-gray-700 rounded-md w-9/12 h-11 ml-3 px-2 bg-slate-100"
                            type="number"
                            name="total"
                            value={
                                formData.amount !== '' && formData.priceBuy !== '' && formData.amount !== null && formData.priceBuy!== null
                                    ? +formData.amount * +formData.priceBuy
                                    : ''
                            }
                            onChange={handleInputChange}
                            readOnly
                        />
                    </label>
                    <button className="p-4 bg-blue rounded-lg w-full text-white font-semibold text-l transition-all hover:bg-blueHover">
                        Update asset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAsset;
