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
    