# Chatapp

> Simple group chat app implemented with socket.io using nodejs + typescript and
react native + typescript

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v

```
Also make sure you have [Expo CLI](https://www.npmjs.com/package/expo-cli) installed.


```sh
$ npm -v && node -v

```
## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Installation

Start with cloning the client branch and the server branch separately in different folders on your local machine:

```sh
$ git clone --branch client --single-branch https://github.com/0xosamaa/chat-app-react-native-ts
$ git clone --branch server --single-branch https://github.com/0xosamaa/chat-app-react-native-ts
```
To install and set up the libraries, run for each of the 2 repos:

```sh
$ npm install
```
## Usage
Now that you have 2 folders, 1 for the client and 1 for the server you need to have 1 command line interfaces for each directory and have the following commands running simultaneously:

### Serving the client app


```sh
$ expo start
```

### Serving the server app


```sh
$ npm start
```
### Important
In order to have a connection to the server make sure you change the local IP address in socket.js in the client directory to your local machine's local IP address run the following command to get your WIFI connected IPV4 address:

```sh
$ ipconfig
```
Change the following line in socket.js to your IPV4 address:

```ts
const socket = io('ws://192.168.1.5:8081');
```
Open the app on whatever platform or device you prefer, enter your name and start chatting.

## Contributors

[0xosamaa](https://github.com/0xosamaa)
