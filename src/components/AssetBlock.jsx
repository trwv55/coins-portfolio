/* eslint-disable react/prop-types */
const AssetBlock = ({ asset }) => {
    // console.log('asset', asset);
    return (
        <>
            <div className="overflow-auto mb-5">
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
                            <div className="pt-2 text-xl">{asset.priceChange1h}</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">24h%</div>
                            <div className="pt-2 text-xl">6.06%</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">7d%</div>
                            <div className="pt-2 text-xl">2.02%</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Holdings</div>
                            <div className="pt-2 text-xl">$127.04</div>
                            <div className="pt-2 text-base">7.47 TIA</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Start</div>
                            <div className="pt-2 text-xl">$67.04</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Avg. Buy Price</div>
                            <div className="pt-2 text-xl">$9.20</div>
                        </div>
                        <div className="flex flex-col ml-6 mr-6 min-w-12">
                            <div className="pb-2 border-b border-border">Profit/Loss</div>
                            <div className="pt-2 text-xl">+ $57.95</div>
                            <div className="pt-2 text-base">84.23%</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mr-6">
                        <button className="relative p-4">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssetBlock;
