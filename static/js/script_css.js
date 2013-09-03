$(document).ready(function() {

css_files=["static/css/bootstrap.css", "static/css/bootstrap.min.css", "static/css/main.css"];
js_files=["static/js/bootstrap.js", "static/js/bootstrap.min.js", "static/js/bootstrap-carousel.js", "static/js/bootstrap-dropdown.js", "static/js/custom.js", "static/js/jquery-1.8.2.min.js", "static/js/jquery.carouFredSel-6.2.1-packed.js", "static/js/layout.js"];


for(var i=0; i<css_files.length; i++)
	{
		var css = document.createElement("link");
		css.rel="stylesheet";
		css.type = "text/css";
		css.href = css_files[i];
		document.body.appendChild(css);
		// var s = new MySuperObject();
	}

for(var i=0; i<js_files.length; i++)
	{
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = js_files[i];
		document.body.appendChild(js);
		// var s = new MySuperObject();
	}
});