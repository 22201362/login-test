const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

function loadPage() {
  const html = fs.readFileSync(path.resolve(__dirname, "login.html"), "utf8");
  const dom = new JSDOM(html, { runScripts: "dangerously" });
  return dom.window;
}

describe("Task1 Test Cases - Login Page", () => {

  let window, document;

  beforeEach(() => {
    window = loadPage();
    document = window.document;
  });

  test("TC_01 - Valid login: user successfully logged in", () => {
    document.getElementById("username").value = "admin";
    document.getElementById("password").value = "password123";
    document.getElementById("loginBtn") && document.getElementById("loginBtn").click();
    window.login();
    const msg = document.getElementById("message");
    expect(msg.innerHTML).toContain("successfully logged in");
  });

  test("TC_02 - Invalid login: error message displayed", () => {
    document.getElementById("username").value = "wronguser";
    document.getElementById("password").value = "wrongpass";
    window.login();
    const msg = document.getElementById("message");
    expect(msg.innerHTML).toBe("Invalid credentials");
  });

  test("TC_03 - Empty fields: validation message displayed", () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    window.login();
    const msg = document.getElementById("message");
    expect(msg.innerHTML).toBe("Fields cannot be empty");
  });

  test("TC_04 - SQL injection: login blocked", () => {
    document.getElementById("username").value = "' OR '1'='1";
    document.getElementById("password").value = "anypassword";
    window.login();
    const msg = document.getElementById("message");
    expect(msg.innerHTML).toContain("Invalid input detected");
  });

});
