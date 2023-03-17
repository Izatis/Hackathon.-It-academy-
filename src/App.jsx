import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExampleContextProvider from "./context";
import Main from "./pages/Main/Main";
import "./18n";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./components/Layout/Layout";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
  
     <ExampleContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<SignIn />} />
            <Route path='/register' element={<SignUp/>}/>
          </Routes>
        </Layout>
      </Suspense>
    </ExampleContextProvider> 
  );
}

export default App;
