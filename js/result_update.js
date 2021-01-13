$(document).ready(function () {




    //user session-management 
    if ($.session.get('username') === undefined) {
        $(window).attr('location', './log_in.html');
    }
    $("#btnSubmit").click(function (e) { 
        $.session.clear();
        $(window).attr('location', './log_in.html');

    })

  
$ent=10;



    $username_s=$.session.get('username');
    if($username_s) { 
           
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
                        resetp($ent,$y);
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

    function resetp($ent ,$z) {
        // alert($z);
        alert("called");
        $.ajax({
            type: "PATCH",
            //SEND TO MY SERVER URL
            url: "http://localhost:3000/users/" + $z,
            dataType: 'json',
            async: false,
            data: {
                'ent':$ent
            },
            success: function (response) {
               alert("updated");
                //  e.preventDefault();
                
                // $(window).attr('location', './log_in.html');
                // $.session.clear();

                //$.session.set('username', $username);


                //console.log(response);
            }
        })
    }
        // $username_s=$.session.get('username'); 
        // alert($username_s);

       
        // $ent=2;
       
        // if ($username_s) { // values are not empty
        //     $.ajax({
        //         type: "PATCH",
        //         //SEND TO MY SERVER URL
        //         url: "http://localhost:3000/users/username="+$username_s,
        //         dataType: 'json',
        //         async: false,
        //         data: {
        //            'ent':$ent 
        //         },
        //         success: function (response) {
        //             alert("profile Successfully reset"+$password);
                   
                    
        //             $(window).attr('location', './log_in.html');
        //             $.session.clear();
    
                   
        //         }
        //     })
               
              

                
                   
               
            }
           
    

    
    
   



)