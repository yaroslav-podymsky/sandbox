import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { addName, removeName } from '../../redux/root.slice';
import './page-two.sass';
const PageTwo: React.FC = () => {
  const names = useAppSelector((state) => state.rootReducer.names);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const addNewName = async () => {
    if (inputValue) {
      await dispatch(addName(inputValue));
      setInputValue('');
    }
  };
  const deleteName = (index: number) => {
    dispatch(removeName(index));
  };
  return (
    <div className="page-two">
      <div style={{ marginBottom: '100px' }}>Page Two</div>
      <div style={{ margin: '20px' }}>
        {names.map((name, index) => {
          return (
            <div style={{ display: 'flex' }}>
              <div>
                name: {name}..............index: {index}
              </div>
              <div
                onClick={() => deleteName(index)}
                style={{
                  width: '50px',
                  height: '20px',
                  backgroundColor: '#000000',
                  marginLeft: '30px',
                  cursor: 'pointer',
                }}>
                delete
              </div>
            </div>
          );
        })}
        <form>
          <input
            ref={inputRef}
            id="text1"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
          />
          <button
            onClick={() => {
              addNewName();
              if (inputRef.current) {
                inputRef.current.value = '';
                setInputValue('');
              }
            }}
            type="reset">
            add
          </button>
        </form>
      </div>
      <Link to={'/home-page'}>
        {' '}
        <button style={{ color: 'blue' }}>go home page</button>
      </Link>
      <Link to={'/page-one'}>
        {' '}
        <button style={{ color: 'green' }}>go page one</button>
      </Link>
    </div>
  );
};
export default PageTwo;
