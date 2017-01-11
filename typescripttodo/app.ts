/**
 * Created by michael.zhang on 10/26/16.
 */
var container = document.getElementById("container")

/*function countdown(initial, final = 0, interval = 1) {
  var current = initial
  while(current > final) {
    container.innerHTML = current
    current -= interval
  }
}

countdown(10,4)*/

var todo = {
	id: 123,
	name: "Pick up drycleaning",
	completed: true
}

container.innerHTML = `
  <div todo='${todo.id}' class="list-group-item}">
    <i class="${todo.completed ? "" : "hidden"}" text-success glyphicon glyphicon-ok></i>
    <span class="name">${todo.name}</span>
  </div>
`
function totalLength(x: (string | any[]), y: (string | any[])): number {
	var total: number = x.length + y.length

	if (x instanceof Array) {
		x.push('abc')
	}

	if (x instanceof String) {
		x.substr(1)
	}

	return total
}

//Define data structure
interface Todo {
	name: string
	completed?: boolean    //Not required fields
}

var todoInline: {name: string, completed: boolean} // Inline define data structure

var todoInstance: Todo = {
	name: "Go to HR Block",
}

//Define service interface
interface ITodoService {
	add(todo: Todo): Todo
	delete(todoId: number): void
	getAll(): Todo[]
	getById(todoId: number): Todo
}

interface Jquery {
	(selector: String): HTMLElement //Can define no name function
	version: number
}

var $ = <Jquery>function(selector) {
	//Find DOM element
}
$.version = 1.12
var elemnt = $("#container")

//Define enum like java
enum TodoState {
	New,
	Active,
	Complete,
	Deleted
}

class TodoService {
	static lastId: number = 0
	_state: TodoState = TodoState.Active

	constructor(private todos: Todo[]) {
		this.todos = todos
	}
	getAll() {
		return this.todos
	}

	add(todo: Todo): number {
		return TodoService.getNextId()
	}

	static getNextId() {
		return TodoService.lastId += 1
	}

	getState() {
		return this._state
	}

	setState(state: TodoState) {
		this._state = state
	}
}

abstract class Person {

	private _fname : string;
	private _lname : string;
	private _age : number;
	
	constructor(fname: string, lname: string) {
		this.fname = fname
		this.lname = lname
	}

	public abstract toString(): string

	public fullName() {
		return this.fname + " " + this.lname
	}

	public get fname() : string {
		return this._fname;
	}
	public set fname(v : string) {
		this._fname = v;
	}
	
	public get lname() : string {
		return this._lname;
	}
	public set lname(v : string) {
		this._lname = v;
	}
	
	public get age() : number {
		return this._age;
	}
	public set age(v : number) {
		this._age = v;
	}
}

class Teacher extends Person {
	
	private _title : string;
	private _salary : number;

	constructor(fname: string, lname: string, title: string) {
		super(fname, lname)
	}

	public toString(): string {

	}

	public get salary() : number {
		return this._salary;
	}
	public set salary(v : number) {
		this._salary = v;
	}
	public get title() : string {
		return this._title;
	}
	public set title(v : string) {
		this._title = v;
	}
}

var teacher: Teacher = new Teacher("Michael", "Zhang", "Professor")
teacher.fullName()

//Generic Type
function clone<T>(object: T): T {
	let serialized = JSON.stringify(object)
	return JSON.parse(serialized)
}

var array01: number[] = [1,2,3]
var array01: Array<number> = [1,2,3]

class KeyValuePair<TKey, TValue> {
	constructor(public key: TKey, public value: TValue){}
}

let pair1 = new KeyValuePair<number, string>(1, "2")
let pair2 = new KeyValuePair<string, string>("key", "value")

//Add constrains for generic types
function totalLength2<T extends {length: number}>(x: T, y: T): number {
	var total: number = x.length + y.length
	return total
}

//*************
interface IHaveLength {
	length: number
}
function totalLength3<T extends IHaveLength>(x: T, y: T): number {
	var total: number = x.length + y.length
	return total
}
//***************

class CustomArray<T> extends Array<T> {}

//namespace
namespace TodoApp.Model {
	export class Todo {
		private _id : number;
		private _name : string;
		private _state : TodoState;
		
		public get state() : TodoState 
		{
			return this._state;
		}
		public set state(v : TodoState)
		 {
			this._state = v;
		}
		
		public get name() : string {
			return this._name;
		}
		public set name(v : string) {
			this._name = v;
		}
		
		public get id() : number {
			return this._id;
		}
		public set id(v : number) {
			this._id = v;
		}
	}

	export enum TodoState {
		NEW, ACTIVE, COMPLETE, DELETED
	}
}

namespace DataAccess {
	import Todo = TodoApp.Model
	export interface ITodoService {
		add(todo: Todo): Todo
		delete(todoId: number): void
		getAll(): Todo[]
		getById(todoId: number): Todo
	}
}