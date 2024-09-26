import React from 'react';
import ContactsHeader from './components/ContactsHeader';
import Header from './components/Header';
import NavHeader from './components/NavHeader';
import MainContent from './components/MainContent';
import CompaniesSession from './components/CompaniesSession';

const App = () => {
  return (
    <>
    <ContactsHeader/>
      <Header/>
      <NavHeader/>
      <MainContent/>
      <CompaniesSession/>
    </>
  )
}

export default App;