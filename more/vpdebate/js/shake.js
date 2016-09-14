$(function() {	
$.fn.shakebiden = function() {
	this.each(function(i) {
	$(this).css({
		"position": "absolute"
	});
for (var x = 1; x <= 3; x++) {
	$(this).animate({
		left: -25,
		left: 6
	}, 44).animate({
		left: 0
	}, 50).animate({
		left: 25
	}, 10).animate({
		left: 0
	}, 50);
}
});
return this;
};

$("#biden").hover(function(){
$(this).shakebiden();
});

});


$(function() {	
$.fn.shakeryan = function() {
	this.each(function(i) {
	$(this).css({
		"position": "absolute"
	});
for (var x = 1; x <= 3; x++) {
	$(this).animate({
		right: -25,
		right: 6
	}, 44).animate({
		right: 0
	}, 50).animate({
		right: 25
	}, 10).animate({
		right: 0
	}, 50);
}
});
return this;
};

$("#ryan").hover(function(){
$(this).shakeryan();
});

});