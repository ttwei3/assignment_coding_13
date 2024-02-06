# Component Library Setup Guide

This guide provides instructions on how to set up and run the component library on your local machine using Docker.

## Prerequisites

Before you begin, ensure you have Docker installed and running on your machine. If you don't have Docker installed, visit the [official Docker documentation](https://docs.docker.com/get-docker/) to download and install it.

## Getting Started

Follow these steps to get your component library running on localhost port 8083.

### Clone the Repository and Run Docker

Clone the repository containing the component library to your local machine.

```bash
git clone https://github.com/ttwei3/assignment_coding12.git
cd assignment_coding12

docker build -t coding12_u .
docker run -d -p 8083:8083 --name coding12_assignment coding12_u




.

