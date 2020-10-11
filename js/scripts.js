$(document).ready(function() {
    $("#checkout").click(function () {
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }
        function toppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
        }
        function number() {
            var pizzanumber = document.getElementById("number").value;
            return parseInt(pizzaNumber);
        }
        function Order(size, crust, toppings, number) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newNumber = number;
        }
        var userInput = new Order(size(), crust(), toppings(), number());
        var totalPrice =(userInput.newSize + userInput.newCrust + userInput.newToppings) * userInput.newNumber;
        $('.brief').slideDown();
        $('.data').slideUp();
        $('#list').slideDown();
        $('.getdelivery').show();
        $('#list').text(" ");
        $("#list").append("<br>" + "Size :   " + userInput.newSize + "<br>" + "Crust :     "
            + userInput.newCrust + "<br>" + "Toppings :     "
            + userInput.newToppings + "<br>" + " Number of pizzas :    "
            + userInput.newNumber + "<br>" + "Total Price :  "
            + totalPrice + "<br><br>")
    });
    $(".getdelivery").click(function () {
        $('.brief').slideUp();
        $('#list').slideUp();
        $('.brief').slideDown();
        $('.getdelivery').hide();
        $('.data').slideDown();
    });
});