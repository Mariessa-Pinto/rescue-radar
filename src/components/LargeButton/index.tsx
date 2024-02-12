const LargeButton = ({ text }: ILargeButton) => {
    return (
        <button className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-xl font-medium`}>
            {text}
        </button>
    );
}

export default LargeButton;