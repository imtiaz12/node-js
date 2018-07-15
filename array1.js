//1
var students=["imtiaz","ali","saqib"];
var records=[[1,2,3],["islamabd","lahore","karachi"],["gmail","yahoo","hotmail"]];
var newarray=records[0].map(function(values){
var newarray1=records[1].map(function(values){
var newarray3=records[2].map(function(values){
return newarray3;
})
return newarray1;
})
return newarray;

})
var i;
for(i=0;i<students.length;i++){
    console.log(students[i]);
    console.log(records[i]);
    
}
//2
function array(values){
var array1=["imtiaz","ali","sajid","usama"];
var array2=array1.pop();
var array3=array1.shift();
var array4=[array2].concat([array3]);
return array4;

}
console.log(array());
//3
function array1(values){
    var array=["imtiaz","sajid","usama"];
    var array2=array.push=("saqib");
    var array3=array.unshift=("ali");
    var array4=[array3].concat([array2]);
    return array4;
}
console.log(array1());
