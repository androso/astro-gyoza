---
title: How to Use Icons in Gyoza?
date: 2024-05-08T10:54:27.000Z
tags: [Icon]
category: Tutorial
comments: false 
draft: true
---

Gyoza uses the font-class method to reference icons. These icons are mostly from [Remix Icons](https://remixicon.com/), and are managed and exported on [iconfont](https://www.iconfont.cn/).

The following image shows all the icons in the project:

![All Icons](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

When you add social accounts to be displayed on the homepage, you may want to use these icons. Simply fill in the name with the `icon-` prefix under the corresponding configuration item.

If you want to use icons in components, you can do it like this:

```jsx
<i className="iconfont icon-xxx"></i>
```

## Why Not SVG Icons?

You may have noticed that many projects are using [iconify](https://iconify.design/). Iconify is an open-source icon set containing over 200,000 icons, providing import methods for various frameworks. There is also a corresponding plugin astro-icon for Astro (if you're interested, you can check their [documentation](https://github.com/natemoo-re/astro-icon)).

I've also tried using iconify in this project, but for the following reasons, I eventually switched to the font-class method:

- Since the project uses both Astro and React, the way to use iconify icons in Astro components and React components is different, which would lead to two different usage patterns in the code.
- Iconify needs to request its server when loading, ~~I would worry about request failures~~, although this worry is unnecessary.
- There is a feature where I would inject some icons into the markdown when rendering articles, such as the icon at the end of external links. It's not convenient for iconify to achieve this.
- Directly embedding SVG icons in HTML is not elegant, using font-class only requires the corresponding class name, which seems to result in a smaller HTML size, and faster page loading. I haven't done specific tests yet, but at least I will try to avoid having a lot of SVGs in the page just for icon usage.
- The project doesn't use many icons, mainly some common social account icons for customizing contact methods. I hope all icons are centrally managed, which is more convenient.

I must admit that the current icon solution is not elegant. Whenever the icon set changes, I need to update the corresponding font files and CSS files. It also makes it difficult for others to manage the icon set.

Perhaps I will try other methods in the future, such as [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind). If you have a better solution, feel free to leave me a message.

## Custom Icons

If you want to replace the iconfont icons, please modify the following files:

```text
public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css
```

Note that this will replace all the icons used in the project, so make sure you know what you're doing.