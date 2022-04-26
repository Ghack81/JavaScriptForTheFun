// Le but de ce jeu s'inspire de Codingame
// Dans ce test nous devous avoir en sortie 3a4b5c
function encode(str){
    //Mettre tout en minuscule
    str = str.toLowerCase();
    //Initializé Compteur
    let count = 1;
    // String vide
    let code = "";
    //Différencie les lettres
    for (let i = 0; i < str.length; i++) {
      
        if (str[i] == str[i+1]) {
        //console.log(str[i] + "=" + str[i+1]);
        count++;
      } 
       else{ 
         //console.log(str[i] + "!=" + str[i+1]); 
         //console.log(+ count + str[i]);
         code = code + count + str[i];
         //OU code += count + str[i];
         count = 1;
      }
    }
    return code;
  }
  console.log(encode("aaAbBbbcCCcc"));

