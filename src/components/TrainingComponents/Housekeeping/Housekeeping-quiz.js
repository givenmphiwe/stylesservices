import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BarmanTraining.css"

export const HealthQuiz = () => {
  const navigate = useNavigate();

  const questions = [
		{
			questionText: 'Often we communicate with others to..',
			answerOptions: [
				{ answerText: 'Avoid unnecessary noises', isCorrect: false },
				{ answerText: 'Show interest in wht is being said.', isCorrect: true },
				{ answerText: 'Strong decision making.', isCorrect: false },
				{ answerText: 'Consistance in the work flow.', isCorrect: false },
			],
		},
		{
			questionText: 'If patient doesn`t hear you, you must?',
			answerOptions: [
				{ answerText: 'Speak loud enough, but don`t shout.', isCorrect: true },
				{ answerText: 'Show empathy towards the patient.', isCorrect: false },
				{ answerText: 'Say Good day, and continue to speak even when they don`t hear you.', isCorrect: false },
				{ answerText: 'Give the correct information to try and orientate the patient.', isCorrect: false },
			],
		},
		{
			questionText: 'Patients with Stroke must be..',
			answerOptions: [
				{ answerText: 'Use as many hand gestures as possible, when explaining something', isCorrect: false },
				{ answerText: 'Talk softly, so the patient next to you cant hear what you are talking about?', isCorrect: false },
				{ answerText: 'Encourage them to communicate in any way possible.', isCorrect: true },
				{ answerText: 'Talk fast, so patients think you are in control?', isCorrect: false },
			],
		},
		{
			questionText: 'Reporting to the Registered nurse enables',
			answerOptions: [
				{ answerText: 'Good communication between staff members.', isCorrect: true },
				{ answerText: 'Teachs them to use gestures.', isCorrect: false },
				{ answerText: 'Drinking enough fluids', isCorrect: false },
				{ answerText: 'Dentures fitting well?', isCorrect: false },
			],
		},
		{
			questionText: 'Patients with asthma symptoms',
			answerOptions: [
				{ answerText: 'Good immune system by eating healthy', isCorrect: false },
				{ answerText: 'You can`t breath easily', isCorrect: true },
				{ answerText: 'Patient complains of pain when padding urine.', isCorrect: false },
				{ answerText: 'Urine my smell bad and look cloudy.', isCorrect: false },
			],
		},
		{
			questionText: 'Symptoms of Hepatits',
			answerOptions: [
				{ answerText: 'Loss of ability to speak, function or understand.', isCorrect: false },
				{ answerText: 'Restlessness at night.', isCorrect: false },
				{ answerText: 'Forgetfulness and disorientated.', isCorrect: false },
				{ answerText: 'Jaundice (yellow skin and eyes)', isCorrect: true },
			],
		},

		{
			questionText: 'Parkinson`s syndrome is a condition where there is a decrease in the levels of hormone dopamine',
			answerOptions: [
				{ answerText: 'Loss of ability to speak, function or understand.', isCorrect: false },
				{ answerText: 'Forgetfulness and disorientated.', isCorrect: false },
				{ answerText: 'Tremors in the hands shaking.', isCorrect: true },
				{ answerText: 'Abdominal pain', isCorrect: false },
			],
		},
		{
			questionText: 'Constipation is defined as having a bowel movemnet less than three times per week. With Constipation, stools are usually hard, dry, small in size and diffucult to eliminate. Some may find it painful to have a bowel movement and often experience bloating and sensation of a full bowel. The common cause is?',
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
				{ answerText: 'Not enough fibre inthe diet', isCorrect: true },
				{ answerText: 'Weight loss due to metabolic increased activity caused by tremors and rigidity.', isCorrect: false },
				{ answerText: 'Excessive thirst.', isCorrect: false },
				{ answerText: 'Wounds or cuts that won`t heal. ', isCorrect: false },
			],
		},
		{
			questionText: 'Cancer develops when cells in a part of the body begin to grow out of control. All cancer types start because of out-of-control abnormal cells. The cancer cells do not die. They out live the normal cells and continue to form new abnormal cells. Symptoms?',
			answerOptions: [
				{ answerText: 'Painful urination, blood in the urine', isCorrect: false },
				{ answerText: 'Depression - Signs are feeling sad, rejected and alone anxious, worried, guilty and angry most of the time. They think about dying, are not able to eat properly and have no disire to bath or have sex', isCorrect: true },
				{ answerText: 'Sweating at night even when it`s cold', isCorrect: false },
				{ answerText: 'Fibrosis, neuritis and arthritis may develop as secondary infections due to mouth and throat infections.', isCorrect: false },
			],
		},
		{
			questionText: 'COMPLICATIONS FOR NOT WASHING HANDS',
			answerOptions: [
				{ answerText: 'Feeling very tired and weakness of the body', isCorrect: false },
				{ answerText: 'Sweating at night even when it`s cold', isCorrect: false },
				{ answerText: 'Eat enough healthy food to stay health', isCorrect: false },
				{ answerText: 'Moist skin is a source of germs.', isCorrect: true },
			],
		},
		{
			questionText: 'Dirty mouth causes',
			answerOptions: [
				{ answerText: 'Bad taste when esp. if dirt builds up on the tongue.', isCorrect: true },
				{ answerText: 'Breathlessness', isCorrect: false },
				{ answerText: 'Fever', isCorrect: false },
				{ answerText: 'Loss of weight', isCorrect: true },
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

