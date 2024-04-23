/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, assetsData } from '../redux/slices/assets/slice';
import { editAsset } from '../redux/slices/assets/slice';

const FormAsset = ({ addAssetsData, setAddAssetsData, closeModal }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: addAssetsData.name || null,
        amount: addAssetsData.amount || '',
        price: addAssetsData.price || '',
        total: addAssetsData.total || '',
        // countMoney: addAssetsData.countMoney || false,
    });

    // обновим переданый State
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            let newAmount = prevData.amount;
            let newPrice = prevData.price;

            // Обновляем значения amount и price
            if (name === 'amount') {
                newAmount = value;
            } else if (name === 'price') {
                newPrice = value;
            }

            // Вычисляем значение Total
            const newTotal =
                !isNaN(newAmount) && !isNaN(newPrice) ? (newAmount * newPrice).toFixed(2) : '';

            return {
                ...prevData,
                [name]: value,
                name: prevData.name,
                amount: newAmount,
                price: newPrice,
                total: newTotal,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.countMoney) {
            console.log('нужно обновить wallet');
        }
        dispatch(editAsset(formData));
        closeModal();
    };

    return (
        <div>
            <form action="POST" onSubmit={handleSubmit}>
                <div className="flex flex-col text-gray-600 mt-3 w-full">
                    <label className="mb-4 flex justify-between items-center">
                        Amount <span className="text-red-600">*</span>
                        <input
                            className="border-solid border border-border border-gray-500 rounded-md w-9/12 h-11 ml-3 px-2"
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className="mb-4 flex justify-between items-center">
                        Price <span className="text-red-600">*</span>
                        <input
                            className="border-solid border border-border border-gray-700 rounded-md w-9/12 h-11 ml-3 px-2"
                            type="number"
                            name="price"
                            value={formData.price}
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
                                formData.amount !== '' && formData.price !== ''
                                    ? formData.amount * formData.price
                                    : ''
                            }
                            onChange={(e) =>
                                handleInputChange({
                                    target: { name: 'total', value: e.target.value },
                                })
                            }
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
