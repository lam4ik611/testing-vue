#!/usr/bin/env sh

# stop the publication if error
set -e

npm run build

# to the build catalog
cd dist

git push -f git@github.com:lam4ik611/lam4ik611.github.io.git master

git push -f git@github.com:lam4ik611/testing-vue.git master:gh-pages

cd -