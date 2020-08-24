
var dadoUtente = (Math.floor(Math.random() * 5) + 1);
console.log(dadoUtente);

var dadoPc = (Math.floor(Math.random() * 5) + 1);
console.log(dadoPc);

if (dadoUtente > dadoPc) {
      console.log("hai vinto");
    } else if (dadoPc > dadoUtente){
      console.log("hai perso");
    } else {
      console.log("pari");
    }
