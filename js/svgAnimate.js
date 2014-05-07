function layer(svg, label){
	return svg.select("[*|label='" + label + "']");
};

function layers(svg, label){
	return svg.selectAll("[*|label]");
};
function loadsvg(name){
	d3.xml("svg/" + name + ".svg",
			"image/svg+xml", function(xml) {
				document.getElementById(name)
		.appendChild(xml.documentElement);
			});
};


loadsvg("checkpoint_sizes");
//loadsvg("checkpoint_times");
times = d3.select("#checkpoint_times svg");
times.attr("width", 2000).attr("height", 2000);
var svg;

Reveal.addEventListener("ready", function (event){
	svg = d3.select("#checkpoint_sizes svg");
	layer(svg, "highlight_nompi")
		.transition().style({opacity: 0});
	layer(svg, "highlight_mpi")
		.transition().style({opacity: 0});
	svg.attr("width", 800).attr("height", 400)


});

Reveal.addEventListener( 'fragmentshown', function( event ) {
	layer(svg, event.fragment.id)
		.transition()
	    .style({opacity: 1});
});


Reveal.addEventListener( 'fragmenthidden', function( event ) {
	layer(svg, event.fragment.id)
		.transition()
		.style({opacity: 0});
});

