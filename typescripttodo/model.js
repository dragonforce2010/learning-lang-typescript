export var Todo2 = (function () {
    function Todo2() {
    }
    Object.defineProperty(Todo2.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo2.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    return Todo2;
}());
export var TodoState2;
(function (TodoState2) {
    TodoState2[TodoState2["NEW"] = 0] = "NEW";
    TodoState2[TodoState2["ACTIVE"] = 1] = "ACTIVE";
    TodoState2[TodoState2["COMPLETE"] = 2] = "COMPLETE";
    TodoState2[TodoState2["DELETED"] = 3] = "DELETED";
})(TodoState2 || (TodoState2 = {}));
//# sourceMappingURL=model.js.map