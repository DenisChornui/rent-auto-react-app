// import React, { useEffect } from 'react';
// import carDetails from 'data/adsCars.json';
// import { CarItem } from 'components/CarItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCars } from 'redux/cars/selectors';
// import { fetchCars } from 'redux/cars/operations';

// export function MainComponent() {
//     const carFilter = useSelector(selectCars)
//     console.log(carFilter)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);
// 	return (
// 		<>
// 			{carDetails.map((item, i) => (
// 				<CarItem key={i} allInfoCar={item} />
// 			))}
// 		</>
// 	);
// }