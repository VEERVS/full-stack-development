# CSS Shadows & Outlines Notes

## box-shadow

Adds a shadow around an element.

``` css
box-shadow: offset-x offset-y blur spread color;
```

Example:

``` css
box-shadow:5px 5px 15px 5px rgb(87,64,64);
```

-   offset-x → horizontal movement
-   offset-y → vertical movement
-   blur → softness
-   spread → shadow size
-   color → shadow color

### Inset shadow

``` css
box-shadow: inset 0 0 10px black;
```

Creates an inner shadow.

------------------------------------------------------------------------

## text-shadow

Adds shadow to text.

``` css
text-shadow:5px 3px 3px red;
```

Syntax:

``` css
text-shadow: offset-x offset-y blur color;
```

------------------------------------------------------------------------

## outline

Draws a line outside the border.

``` css
outline:2px solid blue;
```

Related properties:

-   outline-width
-   outline-style
-   outline-color
-   outline-offset

------------------------------------------------------------------------

## outline-offset

``` css
outline-offset:5px;
```

Creates space between border and outline.

------------------------------------------------------------------------

## border-radius

Rounds corners.

``` css
border-radius:35px;
border-radius:50%;
```

------------------------------------------------------------------------

## Border vs Outline

-   Border affects layout.
-   Outline does not affect layout.
-   Outline is outside the border.

------------------------------------------------------------------------

## box-shadow vs text-shadow

-   box-shadow → Entire element
-   text-shadow → Only text

------------------------------------------------------------------------

## Real-world uses

-   Cards
-   Buttons
-   Inputs
-   Focus states
-   Headings

------------------------------------------------------------------------

## Best Practices

-   Use subtle shadows.
-   Don't remove focus outlines without a replacement.
-   Prefer CSS shadows over image shadows.

------------------------------------------------------------------------

## Interview Questions

1.  Difference between border and outline?
2.  Difference between box-shadow and text-shadow?
3.  What does `inset` do in box-shadow?

------------------------------------------------------------------------

## Quick Revision

-   box-shadow → Element shadow
-   text-shadow → Text shadow
-   outline → Outer line
-   outline-offset → Gap from border
-   border-radius → Rounded corners
