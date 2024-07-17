# Nekta
Nekta is a simple library of useful components for NextJS + Tailwind projects.

## Install & Setup Library

Install package using npm:

```bash
npm install nekta
```

Add the following path to the content section your `tailwind.config.js` file:

```js
    './node_modules/nekta/**/*.{js,ts,jsx,tsx}'
```

Setup the required colors in your `tailwind.config.js` file (Customise the colors to your liking):

```
{ 
    base: {
      100: "#FFFFFF",
      200: "#f4f6fc",
      300: "#DFE5EB",
    },
    baseContent: "#30313d",
    baseContentAlt: "#5C5B61",
    primary: "#f48305",
    primaryAlt: "#c36904",
    primaryContent: "#000000",
    secondary: "#4f2506",
    secondaryAlt: "#3f1e05",
    secondaryContent: "#FFFFFF",
    error: "#fa7175",
    disabled: "#6b7280",
}
```

## Examples

For examples of how to use the components in this library please visit the [Nekta Website](https://www.getnekta.com).

## Websites using Nekta
- [Nekta](https://www.getnekta.com)
- [Skribr](https://www.skribr.com)
- [GNK Softworks](https://www.gnksoftworks.com)
- If you want to add your site to this list please create a pull request.

## Other Useful CC0 Libraries

- [Free React Icons](https://www.npmjs.com/package/free-react-icons)

## Contributing
If you would like to contribute to this project please create a pull request.