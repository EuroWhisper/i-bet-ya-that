import { HomeContent } from '../modules/home/HomeContent';

type PredictionSuggestion = {
  message: string | null;
};

export const getData = async () => {
  try {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/prediction-suggestion', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const predictionSuggestion: PredictionSuggestion = await res.json();

    // Pass data to the page via props
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
