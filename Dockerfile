# 拉取官方的基础镜像
FROM node:16-alpine as builder

# 设置工作目录为指定的 'lastName_firstName_ui_garden'
WORKDIR /wei_tingting_ui_garden

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package.json package-lock.json ./

# 安装依赖项
RUN npm install --silent

# 复制应用程序代码
COPY . .

# 构建生产应用程序
RUN npm run build

# 创建用于承载生产构建的最终镜像
FROM nginx:alpine

# 将工作目录切换到指定的 'lastName_firstName_ui_garden_build_checks'
WORKDIR /wei_tingting_ui_garden_build_checks

# 从构建阶段复制生产构建到 nginx 静态文件目录
COPY --from=builder /wei_tingting_ui_garden/build /usr/share/nginx/html

# 暴露容器的端口
EXPOSE 8018

# 启动 nginx 服务器来托管静态文件
CMD ["nginx", "-g", "daemon off;"]
