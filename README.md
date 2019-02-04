# git-playground
a short-lived repository for some git training

# scenarios we will try to master
- start working on a new branch (clone, fetch, checkout -b, reset --hard)
  - create "name/master"
  - introduce parameters to a() on a lang of your choice.
  - branch off from there to "name/params".
- preparing a WIP commit (add, reset, diff, diff --cached, push, push -u)
  - view changes with `diff`
  - `add` a file
  - view changes with `diff --cached`
  - `reset` the staged file, `add` it again for funzies
  - `commit` with some message
  - `push -u`
  - `commit --amend` with a better one
  - `push -f`
- PR - basic
  - merge to "name/master" view the implications locally
  - cleanup (`branch -D`)
- resolving conflicts (rebase)
  - prepare "name/multiply" and "name/rename_a"
  - merge "multiply" to "master. rebase "rename_a" on master. resolve!
- PR - advanced - preparing a PR-worthy branch from a collection of WIP commits (rebase -i, reset, push -f, commit --amend)
  - add some separate commits
  - back up changes in a different, remote branch
  - `rebase -i` to fix them up

# bonus scenarios (we probably won't need these)
- cherry-picking
- setting branch upstream
- someone `push -f`ed into a shared branch
- multiple commits on the same file
- checking out a file from a different branch
- deleting a remote branch
- moving between branches (stash & stash pop, checkout, log)
  - make some changes
  - `stash`
  - `checkout "name/master"`
  - `checkout` back to where you were (assist with `branch`)
  - `stash pop`
  - `diff` and `log` to confirm
