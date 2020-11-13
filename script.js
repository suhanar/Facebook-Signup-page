$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname : {
                required : true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required : true,
                minlength:4

            },
            emailadd:{
                required : true,
                email:true
            },pass:{
                minlength:6
            },
            day:{
                required:true,
            }

        },
        messages:{
            fname:{
                required:"Enter your first name please",
                minlength:"Please enter atleast 4 charecter"
            }
        }
        
    })
})