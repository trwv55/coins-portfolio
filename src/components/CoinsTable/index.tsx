import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { allCryptoProps } from './types';
import { Dispatch, SetStateAction } from 'react';

type CoinsTableProps = {
    data: allCryptoProps[];
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageCount: number;
}

const CoinsTable = ({ data, page, setPage, pageCount }: CoinsTableProps) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const formatPrice = (cap: string) => {
        const number = parseFloat(cap);
        if (isNaN(number)) {
          return 'Invalid number';
        }
        return number.toLocaleString("en-US");
    }
    
    return (
    <>
        <TableContainer className='mt-7 mb-7' component={Paper}>
          <Table>
            <TableHead>
              <TableRow className='bg-zinc-300'>
                <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }}>№</TableCell>
                <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">Название</TableCell>
                <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">Цена</TableCell>
                <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">Капитализация</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((coin: any, index: number) => (
                <TableRow
                  key={coin.id}
                  style={{ backgroundColor: index % 2 === 0 ? 'bg-zinc-100' : '#ffffff' }} // Закрашиваем через одну строку
                >
                  <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }}>{coin.rank}</TableCell>
                  <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">
                    <div className="flex justify-start items-center">
                        <img src={coin.icon} alt={coin.name} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        {coin.name}
                    </div>
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">
                    {Number(coin.price).toFixed(2)}
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid rgba(224, 224, 224, 1' }} align="left">
                    ${formatPrice(coin.marketCap.toFixed(0))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='flex items-center justify-center'>
            <Pagination
                count={pageCount} // количество страниц
                page={page} // текущая страница
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
                showFirstButton
                showLastButton
                className='bg-slate-100 p-4 mb-3 rounded'
            />
        </div>
    </>
    )
}

export default CoinsTable;