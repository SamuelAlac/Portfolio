require('dotenv').config();
const { GraphQLClient } = require('graphql-request')

// @desc    GET ALL REPOSITORY
// @route   GET api/github/repository/
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
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
}

// @desc    GET ALL CONTRIBUTION
// @route   GET api/github/contributions/
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
    console.log(error)
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
}