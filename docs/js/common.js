$(
    function(){
        $.ajax({
            url: "header.html",
            cache: false,
            async:false,
            dateType: "html",
            success:function(html){
                $("header").html(html);
            }
        }
        )
    }
)