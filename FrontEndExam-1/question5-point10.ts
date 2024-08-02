class Shape {
	private color: string;
	private filled: boolean;

	constructor(color: string, filled: boolean) {
		this.color = color;
		this.filled = filled;
	}
	get Color(): string {
		return this.color;
	}
	set Color(color: string) {
		this.color = color;
	}
	isFilled(): boolean {
		return this.filled;
	}
	set Filled(filled: boolean) {
		this.filled = filled;
	}
	toString(): string {
		return `Shape[color=${this.color},filled=${this.filled}]`;
	}
}

class Circle extends Shape {
	private radius: number;

	constructor(radius: number, color: string, filled: boolean) {
		super(color, filled);
		this.radius = radius;
	}
	get Radius(): number {
		return this.radius;
	}
	set Radius(radius: number) {
		this.radius = radius;
	}
	getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
	}
	toString(): string {
		return `Circle[${super.toString()},radius=${this.radius}]`;
	}
}

class Rectangle extends Shape {
	private width: number;
	private length: number;

	constructor(width: number, length: number, color: string, filled: boolean) {
		super(color, filled);
		this.width = width;
		this.length = length;
	}
	get Width(): number {
		return this.width;
	}
	set Width(width: number) {
		this.width = width;
	}
	get Length(): number {
		return this.length;
	}
	set Length(length: number) {
		this.length = length;
	}
	getArea(): number {
		return this.width * this.length;
	}
	getPerimeter(): number {
		return (this.width + this.length) * 2;
	}
	toString(): string {
		return `Rectangle[${super.toString()}, width=${this.width},length=${this.length}]`;
	}
}

class Square extends Rectangle {
	constructor(side: number, color: string, filled: boolean) {
		super(side, side, color, filled);
	}
	get Side(): number {
		return this.Width;
	}
	set Side(side: number) {
		this.Width = side;
		this.Length = side;
	}

	toString(): string {
		return `Square[${super.toString()}]`;
	}
}
