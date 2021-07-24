var nameVal=false;
function nameValidation()
{
    var re=/^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    var name=$('#name').val()
    if(name=="")
    {
        $("#name1").text("Name can't be empty");
        $('#name').focus()
        return false
    }
    else if(!re.test(name)){
        $("#name1").text("Invalid Name");
        return false
    }
    else if(name.length<3)
    {
        $("#name1").text("Name should be atleast 3 characters");
        return false
    }
    else{
        $("#name1").text("");
        return true
    }
}

function numberValidation()
{
    console.log("hey numbers")
    var num1=$('#number').val()
    if(num1=="")
    {
        $('#number1').text("Number can't be empty")
        return false;
    }
    else if(isNaN(num1))
    {
        $('#number1').text("Characters not allowed")
        return false;
    }
    else if(num1.length<10)
    {   
        $('#number1').text("Number should atleast 10 digits")
        return false;
    }
    else if(num1.length>10)
    {
        $('#number1').text("Number limit has exceeded")
        return false;
      
    }
    else{
        $('#number1').text("")
        return true;
        
    }
}

function subjectValidation(){
    var subject1=$('#subject').val()

        if(subject1.length=="")
        {
            $('#subject1').text("Subject can't be null")
            return false;
        }
        else{
            $('#subject1').text("")
            return true;
           
        }
}

function messageValidation()
{
    var message1=$('#message').val()
        
    if(message1.length=="")
    {
        $('#message1').text("Message can't be null")
        return false;
       
    }
    else{
        $('#message1').text("")
        return true;
       
    }
}

function emailValidation()
{
    var mailV=/^[^]+@[^]+\.[a-z]{2,3}$/;
        var email1=$('#email').val()
        if(email1=="")
        {
            $('#email1').text("Email is mandatory")
            return false;
        
        }
        else if(!email1.match(mailV))
        {
            $('#email1').text("Invalid format")
            return false;
        
        
        }
        else{
            $('#email1').text("")
            return true;
    
        
        }
}
$(document).ready(function()
{
    
    $("#name").keyup(function(e){
       
        nameValidation()    
    })

    $('#email').keyup(function(){
        emailValidation()
    })

    $('#number').keyup(function(){
       numberValidation()
    })

    $('#subject').keyup(function(){
        subjectValidation()
    })

    $('#message').keyup(function(){
       messageValidation()
    })

    $("#submit-form").click((e)=>{
        e.preventDefault()


        if(nameValidation() && emailValidation() && numberValidation()  && messageValidation())
        {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxUKYocqigVVu1o8UI4mJG2IIcpQi2uy0-c71wJcW_Lpyvmu6NpA81sVZnOCdeP7MlV/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
        }
    })

})



function preventNumberInput(e){
    console.log("check")
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107 ){
        e.preventDefault();
    }
}