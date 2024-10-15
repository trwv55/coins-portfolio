import React from 'react'
import useAllCrypto from '../../hooks/useAllCrypto'
import Loading from '../../components/Loading';
import CoinsTable from '../../components/CoinsTable';

const List = () => {
    const { data, isLoading, isError}  = useAllCrypto();

    if (isLoading) {
       return <Loading />;
    }

  
    if (isError || !data) {
      return <h3>Ошибка при получении данных</h3>;
    }

    return (
        <div className="bg-blackMain text-white grow relative">
            <div className="max-w-1420 px-5 w-full h-full mx-auto">
                <CoinsTable data={data} />
            </div>
        </div>
    )
}

export default List