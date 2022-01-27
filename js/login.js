$(document).ready(()=>{
    $("#login").click(()=>{
        var username=$("#username").val();
        var password=$("password").val();

        if(username=="" && password==""){
            alert("Empty Username or Pssword not allowed")
        }else{
            $.ajax({
                    type:"GET",
                    url:"https://mocki.io/v1/5bcaf008-f895-455a-969a-95c093315dc5",
                    data:{
                        "username":username,
                        "password":password,
                    },
                    success:(x)=>{
                        alert(username+"successfully logged in");
                        console.log(x);
                        window.location="http://127.0.0.1:5500/html/registration.html"
                    }
            })
        }
    
    })
})