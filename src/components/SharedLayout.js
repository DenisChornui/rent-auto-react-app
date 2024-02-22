// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';

// export const SharedLayout = () => {
//   return (
//     <>
//     <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//       </>
  
//   );
// };


import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div>
            <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Cars From USA
        </p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog cars</Link>
        <Link to="/favorite">Favorite cars</Link>
      </nav>
      </header>
      <Outlet/>
        </div>
    )
}