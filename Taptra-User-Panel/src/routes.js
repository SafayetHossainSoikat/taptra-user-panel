import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import WalletPage from './pages/WalletPage';
import ReferralPage from './pages/ReferralPage';
import ErrorPage from './pages/ErrorPage';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/referral" element={<ReferralPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
