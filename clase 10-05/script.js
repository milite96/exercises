const grades = [
    { subject: "Math", grade: 5 },
    { subject: "English", grade: 9 },
    { subject: "French", grade: 7 },
    { subject: "Sciences", grade: 5 },
  ];

  function calculateMedia(){ 
  let gradeSum = 0;
  for (let index = 0; index < grades.length; index++){
    gradeSum = gradeSum + grades[index].grade;
  }

  let media = gradeSum / grades.length;

  return console.log(media);
}

calculateMedia();

    // const highestGrade = grades.reduce((a,b)=>{
    //     return (a.grade > b.grade) ? a:b;
    // })

    // console.log(highestGrade);  