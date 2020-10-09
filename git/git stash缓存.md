git reset --soft HEAD~2 // 回退commit提交记录

git stash list // 查看当前缓存列表

git stash save 'xxx' //缓存当前的提交

// 比如可以切换到其他分支，然后

git stash apply 0 // 缓存应用，数字代表第几条缓存记录

然后提交 比如 git commit -a -m 'xxx';
再提交到其他分支，如：git push origin HEAD:xxxx