# CSS Fonts, Text & Color Properties Notes

## 1. Font Properties

### `font-family`

Specifies the font used for text.

``` css
font-family: Arial, Helvetica, sans-serif;
font-family: "Playfair Display", serif;
```

-   Use fallback fonts.
-   Generic families:
    -   `serif`
    -   `sans-serif`
    -   `monospace`
    -   `cursive`
    -   `fantasy`

------------------------------------------------------------------------

### `font-size`

Controls text size.

``` css
font-size: 20px;
```

Common units: - `px` - `em` - `rem` - `%` - `vw`

------------------------------------------------------------------------

### `font-weight`

Controls thickness.

``` css
font-weight: normal;
font-weight: bold;
font-weight: 700;
```

Values: - `100`--`900` - `normal (400)` - `bold (700)`

------------------------------------------------------------------------

### `font-style`

``` css
font-style: normal;
font-style: italic;
font-style: oblique;
```

------------------------------------------------------------------------

### `font-optical-sizing`

Used with variable fonts.

``` css
font-optical-sizing: auto;
```

------------------------------------------------------------------------

### `font` (Shorthand)

``` css
font: italic 700 20px/30px Arial, sans-serif;
```

------------------------------------------------------------------------

## 2. Text Properties

### `color`

``` css
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: hsl(0,100%,50%);
```

------------------------------------------------------------------------

### `text-align`

``` css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

------------------------------------------------------------------------

### `text-indent`

``` css
text-indent: 50px;
```

------------------------------------------------------------------------

### `text-transform`

``` css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

------------------------------------------------------------------------

### `text-decoration`

``` css
text-decoration: underline;
text-decoration: overline;
text-decoration: line-through;
text-decoration: none;
```

Related properties:

``` css
text-decoration-color
text-decoration-style
text-decoration-thickness
```

Styles: - solid - dashed - dotted - double - wavy

------------------------------------------------------------------------

### `letter-spacing`

``` css
letter-spacing: 5px;
```

------------------------------------------------------------------------

### `word-spacing`

``` css
word-spacing: 10px;
```

------------------------------------------------------------------------

### `line-height`

``` css
line-height: 1.5;
line-height: 30px;
```

------------------------------------------------------------------------

### `white-space`

``` css
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
```

------------------------------------------------------------------------

### `text-overflow`

Works with `overflow` and `white-space`.

``` css
text-overflow: clip;
text-overflow: ellipsis;
```

------------------------------------------------------------------------

### `overflow`

``` css
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

------------------------------------------------------------------------

### `word-break`

``` css
word-break: normal;
word-break: break-all;
word-break: keep-all;
```

------------------------------------------------------------------------

### `overflow-wrap`

``` css
overflow-wrap: break-word;
```

------------------------------------------------------------------------

## 3. Border

``` css
border: 2px solid blue;
```

Shorthand for:

``` css
border-width
border-style
border-color
```

Border styles: - solid - dashed - dotted - double - groove - ridge -
inset - outset - none

------------------------------------------------------------------------

## 4. Width

``` css
width: 100px;
```

Units: - px - % - rem - em - vw

------------------------------------------------------------------------

## 5. Google Fonts

``` css
@import url('https://fonts.googleapis.com/...');
```

Or:

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
```

------------------------------------------------------------------------

# Useful CSS Color Formats

``` css
color: red;
color: #ff0000;
color: #f00;
color: rgb(255,0,0);
color: rgba(255,0,0,.5);
color: hsl(0,100%,50%);
color: hsla(0,100%,50%,.5);
```

------------------------------------------------------------------------

# Font Related Properties

-   font
-   font-family
-   font-size
-   font-style
-   font-weight
-   font-variant
-   font-stretch
-   font-optical-sizing
-   line-height

------------------------------------------------------------------------

# Text Related Properties

-   color
-   text-align
-   text-indent
-   text-transform
-   text-decoration
-   text-decoration-color
-   text-decoration-style
-   text-decoration-thickness
-   text-shadow
-   letter-spacing
-   word-spacing
-   line-height
-   white-space
-   text-overflow
-   overflow
-   overflow-x
-   overflow-y
-   word-break
-   overflow-wrap
-   writing-mode
-   direction

------------------------------------------------------------------------

# Interview Tips

-   Prefer `rem` over `px` for scalable designs.
-   Use fallback fonts in `font-family`.
-   `text-overflow: ellipsis` requires `overflow: hidden` and usually
    `white-space: nowrap`.
-   `line-height` around `1.5` improves readability.
-   Avoid excessive `letter-spacing`.
