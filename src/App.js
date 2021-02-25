import React from 'react';
import Profile from './components/Profile/Profile';
import Friendlist from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './components/db/user.json';
import statistics from './components/db/statistical-data.json';
console.log(statistics);

const { name, tag, location, avatar, stats } = users;

const App = () => {
  return (
    <div>
      <h1>Главный компонент - контейнер приложения</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={statistics}/>
      <Friendlist />
      <TransactionHistory />
    </div>
  );
};

export default App;
