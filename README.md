# DigitalSignage - Version: schilderwald

> Schilderwald as a Service

Mit diesem innovativen SaaS Service können Sie einfach beschilderungen für Ihre Event erstellen. Probieren sich es doch einfach aus!

Es muss einfach nur als query parameter einen pfad zu einem Order übergeben werden. Dort braucht es nur eine config.json sowie styles und images.

## Beispiel config.json

```json
{
    "name": "hacksonthebeach",
    "css": [
        "style.css"
    ],
    "editable_elements": [
        {"tag": "h1", "class": "heading", "default": "You are beautiful"},
        {"tag": "h6", "class": "heading", "default": "You are beautiful"},
        {"tag": "p", "class": "subline", "default": "Let's change the world"}
    ],
    "styling_elements": [
        {"tag": "img", "alt": "", "class": "absolute", "id": "hotb-logo", "src": "https://raw.githubusercontent.com/chaostreff-flensburg/digitalSignage/master/assets/img/hacksonthebeach/wortmarke.svg"},
        {"tag": "img", "alt": "","class": "absolute", "id": "hotb-schirm", "src": "https://raw.githubusercontent.com/chaostreff-flensburg/digitalSignage/master/assets/img/hacksonthebeach/loetschirm.svg"}
    ]
}
```

## Technical Stuff

This project is using vue.js as frontend framework.

This template should help get you started developing with Vue 3 in Vite.


### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
