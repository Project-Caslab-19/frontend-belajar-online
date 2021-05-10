import React from 'react'
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Player } from 'video-react';
<link rel="stylesheet" href="/css/video-react.css" />


function Quiz() {
    return (



        <Container className="justify-content-md-center">

            <Row>
                <Col>Midtern Exam - 30 min</Col>
            </Row>
            <Row>
                <Col className = 'judulMateri'>Intorduction Machine Learning</Col>
            </Row>

            <Row>
                <Col> <div style={{ width: 1100, }}>
                <Player
                        playsInline
                        poster="/assets/poster.png" //thumbnail
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
                </Col>
            </Row>


        </Container>

    )
}

export default Quiz
