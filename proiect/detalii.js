var load;

function load() {
  load = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

let id = window.location.search.split(/=/g)[1];
let url = `https://magazin-c1a8a.firebaseio.com/produse/${id}.json`;
fetch(url)
  .then(response => response.json())
	.then(produse => {
		document.querySelector("#imagine_detaliu").src= produse.imagine_detaliu;
		document.querySelector("#descriere").innerHTML = produse.descriere;
    document.querySelector(".nume_detaliu").innerHTML = produse.nume;
    document.querySelector(".pret_detaliu").innerHTML = produse.pret.toFixed(2);
    document.querySelector(".moneda_detaliu").innerHTML = produse.moneda;
  load();  
})

