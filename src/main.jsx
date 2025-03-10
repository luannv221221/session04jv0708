import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import TodoList from './component/pages/TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <TodoList />
  </>,
)
