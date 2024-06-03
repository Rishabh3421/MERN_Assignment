import React from 'react';

const UserLogo: React.FC<{ name: string }> = ({ name }) => {
  const firstLetter = name.charAt(0).toUpperCase();

  // Generate a random background color
  // const randomColor = () => {
  //  const colors = [
  //   "#323131"
  //   ];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  return (
    <div className="userLogo" style={{ backgroundColor:"#696868",color: "white"  }}>
      {firstLetter}
    </div>
  );
};

export default UserLogo;
