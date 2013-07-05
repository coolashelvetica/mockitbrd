<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../lib/models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

//Prevent the user visiting the logged in page if he/she is already logged in
if(isUserLoggedIn()) { header("Location: ../admin/account.php"); die(); }

//Forms posted
if(!empty($_POST))
{
	$errors = array();
	$email = trim($_POST["email"]);
	$username = trim($_POST["username"]);
	$displayname = trim($_POST["displayname"]);
	$password = trim($_POST["password"]);
	$confirm_pass = trim($_POST["passwordc"]);
	$captcha = md5($_POST["captcha"]);


	if ($captcha != $_SESSION['captcha'])
	{
		$errors[] = lang("CAPTCHA_FAIL");
	}
	if(minMaxRange(5,25,$username))
	{
		$errors[] = lang("ACCOUNT_USER_CHAR_LIMIT",array(5,25));
	}
	if(!ctype_alnum($username)){
		$errors[] = lang("ACCOUNT_USER_INVALID_CHARACTERS");
	}
	if(minMaxRange(5,25,$displayname))
	{
		$errors[] = lang("ACCOUNT_DISPLAY_CHAR_LIMIT",array(5,25));
	}
	if(!ctype_alnum($displayname)){
		$errors[] = lang("ACCOUNT_DISPLAY_INVALID_CHARACTERS");
	}
	if(minMaxRange(8,50,$password) && minMaxRange(8,50,$confirm_pass))
	{
		$errors[] = lang("ACCOUNT_PASS_CHAR_LIMIT",array(8,50));
	}
	else if($password != $confirm_pass)
	{
		$errors[] = lang("ACCOUNT_PASS_MISMATCH");
	}
	if(!isValidEmail($email))
	{
		$errors[] = lang("ACCOUNT_INVALID_EMAIL");
	}
	//End data validation
	if(count($errors) == 0)
	{
		//Construct a user object
		$user = new User($username,$displayname,$password,$email);

		//Checking this flag tells us whether there were any errors such as possible data duplication occured
		if(!$user->status)
		{
			if($user->username_taken) $errors[] = lang("ACCOUNT_USERNAME_IN_USE",array($username));
			if($user->displayname_taken) $errors[] = lang("ACCOUNT_DISPLAYNAME_IN_USE",array($displayname));
			if($user->email_taken) 	  $errors[] = lang("ACCOUNT_EMAIL_IN_USE",array($email));
		}
		else
		{
			//Attempt to add the user to the database, carry out finishing  tasks like emailing the user (if required)
			if(!$user->userCakeAddUser())
			{
				if($user->mail_failure) $errors[] = lang("MAIL_ERROR");
				if($user->sql_failure)  $errors[] = lang("SQL_ERROR");
			}
		}
	}
	if(count($errors) == 0) {
		$successes[] = $user->success;
	}
}

// echo "
// <div id='regbox'>
// <form name='newUser' action='".$_SERVER['PHP_SELF']."' method='post'>

// <p>
// <label>User Name:</label>
// <input type='text' name='username' />
// </p>
// <p>
// <label>Display Name:</label>
// <input type='text' name='displayname' />
// </p>
// <p>
// <label>Password:</label>
// <input type='password' name='password' />
// </p>
// <p>
// <label>Confirm:</label>
// <input type='password' name='passwordc' />
// </p>
// <p>
// <label>Email:</label>
// <input type='text' name='email' />
// </p>
// <p>
// <label>Security Code:</label>
// <img src='../lib/models/captcha.php'>
// </p>
// <label>Enter Security Code:</label>
// <input name='captcha' type='text'>
// </p>
// <label>&nbsp;<br>
// <input type='submit' value='Register'/>
// </p>

// </form>
// </div>

// </div>
// <div id='bottom'></div>
// </div>
// </body>
// </html>";
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>MockitBrd</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link href="/lib/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div class="login-box">
            <i class="icon-remove-sign popUp-box-x-close"></i>
            <form name="login" method="post" class="login-form">
                <h1>Sign in</h1>
            <p>
                <input type="text" name="username" placeholder="Username"/>
            </p>
            <p>
                <input type="password" name="password" placeholder="Password"/>
            </p>
            <p>
                <label>&nbsp;</label>
                <button class="small-accent login-go" type="submit">
                    <div class="buttonLeft pull-left">
                        <div class="title">Go!</div>
                    </div>
                    <div class="buttonRight pull-right">
                        <i class="icon-circle-arrow-right"></i>
                    </div>
                </button>
            </p>
            <div class="remember-me pull-left">
                <span><input type="checkbox"></span>
                <span>Remeber me</span>
            </div>
            </form>
        </div>
        <div class="black-overlay"></div>
        <header class="register-banner">
            <div class="register-step-1">
            	<div class="register-step-box">
            		<div class="register-role">
				    	<input type="radio" name="role" class="interviewer" value="Interviewer"/>
					    <label for="interviewer"><img src="/lib/img/intblue.png"/> <img class="switch" src="/lib/img/intwhite.png"/> </label>
					    <input type="radio" name="role" class="Candidate" value="Candidate"/>
					    <label for="happy"><img src="/lib/img/candwhite.png"/><img class="switch" src="/lib/img/candblue.png"/></label>
					</div>
            	</div>
            </div>
        </header>

        <script data-main="/lib/js/main.js" src="/lib/js/require.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
