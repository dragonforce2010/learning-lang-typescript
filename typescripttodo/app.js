var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by michael.zhang on 10/26/16.
 */
var container = document.getElementById("container");
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
};
container.innerHTML = "\n  <div todo='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + "\" text-success glyphicon glyphicon-ok></i>\n    <span class=\"name\">" + todo.name + "</span>\n  </div>\n";
function totalLength(x, y) {
    var total = x.length + y.length;
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
var todoInline; // Inline define data structure
var todoInstance = {
    name: "Go to HR Block",
};
var $ = function (selector) {
    //Find DOM element
};
$.version = 1.12;
var elemnt = $("#container");
//Define enum like java
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Deleted"] = 3] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoService = (function () {
    function TodoService(todos) {
        this.todos = todos;
        this._state = TodoState.Active;
        this.todos = todos;
    }
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.prototype.add = function (todo) {
        return TodoService.getNextId();
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    TodoService.prototype.getState = function () {
        return this._state;
    };
    TodoService.prototype.setState = function (state) {
        this._state = state;
    };
    TodoService.lastId = 0;
    return TodoService;
}());
var Person = (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.fullName = function () {
        return this.fname + " " + this.lname;
    };
    Object.defineProperty(Person.prototype, "fname", {
        get: function () {
            return this._fname;
        },
        set: function (v) {
            this._fname = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lname", {
        get: function () {
            return this._lname;
        },
        set: function (v) {
            this._lname = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fname, lname, title) {
        _super.call(this, fname, lname);
    }
    Teacher.prototype.toString = function () {
    };
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (v) {
            this._salary = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (v) {
            this._title = v;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(Person));
var teacher = new Teacher("Michael", "Zhang", "Professor");
teacher.fullName();
//Generic Type
function clone(object) {
    var serialized = JSON.stringify(object);
    return JSON.parse(serialized);
}
var array01 = [1, 2, 3];
var array01 = [1, 2, 3];
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(1, "2");
var pair2 = new KeyValuePair("key", "value");
//Add constrains for generic types
function totalLength2(x, y) {
    var total = x.length + y.length;
    return total;
}
function totalLength3(x, y) {
    var total = x.length + y.length;
    return total;
}
//***************
var CustomArray = (function (_super) {
    __extends(CustomArray, _super);
    function CustomArray() {
        _super.apply(this, arguments);
    }
    return CustomArray;
}(Array));
//namespace
var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        var Todo = (function () {
            function Todo() {
            }
            Object.defineProperty(Todo.prototype, "state", {
                get: function () {
                    return this._state;
                },
                set: function (v) {
                    this._state = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Todo.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (v) {
                    this._name = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Todo.prototype, "id", {
                get: function () {
                    return this._id;
                },
                set: function (v) {
                    this._id = v;
                },
                enumerable: true,
                configurable: true
            });
            return Todo;
        }());
        Model.Todo = Todo;
        (function (TodoState) {
            TodoState[TodoState["NEW"] = 0] = "NEW";
            TodoState[TodoState["ACTIVE"] = 1] = "ACTIVE";
            TodoState[TodoState["COMPLETE"] = 2] = "COMPLETE";
            TodoState[TodoState["DELETED"] = 3] = "DELETED";
        })(Model.TodoState || (Model.TodoState = {}));
        var TodoState = Model.TodoState;
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
//# sourceMappingURL=app.js.map