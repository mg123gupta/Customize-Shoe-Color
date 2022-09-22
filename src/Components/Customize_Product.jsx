import { useState, Suspense, useRef } from "react";
import "../index.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.sole}
      />
    </group>
  );
}

const Customize_Product = () => {
  const [mesh, setmesh] = useState("white");
  const [stripes, setstripes] = useState("white");
  const [sole, setsole] = useState("white");
  return (
    <div class="wrapper">
      <div class=" container">
        <h1>Customize Your Shoe</h1>

        <div class="card">
          <div class="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model
                  customColors={{ mesh: mesh, stripes: stripes, sole: sole }}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <h2>Color chooser</h2>
          <div class="colors">
            

            
            <div className="color">
              
              <label for="sole">Sole</label>
              <input
                type="color"
                id="sole"
                name="sole"
                value={sole}
                onChange={(e) => setsole(e.target.value)}
              />
            </div>
            <div className="color">
             
              <label for="mesh">Mesh</label>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setmesh(e.target.value)}
              />
            </div>
            <div className="color">
              
              <label for="stripes">Stripes</label>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setstripes(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize_Product;
