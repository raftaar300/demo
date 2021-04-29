import React from 'react'
import { IoIosNotifications } from "react-icons/io"
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./a.css";
function Navbar() {
    return (
        <nav className="nav">

            <div className="centre">


                <input className="sea" type="text" placeholder="   Search" />

                <select className="Categories" id="Categories">
                    <option value="1" style = {{width : "30%"}}>All Categories</option>
                </select>

            </div>

            <div className="right">

                <select className="lan" id="lan">
                    <option value="EN" style = {{width : "10%"}}>EN</option>
                    <option value="HN" style = {{width : "30%"}}>HN</option>
                </select>
                <a className="su" href="/" style={{ textDecoration: "None" }}>
                    Support
              </a>
                <a className="lo" href="/" style={{ textDecoration: "None" }} >
                    Login
              </a>
                <a className="si" href="/" style={{ textDecoration: "None" }} >
                    Signup
              </a>
                <IoIosNotifications style={{ position: "relative", left: "20px", top: "5px" }} />
            </div>

            <Dropdown className = "res">
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                   Show
                 </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Support</Dropdown.Item>
                    <Dropdown.Item href="/">Login</Dropdown.Item>
                    <Dropdown.Item href="/">Sign up</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </nav>

    )
}

export default Navbar
