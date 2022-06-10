function validate(){
    event.preventDefault();
    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let add1=document.getElementById("staddress");
    let add2=document.getElementById("staddress2");
    let city=document.getElementById("city");
    let state=document.getElementById("state");
    let code=document.getElementById("zipcode");
    let phoneno=document.getElementById("phoneno");
    let email= document.getElementById("email");
    let Text;
    let name_pattren = "[a-zA-Z]{2,30}$";
    if(!fname.value.match(name_pattren))
    {
        Text="please Enter valid name";
       document.getElementById("p1").innerHTML=Text;
    }
    let name2_pattren = "[a-zA-Z]{2,30}$";
    if(!lname.value.match(name_pattren))
    {
        Text="please Enter valid Name";
        document.getElementById("p2").innerHTML=Text;
    }
    let add1_pattren = "[a-zA-Z0-9]{2,100}$"
    if(!add1.value.match(add1_pattren))
    {  
        Text="please Enter valid Address";
        document.getElementById("p3").innerHTML=Text;
    }
    let add2_pattren = "[a-zA-Z0-9]{2,100}$"
    if(!add2.value.match(add2_pattren))
    {
        Text="please Enter valid Address";
        document.getElementById("p4").innerHTML=Text;
    }
    let city_pattern = "[a-zA-Z]{2,30}$";
    if(!city.value.match(city_pattern))
    {
        Text="please Enter valid city";
        document.getElementById("p5").innerHTML=Text;
    }
    let state_pattern = "[a-zA-Z]{2,30}$";
    if(!state.value.match(city_pattern))
    {
        Text="please Enter valid state";
        document.getElementById("p6").innerHTML=Text;
    }
    let code_pattern="[1-9](2,6)$";
    if(!code.value.match(code_pattern))
    {
        Text="please Enter valid code";
        document.getElementById("p7").innerHTML=Text;
    }
    let phoneno_pattern="\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
    if(!phoneno.value.match(phoneno_pattern))
    {
        Text="please Enter valid phone no in the form of ((000) 0000-000)";
        document.getElementById("p8").innerHTML=Text;
    }
    let email_pattren="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    if(!email.value.match(email_pattren))
    {
        Text="please Enter valid email id  in the form of ex:email@yahoo.com";
        document.getElementById("p9").innerHTML=Text;
    }
    let feedback= document.getElementById("feedback");
    
    if(feedback.value=="")
    {
       
        document.getElementById("p10").innerHTML="please Enter feed Back";
    }
    let suggestion= document.getElementById("suggestion");
    
    if(suggestion.value=="")
    {
       
        document.getElementById("p11").innerHTML="please Enter suggestion";
    }

}
// function feed_back(){
//     let feedback= document.getElementById("feedback");
    
//     if(feedback.value=="")
//     {
       
//         document.getElementById("p10").innerHTML="please Enter feed Back";
//     }

// }
// function sugges_tion()
// {
//     let suggestion= document.getElementById("suggestion");
    
//     if(suggestion.value=="")
//     {
       
//         document.getElementById("p11").innerHTML="please Enter suggestion";
//     }
// }