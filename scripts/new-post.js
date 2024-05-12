import { input } from "@inquirer/prompts";
import fs from "fs";
import path from "path";
import { isFileNameSafe } from "./utils.js";

function getPostFullPath(fileName) {
  return path.join("./src/content/posts", `${fileName}.md`);
}

const fileName = await input({
  message: "File name: ",
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return "File name can only contain letters, numbers and hyphens";
    }
    const fullPath = getPostFullPath(value);
    if (fs.existsSync(fullPath)) {
      return `${fullPath} already exists`;
    }
    return true;
  },
});

const title = await input({
  message: "Essay Title",
});

const content = `---
title: ${title}
date: ${new Date().toISOString()}
tags: []
comments: true
draft: false
---
`;

const fullPath = getPostFullPath(fileName);
fs.writeFileSync(fullPath, content);
console.log(`${fullPath} sucessfully created`);
