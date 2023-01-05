![download img](https://img.shields.io/npm/dt/git-push-url)


> this CLI change __"./.git/config"__ file content of remote url settings.

# Background

when we want to push multiple repo:

- multiple remote (the commonly used： git remote add origin <git_repo_url>)

- multiple urls below same remote (similarly: git remote set-url origin <git_repo_url>)

In "set-url" can't add urls, it just replace url.

The purpose of this tool is to simply add urls, and yes, it is that simple.


## Use For
Push multiple repositories

## Usage

```shell
npm i git-push-url -g
git-push-url add https://github.com/user/repo.git
#or
git-push-url remove https://github.com/user/repo.git
```

## Principle
> Changed the remote content in the __"./.git/config"__ file in the current directory, adding or removing the URL.

Welcome to contribute. 

github: https://github.com/weykon/git-push-url


