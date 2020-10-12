$(document).ready(function() {
    $('.brief').hide();
    $('.data').hide();
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
        $('.brief').slideDown(2000);
        $('.data').slideUp();
        $('#list').slideDown();
        $('.getdelivery').show(1000);
        $('#list').text(" ");
        $("#list").append("<br>" + "Size :   " + userInput.size + "<br>" + "Crust :     "
            + userInput.crust + "<br>" + "Toppings :     "
            + userInput.toppings + "<br>" + " Number of pizzas :    "
            + userInput.number + "<br>" + "Total Price :  "
            + totalPrice + "<br><br>");
    });
    $(".getdelivery").click(function () {
        $('.brief').slideUp();
        $('#list').slideUp();
        $('.getdelivery').hide(1000);
        $('.data').slideDown();
    });
});