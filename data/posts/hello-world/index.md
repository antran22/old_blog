---
date: 2020-05-22T04:40:00.669Z
title: Hello World
description: This is a placeholder post so the thing can be built without error. Don't delete me.
keyword:
  - blog
---

## Lorem ipsum dolor sit amet

Once upon a midnight dreary, while I pondered, weak and weary. Over many a quaint and curious volume of forgotten lore. While I nodded, nearly napping, suddenly there came a tapping. As of some one gently rapping, rapping at my chamber door. 'Tis some visiter, I muttered, tapping at my chamber door. Only this, and nothing more. Ah, distinctly I remember it was in the bleak December. And each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow;—vainly I had sought to borrow. From my books surcease of sorrow—sorrow for the lost Lenore.

## Aenean commodo ligula eget dolor

### Consectetuer adipiscing elit

_Once upon a midnight dreary, while I pondered, weak and weary. Over many a quaint and curious volume of forgotten lore. While I nodded, nearly napping, suddenly there came a tapping. As of some one gently rapping, rapping at my chamber door. 'Tis some visiter, I muttered, tapping at my chamber door. Only this, and nothing more. Ah, distinctly I remember it was in the bleak December. And each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow;—vainly I had sought to borrow. From my books surcease of sorrow—sorrow for the lost Lenore._

### Cum sociis natoque penatibus et magnis dis parturient mont

~~Once upon a midnight dreary, while I pondered, weak and weary. Over many a quaint and curious volume of forgotten lore. While I nodded, nearly napping, suddenly there came a tapping. As of some one gently rapping, rapping at my chamber door. 'Tis some visiter, I muttered, tapping at my chamber door. Only this, and nothing more. Ah, distinctly I remember it was in the bleak December. And each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow;—vainly I had sought to borrow. From my books surcease of sorrow—sorrow for the lost Lenore.~~

## Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim

```python
from torch import nn

class Model(nn.Module):
    def __init__(self):
        super().__init__()
        self.weights = nn.Parameter(torch.randn(784, 10) / math.sqrt(784))
        self.bias = nn.Parameter(torch.zeros(10))

    def forward(self, xb):
        return xb @ self.weights + self.bias
```
### Aliquam lorem ante, dapibus in, viverra quis, feugiat
`cpp~std::cout << "Hello world";`
