import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks"
import './home-page.sass'
const HomePage:React.FC = () => {
    const todos = useAppSelector(state => state.rootReducer.todos)
    const {status, error} = useAppSelector(state => state.rootReducer)
    return (
    <div className="home-page" >
        <div style={{marginBottom:'100px'}}>Home page</div> 
        {status === 'loading' &&  <div style={{color:'red'}}>loading...</div>}
        {error && <div>error: {error}</div> }
           <div>{todos.map((todo, index) => {
            if(index < 10)return <div style={{display:'flex'}}><div>todo: {todo.author.login}</div></div>
           })}</div>
        <Link to={'/page-one'}> <button style={{color:'green'}}>go page one</button></Link>
        <Link to={'/page-two'}>  <button style={{color:'coral'}}>go page two</button></Link>
        <Link to={'/page-three'}>  <button style={{color:'gray'}}>go page three</button></Link>
          
        </div>
    )
}
export default HomePage