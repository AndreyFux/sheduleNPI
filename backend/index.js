import { getShedulyByUrl } from "./utils/getSheduleByUrl.js";
import express from 'express'
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(cors());


app.listen(4444, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("SEVER START")
})

app.get('/groups', async (req, res) => {
    try {
        let path = `https://schedule.npi-tu.ru/schedule.html?for=student&faculty=${req.query.faculty}&year=${req.query.year}&group=${req.query.group}`
        
        const shedule = await getShedulyByUrl(path);

        res.json(shedule);
    }
    catch (e) {
        console.log(e)
    }
})

