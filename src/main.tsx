import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { Games } from './pages/Games'
import { Apps } from './pages/Apps'
import { Movies } from './pages/Movies'
import { Books } from './pages/Books'

import './style/MainStyle.scss'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <Navbar />

          <Routes>

              <Route path="/" element={<Navigate to="/store" replace />} />
              <Route path="/store" element={<Navigate to="/store/games" replace />} />
              
              <Route path="/store/games" element={<Games />} />
              <Route path="/store/apps" element={<Apps />} />
              <Route path="/store/movies" element={<Movies />} />
              <Route path="/store/books" element={<Books />} />

          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
)
