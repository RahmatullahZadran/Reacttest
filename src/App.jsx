import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';
import NavBar from './components/NavBar';
import Loading from './components/Loading';
import Popover from './components/Popover';
import image1 from '../src/components/images/github.png';
import image2 from '../src/components/images/React.png';
import image3 from '../src/components/images/github.png';
import image4 from '../src/components/images/github.png';
import image5 from '../src/components/images/github.png';
import image6 from '../src/components/images/github.png';

function App() {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);
  };

  const handleCardClick = (friend) => {
    setSelectedFriend(friend);
    setIsPopoverVisible(true);
  };

  const totalFriendsCount = friendsData.length;
  const remainingFriendsCount = friends.length;

  return (
    <div>
      <Wrapper>
        <Title>Rahmatullah Zadran Portfolio</Title>
        {friends.slice(0, 8).map((friend, index) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            image={
              index === 0 ? image1 :
              index === 1 ? image2 :
              index === 2 ? image3 :
              index === 3 ? image4 :
              index === 4 ? image5 :
              image6
            }
            info={friend.info}
            deleteFriend={() => deleteFriend(friend.id)}
            onClick={() => handleCardClick(friend)}
          />
        ))}
      </Wrapper>
   
<Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />

      {isPopoverVisible && (
        <Popover
          selectedFriend={selectedFriend}
          setIsPopoverVisible={setIsPopoverVisible}
          images={[image1, image2, image3, image4, image5, image6]}
        />
      )}
      <NavBar />
      {remainingFriendsCount === 0 && (
        <Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />
      )}
    </div>
  );
}

export default App;
