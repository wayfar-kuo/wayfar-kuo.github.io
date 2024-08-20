function redirectBasedOnAge() {  
    var age = document.getElementById('ageInput').value;  
    if (age == 168) {  
        window.location.href = 'class.html';  
    } else {  
        window.location.href = 'index.html';  
    }  
}  