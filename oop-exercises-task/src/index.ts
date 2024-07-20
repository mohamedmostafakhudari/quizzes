class Circle {
	private radius: number;
	private color: string;

	constructor(radius: number, color: string) {
		this.radius = radius;
		this.color = color;
	}
	get Radius(): number {
		return this.radius;
	}
	get Color(): string {
		return this.color;
	}
	set Radius(r: number) {
		this.radius = r;
	}
	set Color(color: string) {
		this.color = color;
	}
	toString(): string {
		return `Circle[radius=${this.radius},color=${this.color},area=${toPrecision(this.getArea(), 2)},circum=${toPrecision(this.getCircumference(), 2)}]`;
	}
	getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	getCircumference(): number {
		return 2 * Math.PI * this.radius;
	}
}

const circle = new Circle(5, "red");
// log(`\nBefore...\n`);
// log(circle.toString());

// circle.Radius = 6;
// circle.Color = "blue";

// log(`\nAfter...\n`);
// log(circle.toString());

class Rectangle {
	private length: number;
	private width: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
	}

	get Length(): number {
		return this.length;
	}
	set Length(len: number) {
		this.length = len;
	}
	get Width(): number {
		return this.width;
	}
	set Width(w: number) {
		this.width = w;
	}
	getArea(): number {
		return this.width * this.length;
	}
	getPerimeter(): number {
		return 2 * (this.width + this.length);
	}
	toString(): string {
		return `Rectangle[length=${this.length},width=${this.width},area=${this.getArea()},perim=${this.getPerimeter()}]`;
	}
}

const rect = new Rectangle(4, 8);
// log(`\nBefore...\n`);
// log(rect.toString());

// rect.Length = 6;
// rect.Width = 10;
// log(`\nAfter...\n`);
// log(rect.toString());

class Employee {
	private id: number;
	private firstName: string;
	private lastName: string;
	private salary: number;

	constructor(id: number, firstName: string, lastName: string, salary: number) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
	get Id(): number {
		return this.id;
	}
	get FirstName(): string {
		return this.firstName;
	}
	get LastName(): string {
		return this.lastName;
	}
	getName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	get Salary(): number {
		return this.salary;
	}
	set Salary(salary: number) {
		this.salary = salary;
	}
	getAnnualSalary(): number {
		return this.salary * 12;
	}
	raiseSalary(percent: number): number {
		this.salary = this.salary * ((percent + 100) / 100);
		return this.salary;
	}
	toString(): string {
		return `Employee[id=${this.id},name=${this.getName()},salary=${this.salary}]`;
	}
}

const employee = new Employee(1, "Mohamed", "Mostafa", 20000);

// log(employee.toString());
// employee.raiseSalary(30);
// log(employee.toString());

class InvoiceItem {
	private id: string;
	private desc: string;
	private qty: number;
	private unitPrice: number;

	constructor(id: string, desc: string, qty: number, unitPrice: number) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	get Id(): string {
		return this.id;
	}
	get Desc(): string {
		return this.desc;
	}
	get Qty(): number {
		return this.qty;
	}
	set Qty(qty: number) {
		this.qty = qty;
	}
	get UnitPrice(): number {
		return this.unitPrice;
	}
	set UnitPrice(unitPrice: number) {
		this.unitPrice = unitPrice;
	}
	getTotal(): number {
		return this.unitPrice * this.qty;
	}
	toString(): string {
		return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`;
	}
}

const invoiceItem = new InvoiceItem(`${Date.now()} - 1`, "abc", 4, 2);

interface AccountInterface {
	credit(amount: number): number;
	debit(amount: number): number;
	transferTo(another: AccountInterface, amount: number): number;
}

class Account implements AccountInterface {
	private id: string;
	private name: string;
	private balance: number = 0;

	constructor(id: string, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	get Id(): string {
		return this.id;
	}
	get Name(): string {
		return this.name;
	}
	get Balance(): number {
		return this.balance;
	}
	credit(amount: number): number {
		this.balance += amount;
		return this.balance;
	}
	debit(amount: number): number {
		if (amount <= this.balance) {
			this.balance -= amount;
		} else {
			log("Amount exceeded balance");
		}
		return this.balance;
	}
	transferTo(another: AccountInterface, amount: number): number {
		if (amount <= this.balance) {
			this.debit(amount);
			another.credit(amount);
		} else {
			log("Amount exceeded balance");
		}
		return this.balance;
	}
	toString(): string {
		return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
	}
}

const a1 = new Account("1", "Mohamed", 500);
const a2 = new Account("2", "Mahmoud", 500);

function log(string: string | number) {
	console.log(string);
}
function toPrecision(target: number, count: number) {
	return target.toFixed(count);
}
