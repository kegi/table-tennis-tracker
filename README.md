# Table tennis tracker

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is an application to track the score and service during a match.

Built for fun with **React** and **TypeScript**.

## Installation (application)
**note 1:** Only tested on Windows 10

**note 2:** Run on PowerShell/CMD, not on WSL ;)

```
yarn install
yarn build-windows
```

The output file **/dist/windows/TableTennisTracker.exe** is a one click installation app (using electron), you can copy paste it wherever you want.

## Installation (web)
```bash
yarn install
yarn build
```
launch index.html

### Dev build (application)
```bash
yarn install
yarn start-windows
```
App will open itself

### Dev build (web)
```bash
yarn install
yarn start
```
Open http://127.0.0.1:8080

## Features

 - Fully debounced buttons
 - Hold for 2 sec to cancel last points
 - Cute animations
 - Standalone app

## How to use it ?

Left player is associated with the left click of the mouse and the right player with the right button.

You can buy a very cheap bluetooth mouse and solder 2 buttons to the mouse motherboard to extend the original buttons. You simply fix both buttons to the tables and you have a wireless bluetooth table !

Demo step by step : https://imgur.com/gallery/nkd2X

![Demo photo](https://i.imgur.com/HEd3HUY.jpg)
![Demo photo](https://i.imgur.com/7DWidiP.jpg)
![Demo photo](https://i.imgur.com/e2aPT0a.jpg)
![Demo photo](https://i.imgur.com/t41BF5a.jpg)
