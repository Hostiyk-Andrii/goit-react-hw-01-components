// import { Profile } from './Profile/Profile';
import React from 'react';
// import { Statistics } from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import { FriendList } from "./FriendList/FriendList";


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
      <FriendList friends={friends} isOnline={friends.isOnline } />
      {/* <Statistics title="Upload stats"  /> */}
    </div>
  );   
};
