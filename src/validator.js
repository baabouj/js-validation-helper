import { rules } from "./rules.js";
import { messages } from "./messages.js";

const check = (value, rule) => {
  let errors = [];
  rule.split("|").forEach((rule) => {
    const [key, ...args] = rule.split(":");
    if (!rules.hasOwnProperty(key)) {
      throw new Error(`${key} is not a valid rule`);
    }
    if (!rules[key](value, ...args)) {
      let message = messages[key];
      args.forEach((arg, index) => {
        message = message.replace(`{${index}}`, arg);
      });
      errors.push(message);
    }
  });
  return errors.length ? errors : null;
};

const validate = (data, rules) => {
  let errors = {};
  for (let field in rules) {
    const error = check(data[field], rules[field]);
    if (error) {
      errors = { ...errors, [field]: error };
    }
  }
  return Object.keys(errors).length ? errors : null;
};

export { validate, check };
