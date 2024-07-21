# 1 - What is hoisting?

Hoisting is simply a word to describe how JS handles declarations by moving them up to the top of their current scope.

# 2 - Why is super keyword used in JS?

**super** keyword is most likely seen around the applications of the Class Inheritance concept and it's purpose is run the parent's class constructor in the child's class constructor to access the parent's properties and methods.

# 3 - What is let and const ? And how they differ from var?

**let** and **const** are two keywords introduced with ES6 to add block scope concept to JS, which previously had only global scope and function scope.

**let** : is a keyword to declare variables, similar to var but with added block scope and some additional features.

**const** : is a keyword to declare variables, but not any variables, only those that will be assigned a value and will never change again during the runtime of the program

**var** : is the old way for variable declarations and it has its drawbacks like:

- It has only function scope
- It can be re-declared (with no usage of strict mode) with no warning which could cause errors
- It is hoisted, same as any declaration, but the hoisting will not take account of the assigned value which could cause bugs

# 4 - Discuss the Rest parameter in ES6? What is Arrow function?

### Rest parameter

- It's a syntax that allow a function to accept any number of arguments as an array

### What is Arrow function

- It's a compact way to write functions but it differ from the traditional function in that they don't bind this keyword and instead they use the context of the parent object, second they don't bind arguments object as well

# 5 - What is the difference between the readonly and disabled attributes for the \<textarea\> element?

### readonly

It's a way to prevent the \<textarea\> content from being changed by the user, and only allow the user to interact with it like tabbing or highlighting and copy content.

### disabled

same as readonly but it prevents the user from interacting with the content at all as well.

# 6 - How do you specify units in CSS? What are the different ways to do it?

- In CSS we have two types of units, absolute and relative

**absolute** : They are fixed independent values, they're not responsive. Ex: px

**relative** : They are values that have other factors that determine it's current value. Ex: vh, vw, rem, em, %

# 7 - What property is used for changing the font face?

font-family

# 8 - How to center align a div inside another div?

```html
<div class="grid place-items-center">
	<div></div>
</div>
```
