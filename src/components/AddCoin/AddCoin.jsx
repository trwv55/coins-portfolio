import React from 'react';

const AddCoin = () => {
    return (
        <form className="flex mt-4">
            <input
                placeholder="Type the name of coin"
                className="bg-grey rounded-md border border-solid border-border h-9 p-3 min-w-80 mr-2"
            />
            <button type="submit" className="bg-blue rounded-md px-8 hover:bg-blueHover">
                Add Coin
            </button>
        </form>
    );
};

export default AddCoin;
