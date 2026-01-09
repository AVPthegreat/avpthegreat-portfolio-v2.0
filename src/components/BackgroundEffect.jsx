import React, { useEffect, useRef } from "react";
import paper from "paper";

const BackgroundEffect = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    paper.setup(canvas);

    const count = 250;

    // Create a symbol, which we will use to place instances of later
    const path = new paper.Path.Circle({
      center: [0, 0],
      radius: 5,
      fillColor: darkMode ? "#E65C9C" : "#E65C9C",
      strokeColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
      opacity: darkMode ? 0.4 : 0.2,
    });

    const symbol = new paper.SymbolDefinition(path);

    // Place the instances of the symbol
    for (let i = 0; i < count; i++) {
      const center = paper.Point.random().multiply(paper.view.size);
      const placed = symbol.place(center);
      placed.scale(i / count + 0.01);
      placed.data.vector = new paper.Point({
        angle: Math.random() * 360,
        length: ((i / count) * Math.random()) / 5,
      });
    }

    const keepInView = (item) => {
      const position = item.position;
      const viewBounds = paper.view.bounds;
      if (position.isInside(viewBounds)) return;

      const itemBounds = item.bounds;
      if (position.x > viewBounds.width + 5) {
        position.x = -itemBounds.width;
      }
      if (position.x < -itemBounds.width - 5) {
        position.x = viewBounds.width;
      }
      if (position.y > viewBounds.height + 5) {
        position.y = -itemBounds.height;
      }
      if (position.y < -itemBounds.height - 5) {
        position.y = viewBounds.height;
      }
    };

    paper.view.onFrame = () => {
      for (let i = 0; i < count; i++) {
        const item = paper.project.activeLayer.children[i];
        if (!item || !item.data || !item.data.vector) continue;

        item.position = item.position.add(item.data.vector);
        keepInView(item);
      }
    };

    const handleResize = () => {
      paper.view.viewSize = new paper.Size(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      paper.project.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      resize="true"
    />
  );
};

export default BackgroundEffect;
