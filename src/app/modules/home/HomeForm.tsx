'use client';

import { InputField } from '../../components/form/InputField';
import { Form, useForm } from '../../components/form/Form';
import { HomeFormData } from './types';

const HomeForm = () => {
  const formMethods = useForm<HomeFormData>({
    defaultValues: { prediction: '' },
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <InputField
        type="text"
        name="prediction"
        placeholder="New Zealand will win the next rugby world cup"
        rules={{ required: 'Prediction is required' }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export { HomeForm };
