React: To-Do List

A. Functions Performed by the Application:
1. Add tasks to the list
2. Remove tasks from the list
3. Mark tasks as completed (visual representation)
4. Update Existing Tasks
5. Responsive and Visually Appealing

B. Steps:
1. run 'npx create-react-app to-do on terminal'
2. run 'npm install --save bootstrap' 
3. run' npm i --save @fortawesome/fontawesome-svg-core' 
   'npm i --save @fortawesome/free-solid-svg-icons'
4. finally run 'npm start' to launch the react application

C. References:
1. WebStylePress React ToDo List (https://www.youtube.com/watch?v=TmDNBEdHzVs&ab_channel=WebStylePress)
2. Bootstrap Documentation (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
3. FontAwesome Documentation (https://fontawesome.com/docs/web/setup/get-started)
4. https://github.com/webstylepress/to-do-list-app-react-wsp

D. Challenges faced and how they were overcome:
1. State Management: Managing the state of the application in terms of keeping track of total number of tasks, adding/removing tasks, managing completition status seemed to be a challenge.

Solution: the useState hook was utilised to manage state. Break down the app into smaller components aided in making state management more manageable (online resources were reffered to make use of hook)

2. Handling user input: addition of new tasks and marking their completion requires careful handling of user input.

Solution: user inputs were stored in state variables and updated using 'onChange' events on input elements.

3. Responsive and Visually Appealing Application
Solution: Bootstrap and logos from FontAwesomeIcon were imported to make the to-do list interactive and appealing.

E. toughest part of project that has not been finished yet:

1. implementing local storage so that the task persists even after the page is refreshed. Through online resources i figured that there's a built in feature in web browsers i.e 'thelocalstorage' object which allows you to store key-value pairs in the user's web browser and provides a simple way to persist data even after the page is refreshed but was unable to implement the same.



