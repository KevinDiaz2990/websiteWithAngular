(function(){function other_page(it
/**/) {
var out='<!DOCTYPE html><html><title>Other Page </title><body> <h1>Blog Post</h1><br><form method = \'POST\'><textarea name="Post" cols="120" rows="20"> '+(it.Post)+'</textarea></form> </body></html>';return out;
}var itself=other_page, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['other_page']=itself;}}());