$(document).ready(function () {
    $("form#loginForm").submit(function (e) { // loginForm is submitted


        $username = $('#username').val(); // get username
        $password = $('#password').val(); // get password
        //alert("inside click func");
        //alert($username);
        if ($username && $password) { // values are not empty
            $.ajax({

                method: "GET",
                url: "http://localhost:3000/users",
                // contentType: "application/json; charset=utf-8",


                success: function (data, status) {
                    $flag = 0;
                    
                    for ($i = 0; $i < data.length; $i++) {

                        if (data[$i].username == $username && data[$i].password == $password) {
                          
                            $flag = 0;
                            $(window).attr('location', './user_dash.html');
                            $.session.set('username',$username);
                            break;

                        }
                        else {
                            $flag = 1;
                        }
                    }

                    if ($flag == 1) {
                        alert("USER Don't  EXIST!");
                        $(window).attr('location', './sign_in.html');
                    }
                    
                },
                error: function (data, status) {

                    alert('error');
                },
               

            }) // success
        } // ajax


        e.preventDefault();

    } // if
    )
})