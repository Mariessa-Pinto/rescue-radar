interface ILargeButton {
    text: string;
    link: string;
    onClick?: (e: any) => void;
    id?: string;
    value?: string;
    disabled?: boolean;
}

interface IDog {
  id: number; 
  name: string;
  age: string;
  breed: string;
  gender: string;
  weight: string;
  location: string;
  state: string;
  img: string; 
  description?: string; 
  size?: string; 
}

interface IAdopt {
  id: string,
    name: string;
    max_weight_female: number | string;
    max_weight_male: number | string;
    shedding: number | string;
    energy: number | string;
    good_with_other_dogs: number | string;
    good_with_children: number | string;
  }

  interface IPetFinderProps {
    searchQuery: string;
    onDogClick: (dog: IDog) => void;
}

interface IViewDogProps {
  dog: IDog;
  onClose: () => void;
}
  

interface QuizQuestionsProps {
  label: string;
  question: string;
  answers: string[];
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string;
}