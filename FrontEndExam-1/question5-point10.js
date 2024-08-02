var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Object.defineProperty(Shape.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Object.defineProperty(Shape.prototype, "Filled", {
        set: function (filled) {
            this.filled = filled;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "Shape[color=".concat(this.color, ",filled=").concat(this.filled, "]");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "Circle[".concat(_super.prototype.toString.call(this), ",radius=").concat(this.radius, "]");
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "Width", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Length", {
        get: function () {
            return this.length;
        },
        set: function (length) {
            this.length = length;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.length) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[".concat(_super.prototype.toString.call(this), ", width=").concat(this.width, ",length=").concat(this.length, "]");
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        return _super.call(this, side, side, color, filled) || this;
    }
    Object.defineProperty(Square.prototype, "Side", {
        get: function () {
            return this.Width;
        },
        set: function (side) {
            this.Width = side;
            this.Length = side;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.toString = function () {
        return "Square[".concat(_super.prototype.toString.call(this), "]");
    };
    return Square;
}(Rectangle));
