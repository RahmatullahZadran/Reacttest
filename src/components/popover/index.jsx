import React, { useEffect, useState } from 'react';
import './style.css';

function Popover({ selectedFriend, setIsPopoverVisible, images }) {
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popovers ${showPopover ? 'show' : ''}`}>
      <button className="close-button" onClick={() => setIsPopoverVisible(false)}>×</button>
      <h3>{selectedFriend.name}</h3>
      <img height={250} width={400} src={images[selectedFriend.id - 1]} alt={selectedFriend.name} />
      <p> {selectedFriend.detailedInfo}</p>
    </div>
  );
}

export default Popover;
