import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* jost-100 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 100;
  font-display: block;
  src:
       url('/assets/fonts/jost-v6-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/jost-v6-latin-100.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/jost-v6-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
}
/* jost-regular - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: 
       url('/assets/fonts/jost-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/jost-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/jost-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
   
}
/* jost-500 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-display: block;
  src:
       url('/assets/fonts/jost-v6-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/jost-v6-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/jost-v6-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
}
/* jost-700 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src:
       url('/assets/fonts/jost-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/jost-v6-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/jost-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */

}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Jost', sans-serif;
  line-height: 1.4;
  font-size: 1.6rem;
  margin: 0;
}
`

export default GlobalStyle
