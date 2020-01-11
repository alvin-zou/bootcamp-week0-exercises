# Personal Assistant Webpage: Design

This personal assistant will be composed of two pages: a homepage and a todo page. At the top of both pages, there will be a navigation bar where the user can switch to the other page.

A todo object will consist of an ID (number), a name (string), a date (Date object), and an importance value (number).


### Homepage (index.js)

Below the navigation bar, the first component of this page will be a welcome statement of the form "Good (morning/afternoon/evening)!" depending on the time of day. The next component will be weather data displaying temperature and precipitation forecasts.

Finally, the homepage will display two lists side-by-side. On the left, there will be a list of all todos with a date value that matches the current date, ordered by importance. It will display each todo's name and importance, along with an adjacent "minus" button to delete the todo. 

On the right, there will be a list of other todos. This will be the exact same as the todos on the left, except the todos are ordered by date and then importance, and each todo's date will also be displayed. 

### Todo Page (todo.js)

Below the navigation bar, the first component of this page will be an "Add Bar". This will consist of four sub-components: three text boxes for the user to enter the todo's name, date, and importance, as well as a "plus" button to add the todo once all three fields are filled out.

After the "Add Bar" there will be a "Search Bar" that just consists of a text box where the user can filter todos by substring. Since the webpage dynamically updates after each character typed, there is no need for a search button. 

Right below the "Search Bar", there will be a "Clear All Button" that will delete all todos. The user will be prompted via an alert() call to confirm their intention to delete all todos.

Last but not least, the bottom of the todo page will display the list of todos identically to how the homepage displayed them, except it will automatically filter by whatever the user has typed in the search box.

### Data Movement

The files for these two pages, index.js and todo.js, will both be children of mainApp.js, where we will store our array of todo objects along with a function editTodoList() that can edit this array. Both the array and this function will be passed down to index.js and todo.js to allow those pages to access and alter the list of todos. 

mainApp.js will be a child of App.js, the top-level file in our website's file structure. App.js will just contain code for the navigation bar (header) at the top of both pages, in addition to boilerplate code that will selectively render either the homepage or the todopage based on where the user has navigated to.