export class Todo2 {
	private _id: number;
	private _name: string;
	private _state: TodoState;

	public get state(): TodoState {
		return this._state;
	}
	public set state(v: TodoState) {
		this._state = v;
	}

	public get name(): string {
		return this._name;
	}
	public set name(v: string) {
		this._name = v;
	}

	public get id(): number {
		return this._id;
	}
	public set id(v: number) {
		this._id = v;
	}
}

export enum TodoState2 {
	NEW, ACTIVE, COMPLETE, DELETED
}