const http = require('http')
const process = require('child_process');

const s = http.createServer((req, res) => {
    process.exec('docker rm -f vite && docker system prune -f && docker rmi -f vite && docker build -t vite . && docker run -itd --name vite -p 7666:80 vite', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.end('hi')
})

s.listen(7997)