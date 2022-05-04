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

```jsx
import validator from "@baabouj/validator";
```

using CommonJs

```jsx
const validator = require("@baabouj/validator");
```

# Usage

You can validate an object with the `validate` **function

```jsx
const validated = validator.validate(
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "secret",
  },
  {
    name: "required|string",
    email: "required|email",
    password: "required|min:6",
  }
);
```

or you can validate a single value with the `check` function

```jsx
const checked = validator.check(23, "number|gt:18");
```

# Rules

| Name | Role | Example |
| --- | --- | --- |
| required | checks if the value is not empty | required |
| empty | checks if the value is empty | empty |
| email | checks if the value is a valid email address | email |
| phone | checks if the value is a valid phone number | phone |
| url | checks if the value is a valid url | url |
| length:{length} | checks if the value’s length is the same as {length} (Ex : length:6) |  |
| between:{min},{max} | checks if the value is between {min} and {max} (Ex : between:18,30}) |  |
| min:{min} | checks if the value’s length is more than {min} (Ex : min:6) |  |
| max:{max} | checks if the value’s length is less than {max} (Ex : max:12) |  |
| number | checks if the value is a number |  |
| boolean | checks if the value is boolean |  |
| string | checks if the value is  a string |  |
| array | checks if the value is an array |  |
| object | checks if the value is an object |  |
| function | checks if the value is a function |  |
| null | checks if the value is null |  |
| undefined | checks if the value is undefined |  |
| in:{item},{item}(...) | checks if the value is in a list (Ex : in:foo,bar) |  |
| nin:{item},{item}(...) | checks if the value is not in a list (Ex : nin:foo,bar) |  |
| eq:{value} | checks if the value is equal to {value} (Ex : eq:foo) |  |
| neq:{value} | checks if the value is not equal to {value}  (Ex : neq:23) |  |
| gt:{value} | checks if the value is greater than {value} |  |
| gte:{value} | checks if the value is greater than or equal {value} |  |
| lt:{value} | checks if the value is less than {value} |  |
| lte:{value} | checks if the value is less than or equal {value} |  |
| contains:{item} | checks if the value contains {item} |  |
| sw:{value} | checks if the value starts with {value} |  |
| ew:{value} | checks if the value ends with {value} |  |
| regex:{pattern} | checks if the value matches {pattern} |  |
| not:{rule} | checks if the value does not match {rule} (Ex : not:number , not:email) |  |
