import React from 'react';

export const CarDetailsInfo = ({ carAllInfo }) => {
  return (
    <div>
      <img src={carAllInfo.img} alt={carAllInfo.make} />
      <div>
        <p>
          {carAllInfo.make} <span>{carAllInfo.model}</span>, {carAllInfo.year}
        </p>
      </div>
    </div>
  );
};
