$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,
	});

	TweenLite.set('#w2',{opacity:0})
	var tl = new TimelineMax({delay:.5,repeat:-1})
	tl.fromTo('#w1', 3,{x:0,y:0},{bezier:[{x:12, y:-12},{x:300, y:-55},{x:480, y:0}],ease:Linear.easeInOut})
	.set('#w1',{opacity:0})
	.set('#w2',{opacity:1})
	.fromTo('#w2', 3,{x:0,y:0},{bezier:[{x:-10, y:15},{x:-360, y:40},{x:-480, y:0}],ease:Linear.easeInOut})
	// TweenMax.staggerFrom(text.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02, allDone);
	var text = new SplitText(".w1", {linesChars:"line++"});
	splitTextTimeline = new TimelineLite();
	


	function text_section1(){
		splitTextTimeline.staggerFrom(text.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
	}

	function text_section1_bubar(){
		 splitTextTimeline.staggerTo(text.words, 0.5, {x:100, autoAlpha:0, delay:4}, 0.025)
	}

	function srolldown(){
		TweenMax.from($(".scrolldown"), 1, {opacity:"0",transform:"scale(2)", top:"70%", delay: 9, ease:Back.easeOut});
	}
});

