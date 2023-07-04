import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Posts from './Components/Posts'
import './App.css'
import { QueryClient , QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();


function App() {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
    </div>
  )
}

export default App
