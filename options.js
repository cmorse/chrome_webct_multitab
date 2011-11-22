var localStorageName = "domains";

function loadOptions() {
	var domains = localStorage[localStorageName];

	if(domains == undefined) {
		domains = "";
	} else {
		domains = JSON.parse(domains);
	}

	document.getElementById("domains").value = domains;
}

function saveOptions() {
	var str = document.getElementById("domains").value;
	var domains = str.split(/\r\n?/g);

	localStorage[localStorageName] = JSON.stringify(domains);
}
