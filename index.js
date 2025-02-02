// simple portfolio server

import express from "express";
const app = express();
const port = process.env.PROJECT_PORT;

import { readFileSync } from "fs";
import fs from "fs";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let dataIndex = JSON.parse(readFileSync(`public/landingIndex.json`, "utf-8"));
  res.render("landing.ejs", { data: dataIndex });
});

app.get("/about", (req, res) => {
  let index = JSON.parse(readFileSync(`public/aboutmeIndex.json`, "utf-8"));
  res.render("aboutme.ejs", { data: index });
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SMILE! you're in production");
  }
  console.log(`WEBSITE HUB is listening on port ${port}`);
});
