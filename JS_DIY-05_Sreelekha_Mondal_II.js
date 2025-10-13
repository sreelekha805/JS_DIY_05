// Creating the object.
const students = [{name: "Koyel", age: "17", grade: "60"}, {name: "Rupsweta", age: "18", grade: "95"}, {name: "Arunima", age: "18", grade: "87"}, {name: "Mrittika", age: "19", grade: "92"}, {name: "Sanchita", age: "20", grade: "90"}];

// before displaying the names this is the heading releted to the work.
document.getElementById("heading1").innerHTML = "The names of all students";

// To display the names of each object of teh array Within a div, the p tags are created. The div is accessed by its id.
const displayName = document.getElementById("display_name");

// Displaying the names of the students in the web page.
students.forEach (function (student)
{
  // Creating the p elements to display the anmes individually.
  const eachName = document.createElement("p");

  //Adding the content to each of the p elements.
  eachName.textContent = student.name;
  displayName.appendChild(eachName);
})

// before displaying the all property of students with grade > 90, this is the heading releted to the work.
document.getElementById("heading2").innerHTML = "The Students with grade > 90 - ";

// Seperating the students according to the condition of grade using filter method.
const searchWithGrade = students.filter(student => student.grade > 90);

// Displaying the students all property.
document.getElementById("grade").innerHTML = JSON.stringify(searchWithGrade);

// before displaying the students array of object, this is the heading releted to the work.
document.getElementById("heading3").innerHTML = "After adding a new student - ";

//Creating a new object.
let newStudent = {name: "Srilopa", age: "19", grade: "67"};

//Adding the new object to the array of objects.
students.push(newStudent);

// Displaying the array of objects.
document.getElementById("all_students").innerHTML = JSON.stringify(students);
