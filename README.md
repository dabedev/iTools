# iTools

This repository contains a text similarity comparison tool that allows you to compare the similarity between two or more texts. The tool uses a variety of algorithms and techniques to analyze the texts and provide a similarity score. With this tool, you can compare any type of text, from short phrases to long documents, and get a detailed analysis of their similarities and differences. Whether you're a writer, a researcher, or just someone who wants to compare texts, this tool can help you make informed decisions and save time.

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
