import React, { useState, useRef } from 'react';
import NewAsset from '../modals/NewAsset';
import { fetchNewName } from '../../api/api';

const AddCoin = () => {
    const [coinName, setCoinName] = useState('');
    const [openModal, setOpenModal] = useState(false); // Открытие мод окна для дальнейшей настройки Asset
    const [newAsset, setNewAsset] = useState({}); // здесь после запроса храним монету для передачи в мод окно NewAsset

    const coinNameRef = useRef('');

    const handleClick = async (e) => {
        e.preventDefault();
        const currentCoinName = coinNameRef.current?.value.trim().toLowerCase();

        if (currentCoinName.length >= 3) {
            try {
                const data = await fetchNewName(currentCoinName);
                console.log('data', data); // undefined хотя fetchNewName получает данные
                setNewAsset(data);
                setCoinName('');
                setOpenModal(true);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }
    };

    return (
        <>
            <form className="flex mt-4" onSubmit={(e) => handleClick(e)}>
                <input
                    ref={coinNameRef}
                    placeholder="Полное название монеты (напр. bitcoin)"
                    className="border-solid border border-border border-gray-700 rounded-md h-9 p-3 min-w-96 mr-2 text-black"
                    value={coinName}
                    onChange={(e) => setCoinName(e.target.value)}
                />
                <button type="submit" className="bg-blue rounded-md px-8 hover:bg-blueHover">
                    Добавить монету
                </button>
            </form>

            <NewAsset openModal={openModal} setOpenModal={setOpenModal} coin={newAsset} />
        </>
    );
};

export default AddCoin;
