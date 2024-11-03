import { InputContainer } from './styles';

const Input = ({ placeholder, type = 'text', ...props }) => {
  return <InputContainer type={type} placeholder={placeholder} {...props} data-cy={'input'} />;
};

export default Input;
