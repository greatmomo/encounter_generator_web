

function myFunction() {
    document.getElementById("encounterPrint").innerHTML="Generation started...";

    var selectElem = document.getElementById("pickone");
    var items;
    items = ["Abyss", "Mountains", "Plains", "Random"];
    for (var item of items) {
        var element = document.createElement("option");
        element.innerText = item;
        selectElem.append(element);
    }
}