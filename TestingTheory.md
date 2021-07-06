### Manual Testing:
Write Code and Test/Preview in Browser. But it is Error-prone because it is hard to test all possible combinations and scenarios when a new feature is implemented. It is also Time Consuming.

### Automated Testing:
Write Extra Code that runs and tests our application code.
This is a standard procedure in modern development. It tests entire application automatically, So we can always test everything, no matter what is changed. It saves time. When ever changes are made, Automated tests test the building blocks(Components) individually as well as altogether at once. This allows us to catch errors earlier and ship better code. It can tell what exactlt went wrong. It can serve good documentation.

### Kinds of Automated Tests:
1. ### Unit Tests:
      Test the smallest possible units of the application. Test the individual building blocks (funtions, components, etc.) in isolation and independently. There are dozens or hundreds of Unit tests. Because of focused test, their size is small.
2. ### Integration Tests:
      Test the Combination of Multiple Building Blocks. e.g. Multiple components working together. Integration tests are less than Unit tests.
3. ### End-to-End (e2e) Tests:
      Testing entire Workflows/Scenarios. e.g. Logging a user in and then going to a certain page, etc. There are very few e2e tests because If Unit tests and Integration tests work, we can be pretty sure that our overall application works. Also because Unit and Integration tests are easier to test and quicker to run and are more focused. It is easier to test all possible scenarios if we test all our Unit tests for different scenarios.

  It is better to have Units test fail instead of other big tests fail because they have lesser reasons instead of bigger tests having many kinds of reasons.

### 2 Questions when Testing:
1. What to Test?
2. How to Test?:
Test Success and Error cases. Also test rare but possible cases.

### Required Tools for testing:
1. Tool for running the automated tests and asserting/declaring the results(PASS/FAIL): <b>Jest</b>.
2. Tool for simulating and rendering our React App components before running tests: <b>React Testing Library</b>.  

React-Testing-Library provides a Simulator for the Jest's automated tests to interact with. Both tools are already setup in CRA.

### setupTests.js file:
Performs some setup work for testing.

### App.test.js file:
Contains testing code.

### Test Syntax:
test("<em>description to identify test in testing output</em>", ()=>{  
 &nbsp;&nbsp;&nbsp;&nbsp; <em>actual testing code </em>  
});

In the test, we import render function from testing library,  
Then we get hold of some element on the virtual screen in the simulated browser,

### 3 A's of Writing Tests:
1. Arrange
2. Act
3. Assert

While doing TDD, we write Specification for our functions or components before writing actual test cases.  
&nbsp; &nbsp; &nbsp; &nbsp;  test.todo("description")  
&nbsp; &nbsp; &nbsp; &nbsp; then we write test cases by removing <b>.todo</b> and adding test case.  
test<b>.only</b> can be added to a test to only run that particular test.  
test<b>.skip</b> can be added to a test to skip a particular test and run other test cases.

Jest also provides <b>Assertion Helper Utilities</b>.  e.g. When Jest runs test cases, it creates a JS environment which has a global function called <b>expect</b>. expect has assertion utilities such as .toBe(), .toEqual()

<b>jest-dom:</b> provides DOM Specific Utilities.

### TDD:
1. Write a Failing Test.
2. Make the Test Pass.
3. Refactor.

### 3 Laws of TDD:
1. Must write a failing test before writing Production Code.
2. Must not write more of a test than is sufficient to fail, or fail to compile.
3. Must not write more Production code than is sufficient to make the currently failing test pass.

### Which test to write next? n ZOMBIE:
first write test for Zero returns, then One return, then Many returns.
then write Boundaries, then define Interfaces esp. in OOP, then handle Exceptions.

### Testing Pyramid:
In Order of Isolation to Integration and Faster to Slower:  
&nbsp;&nbsp;&nbsp;&nbsp; Unit tests, Service/Integration Tests, UI/e2e Tests.