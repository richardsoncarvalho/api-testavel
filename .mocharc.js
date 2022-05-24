"use strict";

module.exports = {
  require: ["@babel/register", "test/helpers.js"],
  reporter: "spec",
  spec: ["test/**/*.spec.js"],
  slow: 5000,
};
