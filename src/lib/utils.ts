import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDateReadable(timestamp: number = Date.now()): string {
	const date = new Date(timestamp);
	return date.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}


export function getGreeting(date: Date = new Date()): string {
	const hour = date.getHours();

	if (hour < 12) return 'Good morning.';
	if (hour < 17) return 'Good afternoon.';
	if (hour < 21) return 'Good evening.';
	return 'Good night';
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}

