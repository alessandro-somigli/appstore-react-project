import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { Games } from './pages/Games'
import { GamePage } from './pages/GamePage'
import { Movies } from './pages/Movies'
import { MoviePage } from './pages/MoviePage'
import { Books } from './pages/Books'

import { InsightsPage } from './pages/InsightsPage'

import './style/MainStyle.scss'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { QueryClient, QueryClientProvider } from 'react-query'
import { BookPage } from './pages/BookPage'

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
              <Route path="/store/games/:id" element={<GamePage />} />

              <Route path="/store/movies" element={<Movies />} />
              <Route path="/store/movies/:id" element={<MoviePage />} />

              <Route path="/store/books" element={<Books />} />
              <Route path="/store/books/:id" element={<BookPage />} />

              <Route path="/store/insights" element={<InsightsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
)
