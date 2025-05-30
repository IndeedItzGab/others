// You must be an CurseForge Author to use this code. It requires CurseForge Author APIs to communicate with their project's manager api-test.mcpack

// Dependencies
const fetch = require('node-fetch'); // Use for communicating with the API (aka http request thingy).
const FormData = require('form-data'); // Use for making a form for metadata of the api.
const fs = require('fs'); // Use for reading the file where we could use this to identify which file to upload.

// Shortcut Variable (or whatever you call it)
const API_TOKEN = ''; // You must provide your CurseForge Author API here.
const PROJECT_ID = ''; // You must provide which project id for you to do something with it.
const FILE_PATH = ''; // The path/location of the file you are going to upload to the specified project.

const form = new FormData();

form.append('metadata', JSON.stringify({
  changelog: 'a test pack', // Description or change log of your file
  changelogType: 'markdown', // You can either set this to [html, markdown, IForgotTheName]
  displayName: 'Spawn-Randomizer (ALPHA)', // The display name of your file that would show in the download section of your curseforge project
  gameVersions: [13246], // Replace this with the game version numerical id. Currently it was set to Minecraft: Bedrock Edition 1.21.80 Release
  releaseType: 'alpha' // You choose which type of release of your file [release, alpha, beta]
}), { contentType: 'application/json' });

form.append('file', fs.createReadStream(FILE_PATH));
(async () => {
  
  // Post a request to upload your file with the specified metadata and token.
  await fetch(`https://minecraft-bedrock.curseforge.com/api/projects/${PROJECT_ID}/upload-file`, {
    method: 'POST', // POST method for requesting an file upload 
    headers: {
      'x-api-token': API_TOKEN,
      ...form.getHeaders()
    },
    body: form
  })
    .then(res => res.json())
    .then(data => console.log('Uploaded! File ID:', data.id)) // Once the file was successfully uploaded to your project, the code will log the id of the file.
    .catch(err => console.error('Upload failed:', err));
})()