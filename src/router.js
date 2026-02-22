// Simple client-side router for SPA navigation

let currentRoute = '/';
let onRouteChange = null;

export function initRouter(callback) {
  onRouteChange = callback;
  
  // Handle initial route
  currentRoute = window.location.hash.slice(1) || '/';
  
  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    currentRoute = window.location.hash.slice(1) || '/';
    if (onRouteChange) {
      onRouteChange(currentRoute);
    }
  });
  
  return currentRoute;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  return currentRoute;
}
