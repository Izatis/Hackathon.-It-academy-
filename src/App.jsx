import {React, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import ExampleContextProvider from "./context";
import "./18next";

import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./components/Layout/Layout";

function App() {
  
  return (
    <ExampleContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Main />} /> */}
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Layout>
      </Suspense>
    </ExampleContextProvider>
  );
}

export default App;
