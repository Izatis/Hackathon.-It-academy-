import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExampleContextProvider from "./context";
import Main from "./pages/Main/Main";
import "./18n";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./components/Layout/Layout";
import Car, { Model } from "./models/Car";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    // <Canvas camera={{position: [0, 2, 5], zoom: 1}}>
    //   <OrbitControls>
    //     <color attach="background" args={["lightblue"]}/>
    //     <hemisphereLight intensity={0.35}/>
    //     <spotLight
    //     position={[10, 10, 10]}
    //     angle={0.3}
    //     penumbra={1}
    //     intensity={2}
    //     castShadow

    //     />
    //   <Suspense fallback={null}>
    //     <Model/>
    //   </Suspense>
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
    // </OrbitControls>
    // </Canvas>
  );
}

export default App;
