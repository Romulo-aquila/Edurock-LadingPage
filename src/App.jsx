import React from 'react';
import ContactsHeader from './components/ContactsHeader';
import Header from './components/Header';
import NavHeader from './components/NavHeader';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <>
    <ContactsHeader/>
    <Header/>
    <NavHeader/>
    <MainContent/>
    </>
  )
}

export default App;