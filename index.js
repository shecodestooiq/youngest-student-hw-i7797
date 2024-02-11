
 
 function showYoungestStudent(students) { 

    {
       var nage = 0
       var age =[]
    
         for(var i=0 ;i<students.length;i++){
          age[i]=students[i].age
          nage=Math.min.apply([i] , age)
      } 
         {
           console.log(nage)
         }
      }
      

 }

 var ageStudent = 
 [{name : 'Salman' , age :27},
 {name:'Nura' , age : 25} ,
 {name:'Aqmar', age:45},
 {name :'sultan' , age :30},
 {name : 'Metha' , age:35},
 {name:'Rami', age:17}
 ]
  showYoungestStudent(ageStudent)

module.exports = showYoungestStudent;