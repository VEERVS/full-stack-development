# box-sizing: border-box;

- The Default (content-box): By default, the width property only sets the size of the inner content. If you write width: 300px; padding: 20px; border: 5px solid;, the final rendered layout width expands to 350px (300 + 20 + 20 + 5 + 5).

- With border-box: If you apply box-sizing: border-box;, the total rendered width remains exactly 300px. The browser automatically shrinks the inner content area to 250px to absorb the padding and borders.

# Margin Collapse

- The Rule: When two vertical margins touch, they do not add together. Instead, the layout only applies the largest single margin value among them.

- The Example: If a top paragraph has a margin-bottom: 30px; and the paragraph directly below it has a margin-top: 20px;, the spacing between them will be 30px, not 50px.

- The Constraints: Margin collapse only happens vertically (top and bottom). Horizontal margins (left and right) never collapse.