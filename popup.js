let startBtn = document.getElementById('startBtn');

startBtn.onclick = function() {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
		chrome.tabs.sendMessage(tabs[0].id, 'button_clicked');
	 });
};