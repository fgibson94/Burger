//burger_frontend.js

//Attach handlers until DOM is fully loaded
$(function () {

    //Create
    $(".create-form").on("submit", function (event) {

        event.preventDefault();
        var burgerName = $("#bu").val().trim();

        //POST req
        $.ajax("/api/new", {
            type: "POST",
            data: { newBurger: burgerName }
        }).then(
            function () {
                location.reload();
            })
    })

    //Read


    //Update

    //Click Event
    $(".update-burger").on("click", function (event) {
        console.log("clicked")
        var name = $(this).data("name")
        var eatBurger = $(this).attr("data", "eatburger");
        console.log("here", eatBurger)
        
        //PUT req
        $.ajax("/api/update/" + name, {
            type: "PUT",
            data: { burgerName: name }
        }).then(
            function () {
                location.reload();
            })
    });

    //Delete
    $(".delete-burger").on("click", function (event) {
        var name = $(this).data("name");
        console.log("clicked on ", name, " deleting");

        //Delete Req
        $.ajax("api/delete/" + name, {
            type: "DELETE",
            data: { burgerName: name }
        }).then(
            function () {
                location.reload();
            })
    })

})