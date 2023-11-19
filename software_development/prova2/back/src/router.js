const def = "/api/v1/";

const defaultResponse = (res) => {
  // Set cors headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );

  return res;
};

export default function router(app) {
  app.get(def + "Books", (req, res) => {
    return defaultResponse(res).json([]);
  });
}
