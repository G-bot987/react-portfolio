
import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Projects from './components/pages/Project';
import Languages from './components/pages/Blog';
import Contact from './components/pages/Contact';
import CV from './components/pages/CV';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

function App() {



const [currentPage, setCurrentPage] = useState('Home');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />;
  }
  if (currentPage === 'Projects') {
    return <Projects />;
  }
  if (currentPage === 'Languages') {
    return <Languages />;
  }
  if (currentPage === 'CV') {
    return <CV />;
  }
  return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    <Header />
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
    <Footer />
  </div>
);
}

export default App;
