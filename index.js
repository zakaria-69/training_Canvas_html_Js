function draw(){


const canvas = document.getElementById('foo');
const context = canvas.getContext('2d');



if (canvas.getContext){
    /*

                                   // Rectangles
    
    //{ce bloc de code dessine des carrés
    //décommenté ligne 10 pour voir le résultats dans un navigateur web

    canvas.getContext('2d');
    context.fillStyle = 'rgb(200,0 ,0)';
    context.fillRect(10,10,50,50);
    context.fillStyle = 'rgb(0,0,200 ,0.5)';
    context.fillRect(30,30,50,50);
    context.strokeStyle = 'rgb(0,86,27)';
    context.strokeRect(50,50,50,50) ;

 //}    */
/*                                  
                                    //trajets (ici triangle)

//{ce bloc de code dessine des triangles dont un rempli et un ayant seulement les contours
//decommentez ligne 25 pour voir le résultat sur un navigateur web

context.beginPath();
context.moveTo(75,50);
context.lineTo(100,75);
context.lineTo(100,25);

context.fill();

 context.moveTo(150,100);
context.lineTo(200,150);
context.lineTo(200,50);
context.lineTo(150,100)
context.stroke();
//} */

/*
                              //move To 

//{ce bloc de code dessine un emoticone qui souris 
//décommentez ligne 45 pour voir le résultat dans un navigateur web
context.beginPath();
context.arc(75,75,50,0 ,Math.PI * 2 ,true ) ; //Cercle éxtérieur
context.moveTo(110,75) //nouveau départ du stylo
context.arc(75,75,35,0, Math.PI, false) ; //bouche sens horaires
context.moveTo(65,65) ; //nouveau départ du stylo
context.arc(60,65,5,0,Math.PI * 2 ,true) //oeil gauche
context.moveTo(95,65) ; //nouveau départ du stylo
context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droit
    context.stroke(); // pour avoir uniquement les contours

//} */

/*
                            //line To
                            
//{ce bloc de code déssine 2 triangles dont un plein et un ayant seulement des contours
//décommentez ligne 62 pour voir le resultat dans un navigateur web
context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(105, 25);
    context.lineTo(25, 105);
    context.fill();

    // Triangle filaire
    context.beginPath();
    context.moveTo(125, 125)
    context.lineTo(125, 45);
    context.lineTo(45, 125);
    context.closePath();
    context.stroke();
//} */

   /*           
                        //arc

    //{Ce bloc de code dessine de multipe arc de cercles décommentez ligne 83
    //pour voir le résultat dans un navigateur web
    
  for (let i = 0; i < 4; i++) { //boucle sur les colonnes(y)
      for (let j = 0; j < 3; j++) { //boucles sur les lignes(x)
        context.beginPath();
        const x = 25 + j * 50; // abscisse (x)
        const y = 25 + i * 50; // ordonnée (y)
        const radius = 20; // rayon d'arc
        const startAngle = 0; // Point de départ du cercle
        const endAngle = Math.PI + (Math.PI * j) / 2; // Point final pour le cercle
        const counterclockwise = i % 2 !== 0; // sens de rotation horaire ou non

        context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        console.log(x,y,radius,startAngle,endAngle,counterclockwise )
        if (i > 1) {
          context.fill();
        } else {
          context.stroke();
        }
      }
    }
    context.beginPath();
    context.arc(210,55,50,0,Math.PI,true)
    context.fill();

    context.beginPath();
    context.arc(210,110,25,0,Math.PI *2);
    context.stroke();

    context.beginPath();
    context.arc(210,155,15,0,Math.PI /2 ,true);
    context.fill();
//} */




}
else{
    context.font = "30px san-serif";
    context.fillStyle='red';
    context.fillText('Error Display',70,80);         
}
}


