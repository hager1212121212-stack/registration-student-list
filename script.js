
const studentsArray = [];


const studentForm = document.getElementById("studentForm");
const errorBox = document.getElementById("errorBox");
const cardsGrid = document.getElementById("cardsGrid");

studentForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const age = document.getElementById("studentAge").value.trim();
  const course = document.getElementById("courseName").value.trim();
  const gradeInput = document.getElementById("studentGrade").value.trim();

  errorBox.style.display = "none";
  errorBox.innerText = "";


  if (!name || !age || !course || !gradeInput) {
    showError("All fields are required.");
    return;
  }


  const grade = parseFloat(gradeInput);
  const studentAge = parseInt(age);


  if (isNaN(grade) || grade < 0 || grade > 100) {
    showError("Grade must be a number between 0 and 100.");
    return;
  }


  const status = grade >= 50 ? "Passed" : "Failed";

  const studentObject = {
    name: name,
    age: studentAge,
    course: course,
    grade: grade,
    status: status,
  };

  studentsArray.push(studentObject);

  createStudentCard(studentObject);

  studentForm.reset();
});

function showError(message) {
  errorBox.innerText = message;
  errorBox.style.display = "block";
}

function createStudentCard(student) {
  const card = document.createElement("div");

  const statusClass = student.status.toLowerCase();
  card.className = `student-card ${statusClass}`;

  card.innerHTML = `
                <div class="card-row"><strong>Student Name:</strong> ${student.name}</div>
                <div class="card-row"><strong>Age:</strong> ${student.age}</div>
                <div class="card-row"><strong>Course:</strong> ${student.course}</div>
                <div class="card-row"><strong>Grade:</strong> ${student.grade}</div>
                <div class="card-row"><strong>Status:</strong> <span class="status-badge">${student.status}</span></div>
            `;

  cardsGrid.appendChild(card);
}
