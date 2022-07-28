function validate2() {
    var resultEmail = emailCheck(document.forms["contact information"]["email"].value);
    var image1 = getImage(Boolean(resultEmail), "email");
    var labelNotifyEmail = getNotification(Boolean(resultEmail), "email") ;
    document.getElementById("Email").appendChild(image1);
    document.getElementById("Email").appendChild(labelNotifyEmail);

    var phoneNumCheck = phoneCheck(document.forms["contact information"]["phone"].value);
    image1 = getImage(Boolean(phoneNumCheck), "phone");
    var labelNotifyPhone = getPhoneNotification(Boolean(phoneNumCheck),"phone");
    document.getElementById("Phone").appendChild(image1);
    document.getElementById("Phone").appendChild(labelNotifyPhone);

    var addresscheck = addressCheck(document.forms["contact information"]["address"].value);
    image1 = getImage(Boolean(addresscheck), "address");
    var labelNotifyAddress = getAddressNotification(Boolean(addresscheck),"address");
    document.getElementById("Address").appendChild(image1);
    document.getElementById("Address").appendChild(labelNotifyAddress);
}
function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    return label;
}
function getPhoneNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric.";
    return label;
}
function getAddressNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Must be in the form of city & state. example: Ames,IA";
    return label;
}
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct2.png' : './wrong2.png';
    return image;
}

function emailCheck(email) {
   var atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
     var   periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    
    return false;
}
function addressCheck(address) {
    var atSplit = address.split(',');
     if (atSplit.length == 2 && alphabetonly(atSplit[0] +atSplit[1] )) {
   return true;
   
         }
     
     
     return false;
 }
function phoneCheck(phone){

   var phonenumonly = /^\d{10}$/;
var phonewithdash = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

    if(phone.match(phonenumonly)){
        return true;
    }

if(phone.match(phonewithdash)){
   return true;
}

    return false;
}
    
function alphabetonly(entry){
    let regex = /^[A-Za-z]+$/;
    if(entry != null && entry.match(regex)){
        return true;
    }
    
        return false;
    
}








function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } 
        return false;
    
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}