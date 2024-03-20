# Component Library Setup Guide

This guide provides detailed instructions for setting up and running the component library on your local machine utilizing Docker. The component library, as part of Assignment 13, incorporates enhancements in code quality checks within the build process to ensure high standards of code hygiene and reliability. Follow the steps below to deploy the library on localhost port 8018.

## Prerequisites

Before you begin, ensure you have Docker installed and running on your machine. If you don't have Docker installed, visit the [official Docker documentation](https://docs.docker.com/get-docker/) to download and install it.

## Getting Started

To set up and start the component library on your local environment, follow the steps outlined belo

### Clone the Repository

Start by cloning the repository containing the component library source code to your local machine. Use the Git command below:

```bash
git clone https://github.com/ttwei3/assignment_coding_13.git

cd assignment_coding13
```
### Build and Run the Docker Container
```
docker build -t wei_tingting_coding_assignment13 .

docker run -p 8083:6006 wei_tingting_coding_assignment13
```
### Access the Application

Open your web browser and navigate to http://localhost:8018. You should now see the component library UI running, indicating that the setup was successful.

### Final Notes

The Docker container is configured to perform code quality checks using Husky, Prettier, ESLint, and automated tests before commits are allowed. These checks ensure that your contributions adhere to the project's coding standards and guidelines. Additionally, GitHub Actions are employed to enforce these checks on the repository, ensuring that any code bypassing the local pre-commit hooks is still validated.

By following this guide, you've successfully set up and run the component library on your local machine, with integrated code quality checks and a CI/CD pipeline using GitHub Actions.