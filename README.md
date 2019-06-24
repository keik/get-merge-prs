# get-merge-prs

[![npm-version](https://img.shields.io/npm/v/get-merge-prs.svg?style=flat-square)](https://npmjs.org/package/get-merge-prs)

Small GitHub API wrapper CLI to get merge PRs included specific PR.


## Installation

```
% npm i get-merge-prs -g
```

## Usage

```
% get-merge-prs --help
Get merge PRs included specific PR.

Usage: get-merge-prs [options]

Options:
  --version               Show version number                          [boolean]
  --help, -h              Show help                                    [boolean]
  --github_api_token, -t  Put your GitHub Access Token. Get here
                          https://github.com/settings/tokens          [required]
  --owner, -o             Specify target repository owner.            [required]
  --repo, -r              Specify target repository name.             [required]
  --pr, -p                Specify target pull request number.         [required]
```

# License

MIT (c) keik
