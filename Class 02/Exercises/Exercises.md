## Random color page

* Create an HTML page
* On every refresh the page should pick a random color and change the background of the page
* The RGB values of the color should be shown in the center of the page on every restart

## Title Generator

* Create 3 inputs:
  * Color
  * FontSize
  * Text
* Create a button for generating titles
* When the button is clicked generate a new h1 element with the color, font size, and text from the inputs

## List generator from an array
* Create an array of 5 names
* Create an HTML page with:
    * A header
    * An empty unordered list
    * A button
* When the button is clicked it should fill in the empty unordered list with the names of the array

## List Generator dynamically from inputs

* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size, and items from the inputs 

> Items should be added separated by comma (,) in the input

## Movies renting App

* Create a movie renting app
* There should be an array of movie names
* There should be an input and a search button
* When the person enters a name of a movie it should search the array
* If the name exists it should show an H1 element that says: "The movie can be rented" in green text
* If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
* The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

## Reminder App
* Create a reminder app
* There should be:
    * An input for entering the title
    * An input for entering priority
    * An input for color
    * A textarea for adding a description
    * A button for adding the reminder
    * A button for showing all reminders
* When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
* The object should then be added to an array of reminders
* When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
* The title should be the color of the "color" property
