//burger_frontend.js

//Attach handlers until DOM is fully loaded
$(function () {

    //Create
    $(".create-form").on("submit", function (event) {
        
        event.preventDefault();
        var newBurger = $("#bu").val().trim();

        //POST req
        $.ajax("/api/new", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created ", newBurger)
            })
    })

//Read


//Update
    $(".update-burger").on("click", function(event){
        console.log("clicked")
        var name = $(this).data("name")
        var eatBurger = $(this).data("eatburger")
    })
    //PUT req
    $.ajax("/api/update/" + name, {
        type: "PUT",
        data: eatBurger
    }).then(
        function(){
            console.log("changed burger to ", eatBurger);
            location.reload();
        }
    )

//Delete
    $(".delete-burger").on("click", function(event){
        console.log("deleting")
        var name = $(this).data("name")
        //Delete Req
        $.ajax("api/delete/" + name, function(event){
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted burger ", name);
                location.reload();
            }
        )
    })

})