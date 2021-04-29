import React from 'react';
import './Section2.css';
import { ReactComponent as Section2img1 } from './2.svg';
import { ReactComponent as Section2img2 } from './3.svg';
import { ReactComponent as Section2img3 } from './4.svg';
import { ReactComponent as Section2img4 } from './dataScient.svg';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';


function Section2() {
    return (
        <div className="section2">
            <section id="services" class="services section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Belajar Mudah Dengan Learning Path</h2>
                        <p>Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.</p>
                    </div>

                    <CardGroup>
                        <Card className="card">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Data Sceince</CardTitle>

                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Lihat</Button>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">RPL</CardTitle>

                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Lihat</Button>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Game Cerdas</CardTitle>

                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Lihat</Button>
                            </CardBody>
                        </Card>
                        <Card className="card">
                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Jaringan</CardTitle>

                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Lihat</Button>
                            </CardBody>
                        </Card>

                    </CardGroup>


                </div>
            </section>
        </div>
    )
}

export default Section2
