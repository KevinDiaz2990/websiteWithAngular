(function(){function other_page(it
/**/) {
var out='<!DOCTYPE html><html><title>Other Page </title><body>  ';if(it.name){out+='<p>HI '+(it.name)+' </p> ';}else{out+='<p> This is another page to view </p>';}out+='<br>';if(it.telephone){out+='<p> Your telephone number is '+(it.telephone)+'<p>';}else{out+='<p> You have no telephone number<p>';}out+='<br></body></html>';return out;
}var itself=other_page, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['other_page']=itself;}}());