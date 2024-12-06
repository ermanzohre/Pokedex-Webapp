# Pokedex App

Pokedex App is a Pokémon discovery application where users can explore different Pokémon types, view Pokémon details, and analyze their moves' accuracy visually.

## Features

-   **View Pokémon Types**: Displays a list of different Pokémon types.
-   **Search Feature**: Allows users to search for Pokémon by name.
-   **Pokémon Details**: Displays details about a Pokémon, including its types and moves' accuracy.
-   **Responsive Design**: Optimized for both mobile and desktop devices.

## Technologies Used

-   **React.js**: For building the user interface.
-   **Next.js**: For server-side rendering and routing.
-   **Apollo Client**: For data fetching and state management via GraphQL.
-   **Material-UI**: For pre-styled components.
-   **Styled-Components**: For modular and component-scoped CSS.
-   **Zustand**: For state management.
-   **Jest & React Testing Library**: For testing.
-   **SWC**: For fast testing and build transformations.

## Getting Started

To get started with the Pokedex App, follow these steps:

1. **Install dependencies:**

```zsh
    npm install
```

2. **Run the development server:**

```zsh
    npm run dev
```

3. **Open the application in your browser: http://localhost:3000**

4. **Build for Production**
   **To build the application for production:**

```zsh
    npm run build
```

5. **Testing**
   **Run tests with the following command:**

```zsh
    npm test
```

## Project Structure

```plaintext
pokedex-app/
├── public/              # Static files (favicon, images, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── graphql/         # GraphQL queries and mutations
│   ├── pages/           # Next.js pages
│   ├── store/           # Zustand store for state management
│   ├── styles/          # Global and styled-component styles
│   └── utils/           # Helper functions and constants
├── test/                # Unit and integration tests
│   ├── components/      # Tests for components
│   └── store/           # Tests for the store
```

## API Integration

This project uses [PokeAPI GraphQL](https://pokeapi.co/) for fetching Pokémon data.
