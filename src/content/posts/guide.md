---
title: Gyoza User Guide
date: 2024-04-01
lastMod: 2024-05-08T13:41:24.948Z
summary: Welcome to Gyoza, Gyoza is an Astro blog theme that maintains a simple and cute style. This article will introduce how to use and deploy Gyoza.
category: Tutorial
tags: [Astro, Gyoza]
sticky: 1
comments: false
draft: true
---

## Preconditions

- Node version >= 18.18.0
- Pnpm version > 8.1.0

## Installation

### Clone Repository

Log in to your GitHub account, open [lxchapu/astro-gyoza](https://github.com/lxchapu/astro-gyoza), and click the Fork button to clone the repository to your own account.

Copy the repository address, open the terminal, and use the `git clone` command to clone the repository locally.

> This project recommends using pnpm as your package manager. If you have not installed pnpm, please install it first.

### Install Dependencies

```sh
cd astro-gyoza
pnpm install
```

### Command Introduction 

Local Run

```sh
pnpm dev
```

Static File Build

```sh
pnpm build
```

Local Preview

```sh
pnpm preview
```

### Configuration Items

Most of the configurations in this project are defined in the src/config.json file.

You should first change site.url to your own domain name to avoid navigation errors.

Here is an explanation of the configuration items:

```json
{
  "site": {
    "url": "", // Website URL
    "title": "", // Website title
    "description": "", // Common website description for SEO
    "keywords": "", // Common website keywords for SEO
    "lang": "zh-CN", // Website language
    "favicon": "", // Browser icon, stored in the public directory
    "appleTouchIcon": "" // Apple device icon, stored in the public directory
  },
  "author": {
    "name": "", // Author name
    "twitterId": "", // Twitter account ID, starting with @, used for Open Graph
    "avatar": "" // Author avatar URL
  },
  // Home Hero Component
  "hero": {
    "name": "", // Displayed name
    "bio": "", // One-sentence introduction
    "description": "", // Supplemental description
    // Social accounts
    "socials": [
      {
        "name": "", // Social platform type
        "icon": "", // Social platform icon
        "url": "", // Link
        "color": "" // Icon color
      }
    ],
    "yiyan": "" // Displayed one-word phrase
  },
  "color": {
    // Accent color, randomly selected from the list
    "accent": [{ "light": "", "dark": "" }]
  },
  // Top Navigation Bar
  "menus": [
    {
      "name": "Home",
      "link": "/",
      "icon": "icon-pantone"
    }
  ],
  "posts": {
    "perPage": 10 // Number of posts per page
  },
  "footer": {
    "startTime": "" // Blog website start time, please use ISO format
  },
  // Doc Search, please visit https://docsearch.algolia.com/apply/ to apply
  "docSearch": {
    "appId": "",
    "apiKey": "",
    "indexName": ""
  },
  // Waline comment system, visit https://waline.js.org/ for more information
  "waline": {
    "serverURL": ""
  },
  // Sponsor
  "sponsor": {
    "wechat": "" // WeChat sponsorship code image URL
  }
}
```

## Deployment 

> This only covers Vercel, but you can choose other platforms such as Cloudflare Pages or your own server.
> Before deployment, ensure that you have modified site.url. 

### Deployment to Vercel

Log in to your Vercel account, click the Add new... button, and select Project. Then, in the Import Git Repository section, select the repository you just forked and click Import.

Enter the project settings page and click the Deploy button. Wait for the deployment to complete.

Vercel will assign you a domain name, which you can set as a custom domain in the project settings. For more operations, refer to the Vercel documentation.