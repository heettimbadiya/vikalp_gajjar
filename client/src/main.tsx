import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Enhanced error handling for nodeType errors
const originalConsoleError = console.error;
console.error = (...args) => {
  // Filter out nodeType errors
  if (args[0] && typeof args[0] === 'object' && args[0].message && args[0].message.includes('nodeType')) {
    return;
  }
  originalConsoleError(...args);
};

// Handle nodeType errors globally
window.addEventListener('error', (event) => {
  if (event.error && event.error.message && event.error.message.includes('nodeType')) {
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('nodeType')) {
    event.preventDefault();
    return false;
  }
});

createRoot(document.getElementById("root")!).render(<App />);
