# pull official base image
FROM node:16-alpine
# set working directory to the specified 'lastName_firstName_site'
WORKDIR /wei_tingting_ui_garden_build_checks
# add `/wei_tingting_ui_garden/node_modules/.bin` to $PATH
ENV PATH /wei_tingting_ui_garden_build_checks/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app
COPY . ./
# start app
CMD ["npm", "run", "storybook"]
