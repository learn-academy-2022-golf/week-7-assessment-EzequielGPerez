# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
Yes we can fix this. We would need to go into the console so rails c in your terminal. Then we create a new student but we have to attach the Cohort and the student models together. The foreign key would be on the student side. 

Researched answer:
So first to make the connection we need to go to each model class. For the class with the primary key, you want to have the has_many(singular model) and the foreign key one will have belong_to(plural model). For example, the class Cohort will have the has_many followed by :students. The Students class will have belongs_to :cohort. A student entry can't be without being connected to the cohort. We would need to create a variable for the student then create a student. The Foreign key will be the modelname_id and the datatype of an integer. It will be on the belongs_to side. So on the Student model. 

2. Which RESTful routes must always be passed params? Why?

Your answer: 
Get and create are going to get passed params. Params are helping us pass in dynamic data. With params you need the key of what you want to modify the value of. And you will also need an instance variable. 

Researched answer: 
 So read(which has get) and create (that has post) need params. This will help data to be dynamically passed into our code. You can also use it in update but it isn't as necessary. We can use param in our route to pass info into the route. We also use it in the controller with an instance variable = params [:key]. You need to have it in both the controller and routes for it to be useful. 

3. Name three rails generator commands. What is created by each?

Your answer: 
There is rails g model which will create your database table. rails g migration which the way I like to think of it allows you to change your database (model), and saves it. rails g create which lets you add more columns, more data with its own rows.  

Researched answer: rails g model lets you create a database table. It also makes rails set up the correct file structure. Model takes in the name we want to give it in Pascal case. It is also singular. After the name we give it columns with the type of datatype we expect to put in them. for example name:string, or number:integer. rails g migration lets us modify our model table over and over when necessary. Rails keeps memory of the migrations. Also of the ones that need to run. I was mistaken and thought rails g create was a thing. But an actual 3rd generator command is rails g rspec:install. This is a testing installation for test driven development. It is for the ruby TDD just like jest for Javascript. It works pretty similarly as well.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
^
The name is Student. This would show us the student controller so it would get and most likely show all the students depending on if you do index which is all of the students or show which would be one.

action: "POST" location: /students
^
The name would be Cohort. This would let us put more data into the database. This would create more data in our database. 

action: "GET" location: /students/new
^
The name would be Cohort. This would be a new page where we can create a new page. This will be a form to put our data into like name, age, etc. 

action: "GET" location: /students/2
^
The name would be Cohort. This would be directing you to the second student (2 which is the :id). This will show you the students data depending of what fields you asked for. 

action: "GET" location: /students/2/edit
^
This controller would be the Student one. This would most likely have been a button or a link that then allows you access to text fields or areas that once filled in and submitted with a form submit, will let you update, edit the information,data. 

action: "PATCH" location: /students/2
^
This would be in the Student also I am pretty sure. This is also under the editing category. This will be allowing you to also edit the student of :id 2.

action: "DELETE" location: /students/2
^
This would be deleting, destroying from Cohort. This would be deleting the student of :id 2. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I see a home screen with a title and a list.
As a user I am able to see what day and/or date this to do list is for.
As a use I am able to click something to then be able to add to my list.
As a user I am able to go to another page and see an input area for my to do item, date, and short description of the to do list item and what it entails. 
As a user I am able to then submit my to do item and be re routed to the main screen.
As a user I can see an updated main screen of my to do list. 
As a user I am able to see when an item needs to be done, and my items ordered by day, time and or date. 
As a user I am able to update an item. 
As a user I can change the time it needs to be done.
As a user I can change the urgency of the item.
As a user I can delete an item.
As a user I can mark an item as complete. 