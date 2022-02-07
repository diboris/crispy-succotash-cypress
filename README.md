# cypress-crispy-succotash [![Build Actions Status](https://github.com/diboris/crispy-succotash-cypress/actions/workflows/actions.yml/badge.svg)](https://github.com/diboris/crispy-succotash-cypress/actions)

Showcase project that tests [crispy-succotash](https://gitlab.com/sendcloud-public/crispy-succotash) by using [Cypress](https://www.cypress.io/)

## Test cases

Tests are described in Markdown format and located in [TEST_CASES](TEST_CASES.md) file.

## Test strategy

Test strategy is described in Markdown format and located in [TEST_STRATEGY](TEST_STRATEGY.md) file.

## A report with the results of the testing:

### Sign up

| Name                      | Passed/Failed      | Automated          |
|------------------|--------------------|--------------------|
| [A user can Sign up](TEST_CASES.md#id-01) | :white_check_mark: | :white_check_mark: |
| [A user can not sign up without credentials](TEST_CASES.md#id-02)  | :white_check_mark: | :white_check_mark: |
| [A user can not sign up with not matching passwords](TEST_CASES.md#id-03)| :white_check_mark: | :white_check_mark: |
| [A user can not sign up with a special character in the username](TEST_CASES.md#id-04)| :white_check_mark: | :white_check_mark: |
| [A user can not sign up with a password matching the username](TEST_CASES.md#id-05)| :white_check_mark: | :white_check_mark: |
| [A user can not sign up with a short password ](TEST_CASES.md#id-06) | :white_check_mark: | :white_check_mark: |
| [A user can not sign up with a entirely numeric password](TEST_CASES.md#id-07)| :white_check_mark: | :white_check_mark: |
| [A user can not sign up with an already existing user](TEST_CASES.md#id-08) | :white_check_mark: | :x:                |
| [A signed up user can logout](TEST_CASES.md#id-09)| :white_check_mark:  | :white_check_mark:           |
| [A user can log in](TEST_CASES.md#id-10)| :white_check_mark: |    :white_check_mark:                |
| [A user can not log in without credentials](TEST_CASES.md#id-11) | :white_check_mark: | :white_check_mark:          |
| [A user can not log in with an invalid password](TEST_CASES.md#id-12)   | :white_check_mark:                | :white_check_mark:         |
| [A none existing user can not login](TEST_CASES.md#id-13)     | :white_check_mark: |      :white_check_mark:              |
| [A logged-in user can logout](TEST_CASES.md#id-14) | :white_check_mark: |     :white_check_mark:              |

### Reading feeds

| Name                                                     | Passed/Failed      | Automated          |
|----------------------------------------------------------|--------------------|--------------------|
| [A user can add a feed](TEST_CASES.md#id-15)             | :white_check_mark:                | :white_check_mark: |
| [A user can view pages of the feed](TEST_CASES.md#id-16) | :white_check_mark:                | :x:                |
| [A user can see all feeds](TEST_CASES.md#id-17)          | :white_check_mark:                | :x:                |
| [A user can see all his\her feeds](TEST_CASES.md#id-18)  | :white_check_mark: | :x:                |
| [A user can check for the updates](TEST_CASES.md#id-19)  | :white_check_mark: | :x:                |

### Adding feeds

| Name                                                                           | Passed/Failed      | Automated          |
|--------------------------------------------------------------------------------|--------------------|--------------------|
| [A user can bookmark his\her favorite feed](TEST_CASES.md#id-20)               | :white_check_mark: | :white_check_mark: |
| [A user can leave a markdown comment on a feed's article](TEST_CASES.md#id-21) | :white_check_mark: | :white_check_mark: |
| [A user can not add a not RSS feed](TEST_CASES.md#id-22)                       | :x:                | :x:                |

## Run

Run crispy application in according to https://gitlab.com/sendcloud-public/crispy-succotash

To run cypress tests, execute:

```shell
npm run test
```

## Reports

HTML reports are generated to **cypress/reports** folder.
[cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) library is used for reporting.

## Notes

A bug was discovered during the testing process. It is described in [Github Issues](https://github.com/diboris/crispy-succotash-cypress/issues)
