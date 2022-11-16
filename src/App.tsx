import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.sass';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './components/home-page/home-page';
import PageOne from './components/page-one/page-one';
import PageThree from './components/page-three /page-three ';
import PageTwo from './components/page-two/page-two';

// import Footer from './components/header/header';
import Pages from './components/pages/pages';
import { fetchTodos } from './redux/root.slice';
import { useAppDispatch } from './store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
