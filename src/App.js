import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './db/user.json';
import statisticsData from './db/statistical-data.json';
import friends from './db/friends.json';
import transaction from './db/transactions.json';
// console.log(transaction);

const { name, tag, location, avatar, stats } = users;

const App = () => {
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={statisticsData} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transaction}/>
    </div>
  );
};

export default App;
