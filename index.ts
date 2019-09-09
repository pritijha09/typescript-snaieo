// Import stylesheets
import './style.css';

class AdminTS {
  constructor() {
    let btn = document.getElementById("sub");
    btn.addEventListener("click", (e:Event) => this.getTrainingName(4));
  }
  getTrainingName(n:number){
    var name= document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["email"];
    var phone = document.forms["RegForm"]["Phonenumber"];
    var address = document.forms["RegForm"]["Address"];
    var subject = document.forms["RegForm"]["subject"];
     var password = document.forms["RegForm"]["Password"];
     debugger
     if(name.value == ""){
       window.alert("Please enter your name");
       name.focus();
       return false;
     }

     if(address.value == ""){
       window.alert("please enter your address");
       address.focus();
       return false;
     }

     if(email.value == ""){
       window.alert("please enter valid email");
       email.focus();
       return false;
     }

     if(email.value.indexOf("@", 0) < 0){
       window.alert("please enter valid email");
       email.focus();
       return false;
     }

     if(email.value.indexOf(".", 0) < 0){
       window.alert("please enter valid email");
       email.focus();
       return false;
     }

     if(phone.value == ""){
       window.alert("please enter phone");
       phone.focus();
       return false;
     }

     if(address.value == ""){
       window.alert("please enter valid address");
       address.focus();
       return false;
     }

     if(password.value == ""){
       window.alert("please enter valid password");
       password.focus();
       return false;
     }
  }
}

// start the app
new AdminTS();
