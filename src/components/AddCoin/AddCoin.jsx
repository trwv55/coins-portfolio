import React, { useState } from 'react';
import NewAsset from '../modals/NewAsset';

const AddCoin = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="flex mt-4">
                <button
                    type="button"
                    onClick={() => {
                        setOpenModal(true);
                    }}
                    className="bg-blue rounded-md px-8 hover:bg-blueHover"
                >
                    Add Coin
                </button>
            </div>

            <NewAsset openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};

export default AddCoin;
