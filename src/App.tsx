// import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

// const Cart = Loadable({
//     loader: () => import(/* webpackChunkname: "Cart" */ './pages/Cart'),
//     loading: () => <div>Идет загрузка...</div>,
// });

const Cart = React.lazy(() => import(/* webpackChunkname: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkname: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkname: "NotFound" */ './pages/NotFound'));

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route
                    path="cart"
                    element={
                        <Suspense fallback={<div>Идет загрузка...</div>}>
                            <Cart />
                        </Suspense>
                    }
                />
                <Route
                    path="pizza/:id"
                    element={
                        <Suspense fallback={<div>Идет загрузка...</div>}>
                            <FullPizza />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Идет загрузка...</div>}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
