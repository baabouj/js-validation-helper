const validator = require("../dist/index.cjs");

describe("Rules", () => {
  describe("email", () => {
    it("should not validate if email is empty", () => {
      const email = "";
      const validated = validator.validate(
        {
          email,
        },
        {
          email: "email",
        }
      );
      const checked = validator.check(email, "email");
      expect(validated.email).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if email is not valid", () => {
      const email = "test@example";
      const validated = validator.validate(
        {
          email,
        },
        {
          email: "email",
        }
      );
      const checked = validator.check(email, "email");
      expect(validated.email).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if email is valid", () => {
      const email = "test@example.com";
      const validated = validator.validate(
        {
          email,
        },
        {
          email: "email",
        }
      );
      const checked = validator.check(email, "email");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("url", () => {
    it("should not validate if url is empty", () => {
      const url = "";
      const validated = validator.validate(
        {
          url,
        },
        {
          url: "url",
        }
      );
      const checked = validator.check(url, "url");
      expect(validated.url).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if url is not valid", () => {
      const url = "test";
      const validated = validator.validate(
        {
          url,
        },
        {
          url: "url",
        }
      );
      const checked = validator.check(url, "url");
      expect(validated.url).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if url is valid", () => {
      const url = "https://example.com";
      const validated = validator.validate(
        {
          url,
        },
        {
          url: "url",
        }
      );
      const checked = validator.check(url, "url");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("phone", () => {
    it("should not validate if phone is empty", () => {
      const phone = "";
      const validated = validator.validate(
        {
          phone,
        },
        {
          phone: "phone",
        }
      );
      const checked = validator.check(phone, "phone");
      expect(validated.phone).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if phone is not valid", () => {
      const phone = "test";
      const validated = validator.validate(
        {
          phone,
        },
        {
          phone: "phone",
        }
      );
      const checked = validator.check(phone, "phone");
      expect(validated.phone).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if phone is valid", () => {
      const phone = "+919367788755";
      const validated = validator.validate(
        {
          phone,
        },
        {
          phone: "phone",
        }
      );
      const checked = validator.check(phone, "phone");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("length", () => {
    describe("with string", () => {
      it("should not validate if string's length is less than given length", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:5",
          }
        );
        const checked = validator.check(name, "length:5");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should not validate if string's length is greater than given length", () => {
        const name = "John Doe";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:5",
          }
        );
        const checked = validator.check(name, "length:5");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if string's length is equal to than given length", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:4",
          }
        );
        const checked = validator.check(name, "length:4");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });

    describe("with array", () => {
      it("should not validate if array's length is less than given length", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:2",
          }
        );
        const checked = validator.check(name, "length:2");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should not validate if array's length is greater than given length", () => {
        const name = ["John", "Doe"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:1",
          }
        );
        const checked = validator.check(name, "length:1");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if array's length is equal to given length", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "length:1",
          }
        );
        const checked = validator.check(name, "length:1");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });
  });

  describe("min", () => {
    describe("with string", () => {
      it("should not validate if string's length is less than min", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:5",
          }
        );
        const checked = validator.check(name, "min:5");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if string's length is equal to min", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:4",
          }
        );
        const checked = validator.check(name, "min:4");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });

      it("should validate if string's length is greater than min", () => {
        const name = "John Doe";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:5",
          }
        );
        const checked = validator.check(name, "min:5");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });

    describe("with array", () => {
      it("should not validate if array's length is less than min", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:2",
          }
        );
        const checked = validator.check(name, "min:2");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if array's length is equal to min", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:1",
          }
        );
        const checked = validator.check(name, "min:1");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });

      it("should validate if array's length is greater than min", () => {
        const name = ["John", "Doe"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "min:1",
          }
        );
        const checked = validator.check(name, "min:1");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });
  });

  describe("max", () => {
    describe("with string", () => {
      it("should not validate if string's length is greater than max", () => {
        const name = "John Doe";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:5",
          }
        );
        const checked = validator.check(name, "max:5");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if string's length is equal to max", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:4",
          }
        );
        const checked = validator.check(name, "max:4");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });

      it("should validate if string's length is less than max", () => {
        const name = "John";
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:5",
          }
        );
        const checked = validator.check(name, "max:5");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });

    describe("with array", () => {
      it("should not validate if array's length is greater than max", () => {
        const name = ["John", "Doe"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:1",
          }
        );
        const checked = validator.check(name, "max:1");
        expect(validated.name).toHaveLength(1);
        expect(checked).toHaveLength(1);
      });

      it("should validate if array's length is equal to max", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:1",
          }
        );
        const checked = validator.check(name, "max:1");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });

      it("should validate if array's length is less than max", () => {
        const name = ["John"];
        const validated = validator.validate(
          {
            name,
          },
          {
            name: "max:2",
          }
        );
        const checked = validator.check(name, "max:2");
        expect(validated).toBeNull();
        expect(checked).toBeNull();
      });
    });
  });

  describe("required", () => {
    it("should not validate if value is empty", () => {
      const name = "";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "required",
        }
      );
      const checked = validator.check(name, "required");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if value is null", () => {
      const name = null;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "required",
        }
      );
      const checked = validator.check(name, "required");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if value is undefined", () => {
      const name = undefined;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "required",
        }
      );
      const checked = validator.check(name, "required");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if field is not empty", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "required",
        }
      );
      const checked = validator.check(name, "required");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("empty", () => {
    it("should validate if value is empty", () => {
      const name = "";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "empty",
        }
      );
      const checked = validator.check(name, "empty");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should validate if value is null", () => {
      const name = null;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "empty",
        }
      );
      const checked = validator.check(name, "empty");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should validate if value is undefined", () => {
      const name = undefined;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "empty",
        }
      );
      const checked = validator.check(name, "empty");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if field is not empty", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "empty",
        }
      );
      const checked = validator.check(name, "empty");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("string", () => {
    it("should not validate if value is not a string", () => {
      const name = 123;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "string",
        }
      );
      const checked = validator.check(name, "string");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is a string", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "string",
        }
      );
      const checked = validator.check(name, "string");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("number", () => {
    it("should not validate if value is not a number", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "number",
        }
      );
      const checked = validator.check(name, "number");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is a number", () => {
      const name = 123;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "number",
        }
      );
      const checked = validator.check(name, "number");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("boolean", () => {
    it("should not validate if value is not a boolean", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "boolean",
        }
      );
      const checked = validator.check(name, "boolean");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is a boolean", () => {
      const name = true;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "boolean",
        }
      );
      const checked = validator.check(name, "boolean");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("array", () => {
    it("should not validate if value is not an array", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "array",
        }
      );
      const checked = validator.check(name, "array");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is an array", () => {
      const name = [];
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "array",
        }
      );
      const checked = validator.check(name, "array");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("object", () => {
    it("should not validate if value is not an object", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "object",
        }
      );
      const checked = validator.check(name, "object");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is an object", () => {
      const name = {};
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "object",
        }
      );
      const checked = validator.check(name, "object");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("function", () => {
    it("should not validate if value is not a function", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "function",
        }
      );
      const checked = validator.check(name, "function");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is a function", () => {
      const name = () => {};
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "function",
        }
      );
      const checked = validator.check(name, "function");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("null", () => {
    it("should not validate if value is not null", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "null",
        }
      );
      const checked = validator.check(name, "null");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is null", () => {
      const name = null;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "null",
        }
      );
      const checked = validator.check(name, "null");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("undefined", () => {
    it("should not validate if value is not undefined", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "undefined",
        }
      );
      const checked = validator.check(name, "undefined");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if value is undefined", () => {
      const name = undefined;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "undefined",
        }
      );
      const checked = validator.check(name, "undefined");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });
  });

  describe("in", () => {
    it("should validate if value is in the list", () => {
      const name = "John";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "in:John,Jane",
        }
      );
      const checked = validator.check(name, "in:John,Jane");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if value is not in the array", () => {
      const name = "Jake";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "in:John,Jane",
        }
      );
      const checked = validator.check(name, "in:John,Jane");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("nin (Not in)", () => {
    it("should validate if value is not in the list", () => {
      const name = "Jake";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "nin:John,Jane",
        }
      );
      const checked = validator.check(name, "nin:John,Jane");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if value is in the list", () => {
      const name = "John";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "nin:John,Jane",
        }
      );
      const checked = validator.check(name, "nin:John,Jane");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("eq", () => {
    it("should validate if value is equal to the given value", () => {
      const name = "John";
      const age = 20;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "eq:John",
          age: "eq:20",
        }
      );
      const checkedName = validator.check(name, "eq:John");
      const checkedAge = validator.check(age, "eq:20");
      expect(validated).toBeNull();
      expect(checkedName).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is not equal to the given value", () => {
      const name = "Jake";
      const age = 20;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "eq:John",
          age: "eq:24",
        }
      );
      const checkedName = validator.check(name, "eq:John");
      const checkedAge = validator.check(age, "eq:24");
      expect(validated.name).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedName).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("neq", () => {
    it("should validate if value is not equal to the given value", () => {
      const name = "Jake";
      const age = 20;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "neq:John",
          age: "neq:24",
        }
      );
      const checkedName = validator.check(name, "neq:John");
      const checkedAge = validator.check(age, "neq:24");
      expect(validated).toBeNull();
      expect(checkedName).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is equal to the given value", () => {
      const name = "John";
      const age = 20;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "neq:John",
          age: "neq:20",
        }
      );
      const checkedName = validator.check(name, "neq:John");
      const checkedAge = validator.check(age, "neq:20");
      expect(validated.name).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedName).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("gt", () => {
    it("should validate if value is greater than the given value", () => {
      const letter = "c";
      const age = 20;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gt:b",
          age: "gt:18",
        }
      );
      const checkedLetter = validator.check(letter, "gt:b");
      const checkedAge = validator.check(age, "gt:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is equal to the given value", () => {
      const letter = "b";
      const age = 18;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gt:b",
          age: "gt:18",
        }
      );
      const checkedLetter = validator.check(letter, "gt:b");
      const checkedAge = validator.check(age, "gt:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });

    it("should not validate if value is less than the given value", () => {
      const letter = "a";
      const age = 12;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gt:b",
          age: "gt:18",
        }
      );
      const checkedLetter = validator.check(letter, "gt:b");
      const checkedAge = validator.check(age, "gt:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("gte", () => {
    it("should validate if value is greater than the given value", () => {
      const letter = "c";
      const age = 20;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gte:b",
          age: "gte:18",
        }
      );
      const checkedLetter = validator.check(letter, "gte:b");
      const checkedAge = validator.check(age, "gte:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should validate if value is equal to the given value", () => {
      const letter = "b";
      const age = 18;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gte:b",
          age: "gte:18",
        }
      );
      const checkedLetter = validator.check(letter, "gte:b");
      const checkedAge = validator.check(age, "gte:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is less than the given value", () => {
      const letter = "a";
      const age = 12;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "gte:b",
          age: "gte:18",
        }
      );
      const checkedLetter = validator.check(letter, "gte:b");
      const checkedAge = validator.check(age, "gte:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("lt", () => {
    it("should validate if value is less than the given value", () => {
      const letter = "a";
      const age = 12;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lt:b",
          age: "lt:18",
        }
      );
      const checkedLetter = validator.check(letter, "lt:b");
      const checkedAge = validator.check(age, "lt:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is equal to the given value", () => {
      const letter = "b";
      const age = 18;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lt:b",
          age: "lt:18",
        }
      );
      const checkedLetter = validator.check(letter, "lt:b");
      const checkedAge = validator.check(age, "lt:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });

    it("should not validate if value is greater than the given value", () => {
      const letter = "c";
      const age = 20;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lt:b",
          age: "lt:18",
        }
      );
      const checkedLetter = validator.check(letter, "lt:b");
      const checkedAge = validator.check(age, "lt:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("lte", () => {
    it("should validate if value is less than the given value", () => {
      const letter = "a";
      const age = 12;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lte:b",
          age: "lte:18",
        }
      );
      const checkedLetter = validator.check(letter, "lte:b");
      const checkedAge = validator.check(age, "lte:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should validate if value is equal to the given value", () => {
      const letter = "b";
      const age = 18;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lte:b",
          age: "lte:18",
        }
      );
      const checkedLetter = validator.check(letter, "lte:b");
      const checkedAge = validator.check(age, "lte:18");
      expect(validated).toBeNull();
      expect(checkedLetter).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is greater than the given value", () => {
      const letter = "c";
      const age = 20;
      const validated = validator.validate(
        {
          letter,
          age,
        },
        {
          letter: "lte:b",
          age: "lte:18",
        }
      );
      const checkedLetter = validator.check(letter, "lte:b");
      const checkedAge = validator.check(age, "lte:18");
      expect(validated.letter).toHaveLength(1);
      expect(validated.age).toHaveLength(1);
      expect(checkedLetter).toHaveLength(1);
      expect(checkedAge).toHaveLength(1);
    });
  });

  describe("between", () => {
    it("should validate if value is between the given values", () => {
      const age = 18;
      const validated = validator.validate(
        {
          age,
        },
        {
          age: "between:12,20",
        }
      );
      const checked = validator.check(age, "between:12,20");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should validate if value is equal to the min value", () => {
      const age = 12;
      const validated = validator.validate(
        {
          age,
        },
        {
          age: "between:12,20",
        }
      );
      const checked = validator.check(age, "between:12,20");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should validate if value is equal to the max value", () => {
      const age = 20;
      const validated = validator.validate(
        {
          age,
        },
        {
          age: "between:12,20",
        }
      );
      const checked = validator.check(age, "between:12,20");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if value is greater than the max value", () => {
      const age = 22;
      const validated = validator.validate(
        {
          age,
        },
        {
          age: "between:12,20",
        }
      );
      const checked = validator.check(age, "between:12,20");
      expect(validated.age).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should not validate if value is less than the min value", () => {
      const age = 10;
      const validated = validator.validate(
        {
          age,
        },
        {
          age: "between:12,20",
        }
      );
      const checked = validator.check(age, "between:12,20");
      expect(validated.age).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("contains", () => {
    it("should validate if string contains the given value", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "contains:hn",
        }
      );
      const checked = validator.check(name, "contains:hn");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if string does not contain the given value", () => {
      const letter = "John Doe";
      const validated = validator.validate(
        {
          letter,
        },
        {
          letter: "contains:k",
        }
      );
      const checked = validator.check(letter, "contains:c");
      expect(validated.letter).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });

    it("should validate if array contains the given value", () => {
      const letters = ["a", "b", "c"];
      const validated = validator.validate(
        {
          letters,
        },
        {
          letters: "contains:c",
        }
      );
      const checked = validator.check(letters, "contains:c");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if array does not contain the given value", () => {
      const letters = ["a", "b", "c"];
      const validated = validator.validate(
        {
          letters,
        },
        {
          letters: "contains:k",
        }
      );
      const checked = validator.check(letters, "contains:k");
      expect(validated.letters).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("sw", () => {
    it("should validate if string starts with the given value", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "sw:J",
        }
      );
      const checked = validator.check(name, "sw:J");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if string does not start with the given value", () => {
      const letter = "John Doe";
      const validated = validator.validate(
        {
          letter,
        },
        {
          letter: "sw:k",
        }
      );
      const checked = validator.check(letter, "sw:k");
      expect(validated.letter).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("ew", () => {
    it("should validate if string ends with the given value", () => {
      const name = "John Doe";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "ew:oe",
        }
      );
      const checked = validator.check(name, "ew:oe");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if string does not end with the given value", () => {
      const letter = "John Doe";
      const validated = validator.validate(
        {
          letter,
        },
        {
          letter: "ew:k",
        }
      );
      const checked = validator.check(letter, "ew:k");
      expect(validated.letter).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("regex", () => {
    it("should validate if string matches the given regex", () => {
      const name = "test";
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "regex:^[a-zA-Z]+$",
        }
      );
      const checked = validator.check(name, "regex:^[a-zA-Z]+$");
      expect(validated).toBeNull();
      expect(checked).toBeNull();
    });

    it("should not validate if string does not match the given regex", () => {
      const name = 2332;
      const validated = validator.validate(
        {
          name,
        },
        {
          name: "regex:^[a-zA-Z]+$",
        }
      );
      const checked = validator.check(name, "regex:^[a-zA-Z]+$");
      expect(validated.name).toHaveLength(1);
      expect(checked).toHaveLength(1);
    });
  });

  describe("not", () => {
    it("should validate if value is not validated by the given rule", () => {
      const name = "John Doe";
      const age = 22;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "not:number|not:sw:k",
          age: "not:string|not:lt:20",
        }
      );
      const checkedName = validator.check(name, "not:number|not:sw:k");
      const checkedAge = validator.check(age, "not:string|not:lt:20");
      expect(validated).toBeNull();
      expect(checkedName).toBeNull();
      expect(checkedAge).toBeNull();
    });

    it("should not validate if value is validated by the given rule", () => {
      const name = "John Doe";
      const age = 22;
      const validated = validator.validate(
        {
          name,
          age,
        },
        {
          name: "not:string|not:sw:J",
          age: "not:number|not:lt:24",
        }
      );
      const checkedName = validator.check(name, "not:string|not:sw:J");
      const checkedAge = validator.check(age, "not:number|not:lt:24");
      expect(validated.name).toHaveLength(2);
      expect(validated.age).toHaveLength(2);
      expect(checkedName).toHaveLength(2);
      expect(checkedAge).toHaveLength(2);
    });
  });
});

describe("Custom Error Messages", () => {
  it("should return the custom error messages", () => {
    const name = "";
    const email = "example@test";
    const age = 12;
    const password = "123";
    const validated = validator.validate(
      {
        name,
        age,
        email,
        password,
      },
      {
        name: [
          ["required", "Name is required"],
          ["min:3", "Name must be at least 3 characters"],
        ],
        age: ["required", ["min:18", "Age must be at least 18"]],
        email: ["required", ["email", "Email is invalid"]],
        password: [
          "required",
          ["min:6", "Password must be at least 6 characters"],
        ],
      }
    );

    const checkedName = validator.check(name, [
      ["required", "Name is required"],
      ["min:3", "Name must be at least 3 characters"],
    ]);
    const checkedAge = validator.check(age, [
      "required",
      ["min:18", "Age must be at least 18"],
    ]);
    const checkedEmail = validator.check(email, [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check(password, [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);

    expect(validated.name).toHaveLength(2);
    expect(validated.name).toContain("Name is required");
    expect(validated.name).toContain("Name must be at least 3 characters");
    expect(checkedName).toHaveLength(2);
    expect(checkedName).toContain("Name is required");
    expect(checkedName).toContain("Name must be at least 3 characters");

    expect(validated.age).toHaveLength(1);
    expect(validated.age).toEqual(["Age must be at least 18"]);
    expect(checkedAge).toHaveLength(1);
    expect(checkedAge).toEqual(["Age must be at least 18"]);

    expect(validated.email).toHaveLength(1);
    expect(validated.email).toEqual(["Email is invalid"]);
    expect(checkedEmail).toHaveLength(1);
    expect(checkedEmail).toEqual(["Email is invalid"]);

    expect(validated.password).toHaveLength(1);
    expect(validated.password).toEqual([
      "Password must be at least 6 characters",
    ]);
    expect(checkedPassword).toHaveLength(1);
    expect(checkedPassword).toEqual(["Password must be at least 6 characters"]);
  });
});

describe("Validation with string syntax", () => {
  const data = {
    name: "John Doe",
    age: 34,
    email: "john.doe@gmail.com",
    password: "secret",
  };
  const rules = {
    name: "required",
    age: "required|number",
    email: "required|email",
    password: "required|min:6",
  };

  it("should validate", () => {
    const validated = validator.validate(data, rules);
    expect(validated).toBeNull();
  });

  it("should not validate if name is empty", () => {
    const validated = validator.validate({ ...data, name: "" }, rules);
    expect(validated.name).toHaveLength(1);
  });

  it("should not validate if age is not a number", () => {
    const validated = validator.validate({ ...data, age: "test" }, rules);
    expect(validated.age).toHaveLength(1);
  });

  it("should not validate if email is invalid", () => {
    const validated = validator.validate({ ...data, email: "test" }, rules);
    expect(validated.email).toHaveLength(1);
  });

  it("should not validate if password is too short", () => {
    const validated = validator.validate({ ...data, password: "test" }, rules);
    expect(validated.password).toHaveLength(1);
  });
});

describe("Validation with array syntax", () => {
  const data = {
    name: "John Doe",
    age: 34,
    email: "john.doe@gmail.com",
    password: "secret",
  };
  const rules = {
    name: ["required"],
    age: ["required", "number"],
    email: ["required", "email"],
    password: ["required", "min:6"],
  };

  it("should validate", () => {
    const validated = validator.validate(data, rules);

    const checkedName = validator.check(data.name, ["required"]);
    const checkedAge = validator.check(data.age, ["required", "number"]);
    const checkedEmail = validator.check(data.email, ["required", "email"]);
    const checkedPassword = validator.check(data.password, [
      "required",
      "min:6",
    ]);

    expect(validated).toBeNull();

    expect(checkedName).toBeNull();
    expect(checkedAge).toBeNull();
    expect(checkedEmail).toBeNull();
    expect(checkedPassword).toBeNull();
  });

  it("should not validate if name is empty", () => {
    const name = "";

    const validated = validator.validate({ ...data, name }, rules);

    const checked = validator.check(name, ["required"]);

    expect(validated.name).toHaveLength(1);
    expect(checked).toHaveLength(1);
  });

  it("should not validate if age is not a number", () => {
    const age = "test";

    const validated = validator.validate({ ...data, age }, rules);

    const checked = validator.check(age, ["required", "number"]);

    expect(validated.age).toHaveLength(1);
    expect(checked).toHaveLength(1);
  });

  it("should not validate if email is invalid", () => {
    const email = "test";

    const validated = validator.validate({ ...data, email }, rules);

    const checked = validator.check(email, ["required", "email"]);

    expect(validated.email).toHaveLength(1);
    expect(checked).toHaveLength(1);
  });

  it("should not validate if password is too short", () => {
    const password = "test";

    const validated = validator.validate({ ...data, password }, rules);

    const checked = validator.check(password, ["required", "min:6"]);

    expect(validated.password).toHaveLength(1);
    expect(checked).toHaveLength(1);
  });
});

describe("Validation with custom error messages", () => {
  const data = {
    name: "John Doe",
    age: 34,
    email: "john.doe@gmail.com",
    password: "secret",
  };
  const rules = {
    name: [["required", "Name is required"]],
    age: ["required", ["number", "Age must be a number"]],
    email: ["required", ["email", "Email is invalid"]],
    password: ["required", ["min:6", "Password must be at least 6 characters"]],
  };

  it("should validate", () => {
    const validated = validator.validate(data, rules);

    const checkedName = validator.check(data.name, [
      ["required", "Name is required"],
    ]);
    const checkedAge = validator.check(data.age, [
      "required",
      ["number", "Age must be a number"],
    ]);
    const checkedEmail = validator.check(data.email, [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check(data.password, [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);

    expect(validated).toBeNull();
    expect(checkedName).toBeNull();
    expect(checkedAge).toBeNull();
    expect(checkedEmail).toBeNull();
    expect(checkedPassword).toBeNull();
  });

  it("should not validate if name is empty", () => {
    const validated = validator.validate({ ...data, name: "" }, rules);

    const checkedName = validator.check("", [["required", "Name is required"]]);
    const checkedAge = validator.check(data.age, [
      "required",
      ["number", "Age must be a number"],
    ]);
    const checkedEmail = validator.check(data.email, [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check(data.password, [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);
    expect(validated.name).toHaveLength(1);
    expect(validated.name).toEqual(["Name is required"]);
    expect(checkedName).toHaveLength(1);
    expect(checkedName).toEqual(["Name is required"]);
    expect(checkedAge).toBeNull();
    expect(checkedEmail).toBeNull();
    expect(checkedPassword).toBeNull();
  });

  it("should not validate if age is not a number", () => {
    const validated = validator.validate({ ...data, age: "test" }, rules);

    const checkedName = validator.check(data.name, [
      ["required", "Name is required"],
    ]);
    const checkedAge = validator.check("test", [
      "required",
      ["number", "Age must be a number"],
    ]);
    const checkedEmail = validator.check(data.email, [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check(data.password, [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);

    expect(validated.age).toHaveLength(1);
    expect(validated.age).toEqual(["Age must be a number"]);
    expect(checkedName).toBeNull();
    expect(checkedAge).toHaveLength(1);
    expect(checkedAge).toEqual(["Age must be a number"]);
    expect(checkedEmail).toBeNull();
    expect(checkedPassword).toBeNull();
  });

  it("should not validate if email is invalid", () => {
    const validated = validator.validate({ ...data, email: "test" }, rules);

    const checkedName = validator.check(data.name, [
      ["required", "Name is required"],
    ]);
    const checkedAge = validator.check(data.age, [
      "required",
      ["number", "Age must be a number"],
    ]);
    const checkedEmail = validator.check("test", [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check(data.password, [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);

    expect(validated.email).toHaveLength(1);
    expect(validated.email).toEqual(["Email is invalid"]);
    expect(checkedName).toBeNull();
    expect(checkedAge).toBeNull();
    expect(checkedEmail).toHaveLength(1);
    expect(checkedEmail).toEqual(["Email is invalid"]);
    expect(checkedPassword).toBeNull();
  });

  it("should not validate if password is too short", () => {
    const validated = validator.validate({ ...data, password: "test" }, rules);

    const checkedName = validator.check(data.name, [
      ["required", "Name is required"],
    ]);
    const checkedAge = validator.check(data.age, [
      "required",
      ["number", "Age must be a number"],
    ]);
    const checkedEmail = validator.check(data.email, [
      "required",
      ["email", "Email is invalid"],
    ]);
    const checkedPassword = validator.check("test", [
      "required",
      ["min:6", "Password must be at least 6 characters"],
    ]);

    expect(validated.password).toHaveLength(1);
    expect(validated.password).toEqual([
      "Password must be at least 6 characters",
    ]);
    expect(checkedName).toBeNull();
    expect(checkedAge).toBeNull();
    expect(checkedEmail).toBeNull();
    expect(checkedPassword).toHaveLength(1);
    expect(checkedPassword).toEqual(["Password must be at least 6 characters"]);
  });
});
