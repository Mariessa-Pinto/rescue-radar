import Link from "next/link";

const LargeButton = ({ text, link }: ILargeButton) => {
    return (
        <Link href={link}>
            <button className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-xl font-medium bg-white shadow-lg`}>
                {text}
            </button>
        </Link>
    );
}

export default LargeButton;