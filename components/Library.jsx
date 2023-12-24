/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\silent_hill_2_baldwin_study_room_normal.glb 
Author: Rehman_Is_Here (https://sketchfab.com/abdullahabdulrahmanabdullah9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/silent-hill-2-baldwin-study-room-normal-6ffb8a5f2da24be2942a95351abf2883
Title: Silent Hill 2 Baldwin Study Room Normal
*/

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/library.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Material2.geometry} material={materials.auto} />
        <mesh
          geometry={nodes.Material2_1.geometry}
          material={materials.material_1}
        />
        <mesh geometry={nodes.Material3.geometry} material={materials.auto_1} />
        <mesh
          geometry={nodes.Material3_1.geometry}
          material={materials.auto_2}
        />
        <mesh
          geometry={nodes.Material3_2.geometry}
          material={materials.auto_3}
        />
        <mesh
          geometry={nodes.Material3_3.geometry}
          material={materials.auto_4}
        />
        <mesh
          geometry={nodes.Material3_4.geometry}
          material={materials.auto_5}
        />
        <mesh
          geometry={nodes.Material3_5.geometry}
          material={materials.auto_6}
        />
        <mesh
          geometry={nodes.Material3_6.geometry}
          material={materials.auto_8}
        />
        <mesh
          geometry={nodes.Material3_7.geometry}
          material={materials.auto_9}
        />
        <lineSegments
          geometry={nodes.Material2_2.geometry}
          material={materials.edge_color646464255}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/library.glb");
