import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='flex h-screen'>
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
)
