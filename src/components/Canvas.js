// components/Canvas.js

'use client';

import { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");

// Define a new path
ctx.beginPath();

// Set a start-point
ctx.moveTo(0, 0);

// Set an end-point
ctx.lineTo(200, 100);

// Stroke it (Do the Drawing)
ctx.stroke();



  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
