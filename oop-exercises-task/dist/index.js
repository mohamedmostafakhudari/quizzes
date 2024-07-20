var Circle = (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Object.defineProperty(Circle.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (r) {
            this.radius = r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return "Circle[radius=".concat(this.radius, ",color=").concat(this.color, ",area=").concat(toPrecision(this.getArea(), 2), ",circum=").concat(toPrecision(this.getCircumference(), 2), "]");
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circle = new Circle(5, "red");
var Rectangle = (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "Length", {
        get: function () {
            return this.length;
        },
        set: function (len) {
            this.length = len;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.width;
        },
        set: function (w) {
            this.width = w;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[length=".concat(this.length, ",width=").concat(this.width, ",area=").concat(this.getArea(), ",perim=").concat(this.getPerimeter(), "]");
    };
    return Rectangle;
}());
var rect = new Rectangle(4, 8);
var Employee = (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        this.salary = this.salary * ((percent + 100) / 100);
        return this.salary;
    };
    Employee.prototype.toString = function () {
        return "Employee[id=".concat(this.id, ",name=").concat(this.getName(), ",salary=").concat(this.salary, "]");
    };
    return Employee;
}());
var employee = new Employee(1, "Mohamed", "Mostafa", 20000);
var InvoiceItem = (function () {
    function InvoiceItem(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    Object.defineProperty(InvoiceItem.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "Desc", {
        get: function () {
            return this.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "Qty", {
        get: function () {
            return this.qty;
        },
        set: function (qty) {
            this.qty = qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceItem.prototype, "UnitPrice", {
        get: function () {
            return this.unitPrice;
        },
        set: function (unitPrice) {
            this.unitPrice = unitPrice;
        },
        enumerable: false,
        configurable: true
    });
    InvoiceItem.prototype.getTotal = function () {
        return this.unitPrice * this.qty;
    };
    InvoiceItem.prototype.toString = function () {
        return "InvoiceItem[id=".concat(this.id, ",desc=").concat(this.desc, ",qty=").concat(this.qty, ",unitPrice=").concat(this.unitPrice, "]");
    };
    return InvoiceItem;
}());
var invoiceItem = new InvoiceItem("".concat(Date.now(), " - 1"), "abc", 4, 2);
var Account = (function () {
    function Account(id, name, balance) {
        this.balance = 0;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Object.defineProperty(Account.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "Balance", {
        get: function () {
            return this.balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.credit = function (amount) {
        this.balance += amount;
        return this.balance;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            this.debit(amount);
            another.credit(amount);
        }
        else {
            log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "Account[id=".concat(this.id, ",name=").concat(this.name, ",balance=").concat(this.balance, "]");
    };
    return Account;
}());
var a1 = new Account("1", "Mohamed", 500);
var a2 = new Account("2", "Mahmoud", 500);
function log(string) {
    console.log(string);
}
function toPrecision(target, count) {
    return target.toFixed(count);
}
//# sourceMappingURL=index.js.map