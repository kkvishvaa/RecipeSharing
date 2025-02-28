const app = require("./api/server"); // Import Express app
const serverless = require("serverless-http");

module.exports = serverless(app);
