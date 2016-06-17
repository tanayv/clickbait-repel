
// read this page's text into a string
var page_text = document.body.innerText;

// extract all the string's tokens (words) into an array
var page_text_array = page_text.split(" ");

// output the first word
alert(page_text_array[0]);

