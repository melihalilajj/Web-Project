
<?php


//definimi i variablave 

$name_error=$username_error=$email_error=$message_error= "";
$name=$username=$email=$message=$success= "";


//forma eshte bere submit me ane te metodes POST


if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(empty($_POST["name"])){
        $name_error="Name is required";
    }else{
        $name = test_input($_POST["name"]);
        //verifikon ne qofte se emri permban shkronja dhe hapesira 
        if(!preg_match("/^[a-zA-Z ]*$/",$name)){
            $name_error = "Only letters and white space allowed";
        }
    }


    if(empty($_POST["username"])){
        $username_error="Username is required";
    }else{
        $username = test_input($_POST["username"]);
        //verifikon ne qofte se emri permban shkronja dhe hapesira 
        if(!preg_match("/^[a-zA-Z ]*$/",$username)){
            $username_error = "Only letters and white space allowed";
        }
    }


    if(empty($_POST["email"])){
        $email_error="Email is required";
    }else{
        $email = test_input($_POST["email"]);
        //verifikon ne qofte se email eshte ne formen e duhur
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
           $email_error = "Invalid email format";
        }
    }


    if(empty($_POST["message"])){
        $message="";
    }else{
        $message=test_input($_POST["message"]);
    }

    if($name_error == '' and $username_error == '' and $email_error == ''){
        $message_body = '';
        unset($_POST['submit']);
        foreach($_POST as $key => $value){
            $message_body .="$key: $value\n";
        }
     

        //me dergu submit ne email
        $to = 'mejremehalilaj99@gmail.com';
        $subject = 'Contact from submit';
       if(mail($to, $subject, $message)){
           $success="Message sent. Thank you for cotacting us!";
           $name=$username=$email=$message="";
       }
    }
        
}


function test_input($data){
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    return $data;

}
?>