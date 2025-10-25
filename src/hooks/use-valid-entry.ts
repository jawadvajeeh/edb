import { LogEntry } from "@/types";
import { useEffect, useState } from "react";




const useIsValidEntry = (logEntry: Omit<LogEntry, 'id' | 'createdAt' | 'updatedAt'>) => {
	const [isEntryValid, setIsEntryValid] = useState(false);
	const { category, content, title } = logEntry;

	useEffect(() => {
		if (category !== null && content !== '' && title !== '') {
			setIsEntryValid(true);
		} else {
			setIsEntryValid(false);
		}
	}, [category, content, title]);

	return isEntryValid;

};

export { useIsValidEntry };