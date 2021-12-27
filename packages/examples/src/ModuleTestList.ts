import type { ModuleValidationData } from "@stupidassistant/types";

import { EmptyModule } from "./modules/EmptyModule.test";
import { HelloWorld } from "./modules/HelloWorld.test";
import { GetDate } from "./modules/GetDate.test";
import { SlotWeather } from "./modules/SlotWeatherModule.test";

export const validationData: Record<string, ModuleValidationData> = {
	EmptyModule,
	HelloWorld,
	GetDate,
	SlotWeather
};