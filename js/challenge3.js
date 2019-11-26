// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  

//   $("#ch3form").click(function() {
//     var fruit = $("#fruit"); 
//     if($("select[name ='fruit'] option:selected").length == 0) 

//     {
//         alert("You must pick a fruit!"); 
//         return false; 
//     }
//     else 

//     {
//         return true; 
//     }


//   })
$(document).ready(function(){
$('#ch3form').submit(function() {
    var fruit = $('input[name="fruit"]'); 
    for (let i = 0; i < fruit.length;i++){
        if (fruit[i].checked)
        return true; 

    }
            alert("You must pick a fruit!"); 
            return false; 
    })  

$('#ch3form').submit(function() {
    var standing = $('input[name="standing"]'); 
    for (let i = 0; i < standing.length;i++){
        if (standing[i].checked)
        return true; 
    }

    alert("You must pick a standing!"); 
    return false; 

    }) 
}) 
  







// $("#ch3form").ready(function(){
//         $('input[type="checkbox"]'.click(function(){
//         if ($("#fruit").prop("checked")==true);   
//         else {
//             alert("You must pick a fruit!")
//         }
// }))}
