/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  /*here we will tell what fies will be used in tailwindcss , here in our project its all our components */
                    /**here we use ht,l js src folder  */
  "./src/**/*.{html,js}"
],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*
hese lines are defining a configuration file for a CSS framework called Tailwind CSS.

The first line with the comment  @type {import('tailwindcss').Config} " is a type definition, indicating the type of the module being exported as a Tailwind CSS configuration.

The next line, module.exports = {...}, is using CommonJS module syntax to export an object as the configuration for Tailwind CSS.

The object consists of three properties:

content: an empty array that is used to configure additional paths for generating the stylesheet.

theme: an object that defines custom theme styles for Tailwind CSS. In this case, it extends the default theme with an empty object, which means no custom styles are defined.

plugins: an array that is used to configure additional plugins for Tailwind CSS. In this case, it is empty, meaning no plugins are being added.

*/ 
