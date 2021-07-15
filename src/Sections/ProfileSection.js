import React from 'react';
import Profile from '../Components/Profile';

const ProfileSection = () => {
    return (
        <section
      className="background center"
      style={{
        backgroundImage: "linear-gradient(#8d273e, #FFF)",
        
      }}
    >
      <Profile/>
    </section>
    );
}

export default ProfileSection;
