let express = require("express");
let mongoose = require("mongoose");

let model = require("./model.js")
profile = mongoose.model("profile", model.profileSchema);
require('dotenv').config()
app = express()

app.get('/', async (req, res) => {
    res.send('app is up and running TEST and i am following');
})
app.get('/test-read', async (req, res) => {
    res.send('Reading from test api');
})

app.get("/profile-list", async (req, res) => {
    data = await profile.find({}).exec();
    res.send(data);
});

app.listen(process.env, () => {
    console.log(`App listening @ 3000!`);
    mongoose
        .connect("mongodb://localhost:27017/test")
        .then((response) => console.log("Connected!"))
        .catch((error) => {
            console.log(error);
        })
});

app.get("/add-profile", async (req, res) => {

    insertData = 
        {
            "login": "Parth-gupta49",
            "id": 72183912,
            "node_id": "MDQ6VXNlcjcyMTgzOTEy",
            "avatar_url": "https://avatars.githubusercontent.com/u/72183912?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Parth-gupta49",
            "html_url": "https://github.com/Parth-gupta49",
            "followers_url": "https://api.github.com/users/Parth-gupta49/followers",
            "following_url": "https://api.github.com/users/Parth-gupta49/following{/other_user}",
            "gists_url": "https://api.github.com/users/Parth-gupta49/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Parth-gupta49/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Parth-gupta49/subscriptions",
            "organizations_url": "https://api.github.com/users/Parth-gupta49/orgs",
            "repos_url": "https://api.github.com/users/Parth-gupta49/repos",
            "events_url": "https://api.github.com/users/Parth-gupta49/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Parth-gupta49/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Parth Gupta",
            "company": null,
            "blog": "",
            "location": "Bangalore",
            "email": null,
            "hireable": null,
            "bio": "Exploring..",
            "twitter_username": null,
            "public_repos": 14,
            "public_gists": 0,
            "followers": 2,
            "following": 0,
            "created_at": "2020-10-01T05:09:19Z",
            "updated_at": "2024-02-04T16:28:35Z"
          }
    
    const data1 = await profile.create(insertData);
    res.send(data1);
});

