import { rules } from "./rules.js";
import { messages } from "./messages.js";

const checkRule = (value, rule, ...args) => {
  if (!rules[rule]) {
    throw new Error(`Rule '${rule}' does not exist`);
  }
  return rules[rule](value, ...args);
};

const check = (value, fieldRules) => {
  let errors = [];
  if (!rules.array(fieldRules)) {
    fieldRules = fieldRules.split("|");
  }
  fieldRules.forEach((fieldRule) => {
    let [rule, message] = rules.array(fieldRule)
      ? fieldRule
      : [fieldRule, messages[fieldRule]];
    const [ruleName, ...ruleArgs] = rule.split(":");

    if (!checkRule(value, ruleName, ...ruleArgs)) {
      if (!message) {
        message = messages[ruleName];

        ruleArgs.forEach((arg, index) => {
          message = message.replace(`{${index}}`, arg);
        });
      }
      errors.push(message);
    }
  });
  return errors.length ? errors : null;
};

const validate = (data, rules) => {
  let errors = {};
  for (let field in rules) {
    const errorsForField = check(data[field], rules[field]);
    if (errorsForField) {
      errors[field] = errorsForField;
    }
  }
  return Object.keys(errors).length ? errors : null;
};

export { validate, check };
