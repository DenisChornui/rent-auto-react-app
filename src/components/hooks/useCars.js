import { useSelector } from 'react-redux';
import {
	selectIsLoading,
    selectCars,
} from 'redux/cars/selectors';

export const useCars = () => {
	const getAllCars = useSelector(selectCars);
	// const isLoading = useSelector(selectIsLoading);
	
	return {
		getAllCars,
		// isLoading,
	};
};