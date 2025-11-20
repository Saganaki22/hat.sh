// __BASE_PATH__ will be replaced at build time
const BASE_PATH = "__BASE_PATH__";
const APP_URL = self.location.origin + BASE_PATH + "/file";
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const sigCodes = {
  v1: "Encrypted Using Hat.sh",
  v2_symmetric: "zDKO6XYXioc",
  v2_asymmetric: "hTWKbfoikeg",
};

module.exports = {
  APP_URL,
  encoder,
  decoder,
  sigCodes,
};
