@rem https://www.npmjs.com/package/http-server
call npm install --global http-server
start http://localhost:12589/
http-server dist --gzip --brotli --no-dotfiles --port 12589 -d -c-1 -i