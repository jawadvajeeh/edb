import { LogEntry } from "@/types";
import { useEffect, useState } from "react";

type EditableFields = Pick<LogEntry, "title" | "category" | "content">;

export const useIsEditValid = (initial: EditableFields, current: EditableFields) => {
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		// check for non-empty fields
		const notEmpty = current.title.trim() !== "" && current.content.trim() !== "";

		// check if something has changed
		const changed =
			current.title !== initial.title ||
			current.content !== initial.content ||
			current.category !== initial.category;

		setIsValid(notEmpty && changed);
	}, [initial, current]);

	return isValid;
};