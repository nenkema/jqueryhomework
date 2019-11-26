// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}

$("#useBilling").click(function() {
	var home = $("#home"); 
	if (this.checked) {
		// $("#home").atrr("#billing"); 
		console.log("select"); 
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true); 
	}

	else{
		// $("#home").attr(""); 
		console.log("unselect"); 
		$("#home").val("");
		$("#home").prop("disabled", false);
	}
})

