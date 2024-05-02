import React, { useState, useRef } from 'react';
import NewAsset from '../modals/NewAsset';
import { fetchNewName } from '../../api/api';

const AddCoin = () => {
    const [coinName, setCoinName] = useState('');
    const [openModal, setOpenModal] = useState(false); // Открытие мод окна для дальнейшей настройки Asset
    const [newAsset, setNewAsset] = useState({}); // здесь после запроса храним монету для передачи в мод окно NewAsset
    const [error, setError] = useState(false); // Если пришла ошибка с сервера

    const coinNameRef = useRef('');

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const currentCoinName = coinNameRef.current?.value.trim().toLowerCase();

        if (currentCoinName.length >= 3) {
            try {
                let data = await fetchNewName(currentCoinName);

                console.log('data', data);
                if (data) {
                    setNewAsset(data);
                    setOpenModal(true);
                } else {
                    // эта часть для вывода на UI при ошибке не работает
                    setError(true);
                }

                console.log('err', error);
                setCoinName('');
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

            <NewAsset toggleModal={toggleModal} openModal={openModal} coin={newAsset} />
        </>
    );
};

export default AddCoin;
