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
            function (data) {
                console.log("created ", data)
                location.reload();
            })
    })

    //Read


    //Update
    $(".update-burger").on("click", function (event) {
        console.log("clicked")
        var name = $(this).data("name")
        var eatBurger = $(this).attr("data", "eatBurger");
        console.log(eatBurger)
        console.log(name)

        //PUT req
        $.ajax("/api/update/" + name, {
            type: "PUT",
            data: eatBurger
        }).then(
            function () {
                console.log("changed burger to ", eatBurger);
                location.reload();
            }
        )

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
            function (data) {
                console.log("deleted burger ", data);
                location.reload();
            })
    })

})