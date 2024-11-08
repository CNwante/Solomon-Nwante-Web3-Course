# Module 4 - Intro to Web3: Simple DApp

This directory contains Module 4 of the *Intro to Web3* course.
The purpose of this tutorial is to create a simple decentralized application (DApp) as an introduction to Web3 development. This documentation serves as a reference, summarizing what I've learned and how to set up and run the code.


## Features

- **Detect MetaMask Provider**: Checks if MetaMask is installed and accessible in the browser, prompting the user to install it if not detected.
- **Detect Network**: Retrieves the user's network `chainId` and listens for network changes, refreshing the page when a new network is detected.
- **Access User Accounts**: Requests the user's permission to access MetaMask accounts and displays the connected account information on the page.

## Overview

### Detecting MetaMask

This section detects if MetaMask is available by using `@metamask/detect-provider`. If MetaMask is installed, the application proceeds to the next steps; otherwise, it prompts the user to install MetaMask.

### Detecting User's Network

Using the MetaMask `eth_chainId` request, this section retrieves the network ID. It also listens for the `chainChanged` event to detect when the user switches networks, reloading the page to reflect the new network.

### Accessing User Accounts

This feature enables access to MetaMask accounts by requesting `eth_requestAccounts`. Once permission is granted, the DApp displays the connected account on the webpage for verification.

## Tech

This project makes use of the following:

- **JavaScript and Asynchronous Programming**: Implements async functions for interacting with MetaMask and managing network requests.
- **DOM Manipulation**: Dynamically displays the user's account address on the webpage.
- **MetaMask API**: Uses MetaMask's API to detect providers, access accounts, and detect chain changes.

## How to Run

### Prerequisites
Ensure you have the followings in you loacal machine

- **Node.js**: Version 20 or later.
- **MetaMask**: Installed in the browser on your development machine.

1. Clone the repository and navigate to the `simple-dapp` directory:
   ```bash
   git clone https://github.com/CNwante/Solomon-Nwante-Web3-Course.git
   cd simple-dapp

2. Install the dependencies:

    ```bash
    npm install

3. Start the development server:

    ```bash
    npm run dev

Open your browser and navigate to the local server URL. Interact with MetaMask by enabling Ethereum access and switching networks as needed.

## Acknowledgments

This tutorial was made possible with guidance and resources from [MetaMask's documentation](https://docs.metamask.io/) and Projectstake Academy’s Intro to Web3 course. Special thanks to them for their support and educational materials.
