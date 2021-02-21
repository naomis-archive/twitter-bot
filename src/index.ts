import { login } from "./modules/login";
import { sendPhrase } from "./modules/sendPhrase";

(async () => {
  const Becca = login();

  try {
    const valid = await Becca.get("statuses/home_timeline", {});
    console.log(
      `Becca logged in on ${new Date(
        Date.now()
      ).toLocaleDateString()} at ${new Date(Date.now()).toLocaleTimeString()}`
    );
  } catch (err) {
    console.error(err);
    console.info("Could not validate login. Exiting process.");
    process.exit(1);
  }
  await sendPhrase(Becca);
  const quoteSpam = setInterval(() => sendPhrase(Becca), 28800000);

  Becca.stream(
    "statuses/filter",
    { track: "@BeccaLyria,#beccalyria" },
    (stream) => {
      stream.on("data", (tweet) => {
        if (tweet.user.screen_name === "BeccaLyria") return;
        Becca.post(`statuses/retweet/${tweet.id_str}`, {});
        console.info(
          `Retweeted ${tweet.text} on ${new Date(
            Date.now()
          ).toLocaleDateString()} at ${new Date(
            Date.now()
          ).toLocaleTimeString()}`
        );
      });
    }
  );
})();
