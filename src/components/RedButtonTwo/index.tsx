import Link from "next/link";

const RedButtonTwo = ({ text }: ILargeButton) => {
    return (
       
            <button data-testid="redBtn" className={`rounded-full border-2 w-60 h-14 border-red font-outfit text-h4 font-medium text-white bg-red shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}>
                {text}
            </button>
        
    );
}

export default RedButtonTwo;