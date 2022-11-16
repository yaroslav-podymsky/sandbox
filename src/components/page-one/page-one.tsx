import React from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../api-service';
import rootSlice, { fetchData } from '../../redux/root.slice';
import { useAppDispatch } from '../../store';
import './page-one.sass';
const PageOne: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="page-one">
      <div style={{ marginBottom: '100px' }}> Page One</div>
      <button
        onClick={async () => {
          await dispatch(fetchData());
        }}>
        fetchData
      </button>
      <button
        onClick={() => {
          apiService.requestData();
        }}>
        requestData log
      </button>
      <Link to={'/home-page'}>
        {' '}
        <button style={{ color: 'blue' }}>go home page</button>
      </Link>
      <Link to={'/page-two'}>
        {' '}
        <button style={{ color: 'coral' }}>go page two</button>
      </Link>
    </div>
  );
};
export default PageOne;
