# Test Strategy

**Date**| **Version** |**Description**|**Author**|**Reviewer**|**Approver**|
| ----- |-------------|---------------|----------|------------|------------|
| 4 January 2022 | 1.0| Test Strategy|Borisova Daria| Anna Kazantseva & <br/>Wilco Van Esch |Anna Kazantseva & <br/>Wilco Van Esch|

## Introduction

The **crispy-succotash** is a web-based application.

On the **crispy-succotash** people can add RSS feeds.

The **crispy-succotash** app has a goal: to attract more potential clients.

To achieve this goal QA team creates a test strategy document where all information about the scope, approach, risk
analysis, test environments, testing tools are described.

## Scope and objectives

This document describes the test strategy for the crispy-succotash application.

The objective of testing this application is to make sure that the end result meets the business and user requirements.

## Test Approach

Based on the given requirement the test approach can be divided into the following steps:

1. The requirements analysis, creation of the critical checklist, creation of the test plan, and identification of
   high-priority functionalities that need to be tested, creation of automation scenarios.

2. The creation of a more detailed functional checklist. Execution of the black box testing of the checklist in parallel
   with usability testing. Reporting bugs in Jira and the analysis of more high-priority bug reports.

3. The regression testing, which helps to verify the application still performs the same way after it was changed.

4. The creation and execution of automation tests with Cypress. Setting up the Cypress Dashboard to determine which test
   cases can be improved and how healthy they are. This step helps the QA team to save time in the future for regression
   testing and get the metrics of the tests run.

5. Execution of load and performing testing

6. Creation of the user manual and FAQ page for future users.

## Test deliverables

The following documents are required for the testing team: the test plan, the test cases document, the test summary
report, the defect report, the automation scope, the metrics from automation scope.

## Testing tools

The following tools need to be used:

- Jira is for bug reports, for test cases management, for documentation
- Cypress framework is for automation
- Cypress Dashboard is for automation reports
- Slack messenger is for communication between the dev and QA team
- BrowserStack is for functional test in different browsers

## Testing environment

As for the testing **browsers** the following were chosen:

- Google Chrome version 92
- Mozilla Firefox version 91
- Safari 14.1
- Mobile Chrome version 92
- Mobile Safari version 14.1
- Mobile Samsung Internet Browser version 15

As for the testing **environments** the following were chosen:

- MacOS Monterey
- MacOS Big Sur
- Windows 10
- Windows 11
- iPhone 8
- Samsung Galaxy S4
- Xiaomi Redmi Note 9 Pro

The choice was based on the analysis of the metrics from PO.

## Third party components

The third-party components, such as RSS links are not included in the testing scope.

## Risk analysis

1. Handle unavailability of the third party API
2. Insufficiency of the third party API documentation

## Schedule and estimates

**Activity name**             | **Executor** | **Time**                                       | 
|-------------------------------|--------------|------------------------------------------------|
| Investigation of requirements | QA + PO      | 2h                                             |
| Test plan creation            | QA + PO      | 5h                                             |
| Test cases creation           | QA + PO      | 1 test case = 10 min                           |
| Test cases execution          | QA           | 1 test case = 15 min                           |
| Bugs report                   | QA           | 1 bug report = 15 min                          |
| Test summary report creation  | QA           | 2h                                             |
| Critical checklist creation   | QA           | 2h                                             |
| Regression testing            | QA           | 1 bug = 15 min <br/>+<br/>1 test case = 20 min |
| Cypress tests creation        | QA           | 30h                                            |
| Cypress dashboard set up      | QA           | 5h                                             |
| Load and perfomance testing   | QA + DEV     | 5h                                             |
| Manual creation               | QA           | 2h                                             |

## Advise on the test strategy
Involve the QA team in the process as early as possible.

It would help to understand the application better, and will reduce the number of functional questions from the team.

Present testing as a team effort.

Improve the communication between members of the team.
