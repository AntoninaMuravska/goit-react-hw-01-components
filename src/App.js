import Profile from './components/Profile';
import FriendList from './components/FriendList';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';
import './App.css';

import user from './db/user.json';
import friends from './db/friends.json';
import statistics from './db/statistical-data.json';
import transactions from './db/transactions.json';

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatarImg={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <Statistics title="statistics" stats={statistics} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
