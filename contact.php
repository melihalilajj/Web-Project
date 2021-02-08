<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact </title>
    <link rel="stylesheet" href="./css/contact.css">

</head>


    <?php
include './parts/header.php';
?>

<?php
include './php/contactValidation.php';
?>



    <main>
        <br>
        <br>
        <br>
        <br>
        <div class="box">
           

            <form action="" method="post">
                <input class="input" type="text" placeholder="Name*" id="name" name="name" value="<?= $name ?>" autofocus>
                <span class="error"><?= $name_error ?></span>
                <input class="input" type="text" placeholder="username*" id="surname" name="username" value="<?= $username ?>" >
                <span class="error"><?= $username_error ?></span>
                <input class="input" type="text" placeholder="Email*" id="email" name="email" value="<?= $email ?>" >
                <span class="error"><?= $email_error ?></span>
                <textarea cols="50" rows="10" type="text" placeholder="Type your message here..." id="textarea" name="message" value="<?= $message ?>" ></textarea>
                <input type="submit" onclick="send()" value="SUBMIT" id="submit-button" name="submit">
                <div class="success"><?= $success;?></div>
            </form>

        </div>
        <!-- <footer>
            <div id="footer">
                <p>ⓒ Architecture and Design-2020</p>
            </div>
        </footer> -->

        <?php
include './parts/footer.php';
?>



    </main>
    <script src="./JS/Contact.js"></script>
    <script src="./JS/nav.js"></script>
</body>

</html>