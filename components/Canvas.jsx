import Library from "./Library";
import dynamic from "next/dynamic";
import { Canvas, useThree } from "@react-three/fiber";
import { PresentationControls, Center } from "@react-three/drei";
import { useEffect, useRef, Suspense } from "react";

export default dynamic(() => Promise.resolve(Model), {
  ssr: false,
});

function Model() {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        frameloop="demand"
        dpr={window.devicePixelRatio}
        eventSource={document.querySelector("#__next")}
        eventPrefix="client"
      >
        {/* <color args={["#110d0c"]} attach="background" /> */}
        <ambientLight intensity={3.6} />
        <PresentationControls
          polar={[-Math.PI / 2, Math.PI / 2]}
          cursor={false}
          config={{ mass: 3, tension: 250, friction: 30 }}
        >
          <Suspense fallback={null}>
            <LibraryPresentation />
          </Suspense>
        </PresentationControls>
      </Canvas>
    </Suspense>
  );
}

const LibraryPresentation = () => {
  const ref = useRef({ rotation: { y: 0 } });
  const isDraged = useRef(false);
  const { invalidate } = useThree();

  const onScroll = () => {
    ref.current.rotation.y = window.scrollY / 2000;
    invalidate();
  };

  const onMouseDown = () => {
    isDraged.current = true;
  };

  const onMouseUp = () => {
    isDraged.current = false;
  };

  const onMouseMove = () => {
    if (isDraged.current) {
      invalidate();
      const damp = setInterval(() => {
        invalidate();
      }, 10);
      setTimeout(() => {
        clearInterval(damp);
      }, 450);
    }
  };

  useEffect(() => {
    const nextDiv = document.getElementById("__next");
    nextDiv.addEventListener("mousemove", onMouseMove);
    return () => nextDiv.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const nextDiv = document.getElementById("__next");
    window.addEventListener("scroll", onScroll);
    nextDiv.addEventListener("mousedown", onMouseDown);
    nextDiv.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("scroll", onScroll);
      nextDiv.removeEventListener("mousedown", onMouseDown);
      nextDiv.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <Center ref={ref}>
      <Library />
    </Center>
  );
};
