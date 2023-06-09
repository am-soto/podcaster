import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/presentation/layouts/main'
import PodcastLayout from '@/presentation/layouts/podcast'
import EpisodePage from '@/presentation/pages/episode'
import PodcastPage from '@/presentation/pages/podcast'
import PodcastListPage from '@/presentation/pages/podcast-list'
import { worker } from './mocks/browser'

if (import.meta.env.VITE_MOCK_DATA) {
  worker.start()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PodcastListPage />
      },
      {
        path: 'podcasts/:podcastId',
        element: <PodcastLayout />,
        children: [
          {
            index: true,
            element: <PodcastPage />
          },
          {
            path: 'episodes/:episodeId',
            element: <EpisodePage />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
