// var addItem = document.getElementsByClassName("add");

// 		for(var i=0; i=addItem)
var lista = [

];




function post(){
        
    fetch('https://magazin-c1a8a.firebaseio.com/.json', {
        mode: 'cors',
        credentials: 'omit'
        })
        .then(response => response.json())
        .then(data => {
            lista=data;
            
        })
    }
function adauga(){
var cos= [
];
    

        
    

}
// var produse_cos= [

// ];

// cos=produse_cos;

// 		function adauga(){
// 			// var errField = document.querySelector('[class="errors"]');
// 			// errField.textContent = null;
// 			let id = window.location.search.split(/=/g)[1];
// 			let url = `https://magazin-c1a8a.firebaseio.com/cos/${id}.json`;
// 			{
// 			document.querySelector(".cantitate")=produse_cos.cantitate.value;
// 			// document.getElementsByClassName("cantitate").value;
// 			var denumire = document.querySelector(".nume_detaliu").innerHTML.produse_cos.nume;
// 			var produse_cos=document.querySelector(".pret_detaliu").innerHTML=produse_cos.pret;
// 			var produse_cos=document.querySelector(".pret").innerHTML.pret;
// 	}
    
// 				for( var i in cos.produse_cos){
// 					if (cos.produse_cos[i]===undefined){continue;}
        
// 					for (var i=0; i<cos.length; i++){
// 						if(cos[i].produse_cos === produse_cos){
// 							// errField.textContent = "Acest element exista deja!";
// 							// return;
// 						}
// 					}
// 				}
// 			// var el={
// 			// 	produse,
// 			// 	marcat:false
// 			// };
// 				cos.push(produse_cos);
// 				localStorage.setItem("produse_cos", produse_cos);

        
// 			// draw();
// 			resetFormular();
// 			// verifica();
// 		}

// 		// function resetFormular() {
// 		// 	document.getElementById("formular").reset();
// 		// }
// 		// function verifica(){
    
// 		// 	for(var i=0; i<=cos.length; i++){
// 		// 		if (cos.length!==0){
// 		// 			document.getElementsByClassName("mesaj").style.display="none";
// 		// 		}
// 		// 	}
// 		// }

// 		function resetFormular() {
// 			document.getElementsByClassName("formular").reset;
// 		}
