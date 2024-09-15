# learnnodejs



// command untuk get all branch

for branch in $(git branch -r | grep -v '\->'); do
    git branch --track "${branch#origin/}" "$branch" || true;
done
git fetch --all
git pull --all
