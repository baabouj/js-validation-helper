# JavaScript Validator

a validation utility to easily validate your data

---

# Installation

with `npm`

```bash
npm install @baabouj/validator
```

with `yarn`

```bash
yarn add @baabouj/validator
```

with `pnpm`

```bash
pnpm install @baabouj/validator
```

# Importing

using ES modules

```js
import validator from "@baabouj/validator";
```

using CommonJs

```js
const validator = require("@baabouj/validator");
```

# Usage

You can validate an object with the `validate` function

```js
const validated = validator.validate(
  {
    name: "John Doe",
    age: 22,
    email: "john.doe@gmail.com",
    password: "secret",
  },
  {
    name: "required", // with single rule
    age: "required|number|gt:18", // with multiple rules
    email: ["required", "email"], // with an array of rules
    password: ["required", ["min:8", "Password must be at least 8 characters"]], // with custom error message  
  }
);
```

or you can validate a single value with the `check` function

```js
const checked = validator.check(23, "number|gt:18");
```

# Rules

- ### required
    
    checks if the field is not empty
    
- ### empty
    
    checks if the field is empty
    
- ### email
    
    checks if the field is a valid email address
    
- ### phone
    
    checks if the field is a valid phone number
    
- ### url
    
    checks if the field is a valid url
    
- ### length:*{length}*
    
    checks if the field’s length is equal to the given length
    
- ### min:*{length}*
    
    checks if the field’s length is greater than the given length
    
- ### max:*{length}*
    
    checks if the field’s length is less than the given length
    
- ### number
    
    checks if the field is a number
    
- ### boolean
    
    checks if the field is a boolean
    
- ### string
    
    checks if the field is a string
    
- ### array
    
    checks if the field is an array
    
- ### object
    
    checks if the field is an object
    
- ### function
    
    checks if the field is a function
    
- ### null
    
    checks if the field is null
    
- ### undefined
    
    checks if the field is undefined
    
- ### in:*{item},{item} (...)*
    
    checks if the field is in the given list
    
- ### nin:*{item},{item} (...)*
    
    checks if the field is not in the given list
    
- ### eq:*{value}*
    
    checks if the field is equal to the given value
    
- ### neq:*{value}*
    
    checks if the field is not equal to the given value
    
- ### gt:*{value}*
    
    checks if the field is greater than the given value
    
- ### gte:*{value}*
    
    checks if the field is greater than or equal to the given value
    
- ### lt:*{value}*
    
    checks if the field is less than the given value
    
- ### lte:*{value}*
    
    checks if the field is less than or equal to the given value
    
- ### between:*{min},{max}*
    
    checks if the field is between the given values
    
- ### contains:*{value}*
    
    checks if the field contains the given value
    
- ### sw:*{value}*
    
    checks if the field starts with the given value
    
- ### ew:*{value}*
    
    checks if the field ends with the given value
    
- ### regex:*{regex}*
    
    checks if the field matches the given regex pattern
    
- ### not:*{rule}*
    
    checks if the field does not match the given rule
