
## Formatting

_Italic_

*Italic*

__Bold__

**Bold**

~~Strikethrough~~

Subscript~example~

Superscript^example^

## Lists

- [ ] Unchecked task
- [x] Checked task
- [ ] Nested
	- [x] Checked
	- [ ] Task

## Charts

Graph

```mermaid
graph TD
    A[Hard] -->|Text| B(Round)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]
```

Class

<h3> a title here </h3>
<div class="center">HELLO</div>

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
```

## Tables

#### Regular

| Tables | Are | Great |
| ------ | --- | ----- |
| •      | •   | •     |
| •      | •   | •     |

#### Aligned

| Left | Center | Right |
| :--- | :----: | ----: |
| •    | •      | •     |

