import React from 'react'
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import './materi3.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Player } from 'video-react';
import thumbnail from './andas.png';
import vid from './videoplayback.mp4';
<link rel="stylesheet" href="/css/video-react.css" />


function MateriVideo3() {
    return (



        <Container className="justify-content-md-center">

            <Row>
                <Col className='judulMateri'>Data Science</Col>
            </Row>
            <Row>
                <Col>
                    <Player
                        playsInline
                        poster={thumbnail} //thumbnail
                        src={vid}
                    />

                </Col>
            </Row>


        </Container>

    )
}

export default MateriVideo3
