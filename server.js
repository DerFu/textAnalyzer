const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contentController = require("./controller/contentController")

app.use(
  bodyParser.json({
    type: "application/json"
  })
);

app.post("/api/v1/", (req, res) => {
  const erg = contentController.transformTextToObject(req.body.text);
  res.send(erg);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

/**
 * [x] Sätze seperarieren
 * [x] Absätze erkennen
 * [x] API erstellen
 * [X] den gesplitteten zecichen wieder in einsetzen
 * [ ] Frontend erstellen
 * [ ] Aus Wörtern Objekte erstellen mit Parameter { value, type, tags}
 */