$('.gallery').click(function(){
	$('.max_wrapper').fadeIn();
	// $('.project_popup').fadeIn();
	console.log('clickedIn');

	$('.max_wrapper').click(function(){
		$('.max_wrapper').fadeOut();
		// $('.project_popup').fadeOut();
		console.log('clickedOut');
	});
});


// $('.word').click(function(){
// 	console.log('open')
// 	$('.active').fadeIn();
// 	console.log('changed');

// 	$('.max').click(function(){
// 		$('.active').fadeOut();
// 		console.log('closed')
// 	})
// });