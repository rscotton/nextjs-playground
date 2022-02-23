import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Example of API route - see output at /api/hello
 */
const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};

export default handler;
