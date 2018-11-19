const axios = require("axios");

module.exports = async function getMergePrs({
  github_api_token,
  owner,
  repo,
  pr
}) {
  const API_URI = `https://api.github.com/repos/${owner}/${repo}/pulls/${pr}/commits`;
  console.log(`fetching ${API_URI}...`);

  // fetch all commits from each pages
  let commits = [];
  for (let i = 1; ; i++) {
    try {
      const { data } = await axios.get(`${API_URI}?page=${i}`, {
        headers: {
          Authorization: `token ${github_api_token}`
        }
      });

      // reduce commits
      commits = [...commits, ...data];

      // break when empty results
      if (data.length === 0) break;
    } catch (e) {
      const { response } = e;

      console.error(`${response.status} ${response.statusText}`);
      process.exit(0);
    }
  }

  // filter merge commits
  return commits.filter(commit =>
    commit.commit.message.includes("Merge pull request")
  );
};
