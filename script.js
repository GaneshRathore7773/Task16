student = [
  {
    studentName: "ganesh singh",
    marks: "65%",
    class: "6th",
    address: "rajsthan",
  },
  {
    studentName: "aakash kumar",
    marks: "50%",
    class: "7th",
    address: "uttarpradesh",
  },
  {
    studentName: "rakshita kumari",
    marks: "75%",
    class: "4th",
    address: "himachal",
  },
  { studentName: "shreekant", marks: "95%", class: "3rd", address: "delhi" },
  {
    studentName: "tinu prajapati",
    marks: "92%",
    class: "10th",
    address: "bihar",
  },
  { studentName: "ritik", marks: "82%", class: "7th", address: "jharkhand" },
  { studentName: "abhisek", marks: "86%", class: "11th", address: "delhi" },
  {
    studentName: "raj singh",
    marks: "85%",
    class: "11th",
    address: "maharastra",
  },
  {
    studentName: "aastha",
    marks: "93%",
    class: "10th",
    address: "madhypradesh",
  },
];
const tabdiv = document.querySelector(".tabdiv");
const par = document.querySelector(".para");
const randerstudent = (student) => {
  tabdiv.innerHTML = "";
  student.forEach((student) => {
    const newdiv = document.createElement("div");
    newdiv.classList.add("gs");
    newdiv.innerHTML = `
    <p>student name:${student.studentName}</p>
    <p>marks:${student.marks}</p>
    <p>class:${student.class}</p>
    <p>address: ${student.address}</p>`;
    tabdiv.append(newdiv);
  });
};
randerstudent(student);
const srcbtn = document.querySelector("#srcbtn");
const inp = document.querySelector("#input");
inp.addEventListener("input", () => {
  const inpval = inp.value.toLowerCase();
  const fillterstudent = student.filter((student) => {
    return student.studentName.startsWith(inpval);
  });
  randerstudent(fillterstudent);
  if (fillterstudent.length === 0) {
    par.innerText = "No students found.";
  } else {
    par.innerText = "";
  }
});
