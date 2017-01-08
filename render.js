var dataset = [{
	"id": 1,
	"data": "hello"
}, {
	"id": 2,
	"data": "hi"
}, {
	"id": 3,
	"data": "random"
}];

var dataset2 = [{
	"id": 1,
	"data": "hello"
}, {
	"id": 2,
	"data": "hi"
}, {
	"id": 3,
	"data": "proper"
},
{
	"id": 4,
	"data": "wild"
}];

var paragraph_g = d3.select("#chart") //.append("svg").append("g");

paragraph_g
	.selectAll("p")
	.data(dataset, function(d) {
		return d.id;
	})
	.enter()
	.append("p")
	.text(function(d) {
		return d.data;
	});

paragraph_g
	.selectAll("p")
	.data(dataset2, function(d) {
		return d.id;
	})
	// .text(function(d){
	// 	return d.data
	// })
	.enter()
	.append("p")
	.text(function(d) {
		return d.data;
	});


