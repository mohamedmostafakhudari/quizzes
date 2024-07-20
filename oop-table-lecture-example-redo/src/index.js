class Table {
    employees;
    constructor(initialEmployees = []) {
        this.employees = initialEmployees;
    }
    addRecord(employee) {
        const { fname, lname, title, salary, department } = employee;
        const employeeRow = new EmployeeRow(fname, lname, salary, title, department);
        this.employees.push(employeeRow);
        TableUI.render(this.employees);
        return employeeRow;
    }
    deleteRecord(id) {
        const confirm = window.confirm("Are you sure you want to delete this employee?");
        if (confirm) {
            const newEmployees = this.employees.filter((employee) => employee.id !== id);
            this.employees = newEmployees;
            TableUI.render(this.employees);
            TableUI.showMessages("The Employee Has Been Deleted Successfully", "bg-yellow-500/80");
        }
    }
}
class TableUI {
    static table = document.querySelector("table#employeeTable");
    static tbody = document.querySelector("table#employeeTable tbody");
    static render(employees) {
        TableUI.tbody.innerHTML = "";
        for (const employee of employees) {
            EmployeeRowUI.render(employee);
        }
    }
    static showMessages(messagetext, clsName) {
        const alertElem = createAlert(messagetext, clsName);
        const formParentNode = formElem.parentNode;
        formParentNode.insertBefore(alertElem, formElem);
        setTimeout(() => {
            alertElem.remove();
        }, 3000);
    }
}
class EmployeeRow {
    static currentId = 0;
    id;
    fname;
    lname;
    salary;
    title;
    department;
    constructor(fname, lname, salary, title, department) {
        this.id = EmployeeRow.currentId + 1;
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.title = title;
        this.department = department;
        EmployeeRow.incrementId();
    }
    static incrementId() {
        EmployeeRow.currentId++;
    }
}
class EmployeeRowUI {
    static tbody = document.querySelector("table#employeeTable tbody");
    static render(employee) {
        const tr = document.createElement("tr");
        tr.className = "employee-record";
        tr.innerHTML = `
			<td>${employee.fname}</td>
			<td>${employee.lname}</td>
			<td>${employee.salary}</td>
			<td>${employee.title}</td>
			<td>${employee.department}</td>
			<td>
				<button id="deleteEmployee" data-id="${employee.id}" class="bg-red-500 text-white p-3 py-2 rounded">Delete</button>
			</td>
		`;
        EmployeeRowUI.tbody.appendChild(tr);
    }
}
function createAlert(messagetext, clsName) {
    const div = document.createElement("div");
    div.className = `mb-6 p-4 grid place-items-center rounded-md text-lg tracking-wide ${clsName}`;
    div.appendChild(document.createTextNode(messagetext));
    return div;
}
function resetInputs(formElem) {
    const inputs = formElem.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
}
const employeeTable = new Table();
const formElem = document.querySelector("#addNewEmployeeForm");
formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = JSON.parse(JSON.stringify(Object.fromEntries([...new FormData(formElem).entries()])));
    const { fname, lname, title, salary, department } = formData;
    if (fname === "" || lname === "" || title === "" || salary === "" || department === "") {
        TableUI.showMessages("All Inputs Are Required", "bg-red-500/60");
    }
    else if (+salary < 850) {
        TableUI.showMessages("Minimum Salary Amount Is 850.", "bg-red-500/60");
    }
    else {
        employeeTable.addRecord({ fname, lname, title, salary, department });
        TableUI.showMessages("A New Employee Is Added Successfully.", "bg-green-500/60 brightness-150");
    }
    resetInputs(formElem);
});
const tableElem = document.querySelector("#employeeTable");
tableElem.addEventListener("click", (e) => {
    const target = e.target.closest("button#deleteEmployee");
    if (!target)
        return;
    employeeTable.deleteRecord(+target.getAttribute("data-id"));
});
//# sourceMappingURL=index.js.map