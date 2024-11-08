import detectEthereumProvider from "@metamask/detect-provider";

/**Detect MetaMask
 ==================*/
async function setup() {
  const provider = await detectEthereumProvider();

  if (provider && provider === window.ethereumm) {
    console.log("MetaMask is available!");
    startApp(provider);
  } else {
    console.log("Please install MetaMask!");
  }
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you hav multiple wallets installed?");
  }
}

window.addEventListener("load", setup);
