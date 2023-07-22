import { Avatar, Name, Item, Status } from './FriendList.styled';

export const FriendList = ({friends}) => {
        return (friends.map((friend) => {
        return (
          <Item key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
          </Item>
        );
  }
    
  ))
};

