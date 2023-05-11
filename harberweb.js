$(document).ready(function () {
    $ ("#btnsearch").click(function(e){
        var txtInput = $ ("#srcInv").va1();
        $("#infoinvaccr").html("nama anda : " + txtInput);
        $.ajax({
        
        type : "POST",
        url : "/assets/script/ajax/geturl.php",
        data:"",
        success : function (response) {
            $("#infoinvaccr").html("<br/>Response<br/>"+ response);
        }
        })
    })
})