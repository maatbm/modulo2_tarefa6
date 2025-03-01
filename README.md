# Pokemon List Viewer - A Modern React Application for Pokemon Data Display

This React application provides a clean and efficient way to browse Pokemon data from the PokeAPI. Built with TypeScript and Vite, it offers a responsive interface that displays Pokemon information in an organized card layout. The application leverages modern React patterns and tools to deliver a smooth user experience while maintaining type safety and code quality.

The application features a component-based architecture that separates concerns between data fetching, display, and routing. It uses styled-components for styling, axios for API requests, and implements React Router for navigation. The Pokemon data is fetched from the PokeAPI and displayed in a grid of cards, making it easy for users to browse through the Pokemon collection.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── components/               # Reusable React components
│   │   ├── PokemonCard/         # Pokemon card component and styles
│   │   └── PokemonList/         # Pokemon list container and styles
│   ├── pages/                   # Page components
│   │   └── Home/               # Home page component
│   ├── routes/
|   |   └── AppRoutes/                 # Routing configuration
│   ├── App.tsx                  # Main application component
│   └── main.tsx                 # Application entry point
├── vite.config.ts              # Vite build configuration
├── tsconfig*.json              # TypeScript configuration files
├── package.json                # Project dependencies and scripts
└── eslint.config.js           # ESLint configuration
```

## Usage Instructions
### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd pokemon-list-viewer

# Install dependencies
npm install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. The application will display a grid of Pokemon cards fetched from the PokeAPI

### More Detailed Examples
#### Fetching Pokemon Data
```typescript
import axios from "axios";

async function getPokemonsData() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}
```

### Troubleshooting
#### API Connection Issues
- Problem: Pokemon data not loading
- Error message: "Error fetching Pokemon data"
- Solution steps:
  1. Check your internet connection
  2. Verify the PokeAPI endpoint status at https://pokeapi.co/
  3. Check browser console for detailed error messages
  4. Enable debug logging by adding `console.log` statements in the `getPokemonsData` function

#### Development Server Issues
- Problem: Development server not starting
- Solution:
  1. Clear npm cache: `npm cache clean --force`
  2. Delete node_modules: `rm -rf node_modules`
  3. Reinstall dependencies: `npm install`
  4. Restart development server: `npm run dev`

## Data Flow
The application follows a straightforward data flow where Pokemon data is fetched from the PokeAPI, stored in component state, and rendered as cards in a grid layout.

```ascii
+-------------+     +--------------+     +---------------+     +-------------+
|             |     |              |     |               |     |             |
| PokeAPI     +---->+ PokemonList  +---->+ State         +---->+ PokemonCard |
|             |     | Component    |     | Management    |     | Components  |
+-------------+     +--------------+     +---------------+     +-------------+
```

Component Interactions:
1. PokemonList component initiates API request on mount using useEffect
2. Axios handles the HTTP GET request to PokeAPI
3. Response data is stored in component state using useState
4. Pokemon data is mapped to individual PokemonCard components
5. Each PokemonCard receives Pokemon name as props
6. Components use styled-components for consistent styling
7. Error handling is implemented at the API request level
8. React Router manages navigation between views