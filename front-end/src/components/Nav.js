import React from "react";
import logo from "../Edsel.jpg";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><img src={logo} className="App-logo" alt="logo" /></li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/Register">Register</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/Login">Login</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/Help">Help</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/Details">Details only for testing</a>
                        </li>
                    </ul>
                </nav>
                <h2 >Detailio</h2>
            </div>
        );
    }
}