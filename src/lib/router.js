import { writable } from 'svelte/store';

export const route = writable('home');
export const params = writable({});

export function navigate(path) {
  if (typeof window !== 'undefined') {
    window.history.pushState({}, '', path);
    handleLocation();
  }
}

export function handleLocation() {
  if (typeof window === 'undefined') return;
  
  const path = window.location.pathname;
  
  if (path === '/' || path === '') {
    route.set('home');
    params.set({});
  } else if (path === '/500') {
    route.set('server-error');
    params.set({});
  } else if (path === '/maintenance') {
    route.set('maintenance');
    params.set({});
  } else {
    route.set('not-found');
    params.set({});
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', handleLocation);
  handleLocation();
}
