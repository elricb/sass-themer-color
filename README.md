# sass-themer-color

Color scheme theory functions for sass

## library

sass-themer-color/index.scss

## demo

public/index.html

## test
cd src/
npm install
npm run start

## usage

### scheme functions

```
$color - is any rgb/hsl/hex color code.
$fraction - is any decimal neg/pos that represents percent (-1 to 1). E.g. 0.5 = 50%.
```

|name|function|
|----|--------|
| Analogous | color-scheme-analogous($color, $fraction) |
| Monochromatic | color-scheme-monochromatic($color, $fraction) |
| Shades | color-scheme-shades($color, $fraction) |
| Triad | color-scheme-triad($color, $fraction) |
| Complementary | color-scheme-complementary($color, $fraction) |
| Compound | color-scheme-compound($color, $fraction) |


### additional functions

```
$color - the base color that will change based on the difference between
$color2 and $color3
$color2 - the current/default color to measure against $color3
$color3 - the changed foreground/background
```


|name|function|description|
|----|--------|-----------|
| Adaptive | color-scheme-adaptive($color, $color2, $color3) | will alter $color lightness based on the difference between $color2 and $color3 to maintain contrast |
