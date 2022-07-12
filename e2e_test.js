const LoginPage = require("./pages/LoginPage")

Feature("Zero Bank Application - E2E Tests")

Before(({ I }) => {
    console.log("Before Hook")
    I.amOnPage("http://zero.webappsecurity.com/index.html")
})

After(({ I }) => {
    console.log("After Hook")
})

Scenario("Login Test - Negative", ({ I, LoginPage }) => {
    I.click("#signin_button")
    I.seeElement("#login_form")

    LoginPage.submitLogin("invalid username", "invalid password")
    LoginPage.assertLoginFormIsVisible()

    I.seeElement(".alert-error")
})