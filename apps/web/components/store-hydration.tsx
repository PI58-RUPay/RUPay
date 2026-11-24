"use client";

import { useEffect } from "react";
import { useRupayStore } from "@/store/use-rupay-store";

export function StoreHydration() {
	useEffect(() => {
		void useRupayStore.persist.rehydrate();
	}, []);

	return null;
}
