import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import AiInsights from './pages/AiInsights';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/insights" element={<AiInsights />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
