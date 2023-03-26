const nativeWindColors = require('tailwindcss/colors');

const colors = {
  primary: nativeWindColors.sky,
  secondary: nativeWindColors.indigo,
  gray: nativeWindColors.slate,
  ...nativeWindColors,
};

module.exports = colors;
