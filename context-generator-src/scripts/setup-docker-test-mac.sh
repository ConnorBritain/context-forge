#!/bin/bash
# macOS setup script for Context Generator Docker testing

# Text formatting
BOLD="\033[1m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# Function to print section header
print_header() {
  echo -e "\n${BOLD}${GREEN}==== $1 ====${NC}\n"
}

# Function to print status message
print_status() {
  echo -e "${YELLOW}$1${NC}"
}

# Function to print error message
print_error() {
  echo -e "${RED}ERROR: $1${NC}"
  exit 1
}

# Function to check for required tools
check_prerequisites() {
  print_header "Checking Prerequisites"
  
  # Check for Homebrew
  if ! command -v brew &> /dev/null; then
    print_status "Homebrew is not installed. Installing..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add Homebrew to PATH
    if [ -d "/opt/homebrew/bin" ]; then
      echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
      eval "$(/opt/homebrew/bin/brew shellenv)"
    elif [ -d "/usr/local/bin" ]; then
      echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
      eval "$(/usr/local/bin/brew shellenv)"
    fi
    
    print_status "Homebrew installed. You may need to restart your terminal."
  fi
  
  # Check for Node.js
  if ! command -v node &> /dev/null; then
    print_status "Node.js is not installed. Installing with Homebrew..."
    brew install node
    
    if [ $? -ne 0 ]; then
      print_error "Failed to install Node.js. Please install it manually and try again."
    fi
    
    print_status "Node.js installed."
  fi
  
  # Check for npm
  if ! command -v npm &> /dev/null; then
    print_status "npm is not installed (usually comes with Node.js). Installing Node.js..."
    brew install node
    
    if [ $? -ne 0 ]; then
      print_error "Failed to install npm. Please install it manually and try again."
    fi
    
    print_status "npm installed."
  fi
  
  # Check for Docker
  if ! command -v docker &> /dev/null; then
    print_status "Docker is not installed."
    echo "Docker Desktop for Mac must be installed manually."
    echo "1. Download Docker Desktop from: https://www.docker.com/products/docker-desktop/"
    echo "2. Install the application and start it"
    echo "3. Run this script again after Docker is installed and running"
    exit 1
  fi
  
  # Check if Docker is running
  if ! docker info &> /dev/null; then
    print_status "Docker is installed but not running."
    echo "Please start Docker Desktop and try again."
    echo "You can find Docker Desktop in your Applications folder."
    exit 1
  fi
  
  # Check for Docker Compose
  if ! command -v docker-compose &> /dev/null; then
    print_status "Docker Compose is not installed (should be included with Docker Desktop)."
    echo "Please make sure Docker Desktop is properly installed."
    exit 1
  fi
  
  echo "✅ All prerequisites are installed and running"
}

# Function to setup environment files
setup_environment() {
  print_header "Setting Up Environment Files"
  
  # Copy .env.docker to .env if it doesn't exist
  if [ ! -f .env ]; then
    print_status "Creating .env file from .env.docker..."
    cp .env.docker .env
    echo "✅ Created .env file"
  else
    print_status ".env file already exists"
  fi
  
  # Prompt user to edit .env file with actual API keys
  echo -e "\n${BOLD}For testing with real AI services, you need to update your API keys in the .env file.${NC}"
  read -p "Would you like to edit the .env file now? (y/n): " edit_env
  
  if [[ $edit_env == "y" || $edit_env == "Y" ]]; then
    # Use default editor or fallback to nano
    ${EDITOR:-nano} .env
    echo "✅ .env file updated"
  else
    echo "Please edit the .env file manually to add your API keys before testing."
  fi
}

# Function to install dependencies
install_dependencies() {
  print_header "Installing Dependencies"
  
  print_status "Installing server dependencies..."
  cd server && npm install
  if [ $? -ne 0 ]; then
    print_error "Failed to install server dependencies"
  fi
  
  print_status "Installing client dependencies..."
  cd ../client && npm install
  if [ $? -ne 0 ]; then
    print_error "Failed to install client dependencies"
  fi
  
  cd ..
  echo "✅ All dependencies installed"
}

# Function to build Docker images
build_docker() {
  print_header "Building Docker Images"
  
  print_status "Building Docker images..."
  docker-compose build
  if [ $? -ne 0 ]; then
    print_error "Failed to build Docker images"
  fi
  
  echo "✅ Docker images built successfully"
}

# Function to start Docker containers
start_docker() {
  print_header "Starting Docker Containers"
  
  print_status "Starting containers in detached mode..."
  docker-compose up -d
  if [ $? -ne 0 ]; then
    print_error "Failed to start Docker containers"
  fi
  
  # Wait for containers to be ready
  print_status "Waiting for containers to be ready..."
  sleep 10
  
  # Check if containers are running
  if [ $(docker-compose ps -q | wc -l) -eq 0 ]; then
    print_error "No containers are running"
  fi
  
  echo "✅ Docker containers started successfully"
}

# Function to run token tracking tests
run_tests() {
  print_header "Running Token Tracking and Subscription Tests"
  
  # Install test dependencies
  print_status "Installing test dependencies..."
  npm install --no-save axios dotenv
  
  # Run the test script
  print_status "Running test script..."
  node scripts/test-token-tracking.js
  
  if [ $? -ne 0 ]; then
    print_error "Tests failed"
  fi
  
  echo "✅ Tests completed successfully"
}

# Function to stop Docker containers
stop_docker() {
  print_header "Stopping Docker Containers"
  
  print_status "Stopping containers..."
  docker-compose down
  if [ $? -ne 0 ]; then
    print_error "Failed to stop Docker containers"
  fi
  
  echo "✅ Docker containers stopped successfully"
}

# Main script execution
main() {
  print_header "Context Generator Docker Test Setup for macOS"
  
  # Change to the project root directory
  cd "$(dirname "$0")/.."
  
  # Execute functions in sequence
  check_prerequisites
  setup_environment
  install_dependencies
  build_docker
  start_docker
  
  # Ask if user wants to run tests
  read -p "Would you like to run the token tracking and subscription tests? (y/n): " run_tests_prompt
  
  if [[ $run_tests_prompt == "y" || $run_tests_prompt == "Y" ]]; then
    run_tests
  fi
  
  # Ask if user wants to stop containers
  read -p "Would you like to stop the Docker containers? (y/n): " stop_prompt
  
  if [[ $stop_prompt == "y" || $stop_prompt == "Y" ]]; then
    stop_docker
  else
    echo -e "\n${BOLD}The Docker containers are still running.${NC}"
    echo "You can access the application at http://localhost:3000"
    echo "You can stop the containers later by running: docker-compose down"
  fi
  
  print_header "Setup Complete"
  echo "The Context Generator is now set up for testing with Docker."
  echo "If you want to deploy to production, review the .env.production file"
  echo "and update it with your actual production values."
}

# Run the main function
main