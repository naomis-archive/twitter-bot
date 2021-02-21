import Twitter from "twitter";

import { motivationalQuotes } from "../data/quotes.json";

export const sendQuote = async (Becca: Twitter) => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);

  const { quote, author } = motivationalQuotes[randomIndex];

  let tweetString = `"${quote}"\n--${author}\nquotes from #freeCodeCamp\n#motivation #beccalyria`;

  if (tweetString.length > 280) {
    tweetString = `Oh no! This quote was too long!`;
  }

  try {
    await Becca.post("statuses/update", { status: tweetString });
    console.info(
      `Sent "${quote}" on ${new Date(
        Date.now()
      ).toLocaleDateString()} at ${new Date(Date.now()).toLocaleTimeString()}`
    );
  } catch (err) {
    console.error(err);
    console.info("Could not send tweet. Exiting process.");
    process.exit(1);
  }
};
