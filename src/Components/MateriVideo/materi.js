import React from 'react'
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import './materi.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Player } from 'video-react';
<link rel="stylesheet" href="/css/video-react.css" />


function MateriVideo() {
    return (



        <Container  className="justify-content-md-center">

            <Row>
                <Col className = 'judulMateri'>Data Science</Col>
            </Row>
            <Row>
                <Col> <div style={{ width: 1000, }}>
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

export default MateriVideo
