import { fetchEntryById } from "@/lib/utils";
import { LogEntry } from "@/types";
import { useEffect, useState } from "react";

export const useGetEntry = (id: string) => {
	const [entry, setEntry] = useState<LogEntry | null>(null);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		const load = async () => {
			setIsLoading(true);
			const data = await fetchEntryById(id);
			setEntry(data);
			setIsLoading(false);
		};
		load();
	}, [id]);

	return { entry, loading };

};