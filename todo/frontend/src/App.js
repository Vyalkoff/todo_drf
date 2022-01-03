import './App.css';
import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes,useParams,Outlet} from "react-router-dom";

import UsersList from "./components/Users";
import ProjectList from "./components/Project";
import Navbar from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/footer";
import TodoList from "./components/Todo";
import NotFound from "./components/notFound";
import SProjectList from "./components/single_project";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
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
                        <Route path='/' element={<div>Это главная Щелкаем меню</div>}/>
                        <Route path='/users' element={<UsersList users={this.state.users}/>}/>
                        <Route path='/project' element={<ProjectList projects={this.state.projects}/>}>
                            <Route path=':id' element={<SProjectList projects = {this.state.projects} users = {this.state.users}/>}/>
                        </Route>
                        <Route path='/todo' element={<TodoList todos={this.state.todos}/>}/>

                        <Route path="*" element={<NotFound/>}/>
                    </Routes>


                </BrowserRouter>


                <Footer/>
            </div>


        );
    }

}


export default App;
