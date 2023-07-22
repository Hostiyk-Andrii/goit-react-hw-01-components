// import { Profile } from './Profile/Profile';
import React from 'react';
// import { Statistics } from './Statistics/Statistics';
// import friends from './FriendList/friends.json';
// import { FriendList } from "./FriendList/FriendList";
// import{FriendCard} from './FriendList/FriendCard'
import{TransactionHistory} from "./TransactionHistory/TransactionHistory"



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <FriendList friends={friends} c={friends.isOnline} /> */}
      {/* <FriendCard  /> */}
      <TransactionHistory />

      {/* <Statistics title="Upload stats"  /> */}
    </div>
  );   
};
