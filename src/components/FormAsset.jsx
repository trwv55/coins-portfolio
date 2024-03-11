/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { setData, assetsData } from '../redux/slices/assets/slice';

const FormAsset = ({ addAssetsData, setAddAssetsData, updateAsset }) => {
    // console.log('addAssetsData', addAssetsData);
    const [formData, setFormData] = useState({
        name: addAssetsData.name || null,
        amount: addAssetsData.amount || '',
        price: addAssetsData.price || '',
        total: addAssetsData.total || '',
        countMoney: addAssetsData.countMoney || false,
    });

    // обновим переданый State
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            let newAmount = prevData.amount;
            let newPrice = prevData.price;
            let newCountMoney = prevData.countMoney;

            // Обновляем значения amount и price
            if (name === 'amount') {
                newAmount = value;
            } else if (name === 'price') {
                newPrice = value;
            } else if (name === 'countMoney') {
                newCountMoney = value;
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
                countMoney: newCountMoney,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.countMoney) {
            console.log('нужно обновить wallet');
        }
        setAddAssetsData(formData); // Обновляем внешний стейт значениями из локального стейта формы
        updateAsset(); // Обновим asset данными из полей формы
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
                        Price
                        <input
                            className="border-solid border border-border border-gray-700 rounded-md w-9/12 h-11 ml-3 px-2"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
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
                    <label className="mb-4">
                        <input
                            className="mr-1"
                            type="checkbox"
                            value={formData.countMoney}
                            onChange={(e) =>
                                handleInputChange({
                                    target: { name: 'countMoney', value: e.target.checked },
                                })
                            }
                        />
                        Add $ to wallet
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
