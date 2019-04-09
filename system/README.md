# 美团后端系统

## 启动 redis

Linux：cd 到 redis 的 src 目录 `./redis-server &`(添加&后台启动) or `./redis-server & ../redis.conf`(配置文件启动)  
Mac: `brew services start redis`(后台启动) `brew services sop redis`(停止服务)

## 启动 MongoDB

`mongod --dbpath [path]` path 是数据库地址。

## 项目启动

`npm run dev`
