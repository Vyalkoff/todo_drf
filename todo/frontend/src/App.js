import './App.css';
import React from "react";
import axios from "axios";
import UsersList from "./components/Users";
import Navbar from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/footer";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
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
    }


    render() {
        return (
            <div>
            <div>
                <Navbar/>
            </div>
                <div>
                    <UsersList users={this.state.users}/>
                </div>
                <Footer/>

            </div>

        );
    }

}


export default App;
