import { VercelRequest, VercelResponse } from "@vercel/node";
import dialogflow from "@google-cloud/dialogflow";

const sessionClient = new dialogflow.SessionsClient();
const projectId = "personal-porfolio-450522";
const sessionId = "123456";
const languageCode = "en";

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const userQuery = req.body.query;
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  console.log("User Query:", userQuery);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userQuery,
        languageCode,
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    if (responses && responses[0] && responses[0].queryResult) {
      const fulfillmentText = responses[0].queryResult.fulfillmentText;
      console.log("Dialogflow response:", fulfillmentText);
      return res.json({ fulfillmentText });
    } else {
      console.error("No valid response from Dialogflow");
      return res
        .status(500)
        .json({ error: "No valid response from Dialogflow" });
    }
  } catch (error) {
    console.error("Error with Dialogflow request:", error);
    return res.status(500).json({
      error: "Error communicating with Dialogflow",
      message: error.message,
      stack: error.stack,
    });
  }
};
