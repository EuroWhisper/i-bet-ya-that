'use client';

import { InputField } from '../../components/form/InputField';
import { Form, useForm } from '../../components/form/Form';
import { HomeFormData } from './types';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { Toast } from '@/components/Toast';

type Props = {
  predictionSuggestion: string;
};

const defaultValues: HomeFormData = {
  prediction: '',
  confirmationDate: '',
  email: '',
};

const HomeForm = ({ predictionSuggestion }: Props) => {
  const [open, setOpen] = useState(false);

  const formMethods = useForm<HomeFormData>({
    defaultValues,
  });

  const [shouldShowFullForm, setShouldShowFullForm] = useState(false);

  useEffect(() => {
    if (formMethods.formState.isDirty) {
      setShouldShowFullForm(true);
    }
  }, [formMethods.formState.isDirty, setShouldShowFullForm]);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={async (data) => {
        await fetch('/api/prediction', {
          method: 'POST',
          body: JSON.stringify({
            prediction: data.prediction,
            reminderDate: new Date(data.confirmationDate),
            email: data.email,
          }),
        });
        setOpen(true);
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
      <Toast open={open} onOpenChange={setOpen}>
        <h2>Saved successfully!</h2>
      </Toast>
    </Form>
  );
};

export { HomeForm };
