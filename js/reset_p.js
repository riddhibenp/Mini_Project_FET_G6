$(document).ready(function () {
    //$username=$.session.get('username'); 
    
    $("#p_r").click(function(e){
        $password = $("#password").val();
        $username=$.session.get('username'); 
        alert($username);
        if ($username) { // values are not empty
        $.ajax({

            method: "GET",
            url: "http://localhost:3000/users",
            // contentType: "application/json; charset=utf-8",


            success: function (data, status) {
                $flag = 0;
                
                for ($i = 0; $i < data.length; $i++) {

                    if (data[$i].username == $username) {
                      $y=data[$i].id;
                        resetp($password,$y);
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
    function resetp($password,$z){ 
       alert($z);
     
           $.ajax({
       type: "PATCH",
       //SEND TO MY SERVER URL
       url: "http://localhost:3000/users/"+$z,
       dataType: 'json',
       async: false,
       data: {'password': $password },
       success: function (response) {
           alert("password Successfully reset"+$password);
          //  e.preventDefault();
           $(window).attr('location', './log_in.html');
           $.session.clear();
          
           //$.session.set('username', $username);
          
          
           //console.log(response);
       }
   }) 
   } 
})