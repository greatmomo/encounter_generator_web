const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

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