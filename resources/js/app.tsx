
import "../css/app.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

// import '../css/app.css'
// import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'

// const pages = import.meta.glob('./pages/**/*.tsx', {
//   eager: true,
// })

// console.log('HALAMAN TERDETEKSI:', Object.keys(pages))

// createInertiaApp({
//   resolve: (name) => {
//     console.log('HALAMAN DIMINTA LARAVEL:', name)

//     const page = pages[`./pages/${name}.tsx`]

//     if (!page) {
//       throw new Error(`Halaman Inertia tidak ditemukan: ${name}`)
//     }

//     return page
//   },

//   setup({ el, App, props }) {
//     console.log('REACT BERHASIL RENDER')
//     createRoot(el).render(<App {...props} />)
//   },
// })
