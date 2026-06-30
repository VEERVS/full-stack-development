# CSS Specificity Notes

## What is CSS Specificity?

CSS Specificity determines which CSS rule is applied when multiple rules
target the same element.

When multiple selectors match the same element, the browser follows this
order:

1.  `!important`
2.  Inline styles
3.  ID selectors
4.  Class, attribute, and pseudo-class selectors
5.  Element selectors and pseudo-elements
6.  Universal selector (`*`)

If specificity is equal, the **last declared rule wins**.

------------------------------------------------------------------------

# Specificity Hierarchy

  Selector                      Priority
  ----------------------------- ----------
  `!important`                  Highest
  Inline Style                  1000
  ID (`#id`)                    100
  Class (`.class`)              10
  Attribute (`[type=text]`)     10
  Pseudo-class (`:hover`)       10
  Element (`h1`)                1
  Pseudo-element (`::before`)   1
  Universal (`*`)               0

------------------------------------------------------------------------

# Your Example

``` html
<h1 class="cred cblue cgreen yellow" data-x="a">
    This is a heading!
</h1>
```

``` css
.cred{
    color:red;
}

.cblue{
    color:blue !important;
}

h1.yellow{
    color:yellow;
}

.cgreen{
    color:green;
}

[data-x=a]{
    color:maroon;
}
```

## Why is the text blue?

Because:

``` css
.cblue{
    color: blue !important;
}
```

`!important` overrides all the other normal declarations.

------------------------------------------------------------------------

## If `!important` is removed

The competing selectors become:

``` css
.cred
.cgreen
[data-x=a]
h1.yellow
```

Specificity:

  Selector       Specificity
  -------------- -------------
  `.cred`        0-0-1-0
  `.cgreen`      0-0-1-0
  `[data-x=a]`   0-0-1-0
  `h1.yellow`    0-0-1-1

Since `h1.yellow` has both an element and a class selector, it has
higher specificity and wins.

Output becomes **yellow**.

------------------------------------------------------------------------

# Selector Types

## Universal Selector

``` css
*{
    margin:0;
}
```

Matches every element.

------------------------------------------------------------------------

## Element Selector

``` css
h1{
    color:red;
}
```

------------------------------------------------------------------------

## Class Selector

``` css
.heading{
    color:red;
}
```

------------------------------------------------------------------------

## ID Selector

``` css
#heading{
    color:red;
}
```

------------------------------------------------------------------------

## Attribute Selector

``` css
[data-x=a]{
    color:maroon;
}
```

Other examples:

``` css
input[type="text"]
img[alt]
a[target="_blank"]
```

------------------------------------------------------------------------

## Group Selector

``` css
h1,p,div{
    color:blue;
}
```

------------------------------------------------------------------------

## Descendant Selector

``` css
div p{
    color:red;
}
```

------------------------------------------------------------------------

## Child Selector

``` css
div > p{
    color:red;
}
```

------------------------------------------------------------------------

## Adjacent Sibling

``` css
h1 + p{
    color:red;
}
```

------------------------------------------------------------------------

## General Sibling

``` css
h1 ~ p{
    color:red;
}
```

------------------------------------------------------------------------

# Pseudo Classes

``` css
:hover
:focus
:visited
:active
:first-child
:last-child
:nth-child()
:not()
```

------------------------------------------------------------------------

# Pseudo Elements

``` css
::before
::after
::first-letter
::first-line
::selection
::placeholder
```

------------------------------------------------------------------------

# Important Rules

### 1. `!important`

Avoid overusing it.

``` css
color:red !important;
```

------------------------------------------------------------------------

### 2. Source Order

If specificity is equal:

``` css
.red{
    color:red;
}

.red{
    color:blue;
}
```

Output:

``` text
blue
```

because the last rule wins.

------------------------------------------------------------------------

### 3. Inline Style

``` html
<h1 style="color:red">
```

Overrides normal stylesheet rules but can still be overridden by another
`!important`.

------------------------------------------------------------------------

# Best Practices

-   Prefer classes over IDs.
-   Avoid `!important` unless necessary.
-   Keep specificity low for maintainable CSS.
-   Write reusable class-based styles.

------------------------------------------------------------------------

# Interview Questions

### Difference between ID and Class?

-   ID should be unique.
-   Class can be reused.

### What wins?

``` css
#id
.class
h1
```

Answer:

    #id

### Does `!important` override IDs?

Yes, unless another `!important` rule with higher specificity applies.

### What if two selectors have equal specificity?

The last declared rule wins.

------------------------------------------------------------------------

# Quick Revision

-   `!important` has highest priority.
-   Inline \> ID \> Class/Attribute/Pseudo-class \> Element.
-   Equal specificity → Last rule wins.
-   Use classes for styling whenever possible.
