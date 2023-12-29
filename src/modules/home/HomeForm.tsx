'use client';

import { InputField } from '../../components/form/InputField';
import { Form, useForm } from '../../components/form/Form';
import { HomeFormData } from './types';
import { Button } from '../../components/Button';

type Props = {
  predictionSuggestion: string;
};

const HomeForm = ({ predictionSuggestion }: Props) => {
  const formMethods = useForm<HomeFormData>({
    defaultValues: { prediction: '' },
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={async (data) => {
        console.log('Hi');
      }}
    >
      <InputField
        type="text"
        name="prediction"
        placeholder={predictionSuggestion}
        rules={{ required: 'Prediction is required' }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export { HomeForm };
