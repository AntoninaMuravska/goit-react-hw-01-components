import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatarImg, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatarImg}
          alt="Аватар пользователя"
          class="avatar"
          width="100"
        />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatarImg: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
