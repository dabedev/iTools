# React Practical Course

This project is based on the React Practical Course by Platzi, but modified to my preferences with best practices and additional features.

## Installation

To install the project dependencies, use:

```sh
npm ci
```

**Note:** Running this command will install the serve NPM module locally. If you prefer not to include this module in your project, you can remove it from the package.json file before running the installation command.

## Development

To start the project in development mode, use:

```sh
npm start
```

This will launch the development server and you can access the application in your browser at `http://localhost:3005`.

## Deployment

To start the project in production mode, use:

```sh
npm run build && serve -s dist
```

This will launch the production server and you can access the application in your browser at `http://localhost:3000`.

**Note:** To run the application in production mode, you need to install the 'serve' NPM module globally. Alternatively, you can install it locally and start the production server using the following command:

```sh
npm run build && npx serve -s dist
```

## Features

- Several bugs related to the removal of multiple items of the same type from the shopping cart have been fixed.
- Structural modifications have been implemented to optimize memory usage and prevent unnecessary waste.
- Fixed styling issue on MyOrder component where cart would overflow and push other elements down.

## Credits

- Platzi: <https://platzi.com/>
- React Practical Course: <https://platzi.com/cursos/react-practico/>
