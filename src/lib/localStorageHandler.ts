export class LocalStorageHandler<T> {
	private key: string;

	constructor(key: string) {
		this.key = key;
	}

	write(data: T): void {
		try {
			const serializedData = JSON.stringify(data);
			localStorage.setItem(this.key, serializedData);
		} catch (error) {
			console.error(`Error writing to localStorage: ${error}`);
		}
	}

	read<T>(): T | null {
		try {
			const serializedData = localStorage.getItem(this.key);
			if (serializedData === null) {
				return null;
			}
			return JSON.parse(serializedData) as T;
		} catch (error) {
			console.error(`Error reading from localStorage: ${error}`);
			return null;
		}
	}

	remove(): void {
		try {
			localStorage.removeItem(this.key);
		} catch (error) {
			console.error(`Error removing item from localStorage: ${error}`);
		}
	}

	clear(): void {
		try {
			localStorage.clear();
		} catch (error) {
			console.error(`Error clearing localStorage: ${error}`);
		}
	}
}
