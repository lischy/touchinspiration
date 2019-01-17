Developer Test: Frontend Development

Summary

We need you to take the following standard technical assessment to enable us to gauge the
following:

1. How you write code using a either ReactJS or VueJS. (correctness, efficiency, readable, clear).
 
2. How you decompose a problem and design a solution.
 
3. How you are able to maintain a consistent state throughout the application using a
 dedicated state management container (vuex for VueJS and redux for ReactJS).
 
4. How you are able to conform to ECMAScript standards for JavaScript throughout the
 application.
 
5. Are you able to consume an API to communicate with an external data source within your
 application?
 
6. How complete and thoughtful your implementation is. Can the reviewer run it immediately?
 

Quiz:

Given the below API endpoint and attached design template, you are required to complete the
following tasks:

1. Setup a fresh web app based on either of the following JavaScript Frameworks:

a. VueJS

b. ReactJS  

The setup should use Webpack as the dedicated module bundler and dependency manager

for your web app. It should also use either yarn or npm for package management.

Hint:  

If you are unable to configure webpack yourself, you could use the following templates that
contain pre configured webpack settings:

1. Vue-CLI for VueJS
 
2. CreateReactApp for ReactJS
 

1. Establish a stable state tree for the application using either of the following state
management libraries:
 
    1. vuex for VueJS
 
    2. redux for ReactJS.
 

2. Once all is set, use the provided API endpoint to fetch data from an external server and
 display it in your web app, conforming to the designs specified in the attached template. The
API returns a long list of random users and hence you are required to ensure that the list is
well paginated and correctly displayed as the user of the web app scrolls through the
different pages of the users list.
 

Note:  

It is key for your web app to use a state management container to handle all data mutations. As such,
you are required to illustrate the use of the different component lifecycle hooks of the framework
used as well as the following key concepts of state management container used:  

Vuex:

- ★  State
 
- ★  Store
 
- ★  Actions
 
- ★  Mutations
 
- ★  Mutation types
 
- ★  Getters
 Redux:
 
- ★  State
 
- ★  Store
 
- ★  Reducers
 
- ★  Actions
 
- ★  Action creators
 Complementing the understanding of the JavaScript framework used, the quiz focuses on knowledge
of scoping, function expressions (and how they differ from function declarations), references, process
of variable and function declaration, order of evaluation, and a couple more things like delete
operator, object and array instantiation, assignment and mutation as used in JavaScript. These are
all relatively simple concepts, which we think every professional JavaScript developer should know.
Most of these are applied in practice quite often.
 

API Endpoints:

Browse

Method: GET  

Endpoint: https://dry-harbor-
88607.herokuapp.com/api/users?page[number]=${num}&page[size]=${num}
Params:

1. page[number]
 {  

type: Integer,
default: null,
 }  

Captures the current pagination page for the retrieved users list
 
2. page[size]
 {  

type: Integer,
default: null,
 }  

Captures the number of items to be included per single pagination page of the retrieved users
 list
 

Edit

Method: PATCH  

Endpoint: https://dry-harbor-88607.herokuapp.com/api/users/{fingerprint}
Params: {"user": { "name": "Example User"}}

---------  

Nice to have - these are in order of preference and will garner extra points for speed

Add

Method: POST  

Endpoint: https://dry-harbor-88607.herokuapp.com/api/users  
Params: { "user": {"name": "Testing User", "email": "example@user.com", "password": "password",

"mobile_number": "0756565656"}}

Delete

Method: DELETE  

Endpoint: https://dry-harbor-88607.herokuapp.com/api/users/{fingerprint}

Read
Method: GET

Endpoint: https://dry-harbor-88607.herokuapp.com/api/users/{fingerprint}
Extra points for pretty functionality.

Submission:

Note that this task will require you to have a github/gitlab account. If you don't have either, you are
required to setup one.  

Once you have completed the assessment reply to this email with a link to the github repo (Please
ensure that the repo is public). You can remove it once we have given you feedback.

Example UX

Browse Page

Edit User 