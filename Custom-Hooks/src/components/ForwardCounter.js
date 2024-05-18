import useCounter from '../hooks/useCounter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>Forward : {counter}</Card>;
};

export default ForwardCounter;
