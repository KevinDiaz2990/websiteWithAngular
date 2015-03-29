(function(){function login(it
/**/) {
var out='<html><title>Sign in</title><body><form action = \'/\'  method = \'POST\'>Username: <input type = \'text\' name = \'Username\' value = \''+(it.username)+'\'><br>Password: <input type = \'password\' name = \'Password\' value = \''+(it.password)+'\'><br></form><a href = "/signup"> Not a user? Sign up! </a></body></html>';return out;
}var itself=login, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['login']=itself;}}());