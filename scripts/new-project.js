import { input, select } from "@inquirer/prompts";
import fs from "fs";
import path from "path";
import { isFileNameSafe } from "./utils.js";

function getProjectFullPath(fileName) {
  return path.join("./src/content/projects", `${fileName}.yaml`);
}

const fileName = await input({
  message: "请输入文件名称",
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return "文件名只能包含字母、数字和连字符";
    }
    const fullPath = getProjectFullPath(value);
    if (fs.existsSync(fullPath)) {
      return `${fullPath} 已存在`;
    }
    return true;
  },
});

const title = await input({
  message: "请输入项目名称",
});
const description = await input({
  message: "请输入项目描述",
});
const link = await input({
  message: "请输入项目地址",
});

const mediaType = await select({
  message: "选择缩略图类型",
  choices: [
    { name: "图片 (Image)", value: "image" },
    { name: "视频 (Video)", value: "video" }
  ]
});

const mediaPath = await input({
  message: `请输入${mediaType === 'image' ? '预览图片' : '预览视频'}地址`,
});

const highlighted = await select({
  message: "是否设为精选项目?",
  choices: [
    { name: "否", value: false },
    { name: "是", value: true }
  ]
});

let content = `title: ${title}
description: ${description}
link: ${link}
${mediaType}: ${mediaPath}
highlighted: ${highlighted}
`;

const fullPath = getProjectFullPath(fileName);
fs.writeFileSync(fullPath, content);
console.log(`${fullPath} 创建成功`);
