import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BarmanTraining.css"

export const WaiterQuiz = () => {
  const navigate = useNavigate();

  const questions = [
		{
			questionText: 'When meeting guests, a waiter should...',
			answerOptions: [
				{ answerText: 'Stand in a corner where guests can`t see them?', isCorrect: false },
				{ answerText: 'Discuss with fellow waiters who should serve the guests?', isCorrect: false },
				{ answerText: 'Be visible and present to meet new guests immediately?', isCorrect: true },
				{ answerText: 'Wait for the host/restuarant manager to tell you to meet the guests?', isCorrect: false },
			],
		},
		{
			questionText: 'When greeting your guests, you should...',
			answerOptions: [
				{ answerText: 'Be polite, smile and speak in an understandable manner?', isCorrect: true },
				{ answerText: 'Ignore them and wait for the waiter who is serving them, to greet them?', isCorrect: false },
				{ answerText: 'Say Good day, and continue to speak with your fellow waiter?', isCorrect: false },
				{ answerText: 'Never great them, as this is the job of the host/restaurant supervisor?', isCorrect: false },
			],
		},
		{
			questionText: 'When speaking to guests, you should always...',
			answerOptions: [
				{ answerText: 'Use as many hand gestures as possible, when explaining something', isCorrect: false },
				{ answerText: 'Talk softly, so the table next to you cant hear what you are talking about?', isCorrect: false },
				{ answerText: 'Stand up straight, hands behind your back and speak in a slow, professional manner?', isCorrect: true },
				{ answerText: 'Talk fast, so guests think you are in control?', isCorrect: false },
			],
		},
		{
			questionText: 'After guests were seated, what do you offer them first?',
			answerOptions: [
				{ answerText: 'Offer them Palate cleansers', isCorrect: false },
				{ answerText: 'Offer them Bread platter?', isCorrect: false },
				{ answerText: 'Offer them water, wine or other drinks', isCorrect: false },
				{ answerText: 'Bring their starter out?', isCorrect: true },
			],
		},
		{
			questionText: 'what critical information should you get after serving drinks, from the guests, for the `pass manager` to know?',
			answerOptions: [
				{ answerText: 'What time they would like to have their first course?', isCorrect: false },
				{ answerText: 'What dietaries, fod allergies or food preferences they might have?', isCorrect: true },
				{ answerText: 'If they have any special occasion they are celebrating?', isCorrect: false },
				{ answerText: 'If they want the music to be turned up or down?', isCorrect: false },
			],
		},
		{
			questionText: 'During service time, waiters are not allowed to?',
			answerOptions: [
				{ answerText: 'Serve the guests any more drinks?', isCorrect: false },
				{ answerText: 'Stand together and talk with fellow waiters?', isCorrect: false },
				{ answerText: 'Call your table in the kitchen when guests are ready for next course?', isCorrect: false },
				{ answerText: 'Re-set any tables between courses?', isCorrect: true },
			],
		},

		{
			questionText: 'If a waiter tells the kitchen they need an order `on the fly` what exactly are they asking for?',
			answerOptions: [
				{ answerText: 'Something cooked in an airplane', isCorrect: false },
				{ answerText: 'Something cooked slowly', isCorrect: false },
				{ answerText: 'Something cooked quickly', isCorrect: true },
				{ answerText: 'Something cooked tomorrow', isCorrect: false },
			],
		},
		{
			questionText: 'What is it called when a waiter or waitress works two shifts consecutively?',
			answerOptions: [
				{ answerText: 'A Single', isCorrect: false },
				{ answerText: 'A Triple', isCorrect: false },
				{ answerText: 'A Double', isCorrect: true },
				{ answerText: 'A Quad', isCorrect: false},
			],
		},
		{
			questionText: 'Following food service, who is responsible for clearing and resetting tables?',
			answerOptions: [
				{ answerText: 'Busser', isCorrect: true },
				{ answerText: 'barbell', isCorrect: false },
				{ answerText: 'Hostess', isCorrect: false },
				{ answerText: 'Expeditor ', isCorrect: false },
			],
		},
		{
			questionText: 'If a customer says they want their pasta cooked "al dente," what do they mean?',
			answerOptions: [
				{ answerText: 'They want their pasta mushy', isCorrect: false },
				{ answerText: 'They want their pasta firm', isCorrect: true },
				{ answerText: 'They want their pasta cooked in the oven', isCorrect: false },
				{ answerText: 'They want ehir pasta cooked outside', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of the area designated for servers to retrieve drinks made by the bartender?',
			answerOptions: [
				{ answerText: 'Service Plot', isCorrect: false },
				{ answerText: 'Beer Arena', isCorrect: false },
				{ answerText: 'Bev Spot', isCorrect: false },
				{ answerText: 'Service Bar', isCorrect: true },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  return (
    <div className="barman-body">
      <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} <br/>
					<br/>
					 Be accessed and get certificate from our training
					<button>Start</button>
				</div>
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonss" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </div>
  );
}

