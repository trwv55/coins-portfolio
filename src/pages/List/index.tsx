import React, { useState } from 'react'
import useAllCrypto from '../../hooks/useAllCrypto'
import Loading from '../../components/Loading';
import CoinsTable from '../../components/CoinsTable';

const List = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isError}  = useAllCrypto(page);
    const pageCount = data?.meta.pageCount;

    if (isLoading) {
       return <Loading />;
    }

  
    if (isError || !data) {
      return <h3>Ошибка при получении данных</h3>;
    }

    return (
        <div className="bg-blackMain text-white grow relative">
            <div className="max-w-1420 px-5 w-full h-full mx-auto">
                <CoinsTable data={data.result} page={page} setPage={setPage} pageCount={pageCount} />
            </div>
        </div>
    )
}

export default List