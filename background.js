var background_page = chrome.extension.getBackgroundPage();

background_page.console.log("Hello world!");

for (var number = 1; number < 10; number = number + 1) {
	background_page.console.log(number);
}

background_page.console.log(page_text);