# Dockerfile

# 基于node镜像
FROM node AS builder  

# 镜像创建src目录
WORKDIR /src
# 将项目package.json文件复制到src目录
COPY package*.json /src
RUN npm install
COPY . /src
RUN npm run build

# 还需要一个nginx镜像，用来部署vue项目
FROM nginx
COPY --from=builder /src/dist /usr/share/nginx/html/