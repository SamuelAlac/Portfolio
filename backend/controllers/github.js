require('dotenv').config();
const { GraphQLClient } = require('graphql-request')

// @desc    GET ALL REPOSITORY
// @route   GET api/repository/
exports.getRepository = async (req, res) =>{
    try{
        const response = await fetch('https://api.github.com/users/SamuelAlac/repos',{
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });
        const data = await response.json();
        if(!response.ok){
            return res.status(response.status).json({ message: 'Failed to fetch repository' });
        }
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({ error: "Something went wrong" });
    }
}

// @desc    GET ALL CONTRIBUTION
// @route   GET api/contributions/
exports.getContributions = async (req, res) =>{
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
        res.status(200).json(data);
  } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
  }
}