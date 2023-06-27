const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser');

const port = 9908;

const app = express();
app.use(bodyParser.json()); // 解析JSON格式的请求体
const OPENAI_API_HOST = "api.openai.com";

app.all("*", async (req, res) => {
    const { headers, params,path } = req;
    let newUrl = `https://${OPENAI_API_HOST}/${path}`

    delete headers.host
    delete headers.origin
    delete headers.referer

    try {
        // 发送请求至 api.openai.com
        const response = await axios.post(newUrl, req.body, {
            headers: {
                ...headers,
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error");
    }
});

app.listen(port, () => {
    console.log("Server listening on http://0.0.0.0:"+port);
});
