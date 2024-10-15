import React, { useRef, useState } from 'react';
// import { fetchNewName } from '../../api/api';
import { TCoinData } from '../../types/types';
import NewAsset from '../modals/NewAsset';

const AddCoin = () => {
    const [coinName, setCoinName] = useState(''); // Название монеты, которое вводит пользователь
    const [openModal, setOpenModal] = useState(false); // Открытие мод окна для дальнейшей настройки Asset
    const [newAsset, setNewAsset] = useState<TCoinData>({} as TCoinData); // здесь после запроса храним монету для передачи в мод окно NewAsset
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false);
    const coinNameRef = useRef<HTMLInputElement>(null);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setCoinName(e.target.value);
    };

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const currentCoinName = coinNameRef.current?.value?.trim().toLowerCase() ?? '';
        // setLoading(true)

        // if (currentCoinName.length >= 3) {
        //     try {
        //         let data = await fetchNewName(currentCoinName);

        //         if (data) {
        //             setNewAsset(data);
        //             setOpenModal(true);
        //         }

        //         setCoinName('');
        //         setLoading(false);
                
        //     } catch (error: unknown) {
        //         if (error instanceof Error) {
        //             // Обработка ошибки типа Error
        //             console.error('Error fetching data:', error.message);
        //             setError(true); // Если пришла ошибка с сервера отобразим сообщение на UI
        //             setCoinName('');
        //         } else {
        //             // Обработка ошибки не типа Error
        //             console.error('Unknown error:', error);
        //             setError(true); 
        //             setCoinName('');
        //         }
                
        //     }
        // }
    };

    return (
        <>
            <form className="flex mt-4 relative" onSubmit={(e) => handleClick(e)}>
                <input
                    type='text'
                    ref={coinNameRef}
                    placeholder="Полное название монеты (напр. bitcoin)"
                    className="border-solid border border-border border-gray-700 rounded-md h-9 p-3 min-w-96 mr-2 text-black"
                    value={coinName}
                    onChange={handleInputChange}
                />
                {error && (
                    <div className="absolute top-9 left-0 max-w-64 bg-slate-50 rounded-md">
                        <p className="text-red-600 text-sm m-2">Coin not found</p>
                    </div>
                )}
                <button type="submit" className="bg-blue rounded-md px-8 hover:bg-blueHover">
                    Добавить монету
                </button>
            </form>

            <NewAsset toggleModal={toggleModal} openModal={openModal} coin={newAsset} />
        </>
    );
};

export default AddCoin;
