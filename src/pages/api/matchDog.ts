import { NextApiRequest, NextApiResponse } from 'next';

// Dummy data representing the list of dogs
const allDogs = [
  { name: 'Dog1', activity: 'active', allergies: 'no', size: 'small', grooming: 'low', compatibility: ['children', 'cats'] },
  { name: 'Dog2', activity: 'moderate', allergies: 'no', size: 'medium', grooming: 'moderate', compatibility: ['children', 'dogs'] },
  // Add more dog data as needed
];

const findMatchedDog = (answers: string[]) => {
  // Implement your matching logic here based on the quiz answers
  // This is a simplified example, you'll need to customize it based on your data
  return allDogs.find((dog) => {
    return (
      dog.activity === answers[0] &&
      dog.allergies === answers[1] &&
      dog.size === answers[2] &&
      dog.grooming === answers[3] &&
      dog.compatibility.includes(answers[4])
    );
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Extract answers from the request payload
    const { answers } = req.body;

    // Find the matched dog based on the answers
    const matchedDog = findMatchedDog(answers);

    if (!matchedDog) {
      // If no match is found, you can handle it accordingly
      res.status(404).json({ error: 'No matching dog found' });
      return;
    }

    res.status(200).json(matchedDog);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};