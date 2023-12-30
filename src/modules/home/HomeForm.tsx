'use client';

import { InputField } from '../../components/form/InputField';
import { Form, useForm } from '../../components/form/Form';
import { HomeFormData } from './types';
import { Button } from '../../components/Button';

type Props = {
  predictionSuggestion: string;
};

const defaultValues: HomeFormData = {
  prediction: '',
  confirmationDate: '',
  email: '',
};

const HomeForm = ({ predictionSuggestion }: Props) => {
  const formMethods = useForm<HomeFormData>({
    defaultValues,
  });

  const shouldShowFullForm = formMethods.formState.isDirty;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={async (data) => {
        console.log(data);
      }}
    >
      <InputField
        type="text"
        name="prediction"
        placeholder={predictionSuggestion}
        rules={{ required: 'Prediction is required' }}
      />
      {shouldShowFullForm && (
        <div>
          <div className="mt-3 flex justify-between items-end">
            <InputField
              label="Verify on"
              type="date"
              name="confirmationDate"
              placeholder="Date"
              rules={{ required: 'Date is required' }}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              rules={{ required: 'Email is required' }}
            />
          </div>
          <div className="mt-4">
            <Button type="submit">Make prediction</Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export { HomeForm };
