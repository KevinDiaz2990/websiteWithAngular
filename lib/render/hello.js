(function(){function hello(it
/**/) {
var out='<!DOCTYPE HTML><html><body><form action = \'/\', method = \'POST\'>Email: <input type = \'text\' name = \'Email\' value = "'+(it.email)+'"><br>From : <input type = \'text\' name = \'From\' value = "'+(it.from)+'"><br>To:    <input type = \'text\' name = \'To\' value = "'+(it.to)+'"><br>Number: <input type = \'text\' name = \'Number\' value = "'+(it.number)+'" maxlength = 11 > <br><input type = \'submit\' value = \'Submit\'></form></body></html>';return out;
}var itself=hello, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['hello']=itself;}}());