import React from 'react'// import css
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './materiquiz.css'


function Quiz() {
    return (



        <Container  className="justify-content-md-center">

            <Row>
                <Col className='col1' >Midtern Exam - 30 min</Col>
            </Row>
            <Row>
                <Col className='judulQuiz'>Intorduction Machine Learning</Col>
            </Row>

            <Row>
                <Col>Submit your assignment</Col>
               
            </Row>

            <Row  >
                <Col  xs={3}><b>DUE DATE</b> Apr 18, 11:59 PM PDT</Col>
                <Col xs={7}><b>ATTEMPTS</b> 3 every 8 hours</Col>
                <Col ><a href="/">
                                <button className={"startbutton"} onClick={''} >
                                    Start
                                    </button>
                                </a></Col>
            </Row>
            


        </Container>

    )
}

export default Quiz
