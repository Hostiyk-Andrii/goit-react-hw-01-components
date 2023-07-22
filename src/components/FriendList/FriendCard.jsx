import { FriendList } from './FriendList';
import friends from './friends.json';
 import {List} from "./FriendList.styled"

export const FriendCard = () => {
        return (
          <List>
            <FriendList friends={friends} />
          </List>
        );
}