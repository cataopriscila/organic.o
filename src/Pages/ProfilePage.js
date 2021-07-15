import React from 'react';
import Footer from '../Elements/Footer';
import ProfileSection from '../Sections/ProfileSection';

const ProfilePage = () => {
    return (
        <>
      <ProfileSection />      
      <Footer isFixed={false} />
    </>
    );
}

export default ProfilePage;
