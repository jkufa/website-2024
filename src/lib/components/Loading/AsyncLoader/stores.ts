import { writable } from "svelte/store";

export const loadedComponents = writable<number>(0);