# DigitalSignage
> Schilderwald as a Service

## Usage

Go to [http://schild.chaos.lol/](http://schild.chaos.lol/), type your words, print the page.   
Set your printer to also print background images, if not already selected. Your sign wont look as nice without them. Also set the scale to 100% and print in landscape.

## Development

```
npm i
npm run dev
open http://localhost:3000/
```

## Creating a new layout / design

Layouts are vue-components located in the `layouts` folder. Each layout needs a `<nuxt/>` tag where the page is rendered and a uniquely classed section. Do not try to style the `body` in your layout, always start with your layout section, or else you will get weird style bugs when changing routes. For a quick start, just copy & modify an already existing layout. Do not forget to put a link to your design in the `components/layoutselect.vue` component.  
All elements should be positioned `absolute`. We recommend using centimeters instead of pixels for positioning. Designing for printers in a browser is a strange job.  
When you are finished styling your layout, deploy your own version of digitalSignage or create a pull-request here, if you think other people would like to use your design.  

Also please consider creating designs with a light background. Printer ink is more expensive than human blood.
  

## Deployment

Run `npm run generate`, wait for the build to finish and push to GitHub. New routes need to be added to `nuxt.config.js`to be properly generated.
