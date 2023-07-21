import user from '../../components/user.json';
import { Container, Stats, Items, Labels, Quantity } from './Profiles.styled';
export const Profile = () => {
        
  return (
    <Container>
      <div className="description">
        <img
          src={user.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <Stats>
        <Items>
          <Labels>Followers </Labels>
          <Quantity>{user.stats.followers}</Quantity>
        </Items>
        <Items>
          <Labels>Views </Labels>
          <Quantity>{user.stats.views}</Quantity>
        </Items>
        <Items>
          <Labels>Likes </Labels>
          <Quantity>{user.stats.likes}</Quantity>
        </Items>
      </Stats>
    </Container>
  );
};
