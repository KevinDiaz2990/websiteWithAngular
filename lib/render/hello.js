(function(){function hello(it
/**/) {
var out='<!DOCTYPE HTML><html><body><form action = \'/signup\', method = \'POST\'>Username: <input type = \'text\' name = \'Username\' value = "'+(it.username)+'" ><br>Email: <input type = \'text\' name = \'Email\' value = "'+(it.email)+'"><br>Password: <input type = \'password\' name = \'Password\' value = "'+(it.password)+'" ><br>Confirm Password: <input type = \'password\' name = \'CPassword\' value = "'+(it.cpass)+'"><br><input type = \'submit\' value = \'Submit\'></form></body></html>';return out;
}var itself=hello, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['hello']=itself;}}());