import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Redirect component to handle external URLs
function RedirectToExternal({ url }) {
  React.useEffect(() => {
    // Redirect to the external site in the same tab
    window.location.replace(url)
  }, [url])

  return <p>Redirecting...</p>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default home route */}
        <Route path="/" element={<App />} />

        {/* Redirect route */}
        <Route
          path="/task6"
          element={
            <RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />
          }
        />
        <Route
          path="/task9"
          element={
            <RedirectToExternal url="https://wokwi.com/projects/375833305298579457" />
          }
        />
        <Route
          path="/task10"
          element={
            <RedirectToExternal url="https://wokwi.com/projects/415371687258065921" />
          }
        />
        <Route
          path="/task11"
          element={
            <RedirectToExternal url="https://wokwi.com/projects/409312856465230849" />
          }
        />
        <Route
          path="/task12"
          element={
            <RedirectToExternal url="https://wokwi.com/projects/383260777330575361" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
