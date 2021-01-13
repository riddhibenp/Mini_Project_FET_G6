
$(document).ready(function () {
    $("#btnSubmit").click(function () {
        //collect userName and password entered by users
        $username = $("#username").val();
        $email=$("#email").val();
        $password = $("#password").val();
        $sessionValue = $("#hdnSession").data('someKey');
        //alert($sessionValue);
        check_log($username, $email, $password);

    });
});


function check_log($username,$email, $password) { // loginForm is submitted


  
    if ($username &&$email && $password) { // values are not empty
        $.ajax({

            method: "GET",
            url: "http://localhost:3000/users",
           
            success: function (data, status) {
                $flag = 0;
                
                for ($i = 0; $i < data.length; $i++) {

                    if (data[$i].username == $username) {

                        alert("USER ALREADY EXIST!");
                        $flag = 0;
                        $(window).attr('location', './sign_in.html');
                        break;
                        

                    }
                    else {

                        $flag = 1;
                        // continue;
                    }
                }

                if ($flag == 1) {
                    auth($username,$email, $password);
                }

            },
            error: function (data, status) {

                alert('error');
            },
           

        }) // success
    } // ajax


    //e.preventDefault();

}

//authenticate function to make ajax call
function auth($username, $email, $password) {
    $result=-1;
    $.ajax({
        type: "POST",
        //SEND TO MY SERVER URL
        url: "http://localhost:3000/users",
        dataType: 'json',
        //async: false,
        data: { 'username': $username, 'email':$email,'password': $password ,'ent':-1,'lit':-1,'gk':-1,'tech':-1,'sports':-1},
        success: function (response) {
            //alert(hwllo);
            $.session.set('username', $username);
            $(window).attr('location', '../html/user_dash.html');
            console.log(response);
        }
    })
}

