var nameVal=false;
function nameValidation()
{
    var re=/^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    var name=document.getElementById('name').value
    if(!re.test(name)){
        $("#name1").text("Invalid Name");
        return false
    }
    else if(name.length<4)
    {
        $("#name1").text("Name should be atleast 4 characters");
        return false
    }
    else if(name=="")
    {
        $("#name1").text("Name can't be empty");
        return false
    }
    else{
        $("#name1").text("");
        return true
    }
}

function numberValidation()
{
    var num1=document.getElementById("number").value
    if(isNaN(num1))
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
        document.getElementById("number1").innerHTML=""
        return true
    }
}

function subjectValidation(){
    var subject1=document.getElementById("subject").value

        if(subject1.length=="")
        {
            document.getElementById("subject1").innerHTML="Subject can't be null"
            return false;
        }
        else{
            document.getElementById("subject1").innerHTML=""
            return true;
        }
}

function messageValidation()
{
    var message1=document.getElementById("message").value
        
    if(message1.length=="")
    {
        document.getElementById("message1").innerHTML="Message can't be null"
        return false
    }
    else{
        document.getElementById("message1").innerHTML=""
        return true
    }
}

function emailValidation()
{
    var mailV=/^[^]+@[^]+\.[a-z]{2,3}$/;
        var email1=document.getElementById('email').value
        if(!email1.match(mailV))
        {
        document.getElementById("email1").innerHTML="Invalid form"
        return false;
        
        }
        else if(email1=="")
        {
        document.getElementById("email1").innerHTML="Email is mandatory"
        return false;
        }
        else{
            document.getElementById("email1").innerHTML=""
            return true
        
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


        if(nameValidation() && emailValidation() && numberValidation() && subjectValidation() && messageValidation())
        {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwTCHGrPr2wLbEMOZ-QYA2ih3BlPA-tFjfd9k_IWsABQesPzeigbck9Hs8hmCqNDwg6/exec",
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