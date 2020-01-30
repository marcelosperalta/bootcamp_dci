### GitHub

#### Branches

https://help.github.com/en/github/getting-started-with-github/github-glossary#branch

https://guides.github.com/introduction/flow/

### Git

#### Git Reference

https://git-scm.com/docs

#### Some commands

cd fbw26

cd lessons

git remote -v

result:

origin	git@github.com:FBw-26/lessons.git (fetch)

origin	git@github.com:FBw-26/lessons.git (push)

git remote -v = to see the "repo" owner

cd clone-test

ls
result: README.md

ls -la

git remote -v

git remote rename origin upstream

git remote add origin git@github.com:marcelosperalta/clone-test.git

git fetch upstream

mkdir github-test2000

cd github-test2000

echo "# github-test" >> README.md

git init

result: Initialized empty Git repository in /home/dci-st127/test/fbw26/github-test2000/.git/

git add .

git commit -m "1st commit"

git remote add origin git@githib.com:marcelosperalta/github-test2000

or

git remote add origin git@githib.com:marcelosperalta/github-test2000.git

git remote remove origin

git remote add origin git@github.com:marcelosperalta/github-test2000.git

git push origin master

cd fbw26

ls

cd github-test2000

ls

less README.md

git branch

git checkout -b logout

git branch

nano README.md

git checkout master

git checkout logoutgit add .git commit -m "new line"

git push origin logout

git commit -m "new lines"

git checkout master

git branch

pwd

git merge

(note: first, create the folder apple on GitHub)

mkdir apple

cd apple

git init

result: Initialized empty Git repository in /home/dci-st127/test/fbw26/apple/.git/

echo "# Apple" >> README.md

git status (On branch master)

git add .

git commit -m "first commit"

git remote add origin git@github.com:marcelosperalta/apple.git

git push origin master

git branch

git checkout -b new-br

git branchnano README.md

git add .

git status

git commit -m "2nd commit"

git push origin new-br

git checkout master

git branch

git merge new-br
