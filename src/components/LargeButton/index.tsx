import Link from "next/link";

const LargeButton = ({ text, link }: ILargeButton) => {
    return (
        <Link href={link}>
            <button className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}>
                {text}
            </button>
        </Link>
    );
}

export default LargeButton;