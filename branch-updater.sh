#!/bin/bash

# 获取所有分支（除了master）
branches=$(git branch --list | grep -v "master")

# 切换到master分支
git checkout master

# 在master分支上拉取最新代码
git pull origin master

# 循环遍历所有分支，将master分支合并到它们
for branch in $branches
do
    # 切换到目标分支
    git checkout $branch

    # 合并master分支到目标分支, 並選擇使用目前變更
    git merge -X ours master

    # 如果合并没有冲突，提交合并结果
    if [ $? -eq 0 ]; then
        git commit -am "Merge changes from master branch"
    else
        # 如果有冲突，打印提示信息
        echo "Conflict occurred while merging master into $branch. Resolve conflicts manually."
    fi
done

# 切换回master分支
git checkout master
