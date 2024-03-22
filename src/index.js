import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FavoriteTeam from "./components/team/favoritTeam";
import Draft from "./components/draft/draft";
import CartProvider from "./components/country/Provider";
import FavoriteCountry from "./components/country/favoriteCountry";
const AppRouter = () => {
    return <Routes>
        <Route path={'/'} index={true} element={<App/>}/>
        <Route path={'/favorite'}  element={<FavoriteCountry/>}/>
        <Route path={'/draft'} element={<Draft/>}/>
        <Route path={'/Favorite_team'} element={<FavoriteTeam/>}/>
        <Route path={'*'} element={<App/>}/>

    </Routes>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
  <React.StrictMode>
      <BrowserRouter>
              <AppRouter />
  </BrowserRouter>
  </React.StrictMode>
    </CartProvider>
);

reportWebVitals();
