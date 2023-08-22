const submitBtn = document.querySelector("#sub");
const inputs = document.querySelectorAll("form input");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    inputs.forEach(function(input){
        if(!input.value){
            input.parentElement.classList.add("error");
        }
        else{
            input.parentElement.classList.remove("error");
            if(input.type=='email'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove("error");
                }
                else{
                    input.parentElement.classList.add("error");
                }
            }
        }
    })
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }