import { writable } from 'svelte/store';

/**
 * Stores scroll position from Lenis for external use
 */
export const scrollPosition = writable(0.0);
