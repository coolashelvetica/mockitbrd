<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../lib/models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}

//Forms posted
if(!empty($_POST))
{
    $errors = array();
    $username = sanitize(trim($_POST["username"]));
    $password = trim($_POST["password"]);
    $response_array = array();

    //Perform some validation
    //Feel free to edit / change as required
    if($username == "")
    {
        $errors[] = lang("ACCOUNT_SPECIFY_USERNAME");
    }
    if($password == "")
    {
        $errors[] = lang("ACCOUNT_SPECIFY_PASSWORD");
    }

    if(count($errors) == 0)
    {
        //A security note here, never tell the user which credential was incorrect
        if(!usernameExists($username))
        {
            $errors[] = lang("ACCOUNT_USER_OR_PASS_INVALID");
              $response_array['status'] = $errors[0];
        }
        else
        {
            $userdetails = fetchUserDetails($username);
            //See if the user's account is activated
            if($userdetails["active"]==0)
            {
                $errors[] = lang("ACCOUNT_INACTIVE");
                $response_array['status'] = $errors[0];
            }
            else
            {
                //Hash the password and use the salt from the database to compare the password.
                $entered_pass = generateHash($password,$userdetails["password"]);

                if($entered_pass != $userdetails["password"])
                {
                    //Again, we know the password is at fault here, but lets not give away the combination incase of someone bruteforcing
                    $errors[] = lang("ACCOUNT_USER_OR_PASS_INVALID");
                    $response_array['status'] = $errors[0];
                }
                else
                {
                    //Passwords match! we're good to go'

                    //Construct a new logged in user object
                    //Transfer some db data to the session object
                    $loggedInUser = new loggedInUser();
                    $loggedInUser->email = $userdetails["email"];
                    $loggedInUser->profile_image = $userdetails["profile_image"];
                    $loggedInUser->profile_image_small = $userdetails["profile_image_small"];
                    $loggedInUser->user_id = $userdetails["id"];
                    $loggedInUser->hash_pw = $userdetails["password"];
                    $loggedInUser->title = $userdetails["title"];
                    $loggedInUser->displayname = $userdetails["display_name"];
                    $loggedInUser->username = $userdetails["user_name"];
                    $loggedInUser->role = $userdetails["role"];

                    //Update last sign in
                    $loggedInUser->updateLastSignIn();
                    $_SESSION["userCakeUser"] = $loggedInUser;

                    $response_array['status'] = 'success';
                    $response_array['user'] = $userdetails;
                    echo json_encode($response_array);

                    die();
                }
            }
        }
    }
    echo json_encode($response_array);

}
?>
