$(document).ready(function () {




    //user session-management 
    if ($.session.get('username') === undefined) {
        $(window).attr('location', './log_in.html');
    }
    $("#btnSubmit").click(function (e) { 
        $.session.clear();
        $(window).attr('location', './log_in.html');

    })
//     $("#btnSubmitd").click(function (e) { 
//         $.ajax({           
//     type: "DELETE",
//     url: "http://localhost:3000/users"+$v,
//     data: {
//         'username':data[$v].username,
//         'email':data[$v].email,
//         'password':data[$i].password
//     }
// }).done(function() {
//     $.session.clear();
//         $(window).attr('location', './log_in.html');
//         alert( "profile Deleted ");
//     });



      

    // })

    $("#btnSubmitd").click(function(e){
        $username_s=$.session.get('username'); 
        alert($username_s);
        if ($username_s) { // values are not empty
        $.ajax({

            method: "GET",
            url: "http://localhost:3000/users",
            // contentType: "application/json; charset=utf-8",


            success: function (data, status) {
                $flag = 0;
                
                for ($i = 0; $i < data.length; $i++) {

                    if (data[$i].username == $username_s) {
                      $y=data[$i].id;
                      $username=data[$i].username;
                      $password=data[$i].password;
                      $email=data[$i].email;


                        resetp( $username,$password,$email,$y);
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

    }
    )
    function resetp( $username,$password,$email,$z){ 
       //alert($z);
     
           $.ajax({
       type: "DELETE",
       //SEND TO MY SERVER URL
       url: "http://localhost:3000/users/"+$z,
       dataType: 'json',
       async: false,
       data: {'username':$username, 'email':$email,'password': $password, 
      }      
   }).done(function() {
    $.session.clear();
        $(window).attr('location', './log_in.html');
        alert( "profile Deleted ");
    });
   } 



})