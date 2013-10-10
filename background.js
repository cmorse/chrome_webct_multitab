/*!
 * Copyright (c) 2011 Caleb Morse
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */

var localStorageName = "domains";

chrome.cookies.onChanged.addListener(function(changeInfo) {
	var cookie = changeInfo.cookie;
	if(localStorage[localStorageName] == null) {
		return;
	}
	var domains = JSON.parse(localStorage[localStorageName]);
	
	for(var i = 0; i < domains.length; i++) {
		if(cookie.domain == domains[i]) {
			if(cookie.name == "uid2") {
				removeCookie(cookie);
			}
		}
	}
});

function removeCookie(cookie) {
  var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain +
            cookie.path;
  chrome.cookies.remove({"url": url, "name": cookie.name});
}
