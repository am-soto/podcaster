import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/presentation/layouts/main'
import PodcastLayout from '@/presentation/layouts/podcast'
import Episode from '@/presentation/pages/episode'
import Podcast from '@/presentation/pages/podcast'
import PodcastListPage from '@/presentation/pages/podcast-list'

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
            element: <Podcast />
          },
          {
            path: 'episodes/:episodeId',
            element: <Episode />
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
