import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BarmanTraining.css"

export const HousekeepingQuiz = () => {
  const navigate = useNavigate();

  const questions = [
		{
			questionText: 'Presentation is everything. The important factor is...',
			answerOptions: [
				{ answerText: 'A clean and tidy space will always be welcoming', isCorrect: true },
				{ answerText: 'Show interest in what is being done.', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: 'Consistance in doing your duties.', isCorrect: false },
			],
		},
		{
			questionText: 'Bathrooms and kitchens are where bacteria thrives the most?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'I don`t know', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'Housekeepers will see and hear all sorts of things whilst going about their duties. They must?',
			answerOptions: [
				{ answerText: 'Tell their friends', isCorrect: false },
				{ answerText: 'Mind your own business', isCorrect: true },
				{ answerText: 'Report the news to management', isCorrect: false },
				{ answerText: 'I don`t know', isCorrect: false },
			],
		},
		{
			questionText: 'Room attendants play an important role in the organisation',
			answerOptions: [
				{ answerText: 'Prepare your cleaning material, chemicals and equipment', isCorrect: true },
				{ answerText: 'Leave the bed messed up', isCorrect: false },
				{ answerText: 'Dust bin and sheets must be left untouched', isCorrect: false },
				{ answerText: 'Only clean the floor', isCorrect: false },
			],
		},
		{
			questionText: 'Typical housekeeping items will include',
			answerOptions: [
				{ answerText: 'Cloths for wiping, drying, polishing', isCorrect: true },
				{ answerText: 'Dust and damp wipe', isCorrect: true },
				{ answerText: 'Dirty sheets in bed,towels', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'cleaning materials used for cleaning guest bedroom',
			answerOptions: [
				{ answerText: 'Neutral detergents', isCorrect: true },
				{ answerText: 'Acid detergents.', isCorrect: true },
				{ answerText: ' Dusters or feather dusters.', isCorrect: true },
				{ answerText: 'Air fresheners', isCorrect: true },
			],
		},

		{
			questionText: 'When you are knocking in the guest room you must?',
			answerOptions: [
				{ answerText: 'Just enter the room and clean', isCorrect: false },
				{ answerText: 'Do not enter the room or come back later again.', isCorrect: false },
				{ answerText: 'If no answer is heard, knock again and repeat, “Housekeeping”.', isCorrect: true },
				{ answerText: 'Feel emotional or bored because you knocked and no answered', isCorrect: false },
			],
		},
		{
			questionText: 'Empty rooms (vacant the night before) or rooms in maintenance areas should be checked daily to ensure',
			answerOptions: [
				{ answerText: 'Act like you are cleaning the room to avoid cleaning other rooms', isCorrect: false },
				{ answerText: 'To hide from management ', isCorrect: false },
				{ answerText: 'Nobody enters the room', isCorrect: true },
				{ answerText: 'Are clean, safe, unoccupied, and that all items are present', isCorrect: true},
			],
		},
		{
			questionText: 'Check all guest stationery and other items to ensure that all items are present, and are not stained, marked, torn or scribbled on. These may include',
			answerOptions: [
				{ answerText: 'fabric wall coverings', isCorrect: false },
				{ answerText: 'Guest stationery folder.', isCorrect: true },
				{ answerText: 'Check and replenish any food and drink items.', isCorrect: true },
				{ answerText: 'I don`t know ', isCorrect: false },
			],
		}
		
		
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

