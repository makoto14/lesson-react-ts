import express from 'express';
import path from 'path';
const app: express.Express = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send('Hello World!');
// })

app.get('/api', (req: express.Request, res: express.Response) => {
    res.json({ message: "Hello World!aaa"});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})