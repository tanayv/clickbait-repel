var text = ["These leaves are green. "];
text.push("Tomorrow is Friday. ");
text.push("Here are some spoons. ");
text.push("Here are 38 spoons. ");
text.push("Here are 7 things you won't believe about spoons.");
text.push("It is 10:00 pm right now.");
text.push("I am eating Chinese food.");
text.push("Here's what you didn't know about Chinese food.");
text.push("Have you been dealing with single life? Then you'll relate to these 15 tweets.");

for (var phrase = 0; phrase < text.length; phrase = phrase + 1) {
    document.write(text[phrase] + "<br />");
}