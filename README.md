# Game of thrones
I spent 5 days on this and it is a solo project.


# Deployment
https://siamcreed.github.io/proto-project/


# Technologies
Javascript, CSS, React


# Brief
This app is supposed to generate a page for a character and display their details.


# Goals
Add a new item to a list
Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
Edit an item from a list
Remove an item from a list
Clear/delete all items
Clear/delete only marked items
Fetch data from at least one 3rd party API using Axios or fetch.
Make frequent Git commits with descriptive messages, explaining your commit.
Use React Router to handle multiple pages/views.


# Technical requirement
Add a new item to a list
Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
Edit an item from a list
Remove an item from a list
Clear/delete all items
Clear/delete only marked items
Fetch data from at least one 3rd party API using Axios or fetch.
Make frequent Git commits with descriptive messages, explaining your commit.
Use React Router to handle multiple pages/views.


# Planning


 Day 1 : The first day was spent designing the app with wireframes which was kind of challenging, I then moved on to basic user stories that the app should be able to perform. And at the end of the day I started the app by setting it up.
 Day 2 : I started this day by trying to get the items from the API using initially the axios but later the fetch function. I successfully rendered the items inside the console but I had trouble getting all the characters on the website but I could render one character.
 Day 3 : Adding the add item part of the code. I was able to do this by using props
 Day 4 : Adding the edit button to the code.
 Day 5 : Adding the delete and select button to the code.
 
# User stories
As a user I should be able to see the character details.
 As a user I should be able to add an item to the list.
 As a user I should be able to edit the item.
 As a user I should be able to delete any item from the list.
 As a user I should be able to delete all items on the list.
 As a user I should be able to select an item from the list.


# Build process


Day 1: I extracted data from an Api using initially the axios method but later the fetch method, which was easy but I ran into a problem. The problem was that in the console I could render all the characters in the console but not in the browser, I found a work around by rendering only one character and the items underneath it using {Character.item} the character is pulled straight from the api and the item part is also from the api but it is specific attributes from the api and it would look more like {Character.gender} . 


Day 2: I made a component to render the character and the features which was called mainpage. I then added the fetch api into it and rendered. I also started setting up the root pages so I could navigate through the components easily with nav and routes from React and then I made more components such as home.js(Which is the homepage) and todoform.js .


Day 3: On day 3 I had trouble adding functions to the characters so I made another component that would allow me to add an item to the list called todoform. Initially it was not functional because I made some spelling mistakes but later it was functional after debugging. I then imported todoform into mainpage and rendered it so I could test it to make sure it works. After that I started setting up individual functions that would allow me to delete or select the items on the page. 


Day 4: I added extra features to the code that allowed me to edit and delete the item, and because of this I was able to add extra functions to the mainpage that allowed me to select (using mostly CSS) and delete specific Items and delete all. I also worked on the CSS to make the page look better by adding a background picture and some more styling.


Day 5: I finished the routes for the app and tested the app. I ran into some bugs that made the page reload instead of switching and the select function only highlighted the selected item instead of deleting.I debugged it by changing the CSS to line through.






# Challenges
I had challenges adding an edit button. Initially when I tried to edit an item and clicked confirm it would crash the page and said handleEditinfo
Is not defined but with some debugging I found that the problem is that I didn’t use the props well when importing the function and I tell the app what to do.
 
I had a problem with deleting all items. The problem was that it would only delete the pre-populated items instead of  all but I fixed the issues by adding  the custom item. I also had more issues with the add item function when rendering it the mainpage.js which was “addinfo is props is not a function”. The problem was that I didn't define the function properly in mainpage.js.


# Wins
I got the MVP done. I successfully rendered all the items on to the page, added interactive functions to the items and added routes.


# Bugs
I attempted to add edit buttons to other items but failed. I can't retrieve all the items unless it is in the console.


# Improvement
To add an edit button to all the items. To be able to get all the characters and filter through them. To be able to add a search function to search any item or character from the api.



# Key learning
Handling API requests, component based architecture, rendering data and react hooks. 
