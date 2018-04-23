

var apikey = '&api_key=gvzNoELlE3SY2q61qUeiVv4lzILG0nqu&limit=10&rating=G'
var query = '&q=otters'
var url = 'https://api.giphy.com/v1/gifs/search?' + query + apikey;


function setup(){
	noCanvas();
	loadJSON(url, gotData);

}

function gotData(data){
	// println(data.data[0].images.original.url);
	for (var i = 0; i < giphy.data.length; i++){
		createImg(giphy.data[i].images.original.url);
	}

}

function draw(){
	background(0);
	if(popularGifs){
		createImg();
	}
}


