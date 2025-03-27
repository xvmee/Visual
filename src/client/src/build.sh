#!/bin/bash
set -e

# Wyświetl bieżący katalog
echo "Current directory: $(pwd)"
ls -la

# Sprawdź, czy package.json istnieje
if [ -f "package.json" ]; then
  echo "package.json found, installing dependencies..."
  npm install
else
  echo "package.json not found in current directory!"
  echo "Listing all files recursively..."
  find . -type f -name "package.json" -not -path "*/node_modules/*"
  
  # Jeśli nie znaleziono package.json, próbujemy stworzyć prosty
  echo "Creating minimal package.json..."
  cat > package.json << EOF
{
  "name": "discord-bot-landing",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vite": "^5.0.10"
  }
}
EOF
  npm install
fi

# Sprawdź strukturę katalogów
echo "Checking directory structure..."
if [ -d "client" ]; then
  echo "Client directory exists"
  ls -la client
else
  echo "Client directory not found!"
fi

if [ -d "client/src" ]; then
  echo "Client source directory exists"
  ls -la client/src
else
  echo "Client source directory not found!"
fi

# Uruchom budowanie Vite
echo "Running Vite build..."
npx vite build --config vite.netlify.config.ts

# Sprawdź wynik budowania
if [ -d "dist" ]; then
  echo "Build successful, dist directory created"
  ls -la dist
else
  echo "Build failed, dist directory not found"
fi
