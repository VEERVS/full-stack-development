# CSS Overflow Property Notes

## What is Overflow?

Overflow occurs when the content of an element is larger than its
specified width or height.

``` css
.box{
    width:300px;
    height:100px;
}
```

If the content exceeds these dimensions, CSS controls its behavior using
the `overflow` property.

------------------------------------------------------------------------

# 1. `overflow`

Shorthand for `overflow-x` and `overflow-y`.

``` css
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
overflow: clip;
```

------------------------------------------------------------------------

## `overflow: visible` (Default)

``` css
overflow: visible;
```

Content spills outside the element.

------------------------------------------------------------------------

## `overflow: hidden`

``` css
overflow: hidden;
```

Extra content is clipped and no scrollbar appears.

------------------------------------------------------------------------

## `overflow: scroll`

``` css
overflow: scroll;
```

Always shows horizontal and vertical scrollbars, even when not required.

------------------------------------------------------------------------

## `overflow: auto`

``` css
overflow: auto;
```

Scrollbars appear only when needed.

This is the most commonly used value.

------------------------------------------------------------------------

## `overflow: clip`

``` css
overflow: clip;
```

Clips overflowing content without allowing scrolling.

Unlike `hidden`, it doesn't create a scroll container.

------------------------------------------------------------------------

# 2. `overflow-x`

Controls horizontal overflow.

``` css
overflow-x: auto;
overflow-x: hidden;
overflow-x: scroll;
```

------------------------------------------------------------------------

# 3. `overflow-y`

Controls vertical overflow.

``` css
overflow-y: auto;
overflow-y: hidden;
overflow-y: scroll;
```

------------------------------------------------------------------------

# Mixed Overflow

Your example:

``` css
overflow: hidden auto;
```

Equivalent to:

``` css
overflow-x: hidden;
overflow-y: auto;
```

Meaning: - Horizontal overflow is hidden. - Vertical scrollbar appears
only if needed.

------------------------------------------------------------------------

# `white-space`

Controls line wrapping.

``` css
white-space: nowrap;
```

Text stays on one line.

Other values:

``` css
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: break-spaces;
```

------------------------------------------------------------------------

# `text-overflow`

Controls how hidden text is displayed.

``` css
text-overflow: ellipsis;
```

Result:

    This is a very long tex...

Requirements:

``` css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

Without all three, ellipsis won't work.

------------------------------------------------------------------------

# Common Combination

``` css
.box{
    width:250px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
```

------------------------------------------------------------------------

# Real-world Uses

-   Chat messages
-   News headlines
-   Product names
-   Tables
-   Cards
-   Code blocks

------------------------------------------------------------------------

# Best Practices

-   Prefer `overflow:auto` over `scroll`.
-   Use `ellipsis` for long single-line text.
-   Avoid hiding important content.
-   Use `overflow-x:auto` for responsive tables.

------------------------------------------------------------------------

# Interview Questions

### Difference between `hidden` and `clip`?

-   `hidden` clips content and creates a scroll container.
-   `clip` simply cuts off content.

### Difference between `scroll` and `auto`?

-   `scroll` always shows scrollbars.
-   `auto` shows them only when required.

### Why isn't `text-overflow: ellipsis` working?

Because it also requires:

``` css
overflow:hidden;
white-space:nowrap;
```

------------------------------------------------------------------------

# Quick Revision

-   visible → Default
-   hidden → Hide overflow
-   scroll → Always show scrollbars
-   auto → Scrollbars only when needed
-   clip → Clip without scrolling
-   overflow-x → Horizontal overflow
-   overflow-y → Vertical overflow
-   white-space → Line wrapping
-   text-overflow → Overflow text display
