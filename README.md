# TopSongs

## Overview
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## How to run
The Angular CLI is necessary to run the webapp. Download it at the link above. Once downloaded, run ```ng serve``` in the project root. The CLI will spin up a server at localhost:4200, if available.

## Production instance
There is a production instance available at [https://corymortimer.com/TopSongs/](https://corymortimer.com/TopSongs/). This was built with the command ```ng build --prod -bh /TopSongs/ -aot true```. This builds a production, minified webapp, compiled locally, and with the index referencing resource files in the "TopSongs" path.

## Tests
There are unit and component tests written for the web application. Those can be run with ```ng test```.

## Other notes
- The example has genre in the details of the card. Genre was not provided in the data so it was hardcoded to be "Pop".
- One song was missing the total time. It is populated with "???" instead.
