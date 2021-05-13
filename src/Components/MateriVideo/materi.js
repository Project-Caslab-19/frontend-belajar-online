import React from 'react'
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import './materi.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Player } from 'video-react';
import thumbnail from './poster.jpg';
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
                        poster={thumbnail} //thumbnail
                        src="https://r4---sn-xmjxajvh-jb3zs.googlevideo.com/videoplayback?expire=1620917496&ei=mOicYK7eL_qSmLAPmOmsgAc&ip=80.78.75.13&id=o-ACVFMx7K6NDIrp0WG8_q77uhM7zJZTN8u1H6DxY1sR8W&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=iAnmhQwUEF4Cgsi-Mtd2JK8F&gir=yes&clen=15929856&ratebypass=yes&dur=212.091&lmt=1578933304205652&fexp=24001373,24007246&c=WEB&txp=5531432&n=BeW69MFxSr6gCR9UL9in&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALwfGUFdurp3Wj_-yAaVU0QALhVY2sXdFTGF-YHaPq-EAiBTKAxEZ_vm5SjdsI3bqvOgigLvlj_CfwTMu_H9dh84Vg%3D%3D&rm=sn-5cjvh-up5s7z,sn-nv4sk7z&req_id=3a75ae42cad9a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=7c&mip=112.215.219.151&mm=29&mn=sn-xmjxajvh-jb3zs&ms=rdu&mt=1620895497&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgYO04bhIjvgFUynDefFVCNxvg3mULbi2UJhQ162MZSskCIBX-AiUX8pjHj2awu-rKP30ECLtKx4en3wlfIN-j-Atj"
                    />
                </div>
                </Col>
            </Row>


        </Container>

    )
}

export default MateriVideo
