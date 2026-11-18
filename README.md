# Smeraldo

A responsive Astro boutique inspired by the supplied desktop and mobile designs.

## Start

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and generate the production site.

## Products

Add an MDX file in `src/content/products/`. For example:

```mdx
---
title: گوشواره
category: accessories
price: '۲۰۰٬۰۰۰ تومان'
image: ../../assets/earrings.jpg
colors:
  - name: نقره‌ای
    hex: '#c0c0c0'
---
توضیحات محصول اینجا نوشته می‌شود.
```

Categories: `cosmetics`, `accessories`, `hair-accessories`, `skin-care`, `girly-stuff`. Put images in `src/assets/` and refer to them relative to the MDX file as shown. `image`, `price`, `originalPrice`, colors, and the description are optional. Add `draft: true` to hide a product. Rebuild after editing products.

To let customers switch a product's photo by color, give each color its own image:

```yaml
colors:
  - name: صورتی
    hex: '#d9859c'
    image: ../../assets/lipstick-pink.jpg
  - name: رز
    hex: '#b65e70'
    image: ../../assets/lipstick-rose.jpg
```

Colors without an image are shown as non-interactive swatches. The product's main `image` is shown first; if there is no main image, the first color with an image is shown instead.

## Categories

Categories are MDX files in `src/content/categories/`. The filename is the category slug used in URLs and in each product's `category` field. For example, `accessories.mdx`:

```mdx
---
name: Accessories
nameFa: اکسسوری
image: ../../assets/pearl-raw.png
order: 2
---
```

Use `order` to set the display order. The category marked `featured: true` appears in the wide section on the homepage; use this for only one category. Add a new category by creating another file and using its filename (without `.mdx`) in the relevant products. Rebuild after changes.

Homepage and category artwork is stored in `src/assets/`, with text rendered separately. Social icons are decorative until actual account URLs are provided. No checkout or admin panel is configured.
# smeraldo
