import React, { useState } from "react";

const materials = {
  ЛДСП: 2000,
  Акрил: 3500,
  Камень: 6000
};

export default function App() {
  const [material, setMaterial] = useState("ЛДСП");
  const [length, setLength] = useState(100);
  const [width, setWidth] = useState(60);

  const price = (length * width * materials[material]) / 10000;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Калькулятор столешницы</h1>

      <label>Материал:</label>
      <select value={material} onChange={(e) => setMaterial(e.target.value)}>
        {Object.keys(materials).map((mat) => (
          <option key={mat} value={mat}>{mat}</option>
        ))}
      </select>

      <div style={{ marginTop: 10 }}>
        <label>Длина (см):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Ширина (см):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>

      <h2>Стоимость: {price.toFixed(2)} ₽</h2>
    </div>
  );
}
