import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritePage from '../pages/FavoritePage';
import UnknownPage from '../pages/UnknownPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<UnknownPage />} />
      </Route>
    </Routes>
  );
};
