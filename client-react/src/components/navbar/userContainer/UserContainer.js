import React, {useState} from 'react';
import { StyledUserContainer } from './UserContainer.styled';
import UseClickOutside from './UseClickOutside';

function UserContainer(props) {
  const [isHidden, setIsHidden] = useState(true);
  
  // toggle isHidden
  function handleClick() {
    setIsHidden(isHidden => !isHidden);
  }

  //check for click outside of current element
  const domNode = UseClickOutside(() => {
    setIsHidden(true);
  });

  const guestButtons = (
    <>
      <a href="/api/user/login"> Log in </a>
      <a href="/api/user/register"> Sign up </a>
    </>
  );

  const userButtons = (
    <>
      <a href="/api/user/logout"> Log out </a>
      <a href="/api/user/history"> History </a>
    </>
  );

  return (
    <StyledUserContainer>
      <div ref={domNode} className="userContainer">
        <div className="userName" onClick={handleClick}>
        Guest▾ 
        </div>
        <div className={`userLinks ${isHidden ? "isHidden" : ""}`} >
          {props.isGuest ? guestButtons : userButtons}
        </div>
      </div>
    </StyledUserContainer>
  );
}

export default UserContainer