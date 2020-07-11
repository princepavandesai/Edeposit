document.addEventListener("DOMContentLoaded",fns);

function fns(){
	// auto tabbing between number fields
	/*var inputs = document.querySelectorAll("form input");
	for (i in inputs) {
		if (i < inputs.length) {
			inputs[i].addEventListener("input",function(){
				if (this.value.length === 1) {
					if (this.nextSibling.tagName == "INPUT") {
						this.nextSibling.focus();
						this.nextSibling.select();
					}
				}
			});
		}
	}*/

	var today = new Date();
	    var date1 = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();//var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
	    document.getElementById("checkdate").value = date1;


	// flipping
	var btn = document.querySelector("button");
/*	btn.addEventListener("click", function(){
		var checkbox = document.querySelector("input[type=checkbox]");
		checkbox.checked = !checkbox.checked;
	});*/
}
