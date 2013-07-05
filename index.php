<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("lib/models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}
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

        <link href="lib/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
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
        <nav class="public-nav">
            <div class="logo-holder">
                <img src="lib/img/full-logo.png">
            </div>
            <ul class="nav">
                <li>company</li>
                <li>how it works</li>
                <li>services</li>
                <li>pricing</li>
                <li class="loginButton">
                    <button class="medium-accent">
                    <div class="buttonLeft pull-left">
                        <div class="title">Login</div>
                    </div>
                    <div class="buttonRight pull-right">
                        <i class="icon-circle-arrow-right"></i>
                    </div>
                </button>
                </li>
            </ul>
        </nav>
        <header class="home-banner">
            <div class="message">
                <h1>Nail the interview.<br>Land the job.</h1>
                <ul class="big-social">
                    <li><i class="icon-facebook"></i></li>
                    <li><i class="icon-twitter"></i></li>
                </ul>
                <P>Discover how simulating your next interview with an industry profressional can help you land your next position on your ladder to success.</P>
                <button class="big-accent">
                    <div class="buttonLeft pull-left">
                        <div class="title">Mock it!</div>
                        <div class="lede">sign up</div>
                    </div>
                    <div class="buttonRight pull-right">
                        <i class="icon-circle-arrow-right"></i>
                    </div>

                </button>
            </div>
            <div class="imac"></div>
        </header>

        <script data-main="lib/js/main.js" src="lib/js/require.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
