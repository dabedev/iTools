# iTools

Our API provides a wide range of functionalities to help developers analyze and compare data. With our API, you can measure, analyze, and compare different types of data, from numerical data to text. Additionally, we also offer the ability to set up webhooks to receive real-time updates on statistical charts. With our API, you can easily integrate these functionalities into your applications to gain valuable insights about your data.

## Table of Contents

- [iTools](#itools)
  - [Table of Contents](#table-of-contents)
  - [Client](#client)
    - [Client's installation](#clients-installation)
    - [Client's usage](#clients-usage)
  - [Server](#server)
    - [Server's installation](#servers-installation)
    - [Server's usage](#servers-usage)
  - [Contributing](#contributing)
  - [TODO](#todo)

## Client

### Client's installation

To install the client, follow these steps:

- Navigate to the `client` directory

```sh
cd iTools/client
```

- Install the required dependencies using `npm`

```sh
npm ci
```

### Client's usage

To use the client, follow these steps:

- For development, run the following command in the `client` directory:

```sh
npm start
```

This will start the development server and open the client application in your default browser.

- For production, run the following command in the `client` directory:

```sh
npm run build
```

This will create a production build of the client application in the `build` directory of the `client` folder. You can then serve this directory using a web server of your choice.

## Server

### Server's installation

To install the server, please follow these steps:

- Navigate to the server directory

```sh
cd iTools/server
```

- Install the required dependencies using `npm`

```sh
npm ci
```

### Server's usage

To use the server, follow these steps:

- For development, run the following command in the `server` directory:

```sh
npm test
```

This will start the server in development mode, allowing you to make changes to the code and see the results in real time.

- For production, run the following command in the `server` directory:

```sh
npm start
```

  This will start the server in production mode, allowing you to serve the application using a web server of your choice.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Make your changes
3. Submit a pull request

Bug reports and feature requests can be submitted through the Issues tab.

## TODO

- [ ] Update README with webhook instructions
- [ ] Export types for webhooks
- [ ] Webhooks playground has to generate the URL
- [ ] Implement an AccessToken system for each user
- [ ] Develop a Color Palette Picker for users
- [ ] Develop Math modules
- [X] Implement Graphs to visually represent data
- [ ] Develop a Statistics module to provide data analysis
- [ ] Create an Image comparison tool
- [ ] Create a Single Sign-On (SSO) system for the application
- [ ] Publish a NPM module for use by other developers
- [ ] Ensure the application is responsive on all devices
- [ ] Build a Desktop Application using Electron
- [ ] Build a Mobile Application using React Native
