var url = 'http://api.wordnik.com:80/v4/word.json/'
var synonymSearch = '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10';
var apiKey = '&api_key=108defecc2880f5ffc0010fb46809c1f0a327acfcd26707c0';

var button;
var word = "animal";

function setup(){
noCanvas();
loadJSON(url, gotWords);

button = createButton('get synonyms for'+'#', word);
button.mousePressed(askWordnik);


}


function gotWords(data){
	// println(data[0].words[0, 1, 2, 3, 4, 5]);
	button.html(data[0].words[0, 1, 2, 3, 4, 5]);

}

function askWordnik(){
	var index1 = floor(random(0, data.length));
	var index2 = floor(random(0, data[index1].words.length));
	word = data[index1].words[index2];
	loadJSON(url + word + synonymSearch + apiKey, gotWords)
}
