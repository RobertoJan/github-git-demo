# DOM Lab

This lab is similar to your functions labs. You are going to write JavaScript that gets executed when the page loads. The difference here is that your code is now going to change the way the webpage looks!

## Selecting Elements

1. get the `nav-bar` element by it's id and output the result with `console.log`
   - which data type was returned?
2. get the `main` element using the `querySelector` method
   - which data type was returned?
3. get a list of every `<a>` element using `querySelectorAll`
   - which data type was returned?
4. try using the selector from step 3 and use it in a `querySelector` call
   - which element do you expect the call to return?

## Getting and Setting InnerHTML

Write the following code inside of a `setTimeout` call with a one second delay. This will allow you to see the state of the webpage before and after your code executes.

1. get the **Logo** element and store it in a variable
2. `console.log` the `innerHTML` property of the element
3. assign a new value to the `innerHTML` property to change the **Logo** on the site

## Setting Style on Multiple Elements

Write the following code inside of a `setTimeout` call with a one second delay. This will allow you to see the state of the webpage before and after your code executes.

1. get the list of every `<a>` element using `querySelectorAll` again and store it in a variable
2. use the `forEach` loop on the list to apply a new style to each element
   - add the `text-decoration: underline` property
