<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../../lib/models/config.php");
if (!isUserLoggedIn()){ header("Location: ../../"); die(); }
$wallPosts = fetchWallPosts(NULL,NULL, $loggedInUser->user_id);
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
        <div class="settings-box">
            <div class="popUp-box-x-close icon-remove-sign"></div>
            <h1>Quick Settings</h1>
        </div>
        <div class="black-overlay"></div>
        <nav class="private-nav">
            <div class="logo-holder">
                <img src="/lib/img/word-logo.png">
            </div>
            <div class="user-nav unselectable">
                <div class="left">
                    <form id="user-upload-form" method="post" enctype="multipart/form-data" action='/account/uploadImage.php'>
                        <div class="hover-overlay-icon icon-camera"></div>
                        <div class="user-pic-hover-overlay"></div>
                        <input class="user-upload-button" type="file" name="user-upload-button">
                        <div class="user-profile-pic"></div>
                    </form>
                </div>
                <div class="right">
                    <div class="user-display-name"></div>
                    <i class="user-nav-dropdown-button icon-sort-down"></i>
                </div>
                <div class="user-nav-dropdown">
                <ul>
                    <li class="staticOption">
                        <span>Role:</span>
                        <span class="user-role-icon"></span>
                        <span class="user-role"></span>
                    </li>
                    <li>
                        <div class="user-icon">
                            <i class="icon-user"></i>
                        </div>
                        <span>Profile</span>
                    </li>
                    <li>
                        <div class="user-icon">
                            <i class="icon-envelope"></i>
                        </div>
                        <span>Messages</span>
                    </li>
                    <li class="user-nav-setting-button">
                        <div class="user-icon">
                            <i class="icon-lock"></i>
                        </div>
                        <span>Settings</span>
                    </li>
                    <li>
                        <div class="user-icon">
                        <i class="icon-remove"></i>
                        </div>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
                <div class="clear-both"></div>
            </div>

        </nav>
        <header class="landing-banner">
            <img src="/lib/img/landing-banner1.jpg">
        </header>
        <article>
            <div class="user-wall-updater-holder">
                <div class="user-profile-pic"></div>
                <div class="user-wall-updater">
                    <i class="user-wall-box-arrow icon-caret-left"></i>
                    <div class="user-wall-box">
                        <textarea placeholder="Share something with your connections here..."></textarea>
                        <div class="user-wall-box-toolbar">
                            <ul>
                                <li><i class="icon-camera"></i></li>
                                <li><i class="icon-facetime-video"></i></li>
                                <li class="submitUserPostButton">
                                    <button class="super-small-accent">
                                    <div class="buttonLeft pull-left">
                                        <div class="title">Post</div>
                                    </div>
                                </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clear-both"></div>
                <hr>
                <article>
                    <div class="allWallPosts">
                        <?php



                            if ($wallPosts !=NULL) {
                                foreach ($wallPosts as $post) {
                                    echo "<div class='user-wall-box'>
                                            <i class='user-wall-box-arrow icon-caret-left'></i>
                                            <div class='user-wall-box' data-post-id=".$post['post_id'].">
                                                <span>".$post['post']."</span>
                                                <div class='user-wall-box-toolbar'>
                                                    <ul>
                                                        <li><i class='icon-thumbs-up'></i></li>
                                                        <li><i class='icon-thumbs-down'></i></li>
                                                        <li><i class='icon-comment'></i></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div class='clear-both'></div>";
                                }
                            }
                        ?>
                    </div>
                </article>
                <div class="clear-both"></div>
            </div>

        </article>


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
