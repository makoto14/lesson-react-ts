import express from 'express';
const app: express.Express = express();
const port = process.env.PORT || 3001;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
})

app.get('/api', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        res.json({ message: "Hello World!aaa"});
    }, 1000)
})

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})