import React from 'react';
import ContactsHeader from './components/ContactsHeader';
import Header from './components/Header';
import NavHeader from './components/NavHeader';
import MainContent from './components/MainContent';
import CompaniesSession from './components/CompaniesSession';
import WelcomeSession from './components/WelcomeSession';
import CourseSession from './components/CourseSession';
import CourseSession02 from './components/CourseSession02';

const App = () => {
  return (
    <>
    <ContactsHeader/>
      <Header/>
      <NavHeader/>
      <MainContent/>
      <CompaniesSession/>
      <WelcomeSession/>
      <CourseSession/>
      <CourseSession02/>
    </>
  )
}

export default App;