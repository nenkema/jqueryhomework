console.log("here")
var imgs = $(".preview");
var msg = "Hover over an image below."; 
for (let i = 0; i < imgs.length; i++) {
	$(imgs[i]).mouseover(function() {
		console.log("mouseover");
		console.log(imgs); 
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')"); 
		$("#image").text(imgs[i].alt); 
	 })

	$(imgs[i]).focus(function() {
		console.log("focus"); 
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')"); 
		$("#image").text(imgs[i].alt); 
	 })

	$(imgs[i]).mouseout(function() {
		console.log("mouseout"); 
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')"); 
		// $('#image').css("backgroundImage", "url('')"); 
		$("#image").text(msg); 
	})

	$(imgs[i]).blur(function() {
		console.log("blur"); 
		$('#image').css("backgroundImage", "url('"+imgs[i].src+"')"); 
		// $('#image').css("backgroundImage", "url('')"); 
		$("#image").text(msg); 
	})
}
