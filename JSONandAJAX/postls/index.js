var xhr = new XMLHttpRequest;

function sendPostRequest(name,job){
var userData = {
       name : name.value,
       job : job.value
   };
   xhr.open('POST','https://reqres.in/api/users');
   xhr.setRequestHeader("Content-Type", "application/json");

   xhr.send(JSON.stringify(userData));

   xhr.onreadystatechange = function (){
       if(xhr.readyState === 4 && xhr.status === 201) {
           setInStorage();
       }
   };
}

function setInStorage(){
   var output = xhr.response;
   sessionStorage.setItem("user_ID",output);

};