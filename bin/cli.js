#!/usr/bin/env node

const argv = require("yargs")
  .usage(
    "Get merge PRs included specific PR.\n\nUsage: get-merge-prs [options]"
  )
  .help("help")
  .alias("help", "h")
  .options({
    github_api_token: {
      alias: "t",
      description:
        "Your GitHub Access Token. Get here https://github.com/settings/tokens",
      requiresArg: true,
      required: true
    },
    owner: {
      alias: "o",
      description: "Target repository owner.",
      requiresArg: true,
      required: true
    },
    repo: {
      alias: "r",
      description: "Target repository name.",
      requiresArg: true,
      required: true
    },
    pr: {
      alias: "p",
      description: "Target pull request number.",
      requiresArg: true,
      required: true
    }
  }).argv;

const getMergePrs = require("../");
(async () => {
  const mergePrs = await getMergePrs(argv);
  console.info(
    mergePrs
      .map(
        commit =>
          `- [ ] [${
            commit.commit.message.match(/Merge pull request (#\d+)/)[1]
          }](${commit.html_url}) by @${commit.author.login}`
      )
      .join("\n")
  );
})();
