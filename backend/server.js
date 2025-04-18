const express = require("express");
const cors = require("cors");
const { Builder, By } = require("selenium-webdriver");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/apply", async (req, res) => {
    const { name, email, phone, jobSite } = req.body;

    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(jobSite);
        await driver.findElement(By.name("name")).sendKeys(name);
        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.name("phone")).sendKeys(phone);
        await driver.findElement(By.name("submit")).click();

        res.json({ status: "Application submitted successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    } finally {
        await driver.quit();
    }
});

app.listen(3001, () => console.log("Server running on port 3001"));
