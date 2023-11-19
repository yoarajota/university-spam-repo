export const defaultResponse = (res) => {
    // Set cors headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.setHeader("origin", "*");
  
    return res;
  };