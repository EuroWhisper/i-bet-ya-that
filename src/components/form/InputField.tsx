import { UseControllerProps } from 'react-hook-form';
import { useController } from './Form';
import { Input } from './Input';

type Props = {
  name: string;
  rules?: UseControllerProps['rules'];
} & React.HTMLProps<HTMLInputElement>;

const InputField = ({ name, rules, ...props }: Props) => {
  const { field, fieldState } = useController({ name, rules });

  return (
    <>
      <Input {...props} {...field} />
      {fieldState.error && <p>{fieldState.error?.message}</p>}
    </>
  );
};

export { InputField };
