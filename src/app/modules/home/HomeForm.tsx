import { Input } from '../../components/form/Input';

const HomeForm = () => {
  return (
    <form>
      <Input
        type="text"
        name="prediction"
        placeholder="New Zealand will win the next rugby world cup"
      />
    </form>
  );
};

export { HomeForm };
