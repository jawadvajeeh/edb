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