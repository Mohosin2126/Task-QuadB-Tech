import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './Dashboard/Store/Store';

// Create a new query client instance
const queryClient = new QueryClient();

// Render the application root
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='max-w-full mx-auto'>
      {/* Wrap the entire application with React.StrictMode */}
      <React.StrictMode>
        {/* Provide the query client to the application */}
        <QueryClientProvider client={queryClient}>
          {/* Provide the router configuration to the application */}
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    </div>
  </Provider>
);
