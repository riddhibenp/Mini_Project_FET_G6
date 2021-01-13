$(document).ready(function () {
    $("#p_r").click(function (e) { 
        $username = $('#username').val(); 
        if ($username) { // values are not empty
            $.ajax({

                method: "GET",
                url: "http://localhost:3000/users",
                // contentType: "application/json; charset=utf-8",


                success: function (data, status) {
                    $flag = 0;
                   
                    for ($i = 0; $i < data.length; $i++) {

                        if (data[$i].username == $username) {
                            $flag = 0;

                            // $("#p_r").on("click",$username,function(){
                                $.session.set('username', $username);
                                $(window).attr('location', './reset_p.html');
                                
                            // });
                            // .bind($username);
                            //$.session.set('username',$username);
                            break;

                        }
                        else {
                            $flag = 1;
                        }
                    }

                    if ($flag == 1) {
                        alert("USER Don't  EXIST!");
                        $(window).attr('location', './p_r.html');
                    }
                   
                },
                error: function (data, status) {

                    alert('error');
                },
            
            }) 
        } 


        e.preventDefault();

    } 
    )
})



// $("#pwd").keyup(function() {

//     $.ajax({
//         url: "http://localhost:3000/users/",
//         method: "GET",
//         dataType: "JSON",
//         async: false,

//         success: (x) => {
//             for ($i = 0; $i < x.length; $i++) {
//                 if (x[$i].username == $username) {
//                     if (x[$i].password == $(this).val()) {

//                         $("#check").show();
//                         $(".npwd").attr("disabled", false);
//                         $(".npwd").eq(0).focus();
//                         $validate1 = true;


//                     } else {
//                         $("#check").hide();
//                         $(".npwd").attr("disabled", true);
//                         $validate1 = false;


//                     }
//                 }

//             }



//         },
//         error: function(response) {
//             console.log(response);
//         }
//     });

// });
// $(".npwd").keyup(function() {


//     if ($(".npwd").eq(0).val() == $(".npwd").eq(1).val()) {
//         $newpassword = $(".npwd").eq(0).val();
//         $validate2 = true;

//     } else {
//         $validate2 = false;
//     }
// });
