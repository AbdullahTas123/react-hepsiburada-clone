import React, { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// gerektiğinde yüklenecek
const Home = lazy(() => import ("./pages/Home")); 
const NotFound = lazy(() => import ("./pages/Not-Found"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
