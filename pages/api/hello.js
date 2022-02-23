/**
 * Example of API route - see output at /api/hello
 *
 * @param http.IncomingMessage req - https://nextjs.org/docs/api-routes/api-middlewares
 * @param http.ServerResponse res - https://nextjs.org/docs/api-routes/response-helpers
 */
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
