import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExampleContextProvider from "./context";
import Main from "./pages/Main/Main";
import "./18n";

function App() {
  return (
    <div className="App">
      <ExampleContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path='/authorization' element={<Main/>}/> */}
            {/* <Route path='/register' element={<Main/>}/> */}
          </Routes>
        </Suspense>
      </ExampleContextProvider>
    </div>
  );
}

export default App;
