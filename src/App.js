import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './components/db/user.json';
import statisticsData from './components/db/statistical-data.json';
import friends from './components/db/friends.json';
import transaction from './components/db/transactions.json';
console.log(transaction);

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
