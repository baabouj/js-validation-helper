export const rules = {
  email(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  phone(value) {
    const re = /^\+?[0-9]{10,12}$/;
    return re.test(value);
  },
  url(value) {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(value);
  },

  length(value, length) {
    return value.length === parseInt(length);
  },
  min(value, min) {
    return value.length >= parseInt(min);
  },
  max(value, max) {
    return value.length <= parseInt(max);
  },

  required(value) {
    return !this.empty(value);
  },
  empty(value) {
    return value === undefined || value === null || value === "";
  },

  number(value) {
    return typeof value === "number";
  },
  boolean(value) {
    return typeof value === "boolean";
  },
  string(value) {
    return typeof value === "string";
  },
  array(value) {
    return Array.isArray(value);
  },
  object(value) {
    return typeof value === "object";
  },
  function(value) {
    return typeof value === "function";
  },
  null(value) {
    return value === null;
  },
  undefined(value) {
    return value === undefined;
  },

  in(value, list) {
    return list.split(",").includes(value);
  },
  nin(value, list) {
    return !list.split(",").includes(value);
  },

  eq(value, other) {
    return value == other;
  },
  neq(value, other) {
    return value != other;
  },
  gt(value, other) {
    return value > other;
  },
  gte(value, other) {
    return value >= other;
  },
  lt(value, other) {
    return value < other;
  },
  lte(value, other) {
    return value <= other;
  },
  between(value, limits) {
    const [min, max] = limits.split(",");
    return value >= min && value <= max;
  },

  contains(value, other) {
    return value.includes(other);
  },
  sw(value, other) {
    return value.startsWith(other);
  },
  ew(value, other) {
    return value.endsWith(other);
  },

  regex(value, pattern) {
    return new RegExp(pattern).test(value);
  },

  not(value, rule, args) {
    return !this[rule](value, args);
  },
};
