# 介绍
可以部署在国外的服务器上，然后再国内服务器上调用openai的api

# 使用

### 部署代理(Linux)
```bash
git clone https://github.com/jianwi/openai-proxy
cd openai-proxy
npm i

nohup node ./index.js &
```
### 在国内项目中使用
```bash
curl 你的ip地址:9901/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 你的openai的key" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
```
# 其他
端口号可以自己修改，修改index.js中的9901即可