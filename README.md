# Project Name

Weekend Redux Feeback Loop
    - The first task to do to make this would be to create a database using the data.sql file.
    - The second step is to run (npm install), (npm run client), (npm run server)

Page 1: Feeling Feedback
    - For this page you should set up a new component (folder and a file.jsx in that folder)
    - enter some test data and export your comopnent to your app.jsx file.
    - on this page you will need to return your html layout. Create your header, make a input box, and make a button.
    - once you have that you should make a couple functions that 1: captures the value of the input box, 2: create a function that will when clicked check to see if there is an input and if there is send it to your store by using a dispatch call. Then at the end it will send you to your next component using a history.push. 

For steps 2,3,4: Understanding, Support, Comments
    - On these pages you will follow the same plan that is mapped out for step 1. There will be slight changes in what your header is for the page and what the placeholder and names of functions will be. 

For step 5: Review page
    - On this page you will need to display the answers from pages 1-4. 
    - What you do is make a useSelector function from react to access the data that is stored in your 'store' so you can take the data and display it in your html layout.
    - You will also want to create a new object to store that data and that will take those values from the store and then send it to your database using  POST request. 
    - after the POST happened then you will use 

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
