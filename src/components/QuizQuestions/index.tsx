import Image from 'next/image';

const QuizQuestions = ({ label, question, answers, onAnswerSelect }: QuizQuestionsProps) => {
    return (
        <div className={`bg-white rounded-lg p-6 mb-4 lg:flex lg:items-start lg:justify-between lg:flex-col lg:rounded-lg lg:shadow-lg`}>
            <div className={`lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4`}>
                <div className={`text-2xl font-bold`}>{label}</div>
                <div className={`text-1xl font-semibold`}>{question}</div>
            </div>
            <div className={`lg:flex lg:flex-row lg:justify-between lg:gap-8`}>
                {answers.map((answer, index) => (
                    <div key={index} className={`flex flex-row items-center leading-9 mt-4 lg:mt-0 lg:ml-6 lg:border lg:border-lightgray lg:p-2 lg:w-265 lg:rounded-lg`} onClick={() => onAnswerSelect(answer)}>
                        {index === 0 && <Image src='/QuizIcons/q1a1.png' alt="icon1" width={40} height={15} className="object-cover" />}
                        {index === 1 && <Image src='/QuizIcons/q3a1.png' alt="icon2" width={40} height={15} className="object-cover" />}
                        {index === 2 && <Image src='/QuizIcons/q3a2.png' alt="icon3" width={40} height={15} className="object-cover" />}
                        {answer}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default QuizQuestions;

