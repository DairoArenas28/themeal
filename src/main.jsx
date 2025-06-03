import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Router from './router.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const queryClient = new QueryClient()
//<ReactQueryDevtools initialIsOpen={false}/>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
