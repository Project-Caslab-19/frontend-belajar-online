import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './Sidebar.css'

const Side = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Menu 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Menu 2">Menu 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Menu 3">Menu 3</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  const Sidebar = withRouter(Side);
  export default Sidebar