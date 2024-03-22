import Image from 'next/image';

const QuizQuestions = ({ label, question, answers, onAnswerSelect, selectedAnswer }: QuizQuestionsProps) => {
    return (
        <div data-testid="quiz-option" className={`w-11/12 md:w-full lg:block bg-white rounded-lg p-6 mb-4 lg:flex lg:items-start lg:justify-between lg:flex-col lg:rounded-lg lg:bg-white lg:h-full lg:rounded-lg`}>
            <div className={`lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4`}>
                <div><h3 className={`font-outfit text-tbase font-semibold`}>{label}</h3></div>
                <div><h4 className={`font-outfit text-h4 font-medium`}>{question}</h4></div>
            </div>
            <div className={`lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:gap-8`}>
                {answers.map((answer, index) => (
                    <div key={index} className={`flex flex-row items-center leading-9 mt-4 pl-2 cursor-pointer lg:mt-4 lg:ml-6 ${selectedAnswer === answer ? 'bg-blue rounded-lg' : ''}`} onClick={() => onAnswerSelect(answer)}>
                        <div className={`flex flex-row items-center lg:w-64 lg:h-12 lg:border lg:border-lightgray lg:p-2 lg:rounded-lg lg:text-sm`}>
                            {index === 0 && <Image src='/QuizIcons/q1a1.png' alt="icon1" width={20} height={15} className={`object-cover`} />}
                            {index === 1 && <Image src='/QuizIcons/q3a1.png' alt="icon2" width={20} height={15} className={`object-cover`} />}
                            {index === 2 && <Image src='/QuizIcons/q3a2.png' alt="icon3" width={20} height={15} className={`object-cover`} />}
                            <p className={`font-outfit text-base ml-4`}>{answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default QuizQuestions;

