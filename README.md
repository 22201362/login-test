# Task1 Test Cases - Login Page

## How to run
Open login.html in a browser.

Valid credentials: username = admin, password = password123

## Test Cases

| ID | Description | Steps | Expected Result |
|----|-------------|-------|-----------------|
| TC_01 | Valid login | Enter admin/password123 and click login | User logged in and redirected to dashboard |
| TC_02 | Invalid login | Enter wrong credentials and click login | Error: "Invalid credentials" |
| TC_03 | Empty fields | Leave fields empty and click login | Error: "Fields cannot be empty" |
| TC_04 | SQL Injection | Enter ' OR '1'='1 in username and click login | Login blocked, error shown |

## Run automated tests
```
npm install
npm test
```
