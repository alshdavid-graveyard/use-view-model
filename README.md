# React View Model Hook

Add Angular/Vue-like Reactivity to React

```tsx
import React from "react"
import { useViewModel } from 'use-view-model'

export class FooViewModel {
  title = 'Foobar'
}

export const Foo = () => {
  const vm = useViewModel(() => new FooViewModel())

  return <div>
    <div>{vm.title}</div>
    <input 
      type="text" 
      value={vm.title}
      onChange={e => vm.title = e.target.value} />
  </div>
}
```

### Methods

You can add methods to your view model

```tsx
import React from "react"
import { useViewModel } from 'use-view-model'

export class BarViewModel {
  title = 'Foobar'

  reset() {
    this.title = 'Foobar'
  }
}

export const Bar = () => {
  const vm = useViewModel(() => new BarViewModel())

  return <div>
    <div>{vm.title}</div>
    <input 
      type="text" 
      value={vm.title}
      onChange={e => vm.title = e.target.value} />
    <button
      onClick={() => vm.reset()}>
      Reset
    </button>
  </div>
}
```

### Testing

You can test view logic without being concerned about the DOM or browser. 
You can take also advantage of dependency injection.

```tsx
import { BarViewModel } from './foo.tsx'

it('Should reset title when', () => {
  const vm = new BarViewModel()
  const startingValue = vm.title
  vm.title = 'changed'
  
  vm.reset()

  expect(vm.title).toBe(startingValue)
})
```

### Preact

To use this for Preact change the import path to

```tsx
import { useViewModel } from 'use-view-model/preact'
```