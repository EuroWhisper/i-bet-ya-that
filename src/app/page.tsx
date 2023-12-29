import { HomeContent } from '../modules/home/HomeContent';

type PredictionSuggestion = {
  message: string | null;
};

export const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/prediction-suggestion', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
    });
    const predictionSuggestion: PredictionSuggestion = await res.json();

    return { predictionSuggestion };
  } catch (e) {
    return { predictionSuggestion: { message: null } };
  }
};

export default async function Home() {
  const { predictionSuggestion } = await getData();

  return (
    <HomeContent
      predictionSuggestion={predictionSuggestion.message ?? 'dsdfsd'}
    />
  );
}
