#Frontend of Student and Teacher Management System of Web Application Development 2.
•	Video: https://youtu.be/VSFRWEnP4R0

##Basic Information
•	ID: 20086430
•	Name: Xu Sima 
##Environment
•	OS: Windows 10
•	Node: v10.16.3
##Description of Functionality
###Functions: 
1.	Login
Only administrator can login. Everyone can visit the homepage but if they are not the administrator, they cannot make any operation on the teacher and the student information.
2.	Logout
The administrator can logout to protect the system. 
3.	Map
Showing the location.
4.	Add a student
Adding a student with his or her individual’s properties, as shown in the Web Application Development 2.
5.	Edit a student
Editing a student with his or her individual’s properties, as shown in the Web Application Development 2.
6.	Delete a student
Deleting a student in the MongoDB.
7.	Search a student
Using Blurring search. 
8.	Upvote a student
Voting up for the student with good performance.
9.	Add a teacher
Adding a teacher with his or her individual’s properties, as shown in the Web Application Development 2.
10.	Edit a teacher
Editing a teacher with his or her individual’s properties, as shown in the Web Application Development 2.
11.	Delete a teacher
Deleting a student in the MongoDB.
12.	Search a teacher
Using Blurring search. 
13.	Upvote a teacher
Voting up for the teacher with good performance.

###Server
1.	URL
GitHub: https://github.com/XuSima/Web-Assignment-2
GitLab: https://gitlab.com/XuSima/assignment2
Heroku: https://webwork2.herokuapp.com/#/
2.	Functions:
Web Application Development 2: 
Students: 
+ GET /students: get all the students.
+ GET /students/:id: get one student by a valid ID.
+ GET /students/name/:name: get one student by a valid name.
+ POST /students: add a student.
+ PUT /students/:id/votes: upvote a student.
+ DELETE /students/:id: delete a student.
Teachers:
+ GET /teachers: get all the teachers.
+ GET /teachers/:id: get one teacher by a valid ID.
+ GET /teachers/name/:name: get one teacher by a valid name.
+ POST /teachers: add a teacher.
+ PUT /teachers/:id/votes: upvote a teacher.
+ DELETE /teachers/:id: delete a teacher.
Student and Teacher Management System
Students:
+ GET - fetcheStudents
+ GET - fetcheStudent
+ POST - postStudent
+ POST - editStudent
+ PUT - upvoteStudent
+ DELETE - deleteStudent
Teachers
+ GET - fetcheTeachers
+ GET - fetcheTeacher
+ POST - postTeacher
+ POST - editTeacher
+ PUT - upvoteTeacher
+ DELETE – deleteTeacher
#UML Diagrams
•	Use case diagrams:
![][Usecase]
 ./Usecase.png


#Database Schemas
1.	Data Model: student
Schema: 
var mongoose = require("mongoose")
var Schema = mongoose.Schema
let StudentSchema = new Schema({
    name: String,
    age: Number,
    gender:{
        type:String,
        default:"Boy"
    },
    grade: Number,
    performance: {
        type:String,
        default:"Good"
    },
    hobbies: String,
    upvotes: {type: Number, default: 0}
})

module.exports = mongoose.model("Student", StudentSchema)
Sample Data: {name: 'Jim', age: 22, gender: 'Boy', grade: 3, performance: 'Good', hobbies: 'Go'}

2.	Data Model: teacher
Schema: 
var mongoose = require("mongoose")
var Schema = mongoose.Schema
let TeacherSchema = new Schema({
    name: String,
    age: Number,
    gender:{
        type:String,
        default:"Man"
    },
    grade: Number,
    rank: {
        type:String,
        default:"Lecture"
    },
    hobbies: String,
    upvotes:{type:Number,
        default:0}
})
module.exports = mongoose.model("Teacher", TeacherSchema)
Sample Data: {name: 'Lucy', age: 28, gender: 'Woman', grade: 4, rank: 'Lecture', hobbies: 'Reading'}

##Git Approach
UX/DX Approach
UX:
•	Both of the client and server adopts Git locally, while using Github and also Gitlab as the remote repositories for management.
•	The status of the repositories are all public.
DX: 
o	Automated testing: 
	Client: 
	Cypress: 
	Cypress dashboard: https://github.com/XuSima/Web-Assignment-2/tree/master/cypress/videos
	There are 22 test cases in total.
	Server: 
	Mocha, Chai and lodash: 
	There are 20 test cases in total.
##References
•	Develop:
o	Mr. David Drohan's course
o	Vue.js
o	Vue CLI
o	Vue Router
o	Vuex
o	Node.js
o	Node's official docs
o	ElementUI
o	vue-tables-2
•	MongoDB:
o	MongoDB
o	Mongoose
o	Mongoose docs
•	Test:
o	mocha
o	A blog about Mocha
o	lodash
o	eslint
o	A blog about jwt
o	Cypress


[Usecase]: ./Usecase.png



