import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';


// const HomePage = lazy(() => import('pages/HomePage'));
// const CatalogPage = lazy(() => import('pages/CatalogPage'));
// const FavoritePage = lazy(() => import('pages/FavoritePage'));
// const UnknownPage = lazy(() => import('pages/UnknownPage'));

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritePage from '../pages/FavoritePage';
import UnknownPage from '../pages/UnknownPage';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<UnknownPage />} />
      </Route>
    </Routes>
  );
}
