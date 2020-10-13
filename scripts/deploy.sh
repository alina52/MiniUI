#!/bin/bash

# Throw exception
set -e

echo "start build..."
# packge docs
npm run build:docs

echo "√ build success"

# enter target file folder
cd docs/build

echo "start publish..."
# push to gh-pages
git config  --get remote.origin.url
git init
git config user.name "chenyu.wang96@outlook.com"
git config user.email "chenyu.wang96@outlook.com"
git add .
git commit -m 'docs:publish'

git push --force --quiet git@github.com:alina52/MiniUI.git master:gh-pages
echo "√ publish success 🦌"

cd -
