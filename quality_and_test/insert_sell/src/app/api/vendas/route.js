export async function GET(request) {
  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello, world!" }),
  };
}
