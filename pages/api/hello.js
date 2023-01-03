// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }

//   They can be deployed as Serverless Functions (also known as Lambdas).
//   http://localhost:3000/api/hello
