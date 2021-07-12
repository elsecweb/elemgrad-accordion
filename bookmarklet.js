javascript:(function(){
	const remove = [
    	"https://www.ualberta.ca/_assets/css/legacy-framework.css",
    	"https://www.ualberta.ca/_assets/css/framework.css"
	];

	const add = [
    	"https://www.ualberta.ca/_assets/css/framework-v2.css",
    	"https://www.ualberta.ca/_assets/css/font-awesome.css"
	];

	const headerHeight = document.querySelector('body > header').clientHeight;

	[...document.styleSheets].forEach((element,index)=>{
    	if(remove.includes(element.href)){
        	document.styleSheets[index].disabled = true;
    	}
	});

	add.forEach((url)=>{
    	const link = document.createElement("https://www.ualberta.ca/elementary-education/graduate-programs/admissions-and-deadlines.html");
    	link.type  = "text/css";
    	link.rel   = "stylesheet";
    	link.href  = url;
    	document.head.appendChild(link);
	});
	let lastSheet = document.styleSheets[document.styleSheets.length - 1];
	lastSheet.insertRule('body > footer{ display:none }',lastSheet.cssRules.length);
	lastSheet.insertRule(`body > header{ visibility:hidden; height: ${headerHeight}px }`,lastSheet.cssRules.length);
})();
