import Profile from './components/Profile';
import './App.css';
import user from './db/user.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatarImg={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
