/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAssetsData } from '../../redux/slices/assets/slice';

// Добавить новую монету
const NewAsset = ({ openModal, setOpenModal }) => {
    const dispatch = useDispatch();
    const [coinName, setCoinName] = useState(''); // Храним имя монеты

    function handleSubmit(e) {
        e.preventDefault();

        if (coinName.trim().length >= 3) {
            const name = coinName.toLowerCase();
            dispatch(fetchAssetsData(name));
            setCoinName('');
        }
    }
    return (
        <>
            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-md min-h-96 min-w-[550px] relative">
                        <div className="text-gray-700 font-bold mb-4 text-center">
                            Add New Asset
                        </div>
                        <button
                            className="text-gray-500 hover:text-gray-700 absolute top-2 right-8"
                            onClick={() => setOpenModal(false)}
                        >
                            &times;
                        </button>
                        <form className="flex justify-between" onSubmit={handleSubmit}>
                            <input
                                placeholder="Type full name"
                                className="border-solid border border-border border-gray-700 rounded-md h-9 p-3 min-w-80 mr-2 text-black"
                                value={coinName}
                                onChange={(e) => setCoinName(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue rounded-md px-8 hover:bg-blueHover"
                            >
                                Find Coin
                            </button>
                        </form>
                        {/* <div className="flex items-center pb-4 border-b border-solid border-gray-850">
                            <img className="mr-2 w-11 h-11" src="" alt="" />
                            <div className="text-gray-700 font-bold text-xl">Name</div>
                        </div> */}
                        {/* <FormAsset
                            addAssetsData={addAssetsData}
                            setAddAssetsData={setAddAssetsData}
                            closeModal={closeModal}
                        /> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default NewAsset;
