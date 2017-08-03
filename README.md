# sass-themer-color

Color scheme theory functions for sass

## library

sass-themer-color/index.scss

## demo

public/index.html

## test
src/app/router/route/IndexComponent/index.scss

```
cd src/
npm install
npm run start
```

## usage

### theme mixins

|name|mixin|
|----|--------|
| SetTheme | @include setColorThemePallet($map) |
| SetLabels | @include setColorThemeLabels($map) |
| SetThemeItem | @include setColorThemePalletItem($mapkey, $background, $foreground) |
| SetLabelItem | @include setColorThemeLabelItem($labelname, $mapkey) |

### theme functions

|name|function|
|----|--------|
| GetForegroundColor | color-theme-fore($labelname) |
| GetBackgroundColor | color-theme-back($labelname) |

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


## example

```scss
@import "~sass-themer-color/index.scss";

@include setColorThemePallet((
    1: (
        back: #805b58,
        fore: #e8c046
    ),
    2: (
        back: #E84E46,
        fore: #000
    ),
    3: (
        back: #FF0601,
        fore: #000
    ),
    4: (
        back: #E8AAAB,
        fore: #000
    ),
    5: (
        back: rgb(174, 5, 1),
        fore: #fff
    )
));

@include setColorThemeLabels((
    highlight: 1,
    menu: 1,
    input: 2,
    header: 3,
    footer: 3,
    body: 4,
    overlay: 5,
));

header {
    color: color-theme-fore(header);
    background-color: color-theme-back(header);
}

footer {
    color: color-theme-fore(footer);
    background-color: color-theme-back(footer);
}

.overlay {
    color: color-theme-fore(overlay);
    background-color: color-theme-back(overlay);

    .title {
        color: color-theme-analogous(color-theme-fore(overlay), 0.5);
        background-color: color-theme-analogous(color-theme-back(overlay), 0.5);
    }
}

```
