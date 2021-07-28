import React from 'react';
import Profile from '../Components/Profile';

const ProfileSection = () => {
    return (
        <section
      className="background center"
      style={{
        backgroundImage: "linear-gradient(#F2F2F2, #FFF)",
        
      }}
    >
      <Profile/>
    </section>
    );
}

export default ProfileSection;
