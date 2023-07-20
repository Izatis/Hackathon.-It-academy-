import React, { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "../../3dModel/3dModel";

const ModelComponent = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
      <OrbitControls />
      <color attach="background" args={["#FFFFFF"]} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ModelComponent;
