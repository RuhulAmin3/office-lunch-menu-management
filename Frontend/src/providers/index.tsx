import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (

        <ReduxProvider store={store}>
            <RouterProvider router={router} />
            {children}
        </ReduxProvider>
    )
}

export default Provider;