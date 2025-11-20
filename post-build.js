const {
  writeFile,
  readFile,
} = require("fs").promises;
const { join } = require("path");

const main = async () => {
  // Copy 404 page
  const file = await readFile(join(__dirname, "out/404/index.html"));
  await writeFile(join(__dirname, "out/404.html"), file);

  // Replace BASE_PATH placeholder in service worker
  const basePath = process.env.BASE_PATH || '/hat.sh';
  const serviceWorkerPath = join(__dirname, "out/service-worker.js");

  try {
    let serviceWorkerContent = await readFile(serviceWorkerPath, 'utf8');
    serviceWorkerContent = serviceWorkerContent.replace(/"__BASE_PATH__"/g, `"${basePath}"`);
    await writeFile(serviceWorkerPath, serviceWorkerContent);
    console.log(`✓ Service worker updated with basePath: ${basePath}`);
  } catch (err) {
    console.error('Error updating service worker:', err);
  }
};

main();
