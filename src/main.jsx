// src/main.jsx

// Явно імпортуємо React
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Поліфіли для Buffer та process, які ви додали раніше
// Це корисно, якщо якісь бібліотеки очікують їх у глобальній області видимості
import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

// Отримуємо кореневий елемент з HTML
const rootElement = document.getElementById('root');

// Створюємо корінь React
const root = createRoot(rootElement);

// Рендеримо додаток
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
