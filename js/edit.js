$(document).ready(function () {
         
    //$username=$.session.get('username'); 

    $("#btnSubmit").click(function (e) {
        
        $username = $("#username").val();
      
      
        $email = $("#email").val();
       
        $password = $("#password").val();
       
        $username_s = $.session.get('username');

        
        if($username) { 
           
            // values are not empty
            $.ajax({

                method: "GET",
                url: "http://localhost:3000/users",
                // contentType: "application/json; charset=utf-8",


                success: function (data, status) {

                    
                    $flag = 0;

                    for ($i = 0; $i < data.length; $i++) {

                        if (data[$i].username == $username_s) {
                            $y = data[$i].id;
                            //alert("calling");
                            resetp($username, $email, $password, $y);
                            break;
                            // $(window).attr('location', './log_success.html');

                        }

                    }




                },
                error: function (data, status) {

                    alert('error');
                },

            }) // success
        }

    })

    function resetp($username, $email, $password, $z) {
        // alert($z);
        alert("called");
        $.ajax({
            type: "PATCH",
            //SEND TO MY SERVER URL
            url: "http://localhost:3000/users/" + $z,
            dataType: 'json',
            async: false,
            data: {
                'username': $username,
                'email': $email,
                'password': $password
            },
            success: function (response) {
                alert("profile Successfully reset"+$password);
                //  e.preventDefault();
                
                $(window).attr('location', './log_in.html');
                $.session.clear();

                //$.session.set('username', $username);


                //console.log(response);
            }
        })
    }})