import { TransactionList } from './TransactionList';
import transactions from './transactions.json';
import { Table, Thead, Tr } from './TransactionList.styled';

export const TransactionHistory = () => {
        return (
          <Table>
            <Thead>
              <Tr >
                <th>Typewsww</th>
                <th>Amount</th>
                <th>Currency</th>
              </Tr>
            </Thead>

            
              <TransactionList transactions={transactions} />
           
          </Table>
        );
       
}