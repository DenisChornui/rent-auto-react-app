import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { selectCars, selectVisibleCars } from 'redux/cars/selectors';

export const CarsList = () => {
  const carsFilter = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {carsFilter.map(car => {
          const {
            id,
            make,
            img,
            model,
            year,
            address,
            rentalCompany,
            type,
            mileage,
            rentalPrice,
            functionalities
          } = car;
          const addressSplit = address.split(', ');
          return (
            <li key={id}>
              <div>
                <img src={img} alt={make} />
              </div>
              <div>
                <p>
                  {make} <span>{model}</span>, {year}
                </p>
                <p>{rentalPrice}</p>
              </div>
              <div>
                <ul>
                  <li>
                    {addressSplit[1]}
                    <span />
                  </li>
                  <li>
                    {addressSplit[2]}
                    <span />
                  </li>
                  <li>{rentalCompany}</li>
                </ul>
                <ul>
                  <li>
                    {type}
                    <span />
                  </li>
                  <li>
                    {model}
                    <span />
                  </li>
                  <li>{mileage}<span/></li>
                  <li>{functionalities[0]}</li>
                </ul>
                <button>Learn More</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
