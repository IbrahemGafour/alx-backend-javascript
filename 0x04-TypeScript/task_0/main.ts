interface Student {
  name: string;
  age: number;
  location: string;
}

const s1: Student = { name: 'Ibrahem', age: 29, location: 'Egypt' };
const s2: Student = { name: 'mohamed', age: 21, location: 'france' };
const studentsList: Array<Student> = [s1, s2];

// Create a table element
const table = document.createElement('table');

// Iterate over the studentsList array
studentsList.forEach((student) => {
  // Create a new row for each student
  const row = table.insertRow();

  // Create cells for each property of the student
  const nameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  // Set the text content of the cells
  nameCell.textContent = student.name;
  locationCell.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
