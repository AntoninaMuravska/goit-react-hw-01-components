import Container from './components/Container';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

import user from './db/user.json';
import friends from './db/friends.json';
import statistics from './db/statistical-data.json';
import transactions from './db/transactions.json';

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
