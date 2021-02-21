import Twitter from "twitter";

import { phrases } from "../data/phrases";

export const sendPhrase = async (Becca: Twitter): Promise<void> => {
  const randomIndex = Math.floor(Math.random() * phrases.length);

  const phrase = phrases[randomIndex] + `\n\n#beccalyria`;

  try {
    await Becca.post("statuses/update", { status: phrase });
    console.info(
      `Sent "${phrase}" on ${new Date(
        Date.now()
      ).toLocaleDateString()} at ${new Date(Date.now()).toLocaleTimeString()}`
    );
  } catch (err) {
    console.error(err);
    console.info("Could not send tweet. Exiting process.");
    process.exit(1);
  }
};
