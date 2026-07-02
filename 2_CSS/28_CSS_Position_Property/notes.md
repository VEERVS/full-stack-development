# CSS Position Property Notes

## What is Position?

The `position` property decides how an element is placed on the webpage.

Default:

``` css
position: static;
```

------------------------------------------------------------------------

## 1. Static (Default)

-   Normal document flow
-   `top`, `left`, `right`, `bottom` do not work

``` css
position: static;
```

------------------------------------------------------------------------

## 2. Relative

Moves relative to its original position.

``` css
.box{
    position: relative;
    top:20px;
    left:30px;
}
```

-   Keeps its original space.
-   Commonly used as the parent for absolutely positioned elements.

------------------------------------------------------------------------

## 3. Absolute

Removes the element from the normal flow.

``` css
.child{
    position:absolute;
    top:0;
    right:0;
}
```

Positioned relative to the **nearest positioned ancestor** (`relative`,
`absolute`, `fixed`, or `sticky`).

If none exists, it uses the **viewport**.

### Your Example

``` css
.parent{
    /* position:relative; */
}

.box1{
    position:absolute;
    top:0;
    left:3px;
}
```

Because `.parent` is static, `.box1` is positioned relative to the
viewport.

------------------------------------------------------------------------

## 4. Fixed

``` css
.box{
    position:fixed;
    bottom:20px;
    right:20px;
}
```

-   Relative to viewport.
-   Doesn't move while scrolling.

Examples: - Chat button - Back to top button

------------------------------------------------------------------------

## 5. Sticky

``` css
position:sticky;
top:0;
```

Behaves like relative until reaching the specified position, then
behaves like fixed.

------------------------------------------------------------------------

## Offset Properties

Work only on non-static positioned elements.

``` css
top
right
bottom
left
```

------------------------------------------------------------------------

## z-index

Controls stacking order.

``` css
z-index:100;
```

Higher value appears above lower values.

------------------------------------------------------------------------

## Exception

These properties also create a containing block:

``` css
transform
filter
perspective
```

------------------------------------------------------------------------

## Comparison

  Position   Flow          Space   Relative To
  ---------- ------------- ------- -----------------------------
  static     Yes           Yes     Document
  relative   Yes           Yes     Original position
  absolute   No            No      Nearest positioned ancestor
  fixed      No            No      Viewport
  sticky     Yes → Fixed   Yes     Scroll container

------------------------------------------------------------------------

## Real-world Uses

-   Relative → Parent containers
-   Absolute → Badges, icons
-   Fixed → Floating buttons
-   Sticky → Navbar, sidebar

------------------------------------------------------------------------

## Interview Questions

1.  Difference between relative and absolute?
2.  Difference between fixed and sticky?
3.  What if an absolute element has no positioned parent?
4.  Does z-index work on static elements?

------------------------------------------------------------------------

## Quick Revision

-   static → Default
-   relative → Move, keep space
-   absolute → Remove from flow
-   fixed → Viewport
-   sticky → Relative + Fixed
-   z-index → Layer order
