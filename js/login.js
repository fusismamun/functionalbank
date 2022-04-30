// This is not a staderd systeam 
document.getElementById('login-btn').addEventListener('click', function(){
    // get user email 
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // get user password 
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if(userEmail == 'mamun@gmail.com' && userPassword == 'mamun'){
        // add a new html file 
        window.location.href = 'banking.html'
    }
    else{
        alert('user unvalid');
    }
});
