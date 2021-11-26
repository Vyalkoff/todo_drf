import React from "react";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse center-top" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Заметки</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ToDO</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



export default Navbar




