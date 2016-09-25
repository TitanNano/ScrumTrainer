export class Chapter {
	public title: string;
	public description: string;
	public parts: Array<any>;
	public icon: string;

	constructor(data) {
		Object.assign(this, data);
	}
}
