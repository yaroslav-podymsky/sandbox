import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import HomePage from '../home-page/home-page';
import PageOne from '../page-one/page-one';
import PageThree from '../page-three /page-three ';
import PageTwo from '../page-two/page-two';
import './pages.sass';
const Pages: React.FC = () => {
  return (
    <div className="pages">
      <Header />
      <Routes>
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        {/* <Route path="/page-three" element={<PageThree />} /> */}
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default Pages;
