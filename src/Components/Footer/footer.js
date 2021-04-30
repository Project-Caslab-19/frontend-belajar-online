import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <Container className="ctn-hero">
  <Row>
    <Col sm={10}>
    <Row>
      <h4>
        Lab Academy
      </h4>
    </Row>
      </Col>
    <Col sm={2}>
    <Row>
    <Col>
    <a href="/" className="a">
    <FontAwesomeIcon icon={faInstagram} />
    </a>
    </Col>
    <Col>
    <a href="/" className="a">
    <FontAwesomeIcon icon={faTwitter} />
    </a>
    </Col>
    <Col>
    <a href="https://github.com/Project-Caslab-19" className="a">
    <FontAwesomeIcon icon={faGithub} />
    </a>
    </Col>
    </Row>
    </Col>
  </Row>
</Container>
  );
}

export default Footer;