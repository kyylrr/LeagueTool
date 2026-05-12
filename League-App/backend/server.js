const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/summoner/:gameName/:tagline", async (req, res) => {
    const userId =req.params.gameName;
    const tag =req.params.tagline;

    const region = 'na1';
    axios.get("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/userId/tagline")

});
app.listen(3000, () => {
    console.log("server running on port 3000");
});