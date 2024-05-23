import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Provider;
