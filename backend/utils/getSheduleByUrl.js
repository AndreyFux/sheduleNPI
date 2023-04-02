import puppeteer from "puppeteer";
import { createShedule } from "../utils/createShedule.js";


export const getShedulyByUrl = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log(url)
    await page.goto(url);

    const htmlList = await page.content();

    await browser.close();

    return createShedule(htmlList);
};