//PRUEBA INICIAL

//let ArraySimulation = [];

//for (a=1; a<20; a++){

  //  for (b=1; b<20; b++){
    //    ArraySimulation.push(`${a} * ${b} = ${a*b}`)

//    }

//}

//console.log(ArraySimulation);




//DOMAIN NAME GENERATOR//

let pronoun = ['the', 'our', 'that'];
let adj = ['great', 'big', 'nice'];
let noun = ['jogger', 'racoon', 'bee'];
let extension =['.com', '.cl', '.net', '.us', '.ar', '.io']

for (let i=0; i<pronoun.length; i++){
    for (let j=0; j<adj.length; j++){
        for (let k=0; k<noun.length; k++){
            for (let l=0; l<extension.length; l++){
                console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`);
            }
        }
    }
}

