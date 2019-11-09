
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      var ourData = JSON.parse(req.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  req.onerror = function() {
    console.log("Connection error");
  };

  req.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i in data) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii in data[i].foods.likes) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii in data[i].foods.dislikes) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

// var pageCounter=1;
// var btn=document.getElementById("btn");
// var animalCont=document.getElementById("animal-info");

// btn.addEventListener("click",function()
// {

//         var req=new XMLHttpRequest();
//         var link='https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json';
//         req.open('GET',link);
//         req.onload=function()
//         {
//             var ourData=JSON.parse(req.responseText) ;
//             console.log(ourData);
//             renderHTML(ourData);
//         }; 
//         req.send();  
//         pageCounter++; 

//         if(pageCounter>3)
//         {
//             btn.classList.add ("hide-me");
//         }

// });

// function renderHTML(data)
// {
//     var htmlString="";

//     for (i = 0; i < data.length; i++) {
//         htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
//         // for (ii = 0; ii < data[i].foods.likes.length; ii++) {
//         //   if (ii == 0) {
//         //     htmlString += data[i].foods.likes[ii];
//         //   } else {
//         //     htmlString += " and " + data[i].foods.likes[ii];
//         //   }
//         }
    
//         // htmlString += ' and dislikes ';
    
//         // for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
//         //   if (ii == 0) {
//         //     htmlString += data[i].foods.dislikes[ii];
//         //   } else {
            
//         //     htmlString += " and " + data[i].foods.dislikes[ii];
//         //   }
//         // }
    
//         // htmlString += '.</p>';
    
//       //}

//     // for(i in data)
//     // {
//     //     htmlString+="<p>"+data[i].name+" is a "+data[i].species+" that likes to eat";

//     //     for(ii in data[i].foods.likes.length)
//     //     { 
//     //         if(ii==0)
//     //         {
//     //             htmlString+=data[i].foods.likes[ii];

//     //         }
//     //         else
//     //         {
//     //             htmlString+=" and  "+data[i].foods.likes[ii];
                 
//     //         }

            
//     //     }
//     //         htmlString+=".</p>";
//     // } l

//     // animalCont.insertAdjacentHTML('beforeend',htmlString);

// }




