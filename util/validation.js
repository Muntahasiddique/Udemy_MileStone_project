function isEmpty(value) {
    return !value || value.trim() === '';
}
function userCredentialsValidation(email , password) {email &&
    email.includes('@') &&
  password &&
  password.trim().length >= 6 }

function userSetailsValidation(email , password , fullname , street , postalCode , city) {
    return (
        userCredentialsValidation(email , password
        ) &&
     !isEmpty(fullname) &&
     !isEmpty(street) && !isEmpty(postalCode) && !isEmpty(city)
       
       
    );
 
}
function emailValidation(email , confirmEmail) {
    return email === confirmEmail;
    
}
module.exports = {userCredentialsValidation : userCredentialsValidation , userSetailsValidation : userSetailsValidation , emailValidation : emailValidation};