function validate2() {
    
    var resultFirstName = alphaNumCheck(document.forms["your information"]["FirstName"].value);
    var image1 = getImage(Boolean(resultFirstName), "FirstName");
    var labelNotifyFirstName = getNotificationName(Boolean(resultFirstName), "FirstName") ;
    document.getElementById("FirstName").appendChild(image1);
    document.getElementById("FirstName").appendChild(labelNotifyFirstName);

    var resultLastName = alphaNumCheck(document.forms["your information"]["LastName"].value);
    image1 = getImage(Boolean(resultLastName), "LastName");
    var labelNotifyLastName = getNotificationName(Boolean(resultLastName), "LastName") ;
    document.getElementById("LastName").appendChild(image1);
    document.getElementById("LastName").appendChild(labelNotifyLastName);

    var resultGender = true;
    image1 = getImage(Boolean(resultGender), "gender");
    var labelNotifyGender = getNotificationGender(Boolean(resultGender), "gender") ;
    document.getElementById("Gender").appendChild(image1);
    document.getElementById("Gender").appendChild(labelNotifyGender);

    var resultState = true;
    
    image1 = getImage(Boolean(resultState), "state");
    var labelNotifyState = getNotificationState(Boolean(resultState), "state") ;
    document.getElementById("State").appendChild(image1);
    document.getElementById("State").appendChild(labelNotifyState);

if(resultLastName == true && resultFirstName == true && resultGender == true && resultState == true){
    location.href = "validation2.html";
}
    
}

function getNotificationName(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Must contain only alphabetic or numeric characters";
    return label;
}

function getNotificationGender(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Select from given list";
    return label;
}
function getNotificationState(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "**Required: Select from given list";
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

