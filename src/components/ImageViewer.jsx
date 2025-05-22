// src/components/ImageViewer.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTourContext } from "../context/TourContext";
import FullscreenToggle from "./FullscreenToggle";
import HotspotOverlay from "./HotspotOverlay";

export default function ImageViewer() {
  const mountRef = useRef(null);
  const { selectedImage } = useTourContext();
  const [hotspots, setHotspots] = useState([
    { x: "50%", y: "50%", label: "Center View" },
    { x: "75%", y: "40%", label: "Info Spot" },
  ]);

  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const sphereRef = useRef();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);
    sceneRef.current = scene;
    cameraRef.current = camera;

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Mouse interaction
    let isUserInteracting = false;
    let lon = 0,
      lat = 0;

    function onMouseDown() {
      isUserInteracting = true;
    }

    function onMouseUp() {
      isUserInteracting = false;
    }

    function onMouseMove(event) {
      if (!isUserInteracting) return;
      lon -= event.movementX * 0.1;
      lat += event.movementY * 0.1;
      lat = Math.max(-85, Math.min(85, lat));
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);
      camera.lookAt(
        new THREE.Vector3(
          500 * Math.sin(phi) * Math.cos(theta),
          500 * Math.cos(phi),
          500 * Math.sin(phi) * Math.sin(theta)
        )
      );
    }

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      if (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  // Load new texture when selectedImage changes
  useEffect(() => {
    if (!selectedImage || !sphereRef.current) return;

    const material = sphereRef.current.material;
    if (material.map) {
      material.map.dispose();
      material.map = null;
    }

    new THREE.TextureLoader().load(
      selectedImage,
      (texture) => {
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;

        material.map = texture;
        material.needsUpdate = true;
      },
      undefined,
      (err) => console.error("Texture load error:", err)
    );
  }, [selectedImage]);

  const toggleFullscreen = () => {
    const container = mountRef.current;
    if (!document.fullscreenElement) {
      container
        .requestFullscreen()
        .catch((err) => console.error("Fullscreen error:", err));
    } else {
      document.exitFullscreen();
    }
  };

  if (!selectedImage) return null;

  return (
    <div
      ref={mountRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <FullscreenToggle onClick={toggleFullscreen} />
      <HotspotOverlay hotspots={hotspots} />
    </div>
  );
}
