# Star Wars API Explorer
This is a React application that allows you to explore information about Star Wars planets and people from the Star Wars API.

## Getting Started


### Prerequisites:

- Node.js and npm (or yarn) installed on your system.


### Installation:

1. Clone this repository:
```bash
git clone https://github.com/AnukulSaxena/star-wars-api.git
```

2. Navigate to the project directory:
```bash
cd star-wars-api
```

3. Install dependencies:
```bash
npm install
```


### Running the application:

1. Start the development server:
```bash
npm start
```

2. Open http://localhost:5173 in your browser.


### Project Structure

The project is organized into the following directories:

- `src`: Contains components, store, pages, and other source code.
  - `components`: Contains all small function components.
  - `store`: Contains Redux store and reducers.
  - `pages`: Contains React-Router pages.
  - `App.jsx`: Contains main entry point of the application.
  - `Main.jsx`: Contains the main routing and rendering logic.


### Usage

The application has two main sections: Planets and People.

- Planets: Displays a list of planets with details like name, terrain, climate, and residents. Clicking on a resident button shows information about the residents of that planet.
- People: Displays a list of people with details like name, birth year, gender, and physical characteristics.

You can navigate between these sections using the header navigation.


### Contributing

We welcome contributions to this project. Feel free to fork the repository and submit pull requests with your changes.
