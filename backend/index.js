require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GraphQLClient } = require('graphql-request')
const app = express();

app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/api/hello', async (req, res) =>{
    res.send('hello')
})

app.get('/api/repos', async (req, res) =>{
    try{
    const response = await fetch('https://api.github.com/users/SamuelAlac/repos',{
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    });
    const data = await response.json();
    if(!response.ok){
        return { message: 'Failed to fetch repos' }
    }
    res.json(data)
    }catch(error){
        res.status(500).json({ error: "Something went wrong" });
    }
})

app.get("/api/contributions", async (req, res) => {
  try {
    const endpoint = "https://api.github.com/graphql";
    const client = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    const query = `
      query {
        user(login: "SamuelAlac") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const data = await client.request(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () =>{
    console.log(`Server running on localhost:`+PORT)
})