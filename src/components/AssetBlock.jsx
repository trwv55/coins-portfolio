/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import AddAssetModal from './modals/AddAssetModal';

const AssetBlock = ({ asset }) => {
    const [openBuyModal, setOpenBuyModal] = useState(false);
    const [openSellModal, setOpenSellModal] = useState(false);

    useEffect(() => {
        // изменим цвет строки в зависимости того цена в "+" или "-"
        function colorClass() {
            const elems = document.querySelectorAll('.handleColor');
            elems.forEach((elem) => {
                const priceChange = elem.textContent.slice(0, -1);
                const positiveDinamic = parseFloat(priceChange) > 0;
                const colorClass = positiveDinamic ? 'text-green-500' : 'text-red-500';

                elem.classList.add(colorClass);
            });
        }
        colorClass();
    }, [asset]);

    function handleAdd(e) {
        const siblingBlock = e.target.nextSibling;

        // Отобразим выбор операции
        if (siblingBlock.classList.contains('hidden')) {
            siblingBlock.classList.remove('hidden');
            siblingBlock.classList.add('inline-block');
        } else {
            siblingBlock.classList.remove('inline-block');
            siblingBlock.classList.add('hidden');
        }
    }

    function closeModal() {
        setOpenBuyModal(false);
    }

    return (
        <>
            <div className="overflow-auto overflow-y-hidden mb-5 relative">
                <div className="py-3 bg-grey rounded-md border border-solid border-border flex justify-between min-w-[80rem]">
                    <div className="flex">
                        <div className="flex flex-col ml-6 mr-6 min-w-44">
                            <div className="pb-2 border-b border-border">Name</div>
                            <div className="flex items-center pt-2">
                                <img className="w-10 h-10 mr-2" src={asset.icon} alt="" />
                                <p className="font-bold text-xl">
                                    {asset.name}
                                    <span className="text-slate-400 pl-2">{asset.symbol}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Price</div>
                            <div className="pt-2 text-xl">${asset.price.toFixed(2)}</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">1h%</div>
                            <div className="pt-2 text-xl handleColor">{asset.priceChange1h}%</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">24h%</div>
                            <div className="pt-2 text-xl handleColor">{asset.priceChange1d}%</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">7d%</div>
                            <div className="pt-2 text-xl handleColor">{asset.priceChange1w}%</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Holdings</div>
                            <div className="pt-2 text-xl">${asset.totalMoneyNow.toFixed(2)}</div>
                            <div className="pt-2 text-base whitespace-nowrap">
                                {asset.amount} {asset.symbol}
                            </div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Start</div>
                            <div className="pt-2 text-xl">${asset.totalMoneyIn.toFixed(2)}</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border whitespace-nowrap">
                                Avg. Buy Price
                            </div>
                            <div className="pt-2 text-xl">$$$</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Profit/Loss</div>
                            <div className="pt-2 text-xl whitespace-nowrap">
                                ${asset.totalProfit.toFixed(2)}
                            </div>
                            <div className="pt-2 text-base handleColor">
                                {asset.growPercent.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mr-6 relative">
                        <button
                            onClick={handleAdd}
                            className="relative p-4 whitespace-nowrap text-slate-400 transition-all hover:text-white"
                        >
                            Add
                        </button>
                        <div className="hidden">
                            <ul className="absolute top-16 -left-2 w-20 flex justify-between bg-greySecond px-1 rounded mt-1 optionList">
                                <li className="text-blue transition-all hover:text-white">
                                    <button onClick={() => setOpenBuyModal(true)}>Buy</button>
                                </li>
                                <li className="text-blue transition-all hover:text-white">
                                    <button>Sell</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <AddAssetModal isOpen={openBuyModal} asset={asset} closeModal={closeModal} />
        </>
    );
};

export default AssetBlock;
