import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CoinsTable = ({ data }: any) => {
    console.log('data', data)
    
    return (
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
                    {Number(coin.marketCap).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
}

export default CoinsTable;