import { fetchEntries } from "@/lib/utils";
import { LogEntry } from "@/types";
import { useEffect, useState } from "react";

export const useEntries = () => {
	const [entries, setEntries] = useState<LogEntry[]>([]);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		const load = async () => {
			setIsLoading(true);
			const data = await fetchEntries();
			setEntries(data);
			setIsLoading(false);
		};
		load();
	}, []);

	return { entries, loading };
};