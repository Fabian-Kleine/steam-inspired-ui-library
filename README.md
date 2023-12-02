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
    <link rel="stylesheet" href="./css/__buttons.css">
    <link rel="stylesheet" href="./css/__navbar.css">
</head>
```

## Components

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
<nav class="navbar">
    <div class="navbar-container">
        <div class="navbar-toggler">
            <label for="navToggle" class="navbar-toggler-icon"></label>
        </div>
        <div class="navbar-logo">
            <a href="https://store.steampowered.com/?snr=1_5_9__global-header">
                <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                    width="176" height="44">
            </a>
        </div>
        <input type="checkbox" id="navToggle">
        <ul class="navbar-nav">
            <li class="navbar-item active">
                <a class="navbar-link" href="#">Shop</a>
                <div class="navbar-dropdown">
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                </div>
            </li>
            <li class="navbar-item">
                <a class="navbar-link" href="#">Community</a>
                <div class="navbar-dropdown">
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                </div>
            </li>
            <li class="navbar-item">
                <a class="navbar-link" href="#">Account</a>
                <div class="navbar-dropdown">
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                    <a href="#" class="dropdown-link">Test</a>
                </div>
            </li>
            <li class="navbar-item">
                <a class="navbar-link" href="#">Chat</a>
            </li>
            <li class="navbar-item">
                <a class="navbar-link" href="#">Support</a>
            </li>
        </ul>
    </div>
</nav>
```


The Navbar features dropwdowns and a responsive design.
Note that you can only use this component once since the id `#navToggle` for the responsive navbar toggler can only be used once.

### Menubar
<img src="./screenshots/Menubar.PNG" >

```
<div class="menubar">
    <div class="menubar-item">
        <a href="#" class="menubar-link">Your Shop</a>
        <div class="menubar-dropdown">
            <div class="dropdown-grid-item"><!-- more content --></div>
            <div class="dropdown-grid-item"><!-- more content --></div>
            <div class="dropdown-grid-item"><!-- more content --></div>
        </div>
    </div>
    <div class="menubar-item">
        <a href="#" class="menubar-link">News</a>
        <div class="menubar-dropdown menubar-dropdown-grid">
            <div class="dropdown-grid-item">
                <div class="dropdown-grid-item"><!-- more content --></div>
                <div class="dropdown-grid-item"><!-- more content --></div>
                <div class="dropdown-grid-item"><!-- more content --></div>
            </div>
            <div class="dropdown-grid-item">
                <div class="dropdown-grid-item"><!-- more content --></div>
                <div class="dropdown-grid-item"><!-- more content --></div>
                <div class="dropdown-grid-item"><!-- more content --></div>
            </div>
        </div>
    </div>
    <div class="menubar-item">
        <a href="#" class="menubar-link">Categorys</a>
        <div class="menubar-dropdown menubar-dropdown-grid">
            <div class="dropdown-grid-item">
                <h4 class="dropdown-subheader">Subheader</h4>
                <a href="#" class="dropdown-link">Test</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-link">Test</a>
            </div>
            <div class="dropdown-grid-item"><!-- more content --></div>
            <div class="dropdown-grid-item"><!-- more content --></div>
            <div class="dropdown-grid-item"><!-- more content --></div>
        </div>
    </div>
    <div class="menubar-item">
        <a href="#" class="menubar-link">Points</a>
    </div>
    <div class="menubar-spacer"></div>
    <div class="menubar-search">
        <input type="search" name="search" id="search" placeholder="Search">
        <a href="#" class="btn-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#687688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-search">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        </a>
    </div>
</div>
```
The Menubar is also responsive and features big dropdowns using the `menubar-dropdown-grid` class.