#!/bin/sh

todayDate=$(date +%Y-%m-%d)

git add .
git commit -m "$todayDate"
git push
