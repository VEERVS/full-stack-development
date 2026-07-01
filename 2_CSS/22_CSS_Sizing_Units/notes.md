# CSS Sizing Units Notes

## Absolute vs Relative Units

### px

Fixed pixel unit.

``` css
width:300px;
```

## em

Relative to current element/parent font size.

``` css
.parent{font-size:20px;}
.child{font-size:2em;}
```

Result: 40px.

## rem

Relative to root (`html`) font size.

``` css
html{font-size:12px;}
p{font-size:2rem;}
```

Result: 24px.

## %

Relative to parent size.

``` css
width:80%;
```

## vw

1% of viewport width.

``` css
width:80vw;
```

If viewport width is 1500px, width becomes 1200px.

## vh

1% of viewport height.

``` css
height:50vh;
```

If viewport height is 900px, height becomes 450px.

## vmin

1% of the smaller viewport dimension.

Viewport 1600×900: - 100vmin = 900px

Useful for squares and circles.

## vmax

1% of the larger viewport dimension.

Viewport 1600×900: - 100vmax = 1600px

Useful for full-screen backgrounds.

## ex

Relative to x-height of the font.

## cap

Relative to capital letter height.

## ch

Width of the character '0'.

``` css
width:40ch;
```

Great for forms and code blocks.

## ic

Width of one CJK ideograph.

## lh

Relative to current element line-height.

## rlh

Relative to root line-height.

## vi

1% of viewport inline axis.

## vb

1% of viewport block axis.

## box-sizing

``` css
box-sizing:border-box;
```

Includes border and padding inside width/height.

## Width helpers

``` css
width
height
min-width
max-width
min-height
max-height
```

## Best practices

-   Use `rem` for typography.
-   Use `em` when children should scale with parents.
-   Use `%`, `vw`, `vh` for responsive layouts.
-   Use `vmin` when content must always fit.
-   Use `vmax` for full viewport effects.
-   Use `border-box` in modern layouts.

## Quick Revision

-   px → Fixed
-   \% → Parent
-   em → Parent font size
-   rem → Root font size
-   vw → Viewport width
-   vh → Viewport height
-   vmin → Smaller viewport side
-   vmax → Larger viewport side
-   ch → Width of '0'
-   ex → x-height
-   cap → Capital height
-   ic → CJK glyph width
-   lh → Current line-height
-   rlh → Root line-height
-   vi → Inline axis
-   vb → Block axis
