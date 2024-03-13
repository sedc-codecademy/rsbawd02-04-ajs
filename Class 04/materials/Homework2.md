# Homework 1
## Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 beers from the API. The information in the table are:
* Beer Name
* Contibuted by
* First brewed
* PH

There should be a function that makes the call to the api for the beers ( should have URL for a parameter )
There should be a function that prints beers into the table
**API URL: ** https://api.punkapi.com/v2/beers?per_page=10&page=1

## Task 2
After the user clicks the button to get the first 10 beers, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 beers and change the table contents with information about the next 10 beers. After the next 10 beers are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 beers in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
 
**API URL: ** https://api.punkapi.com/v2/beers?per_page=10&page=2
