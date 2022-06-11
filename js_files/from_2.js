// event.preventDefault();
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
function validate(){
     event.preventDefault();
    // let fname=document.getElementById("fname");
    // let lname=document.getElementById("lname");
    // let add1=document.getElementById("staddress");
    // let add2=document.getElementById("staddress2");
    // let city=document.getElementById("city");
    // let state=document.getElementById("state");
    // let code=document.getElementById("zipcode");
    // let phoneno=document.getElementById("phoneno");
    // let email= document.getElementById("email");
    let Text1 ="Required";
    if(fname.value=="")
    {
        
       document.getElementById("p1").innerHTML=Text1;
    }
    
    if(lname.value=="")
    {
        document.getElementById("p2").innerHTML=Text1;
    }
    
    if(add1.value=="")
    {  
        
        document.getElementById("p3").innerHTML=Text1;
    }
   
    if(add2.value=="")
    {
        
        document.getElementById("p4").innerHTML=Text1;
    }
   
    if(city.value=="")
    {
        
        document.getElementById("p5").innerHTML=Text1;
    }
    
    if(state.value=="")
    {
        
        document.getElementById("p6").innerHTML=Text1;
    }
    
    if(code.value=="")
    {
       
        document.getElementById("p7").innerHTML=Text1;
    }
    
    if(phoneno.value=="")
    {
       
        document.getElementById("p8").innerHTML=Text1;
    }
    
    if(email.value=="")
    {
        
        document.getElementById("p9").innerHTML=Text1;
    }
    let feedback= document.getElementById("feedback");
    
    if(feedback.value=="")
    {
       
        document.getElementById("p10").innerHTML= Text1;
    }
    let suggestion= document.getElementById("suggestion");
    
    if(suggestion.value=="")
    {
       
        document.getElementById("p11").innerHTML= Text1;
    }

}
function fname_validate(){
    event.preventDefault();
    let fname=document.getElementById("fname");
    let Text;
    let name_pattren = "[a-zA-Z]{2,30}$";
    if(!fname.value.match(name_pattren))
    {
        Text="please Enter valid name";
       document.getElementById("p1").innerHTML=Text;
    }

}
function lname_validate(){
    event.preventDefault();
    let name2_pattren = "[a-zA-Z]{2,30}$";
    if(!lname.value.match(name2_pattren))
    {
        Text="please Enter valid Name";
        document.getElementById("p2").innerHTML=Text;
    }

}
function add1_validate(){
    event.preventDefault();
    let add1_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$"
    if(!add1.value.match(add1_pattren))
    {  
        Text="please Enter valid Address";
        document.getElementById("p3").innerHTML=Text;
    }

}
function add2_validate(){
    event.preventDefault();
    let add2_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$"
    if(!add2.value.match(add2_pattren))
    {
        Text="please Enter valid Address";
        document.getElementById("p4").innerHTML=Text;
    }
}
function city_validate(){
    event.preventDefault();
    let city_pattern = "[a-zA-Z]{2,30}$";
    if(!city.value.match(city_pattern))
    {
        Text="please Enter valid city";
        document.getElementById("p5").innerHTML=Text;
    }
}
function state_validate(){
    event.preventDefault();
    let state_pattern = "[a-zA-Z]{2,30}$";
    if(!state.value.match(state_pattern))
    {
        Text="please Enter valid state";
        document.getElementById("p6").innerHTML=Text;
    }

}
function code_valiadte(){
    event.preventDefault();
    let code_pattern="^[0-9]{6}$";
    if(!code.value.match(code_pattern))
    {
        Text="please Enter valid code";
        document.getElementById("p7").innerHTML=Text;
    }

}
function phoneno_validate(){
    event.preventDefault();
    let phoneno_pattern="\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
    if(!phoneno.value.match(phoneno_pattern))
    {
        Text="please Enter valid phone no in the form of ((000) 0000-000)";
        document.getElementById("p8").innerHTML=Text;
    }

}
function email_validate(){
    event.preventDefault();
    let email_pattren="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
    if(!email.value.match(email_pattren))
    {
        Text="please Enter valid email id  in the form of ex:email@yahoo.com";
        document.getElementById("p9").innerHTML=Text;
    }

}

function feed_back(){
    event.preventDefault();
    let feedback= document.getElementById("feedback");
    
    if(feedback.value=="")
    {
       
        document.getElementById("p10").innerHTML="please Enter feed Back";
    }

}
function sugges_tion()
{
    event.preventDefault();
    let suggestion= document.getElementById("suggestion");
    
    if(suggestion.value=="")
    {
       
        document.getElementById("p11").innerHTML="please Enter suggestion";
    }
}
