# Git Training Exercise - Conflict Resolution

This is a training exercise to practice indentifying and resolving conflicts in Git. It is a Node/Typescript project.

## Setup

1. Fork this repository so that you can push the results of your work to your own personal GitHub and practice raising PRs without affecting other people.
2. Clone the fork.
3. Open the project with an editor of your choice (VS Code recommended).
4. Ensure you have Node.js >= v16 installed
5. Install the dependencies with `npm install`
6. Run the tests with `npm run test`

## Task

This repository has several branches. Your task is to combine them into one that will contain the features of all of them. Beware - conflicts lie ahead (that is, after all, the main point of the exercise)!

Branches in the repo:

- main
- cleanup-computation
- compute-array
- handle-negatives
- handle-null
- negative-recursion
- optional-recursion

## Tests and Correctness

All branches include tests. Conveniently, whoever wrote the tests (:eyes:) made sure that they are all in different files, so there should be no conflicts there.

Tests are always supposed to be right and you should not need to edit them at any point to make them pass.

## Approach

The goal state of this exercise is a `main` branch that contains all of the features that are currently split onto separate feature branches. **You should not have to write or modify any code outside of the merge conflict resolution process.**

To get familiar with git and remote git repositories, there are several different approaches you can take to resolving these conflicts. I'd recommend working through them in order - the first one is the most refective of the process that we'll use on the project, but the others are great practice.

1. The PR/rebase approach. For each branch:
    - Create a pull request ("PR") for a feature branch (make sure to make this against your own version of the repository, not my copy that you forked it from)
    - Most of the time, it won't let you merge it because of a conflict
    - Locally, pull an up-to-date version of `main` and rebase the feature branch on top of it, resolving any conflicts as they arise
    - Force push your feature branch. It should now be possible to merge the PR that you previously created
        - **Note:** Force pushing is quite dangerous, and you shouldn't get into the habit of doing it other than for this specific case where a branch has been rebased and you need to update the remove version. On our project, the `main` branch will be protected against force pushing.
2. Without using GitHub, get all of the features on to the `main` branch only using `git merge` commands.
3. Without using GitHub, get all of the features on to the `main` branch only using `git rebase` commands.

After each run-through, you will want to revert your repository back to its starting state. You might want to explore ways of doing this (without re-forking the original repo), for example:

- adding remote to the original repo and resetting `--hard`
- reflog (git reference logs)
