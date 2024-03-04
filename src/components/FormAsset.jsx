/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormAsset = () => {
    const [data, setData] = useState({
        amount: '',
        price: '',
        total: '',
        newMoney: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => {
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
                amount: newAmount,
                price: newPrice,
                total: newTotal,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('data', data);
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
                            value={data.amount}
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
                            value={data.price}
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
                                data.amount !== '' && data.price !== ''
                                    ? data.amount * data.price
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
                        <input className="mr-1" type="checkbox" />
                        New Money
                    </label>
                    <button className="p-4 bg-blue rounded-lg w-full text-white font-semibold text-l transition-all hover:bg-blueHover">
                        Add Asset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAsset;
