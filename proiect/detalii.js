var load;

function load() {
  load = setTimeout(showPage, 70);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

var prods;

let id = window.location.search.split(/=/g)[1];
let url = `https://magazin-c1a8a.firebaseio.com/produse/${id}.json`;
fetch(url)
  .then(response => response.json())
	.then(produse => {
    prods = produse;
		document.querySelector(".imagine_detaliu").src= produse.imagine_detaliu;
		document.querySelector(".descriere").innerHTML = produse.descriere;
    document.querySelector(".nume_detaliu").innerHTML = produse.nume;
    document.querySelector(".pret_detaliu").innerHTML = produse.pret.toFixed(2);
    document.querySelector(".moneda_detaliu").innerHTML = produse.moneda;
    document.querySelector(".buc_stoc").innerHTML = produse.buc_stoc;
    document.querySelector(".stoc").innerHTML = produse.stoc;
    document.querySelector(".bucati").innerHTML = produse.bucati;
	load();
})

var lista = [];

function adauga() {
  var cos = window.localStorage.getItem("cos");
  if(cos === null || cos === "")
  {
    lista = [];
  }
  else {
    lista = JSON.parse(cos);
  }

  if(document.getElementById("campcantitate").value > 0){
    var flag = 0;
    for (var i = 0; i < lista.length; i++){
        if(lista[i].nume === prods.nume){
            flag = 1;
            lista[i].cantitate = String(parseInt(lista[i].cantitate) + parseInt(document.getElementById("campcantitate").value));
        }
    }
    if(flag === 0)
      lista.push({cantitate : document.getElementById("campcantitate").value, imagine : prods.imagine, moneda : "&nbsp;EUR", nume : prods.nume, pret : prods.pret});
    window.localStorage.setItem("cos", JSON.stringify(lista));
    document.getElementById("mesaj").innerHTML = "<p>Produsul a fost adaugat in cos</p>";
    document.getElementById("mesaj").style.visibility = "visible";
    document.getElementById("mesaj").style.color = "green";
    setTimeout(function(){document.getElementById("mesaj").style.visibility = "hidden";}, 1000);
  }
  else {
    document.getElementById("mesaj").innerHTML = "<p>Cantitatea trebuie sa fie pozitiva</p>";
    document.getElementById("mesaj").style.visibility = "visible";
    document.getElementById("mesaj").style.color = "red";
    setTimeout(function(){document.getElementById("mesaj").style.visibility = "hidden";}, 1000);
  }
}


