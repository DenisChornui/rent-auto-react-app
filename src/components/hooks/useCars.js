import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';

export const useCars = () => {
  const getAllCars = useSelector(selectCars);

  return {
    getAllCars,
  };
};
