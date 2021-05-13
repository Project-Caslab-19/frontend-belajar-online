import React, { useState } from 'react';
import './question.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Question() {
	return (



		<Container className="justify-content-md-center">

			<Row>
				<Col xs={9} className='judulQuiz'>Intorduction Machine Learning</Col>
				<Col style={{ color: 'red' }} >Sisa waktu: 0:52:30</Col>
			</Row>
			<Row>
				
			</Row>

			<Row>
				<Col>CSS Stands for...</Col>
			</Row>

			<Row>
				<Col className='soalQuiz'>
					<div>
						<input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
						<label for="question-1-answers-A">Computer Styled Sections </label>
					</div>

					<div>
						<input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
						<label for="question-1-answers-B">Cascading Style Sheets</label>
					</div>

					<div>
						<input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
						<label for="question-1-answers-C">Crazy Solid Shapes</label>
					</div>

					<div>
						<input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" />
						<label for="question-1-answers-D">None of the above</label>
					</div>
				</Col>
			</Row>

			<Row className ='controlBtn' >
				<Col xs={8}><a href="/soal-quiz">
					<button className={"startbutton"} onClick={''} >
						Submit
                                    </button>
				</a></Col>
				<Col > <a className = 'prevQuest' href="/soal-quiz">
					<button className={"navbutton"} onClick={''} >
						Sebelumnya
                                    </button>
				</a>
	
				<a href="/soal-quiz">
					<button className={"navbutton"} onClick={''} >
						Selanjutnya
                                    </button>
				</a></Col>
			</Row>



		</Container>

	)
}

export default Question



