import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse center-top" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className = 'nav-link' to='/'> Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to = '/users'>Пользователи</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to = '/project'>Проекты</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to = '/todo'>Список Todo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



export default Navbar




