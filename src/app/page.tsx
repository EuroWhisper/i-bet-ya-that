import { getPredictionSuggestion } from '@/lib/chatgpt';
import { HomeContent } from '../modules/home/HomeContent';

type PredictionSuggestion = {
  message: string | null;
};

const getData = async () => {
  try {
    const suggestion = await getPredictionSuggestion();

    return suggestion.content;
  } catch (e) {
    return null;
  }
};

export default async function Home() {
  const predictionSuggestion = await getData();

  return (
    <HomeContent
      predictionSuggestion={predictionSuggestion ?? 'Enter a prediction...'}
    />
  );
}
