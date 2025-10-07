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
            return res.status(response.status).json({ message: 'Failed to fetch repositories' });
        }
        res.status(200).json(data)
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
}

// @desc    GET REPOSITORY & GET REPOSITORY README
// @route   GET api/github/repository/:repo & GET api/github/repository/:repo/readme
exports.getRepositoryInfo = async (req, res) =>{
    try{
        const repo = req.params.repo;
        const repoResponse = await fetch(`https://api.github.com/repos/SamuelAlac/${repo}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });
        const repoData = await repoResponse.json();
        if(!repoResponse.ok){
            return res.status(repoResponse.status).json({ message: 'Failed to fetch repository' });
        }

        const readMeResponse = await fetch(`https://api.github.com/repos/SamuelAlac/${repo}/readme`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3.raw',
            },
        });
        const readMeData = await readMeResponse.text();
        if(!readMeResponse.ok){
            return res.status(readMeResponse.status).json({ message: 'Failed to fetch repository readMe file' });
        }
        res.status(200).json({
            repository: repoData,
            readMe: readMeData,
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` })
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