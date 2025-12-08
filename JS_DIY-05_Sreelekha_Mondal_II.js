// Creating the object.
const students = [{name: "Koyel", age: "17", grade: "60"}, {name: "Rupsweta", age: "18", grade: "95"}, {name: "Arunima", age: "18", grade: "87"}, {name: "Mrittika", age: "19", grade: "92"}, {name: "Sanchita", age: "20", grade: "90"}];

let size = students.length;
console.log (size);

// before displaying the names this is the heading releted to the work.
document.getElementById("heading1").innerHTML = "The names of all students";

// To display the names of each object of teh array Within a div, the p tags are created. The div is accessed by its id.
const displayName = document.getElementById("display_name");

// Displaying the names of the students in the web page.
function dispEachName (list, arr)
{
  // At first calculating the length of the array of object for deciding how many time the loop will be run.
  let size = arr.length;

  // Initialized the loop counter.
  let m = 0;
  while (m < size)
  {
    // To display each name seperately, different <p> element is created dynamically.
    const para = document.createElement("p");

    // Placing the single name in every paragraph tag.
    console.log (arr[m]);
    para.innerHTML = arr[m].name;

    // This <p> elements are the child element of a html element which is accessed by the variable 'list'.
    list.appendChild(para);

    // The loop counter is incremented.
    m = (m + 1);
  }
}

// Accessing the html element, where the names will be displayed.
let parentElement = document.getElementById("display_name");

// Calling the function with the html element and the array of object.
dispEachName (parentElement, students);

// before displaying the all property of students with grade > 90, this is the heading releted to the work.
document.getElementById("heading2").innerHTML = "The Students with grade > 90 - ";

// Seperating the students according to the condition of grade using filter method.
function studentsAbove90 (list, arr)
{
  // At first calculating the length of the array of object for deciding how many time the loop will be run.
  let size = arr.length;

  // Initialized the loop counter.
  let k = 0;
  while (k < size)
  {
    if ((arr[k].grade) > 90)
    {
      // To display each name seperately, different <p> element is created dynamically.
      const para = document.createElement("p");

      // Placing the single name in every paragraph tag.
      console.log (arr[k]);
      para.innerHTML = JSON.stringify(arr[k]);

      // This <p> elements are the child element of a html element which is accessed by the variable 'list'.
      list.appendChild(para);
    }

    // The loop counter is incremented.
    k = (k + 1);
  }
}

// Accessing the html element, where the names will be displayed.
let withGrade = document.getElementById("grade");

// Calling the function with the html element and the array of object.
studentsAbove90 (withGrade, students);

// before displaying the students array of object, this is the heading releted to the work.
document.getElementById("heading3").innerHTML = "After adding a new student - ";

//Creating a new object.
let newStudent = {name: "Srilopa", age: "19", grade: "67"};

//Adding the new object to the array of objects.
students.push(newStudent);

// Displaying the array of objects.
document.getElementById("all_students").innerHTML = JSON.stringify(students);
