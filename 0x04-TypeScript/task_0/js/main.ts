export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};
const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 * @author Robert Amoah <https://github.com/mr-robertamoah>
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const tbody = document.createElement('tbody');
  tr.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  tr.insertAdjacentHTML('beforeend', '<td>Location</td');
  thead.insertAdjacentElement('beforeend', tr);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tbody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', thead);
  table.insertAdjacentElement('beforeend', tbody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
