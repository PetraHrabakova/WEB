
import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Pokedex from '../pages/Pokedex/Pokedex';
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail';
import About from '../pages/About/About';
import Footer from './Footer';

export default function App() {

    const navbarLayout = (
        <>
            <Navbar></Navbar>
            <div className={'main'}>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    );

    const router = createHashRouter([
        {
            //path: '/',
            element: navbarLayout,
            children: [
                {
                    path: '/',
                    element: <Pokedex></Pokedex>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/pokemon/:name',
                    element: <PokemonDetail></PokemonDetail>
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router}></RouterProvider>
    )

}