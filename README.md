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

# Usage

first let’s import the validator from the package :

using ES modules

```js
import validator from "@baabouj/validator";
```

using CommonJs

```js
const validator = require("@baabouj/validator");
```

Now that you imported it, the **validator** provides you with 2 function :

- **`validate`**

used to validate fields within an object

```jsx
const validated = validator.validate(
  {
    name: "John Doe",
    age: 20,
    email: "john.doe@gmail.com",
    password: "secret",
  },
  {
    name: "required", // with single rule
    age: "required|number|gt:18", // with multiple rules
    email: ["required", "email"], // with an array of rules
    password: [
      ["required", "Password is required"],
      ["min:6", "Password must be at least 6 characters long"],
    ], // with custom error messages
  }
);
```

on case of validation didn’t succussed, the _validate_ function returns an object containing each unvalidated field as a key and an array of error messages for that field as a value.

on validation succussed, the _validate_ function returns null.

- **`check`**

used to validate a single field

```jsx
const checked = validator.check(23, "number|gte:18");
// or
const checked = validator.check(23, ["number", "gte:18"]);
// or provide your custom error message
const checked = validator.check(23, [
  "number",
  ["gte:18", "You must be at least 18 years old"],
]);
```

on case of validation didn’t succussed, the _check_ function returns an array of error messages.

on success, the _check_ function returns null.

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
- ### length:_{length}_
  checks if the field’s length is equal to the given length
- ### min:_{length}_
  checks if the field’s length is greater than the given length
- ### max:_{length}_
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
- ### in:_{item},{item} (...)_
  checks if the field is in the given list
- ### nin:_{item},{item} (...)_
  checks if the field is not in the given list
- ### eq:_{value}_
  checks if the field is equal to the given value
- ### neq:_{value}_
  checks if the field is not equal to the given value
- ### gt:_{value}_
  checks if the field is greater than the given value
- ### gte:_{value}_
  checks if the field is greater than or equal to the given value
- ### lt:_{value}_
  checks if the field is less than the given value
- ### lte:_{value}_
  checks if the field is less than or equal to the given value
- ### between:_{min},{max}_
  checks if the field is between the given values
- ### contains:_{value}_
  checks if the field contains the given value
- ### sw:_{value}_
  checks if the field starts with the given value
- ### ew:_{value}_
  checks if the field ends with the given value
- ### regex:_{regex}_
  checks if the field matches the given regex pattern
- ### not:_{rule}_
  checks if the field does not match the given rule
