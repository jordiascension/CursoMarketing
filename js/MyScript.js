function submitForm(){   
    var txtname = document.getElementById("txtname").value;   
    var txtsurname = document.getElementById("txtsurname").value; 
    var txtidcard = document.getElementById("txtidcard").value; 

    alert("Hello " + txtname + " " + txtsurname + ", your id card is " + txtidcard + 
          ". You're welcome!!");    
}
