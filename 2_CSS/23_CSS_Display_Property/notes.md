# CSS Display Property Notes

## What is `display`?

The `display` property controls how an element is rendered and
participates in page layout.

``` css
display: value;
```

------------------------------------------------------------------------

# Common Display Values

## 1. `block`

Starts on a new line and occupies full available width.

Examples: - div - p - h1-h6 - section

``` css
display:block;
```

Properties: - New line - Width defaults to 100% -
Width/height/margin/padding all work

------------------------------------------------------------------------

## 2. `inline`

Occupies only required content width.

Examples: - span - a - strong - em

``` css
display:inline;
```

Characteristics: - No new line - Width & height ignored - Horizontal
margin/padding work normally

------------------------------------------------------------------------

## 3. `inline-block`

Behaves like inline but accepts block dimensions.

``` css
display:inline-block;
```

Useful for: - Buttons - Navigation items - Cards

In your example:

``` css
.box{
    display:inline-block;
    padding:45px;
    margin:34px;
}
```

Both boxes appear on the same line while respecting width, height,
margin and padding.

------------------------------------------------------------------------

## 4. `none`

Removes the element completely.

``` css
display:none;
```

The browser behaves as if the element never existed.

------------------------------------------------------------------------

## 5. `visibility:hidden`

``` css
visibility:hidden;
```

Element is invisible but its space remains reserved.

Difference:

    display:none
    ❌ No element
    ❌ No space

    visibility:hidden
    ❌ Invisible
    ✅ Space preserved

------------------------------------------------------------------------

## 6. `flex`

Creates a Flexbox container.

``` css
display:flex;
```

Children become flex items.

------------------------------------------------------------------------

## 7. `inline-flex`

Inline element with flex behavior.

------------------------------------------------------------------------

## 8. `grid`

Creates a CSS Grid container.

``` css
display:grid;
```

------------------------------------------------------------------------

## 9. `inline-grid`

Inline version of Grid.

------------------------------------------------------------------------

## 10. `contents`

Parent disappears visually but children remain.

Rarely used.

------------------------------------------------------------------------

## 11. `list-item`

Makes an element behave like a list item.

``` css
display:list-item;
```

------------------------------------------------------------------------

## Width & Height Support

  Display         Width   Height
  -------------- ------- --------
  block            ✅       ✅
  inline           ❌       ❌
  inline-block     ✅       ✅
  flex             ✅       ✅
  grid             ✅       ✅

------------------------------------------------------------------------

## Block vs Inline vs Inline-block

### Block

    ████████████████
    Next starts below

### Inline

    Hello World CSS

### Inline-block

    [Box1] [Box2]

------------------------------------------------------------------------

## Real-world Uses

-   block → Sections
-   inline → Text formatting
-   inline-block → Buttons, menus
-   flex → One-dimensional layouts
-   grid → Two-dimensional layouts
-   none → Hide elements

------------------------------------------------------------------------

## Best Practices

-   Prefer Flexbox or Grid for layouts.
-   Avoid `inline-block` for complex layouts.
-   Use `display:none` when removing an element.
-   Use `visibility:hidden` when preserving space.

------------------------------------------------------------------------

## Interview Questions

### Difference between `display:none` and `visibility:hidden`?

`display:none` removes the element and its space.

`visibility:hidden` hides the element but keeps its layout space.

### Can inline elements have width and height?

Generally no.

### Why use `inline-block`?

It allows elements to stay on the same line while supporting width,
height, margin and padding.

------------------------------------------------------------------------

## Quick Revision

-   block → New line, full width
-   inline → Content width only
-   inline-block → Inline + block features
-   none → Removed completely
-   visibility:hidden → Hidden but space remains
-   flex → Flexible layout
-   grid → Grid layout
