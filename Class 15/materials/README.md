# Package Management

Package management is a really important part of the JavaScript community. The need for package management grew as the language climbed the top as the most used language in the world. With this came a huge number of libraries for everything and anything. It gets even harder when we factor in the dependencies of all these libraries ( libraries that depend on other libraries ) such as bootstrap depending on jquery and popper. To organize and standardize everything to some extend package managers were created. Their job is to keep track of packages, their versions, and dependencies. When we need a package we can just request it from the package manager and it will download it with all of its dependencies and in the correct versions that the library works with. This can cut our time downloading libraries and reading the documentation on how to connect and set up everything by a huge margin. We just write one or two commands and we have a library all ready to go

## NPM

One of the most famous and widely accepted package managers is the node package manager. This package manager can be installed if you already have node.js installed on your computer and it's very easy to use

### Ways we can install packages

* Local - Packages that are local to the folder that you are working in
* Global - Packages that are installed on the machine and are accessible throughout all files and folders
* Release - A package that will be installed for the release version of the product
* Development  - A package that is only needed in the development phase of the application

### Installation

Installation is very quick. We just open the console and write: **npm install npm -g**. After everything is installed write **npm -v** in the console. If a version pops up, this means that we successfully installed npm
 
### Commands
* npm init - create a package.json for your project
* npm ls - lists installed packages
* npm install - Looks in the folder for dependencies configuration and if it finds any, downloads and installs all packages and dependencies
* npm install PackageName - installs package locally in the folder you are in and is a release package
* npm install PackageName -g -installs package globally to your file system
* npm install PackageName --save-dev - installs a package only needed for the development phase
* npm install PackageName --no-save - Installs package only for this folder and this machine only ( Will not be stored in dependencies )
* npm install PackageName@1.8.2 - install a package with a certain version
* npm install --only=prod - installs packages only for production
* npm outdated - checks for outdated packages
* npm update PackageName - updates package
* npm uninstall PackageName - removes a package from the project
 
#### Configuration

We can see all our dependencies in the package.json file. The package.json file is the main hub for tracking which packages we installed and what we can use. This configuration file can be configured in different ways depending on our needs

* ^ - indicates installing of a compatible version with the added version
* ~ - indicates installing of a similar version to the added version
* \* - indicates installing any version 
* \< - indicates installing a greater version of the added version

## Extra materials 📘
* [A guide to NPM](https://www.sitepoint.com/beginners-guide-node-package-manager/)
