import { GroupOptions, LogEntry, WeekGroup } from "@/types";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { STORAGE_KEY_ENTRIES } from "./constants";

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


// util: truncate a Date to local midnight
export const toLocalMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

// util: start of week in local time
export const startOfWeek = (d: Date, weekStartsOn: number) => {
	const date = toLocalMidnight(d);
	const day = date.getDay(); // 0..6, Sun..Sat
	const diff = (day - weekStartsOn + 7) % 7;
	date.setDate(date.getDate() - diff);
	return date;
};

// util: end of week (local midnight) = start + 6 days
export const endOfWeek = (start: Date) => {
	const end = new Date(start);
	end.setDate(end.getDate() + 6);
	return end;
};

// util: format a nice range label
export const formatWeekLabel = (start: Date, end: Date, locale: string) => {
	const dayFmt = new Intl.DateTimeFormat(locale, { weekday: "short" });
	const dateFmt = new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric" });

	const sameYear = start.getFullYear() === end.getFullYear();
	const left = `${dayFmt.format(start)}, ${new Intl.DateTimeFormat(locale, {
		month: "short",
		day: "numeric",
		year: sameYear ? undefined : "numeric",
	}).format(start)}`;

	const right = `${dayFmt.format(end)}, ${dateFmt.format(end)}`;

	return `${left} – ${right}`;
};

/**
 * Group entries by week (local time).
 * - Stable across year boundaries
 * - Configurable week start (default: Sunday)
 */
export const groupEntriesByWeek = (
	entries: LogEntry[],
	{ weekStartsOn = 0, locale = "en-US" }: GroupOptions = {}
): WeekGroup[] => {
	// sort newest first (optional; grouping doesn't depend on this)
	const sorted = [...entries].sort(
		(a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
	);

	const map = new Map<string, WeekGroup>();

	for (const e of sorted) {
		const created = new Date(e.createdAt);
		const weekStart = startOfWeek(created, weekStartsOn);
		const weekEnd = endOfWeek(weekStart);

		// build a stable key (YYYY-MM-DD__YYYY-MM-DD)
		const k = `${weekStart.toISOString().slice(0, 10)}__${weekEnd.toISOString().slice(0, 10)}`;

		if (!map.has(k)) {
			map.set(k, {
				start: weekStart,
				end: weekEnd,
				label: formatWeekLabel(weekStart, weekEnd, locale),
				entries: [],
				key: k,
			});
		}
		map.get(k)!.entries.push(e);
	}

	// return groups sorted by week start descending (most recent first)
	return [...map.values()].sort((a, b) => b.start.getTime() - a.start.getTime());
};

export const updateEntryById = (id: string, patch: Partial<LogEntry>) => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY_ENTRIES);
		if (!raw) return null;
		const list: LogEntry[] = JSON.parse(raw);
		const idx = list.findIndex((e) => e.id === id);
		if (idx === -1) return null;
		const updated: LogEntry = { ...list[idx], ...patch, updatedAt: new Date().toISOString() };
		list[idx] = updated;
		localStorage.setItem(STORAGE_KEY_ENTRIES, JSON.stringify(list));
		return updated;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const fetchEntries = async () => {

	try {

		await new Promise((res) => setTimeout(res, 300));
		// read from localStorage
		const raw = localStorage.getItem(STORAGE_KEY_ENTRIES);

		if (!raw) return [];

		// parse safely
		const data = JSON.parse(raw);

		// validate shape (lightweight)
		if (!Array.isArray(data)) return [];

		return data.map((item) => ({
			id: String(item.id),
			title: item.title ?? "",
			category: item.category ?? null,
			content: item.content ?? "",
			createdAt: item.createdAt ?? new Date().toISOString(),
			updatedAt: item.updatedAt ?? new Date().toISOString(),
		})) as LogEntry[];
	} catch (err) {
		console.error("Failed to fetch entries:", err);
		return [];
	}
};

export const fetchEntryById = async (id: string) => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY_ENTRIES);
		if (!raw) return null;
		// parse safely
		const data: LogEntry[] = JSON.parse(raw);
		const found = data.find(e => e.id === id) || null;
		return found;
	} catch (error) {
		console.log(error);
		return null;
	}
};
