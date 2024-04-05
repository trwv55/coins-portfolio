import React, { useState, useCallback } from 'react';
import NewAsset from '../modals/NewAsset';
import { fetchNewName } from '../../api/api';

const AddCoin = () => {
    const [coinName, setCoinName] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [addNewAsset, setAddNewAsset] = useState({}); // здесь после запроса храним монету для передачи в мод окно NewAsset

    const handleClick = useCallback(
        async (e) => {
            e.preventDefault();
            if (coinName.length >= 3) {
                const data = await fetchNewName(coinName);
                setAddNewAsset(data);
                setCoinName('');
            }
        },
        [coinName],
    );

    console.log('addNewAsset', addNewAsset);

    return (
        <>
            <form className="flex mt-4" onSubmit={(e) => handleClick(e)}>
                <input
                    placeholder="Полное название монеты (напр. bitcoin)"
                    className="border-solid border border-border border-gray-700 rounded-md h-9 p-3 min-w-96 mr-2 text-black"
                    value={coinName}
                    onChange={(e) => setCoinName(e.target.value)}
                />
                <button type="submit" className="bg-blue rounded-md px-8 hover:bg-blueHover">
                    Добавить монету
                </button>
            </form>

            <NewAsset openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};

export default AddCoin;
