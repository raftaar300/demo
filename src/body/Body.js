import React from 'react';
import './section.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Body() {
    return (
        <div className="section">
          <div className="filters">
            <ul>
              <li className="filter active">Consult Now</li>
              <li className="filter">Buisness Trend</li>
              <li className="filter">Startup Ideas</li>
              <li className="filter">Pitch Deck</li>
              <li className="filter">Motivation</li>
              <li className="filter">Founder Assistance</li>
              <li className="filter">Funding</li>
              <li className="filter">Startup Hiring</li>
              <li className="filter">Startup Branding</li>
              <li className="filter more" style = {{color : "red"}}>More</li>
            </ul>
          </div>
          <Dropdown className = "res">
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                   More
                 </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/">Consult Now</Dropdown.Item>
                    <Dropdown.Item href="/">Buisness Trend</Dropdown.Item>
                    <Dropdown.Item href="/">Startup Ideas</Dropdown.Item>
                    <Dropdown.Item href="/">Pitch Deck</Dropdown.Item>
                    <Dropdown.Item href="/">Motivation</Dropdown.Item>
                    <Dropdown.Item href="/">Founder Assistance</Dropdown.Item>
                    <Dropdown.Item href="/">Funding</Dropdown.Item>
                    <Dropdown.Item href="/">Startup Hiring</Dropdown.Item>
                    <Dropdown.Item href="/">Startup Branding</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          <div className="empty_div"></div>
        
        </div>

        
      )
}

export default Body
