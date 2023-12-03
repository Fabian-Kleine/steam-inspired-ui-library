# steam inspired ui library

This CSS library is inspired by the styles used on the steam website and the steam client.

## Usage

You can either download the whole repository and add `steamui.css` and `/css/utlities.css` to your HTML or download only the components you want to use and import them manually.

### Import All

```
<head>
    <link rel="stylesheet" href="./css/utilities.css">
    <link rel="stylesheet" href="steamui.css">
</head>
```

### Import individually

```
<head>
    <link rel="stylesheet" href="./css/utilities.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/__buttons.css">
    <link rel="stylesheet" href="./css/__navbar.css">
</head>
```
Note that `./css/main.css` needs to be imported beacaus it contains important variables for the other components.

## Components
See the components in action at https://projects.fabian-kleine.dev/steam-inspired-ui-library/
### Buttons

<img src="./screenshots/Buttons.PNG" >

Always use the `.btn` class!

#### Varaints

Primary Secondary and Tertiary Button as in the Image

```
<button class="btn btn-primary">PLAY</button>
<button class="btn btn-secondary">STOP</button>
<button class="btn btn-tertiary">Shop</button>
```

Large Buttons

```
<button class="btn btn-primary btn-lg">PLAY</button>
<button class="btn btn-secondary btn-lg">STOP</button>
<button class="btn btn-tertiary btn-lg">Shop</button>
```

Small Buttons

```
<button class="btn btn-primary btn-sm">PLAY</button>
<button class="btn btn-secondary btn-sm">STOP</button>
<button class="btn btn-tertiary btn-sm">Shop</button>
```

Button Styles can also be used with anchors:

```
<a href="#" class="btn btn-primary">PLAY</a>
<a href="#" class="btn btn-secondary">STOP</a>
<a href="#" class="btn btn-tertiary">Shop</a>
```

### Navbar

<img src="./screenshots/Navbar.PNG" >

```
└── nav.navbar
    └── div.navbar-container
        ├── div.navbar-toggler
        │   └── label.navbar-toggle-icon for="navToggle"
        ├── div.navbar-logo
        │   └── a
        │       └── img
        ├── input:checkbox#navToggle
        └── ul.navbar-nav
            ├── li.navbar-item.active
            │   ├── a.navbar-link
            │   └── div.navbar-dropdown
            │       ├── a.dropdown-link
            │       ├── a.dropdown-link
            ├── li.navbar-item
            │   ├── a.navbar-link
            │   └── div.navbar-dropdown
            │       ├── a.dropdown-link
            │       ├── a.dropdown-link
            ├── li.navbar-item
                └── a.navbar-link
```


The Navbar features dropwdowns and a responsive design.
Note that you can only use this component once since the id `#navToggle` for the responsive navbar toggler can only be used once.

### Menubar
<img src="./screenshots/Menubar.PNG" >

```
└── div.menubar
    ├── div.menubar-item
    │   ├── a.menubar-link
    │   ├── div.menubar-dropdown
    │       ├── a.dropdown-link
    │       ├── h4.dropdown-subheader
    ├── div.menubar-item
    │   ├── a.menubar-link
    │   ├── div.menubar-dropdown.menubar-dropdown-grid
    │       ├── div.dropdown-grid-item
    │           ├── a.dropdown-link
    │           ├── h4.dropdown-subheader
    ├── div.menubar-item
    │   └── a.menubar-link
    ├── div.menubar-spacer
    └──  div.menubar-search
        ├── input:search
        └── a.btn-search
            └── svg 
```
The Menubar is also responsive and features big dropdowns using the `menubar-dropdown-grid` class.