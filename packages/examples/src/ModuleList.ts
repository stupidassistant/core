import type { Module } from "@stupidassistant/types";

import { EmptyModule } from "./modules/EmptyModule";
import { HelloWorld } from "./modules/HelloWorld";
import { GetDate } from "./modules/GetDate";

export const list: Record<string, Module> = {
	EmptyModule,
	HelloWorld,
	GetDate
};