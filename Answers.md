1.What problem does the context API help solve?

-it lets us pass props to numerous components without having to prop drill

2.In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

-reducers affect the state
-actions send the data to the 'store'
-the store holds the state

3.Why is the store known as a 'single source of truth' in a redux application?

-because it is the sole place that the state is held in the application, so any changes are made here. this makes it the single place that the "truth" or current state of the data is found

4.What is the difference between Application state and Component state? When would be a good time to use one over the other?

-application state can be used throughout the application
this could be used to hold a state that is used throughout the application
-component state is used for a single component
this could be used to hold a state that is only used by a single component, preventing it from affecting other components

5.Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-thunk allows us to return functions instead of objects, and dispatch 'synchronous' functions or 'functions within functions'

6.What is your favorite state management system you've learned and this sprint? Please explain why!

-my favorite part of the state management unit has been context api, because it allows us to pass the props to any number of components we desire, without having to pass them from parent to child all the way down the line. this streamlines the process and makes it easier to debug
