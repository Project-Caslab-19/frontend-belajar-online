import React from 'react'
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import './materi.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Player } from 'video-react';
import thumbnail from './poster.jpg';
import vid from './videoplayback.mp4';
<link rel="stylesheet" href="/css/video-react.css" />


function MateriVideo() {
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

export default MateriVideo
