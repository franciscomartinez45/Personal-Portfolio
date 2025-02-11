import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors
import dialogflow from "@google-cloud/dialogflow";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

const sessionClient = new dialogflow.SessionsClient();
const projectId = "personal-porfolio-450522";
const sessionId = "123456";
const languageCode = "en";

app.post("/dialogflow", async (req, res) => {
  const userQuery = req.body.query;
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userQuery,
        languageCode: languageCode,
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const fulfillmentText = responses[0].queryResult.fulfillmentText;
    res.json({ fulfillmentText });
  } catch (error) {
    console.error("Error with Dialogflow request:", error);
    res.status(500).send("Error communicating with Dialogflow");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
