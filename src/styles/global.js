import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box;
}

@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0;
  }
}

@media (min-width: 550px) {
  .container {
    width: 80%;
  }
  .column,
  .columns {
    margin-left: 4%;
  }
  .column:first-child,
  .columns:first-child {
    margin-left: 0;
  }

  .one.column,
  .one.columns {
    width: 4.66666666667%;
  }
  .two.columns {
    width: 13.3333333333%;
  }
  .three.columns {
    width: 22%;
  }
  .four.columns {
    width: 30.6666666667%;
  }
  .five.columns {
    width: 39.3333333333%;
  }
  .six.columns {
    width: 48%;
  }
  .seven.columns {
    width: 56.6666666667%;
  }
  .eight.columns {
    width: 65.3333333333%;
  }
  .nine.columns {
    width: 74%;
  }
  .ten.columns {
    width: 82.6666666667%;
  }
  .eleven.columns {
    width: 91.3333333333%;
  }
  .twelve.columns {
    width: 100%;
    margin-left: 0;
  }

  .one-third.column {
    width: 30.6666666667%;
  }
  .two-thirds.column {
    width: 65.3333333333%;
  }

  .one-half.column {
    width: 48%;
  }

  .offset-by-one.column,
  .offset-by-one.columns {
    margin-left: 8.66666666667%;
  }
  .offset-by-two.column,
  .offset-by-two.columns {
    margin-left: 17.3333333333%;
  }
  .offset-by-three.column,
  .offset-by-three.columns {
    margin-left: 26%;
  }
  .offset-by-four.column,
  .offset-by-four.columns {
    margin-left: 34.6666666667%;
  }
  .offset-by-five.column,
  .offset-by-five.columns {
    margin-left: 43.3333333333%;
  }
  .offset-by-six.column,
  .offset-by-six.columns {
    margin-left: 52%;
  }
  .offset-by-seven.column,
  .offset-by-seven.columns {
    margin-left: 60.6666666667%;
  }
  .offset-by-eight.column,
  .offset-by-eight.columns {
    margin-left: 69.3333333333%;
  }
  .offset-by-nine.column,
  .offset-by-nine.columns {
    margin-left: 78%;
  }
  .offset-by-ten.column,
  .offset-by-ten.columns {
    margin-left: 86.6666666667%;
  }
  .offset-by-eleven.column,
  .offset-by-eleven.columns {
    margin-left: 95.3333333333%;
  }

  .offset-by-one-third.column,
  .offset-by-one-third.columns {
    margin-left: 34.6666666667%;
  }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns {
    margin-left: 69.3333333333%;
  }

  .offset-by-one-half.column,
  .offset-by-one-half.columns {
    margin-left: 52%;
  }
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.5em;
  line-height: 1.6;
  font-weight: 400;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(p) => p.theme.baseFont};
  background: ${(p) => p.theme.background};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;
}
h1 {
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
}
h2 {
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
}
h3 {
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
}
h4 {
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
}
h5 {
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
}
h6 {
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;
}

/* Larger than phablet */
@media (min-width: 550px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4.2rem;
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 3rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 1.5rem;
  }
}

p {
  margin-top: 0;
}
/* Layouts
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.app {
  font-family: "Source Code Pro", monospace;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.preferences {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: baseline;
}
.settings {
  height: 100%;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}

/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: ${(p) => p.theme.primary};
}
a:hover {
  color: ${(p) => p.theme.hovered};
}

/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.buttonBorder};
  cursor: pointer;
  box-sizing: border-box;
}
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: ${(p) => p.theme.buttonColor};
  border-color: ${(p) => p.theme.buttonFocusBorder};
  outline: 0;
}
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: ${(p) => p.theme.buttonColor};
  background-color: ${(p) => p.theme.primary};
  border-color: ${(p) => p.theme.primary};
}
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: ${(p) => p.theme.buttonColor};
  background-color: ${(p) => p.theme.hovered};
  border-color: ${(p) => p.theme.hovered};
}

button[disabled] {
  color: ${(p) => p.theme.disabledButtonColor};
  border: 1px solid ${(p) => p.theme.disabledButtonBorder};
}
/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.selectBorder};
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
}
/* Removes awkward default styles on some inputs for iOS */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
textarea {
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
}
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  border: 1px solid ${(p) => p.theme.primary};
  outline: 0;
}
label,
legend {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
fieldset {
  padding: 0;
  border-width: 0;
}
input[type="checkbox"],
input[type="radio"] {
  display: inline;
  margin-left: 2rem;
  margin-right: 0.5rem;

}
label > .label-body {
  display: inline-block;
  margin-left: 0.5rem;
  font-weight: normal;
}

/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
ul {
  list-style: circle inside;
}
ol {
  list-style: decimal inside;
}
ol,
ul {
  padding-left: 0;
  margin-top: 0;
}
ul ul,
ul ol,
ol ol,
ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%;
}
li {
  margin-bottom: 1rem;
}

/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid ${(p) => p.theme.tableBorder};
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}

/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem;
}
input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem;
}
pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
  margin-bottom: 2.5rem;
}

/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box;
}
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box;
}
.u-pull-right {
  float: right;
}
.u-pull-left {
  float: left;
}

/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid ${(p) => p.theme.tableBorder};
}
.svg-icon {
  cursor: pointer;
}
.fav-item {
  cursor: pointer;
}
.fav-item:hover {
  text-decoration: underline 1px ${(p) => p.theme.baseFont};
}
.app-title {
  margin: 0;
}

/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both;
}
`;
