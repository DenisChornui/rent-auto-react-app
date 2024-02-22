import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.car.cars;

export const selectStatusFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contact.isLoading;

export const selectError = state => state.contact.error;

export const selectVisibleCars = createSelector(
    [selectCars, selectStatusFilter],
    (cars, filter) => {
      return cars.filter(car =>
        car.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );

  export const selectVisibleCar = createSelector(
    [selectCars, selectStatusFilter],
    (cars, filter) => {
      return cars.filter(car =>
        car.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );