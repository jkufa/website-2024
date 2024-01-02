import { writable } from 'svelte/store';
import { type UserSettings } from '$lib/models/userSettings';
import { LocalStorageHandler } from '$lib/localStorageHandler';
import { browser } from '$app/environment';

const defaultSettings: UserSettings = {
	animationsOn: true,
	introOn: true,
};

/**
 * Local storage instance
 */
const localStorage = new LocalStorageHandler<UserSettings>('userSettings');

/**
 * Stores user settings
 */
export const userSettings = writable(localStorage.read() ?? defaultSettings);

/**
 * Update localStorage on changes
 */
userSettings.subscribe((settings) => browser && localStorage.write(settings));
