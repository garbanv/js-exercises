/*
Only students who have attended enough classes are eligible to sit an exam.
You have an array named "attendanceCounts"  which contains all the students' names and their attendance counts.
Produce a new array named "eligibleStudentNames" containing only the NAMES 
of the students who have attended AT LEAST 8 classes.
*/
//COMPLETED

var attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];
// for (x=0; x < attendances.length; x++) {
//   console.log( attendances[x][0])
// }
var eligibleStudentNames = attendances.map(function(attendance,index){
  if(attendance[1]>=8){
    console.log(attendance[0])
  }
}); // TODO: Complete this line.

console.log(eligibleStudentNames);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
Note: student attendance counts should NOT be included in your console output.
*/
