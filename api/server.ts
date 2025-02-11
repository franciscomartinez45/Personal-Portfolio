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
    const fulfillmentText = responses[0].queryResult?.fulfillmentText || null;
    return res.json({ fulfillmentText });
  } catch (error) {
    console.error("Error with Dialogflow request:", error);
    return res
      .status(500)
      .json({ error: "Error communicating with Dialogflow" });
  }
};
