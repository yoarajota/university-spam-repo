import React from 'react';
import HomePage from './HomePage';
import { ContextProvider } from './ContextProvider';
export default function App() {
    const user = { name: 'Tania', loggedIn: true }

    return (
        <ContextProvider value={user}>
            <HomePage />
        </ContextProvider>
    );
}
