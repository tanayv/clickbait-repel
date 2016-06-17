
// read this page's text into a string
var page_text = document.body.outerHTML;

// extract all the string's tokens (words) into an array
var page_text_array = page_text.split(" ");

// output all words
/*for (var word = 0; word < page_text_array.length; word = word + 1) {
	background_page.console.log("Hello world!");
}*/

document.getElementById("result").innerHTML = ("second token: " + page_text_array[1]);