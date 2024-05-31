import React from 'react';
import ProfileCardList from '../components/organisms/ProfileCardList';

function AboutUsPage() {
  const profileCards = [
    {
      id: 1,
      photo: '',
      name: 'Dhea Fesa Athallah',
      role1: 'Front-End Developer',
      role2: 'UX Designer',
      linkedin: 'https://www.linkedin.com/in/dheafesa/',
      github: 'https://github.com/dheafesaa',
      email: 'dhea.fesaathallah@gmail.com',
    },
    {
      id: 2,
      photo: '',
      name: 'Ria Hayati',
      role1: 'Back-End Developer',
      role2: 'Project Manager',
      linkedin: 'https://www.linkedin.com/in/dheafesa/',
      github: 'https://github.com/dheafesaa',
      email: 'dhea.fesaathallah@gmail.com',
    },
    {
      id: 3,
      photo: '',
      name: 'Ajeng Alya Kartika Sari',
      role1: 'Back-End Developer',
      role2: 'UI Designer',
      linkedin: 'https://www.linkedin.com/in/dheafesa/',
      github: 'https://github.com/dheafesaa',
      email: 'dhea.fesaathallah@gmail.com',
    },
  ];

  return (
    <ProfileCardList profileCards={profileCards} />
  );
}

export default AboutUsPage;
