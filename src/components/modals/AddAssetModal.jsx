/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const AddAssetModal = ({ isOpen, asset, onClose }) => {
    console.log('isOpen', isOpen);
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-md min-h-96 min-w-[450px] relative">
                        <button
                            className="text-gray-500 hover:text-gray-700 absolute top-2 right-8"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <div className="flex items-center pb-4 border-b border-solid border-gray-850">
                            <img className="mr-2 w-11 h-11" src={asset.icon} alt="" />
                            <div className="text-gray-700 font-bold text-xl">{asset.name}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddAssetModal;
