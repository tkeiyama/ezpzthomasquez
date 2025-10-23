---
title: Element Check
description: Let's see how elements look like.
date: 1995-01-01
---

# h1

## h2

### h3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

**bold**

_italic_

- ul1
- ul2
- ul3

1. ol1
2. ol2
3. ol3

[link](/)

> blockquote

---

`inline code`

```tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function App({
  children,
}: Props): ReactNode {
  return (
    <div>
      {children}
    </div>
  );
}
```
