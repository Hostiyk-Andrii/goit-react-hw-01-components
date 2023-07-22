import {Td} from './TransactionList.styled'
export const TransactionList = ({ transactions }) => {
        return transactions.map((transaction) => {
                return (
                  <tbody>
                    <tr key={transaction.id}>
                      <Td>{transaction.type}</Td>
                      <Td>{transaction.amount}</Td>
                      <Td>{transaction.currency}</Td>
                    </tr>
                  </tbody>
                );
        });
}
            
   
        

       
      
    
        
 
   
