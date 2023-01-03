export default function handler(req, res) {
    // const { 
    //     query: {pid},
    //  } = req
    const pid = req.query.pid;
    // console.log(req.query)
    res.end(`Post: ${pid}`)
  }
