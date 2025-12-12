# HANDLING ARRAY OF OBJECTS IN JAVASCRIPT
**The TASK :**
+ Create an array of 5 student objects ( name , age , grade )
+ Print only the names of all students
+ Find the student with grade > 90.
+ Add a new student into the array.
___
### First:
Creating the array of 5 objects.

### Second:
To print the names of all the value of the name property of this array of object, the function `dispEachName` is created instead of using the built-in method `forEach`.

### Third:
To find the objects according to the value 90 of the particular property grade, two functions is created, 
* `studentsAbove90`: This function is created to take the whole array of objects and it will seperate the objects one by one. After seperating each objects it will call the function `checkGrade`.

* `checkGrade` : This function will take one object and it will check the value of the property, that is above 90 or not. And it will return 1 if the condition is true otherwise it will return 0.

### Fourth:
A new object is added to this array of objects using the `push` method.
___


