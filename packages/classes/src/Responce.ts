
import type { LambdaOutput, LambdaOutputJSON } from "@stupidassistant/types";

export class Responce implements LambdaOutput {
	private speakText?: string;

	public speak(text: string) {
		this.speakText = text;
		return this;
	}

	public toJSON(): LambdaOutputJSON {
		return {
			speakText: this.speakText
		}
	}
}