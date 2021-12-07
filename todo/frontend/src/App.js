import './App.css';
import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersList from "./components/Users";
import ProjectList from "./components/Project";
import Navbar from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/footer";
import TodoList from "./components/Todo";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects':[],
            'todos' : [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(
            response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/').then(
            response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(
            response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }).catch(error => console.log(error))
    }


    render() {
        return (

            <div>
                <BrowserRouter>
                <Navbar/>


                        <Routes>
                            <Route exact path='/' element = {<div>Это главная Щелкаем меню</div>}/>
                            <Route exact path='/users' element = {<UsersList users={this.state.users}/>}/>
                            <Route exact path='/project' element = {<ProjectList projects={this.state.projects}/>}/>
                            <Route exact path='/todo' element = {<TodoList todos={this.state.todos}/>}/>

                        </Routes>
                    </BrowserRouter>


                <Footer/>
            </div>


        );
    }

}


export default App;
