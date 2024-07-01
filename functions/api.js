// https://spectacular-gaufre-78847b.netlify.app/.netlify/functions/api

import express from "express";
import ServerlessHttp from "serverless-http";
const router = express.Router()

const app = express();

const githubData = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 89,
    "public_gists": 4,
    "followers": 24873,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-06-22T18:02:17Z"
  }

router.get('/', (req, res)=>{
    return res.json([
        {
        id: 1,
        messages: "App is running...",
        username: "Mrinmoy Roy",
        email: "mrinmoy@google.ai" 
    },
    {
        id: 2,
        messages: "Netlify is a free hosting website",
        username: "Hitesh Choudhary",
        email: "gitesh@chai.ai" 
    },
    {
        id: 3,
        messages: "Thank you netlify",
        username: "User name",
        email: "user@example.com" 
    }]
    )
})

router.get('/githubData', (req, res)=>{
    res.json(githubData)
})

router.post('/add', (req, res)=>{
    res.send('<a href="https://www.youtube.com/watch?v=7fjOw8ApZ1I&t=4357s">New record added.</a>')
})

router.post('/Update', (req, res)=>{
    res.send('<h1>Update the existing records.</h1>')
})

router.post('/Delete', (req, res)=>{
    res.send('Record deleted successfully.')
})

app.use('/.netlify/functions/api', router);
const handler = ServerlessHttp(app)
module.exports.handler = async(event, context) =>{
    const result = await handler(event, context);
    return result;
}