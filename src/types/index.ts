import { categories } from "@/lib/constants";

export type CategoryEnum = typeof categories[number]['value'];

export type Mode = 'write' | 'preview';

export type LogEntry = {
	id: string;
	title: string;
	category: CategoryEnum | null;
	content: string;
	createdAt: string;
	updatedAt: string;
};

export type ELogEntry = Omit<LogEntry, 'id' | 'createdAt' | 'updatedAt'>;

export type WeekGroup = {
	start: Date;                      // start of week (local midnight)
	end: Date;                        // end of week (local midnight)
	label: string;                    // e.g., "Sun, Oct 19 – Sat, Oct 25, 2025"
	entries: LogEntry[];              // entries belonging to this week
	key: string;                      // stable key, e.g., "2025-10-19__2025-10-25"
};

export type GroupOptions = {
	weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0=Sun (default), 1=Mon, 6=Sat, etc.
	locale?: string;                           // e.g., "en-US" (default) or "ar-SA"
};

export type ThemeType = 'light' | 'dark' | 'system';