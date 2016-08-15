# Amaze

A simple scaffold to begin project with koa2 and mongodb

### Prerequisite Technologies

* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
* *MongoDB* - Follow the great tutorial from the mongodb site - <a href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/">"Install Mongodb On Windows"</a>
* *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing <a href="http://git-scm.com/download/win">Git for Windows</a>

### Quick start
In the application folder run this in the command-line:

```bash
$ git clone https://github.com/DoubleK2013/amaze.git
$ npm install
$ npm start
```

#### Generator

1. Add schema file in folder data/schema
2. Run generator to generate crmv(controller, route, model, service) file for CURD

```bash
$ npm run generator -- -a -crmv
```