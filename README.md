## Description:
This repo contains an **Angular app** to simulate bank transactions, and its historical.
Afret clone, run `npm install` then `npm run`

## Notes:
* Find the developed app on `src/app/home`
* Find mock data on `home.component.ts` at line `10`. For best experience reading my code, reduce this variable content in your IDE to not show its entire content.
* `app.component.ts` only executes the router strategy (for now), which is in `app.routing.module.ts`. This will let us use app component as a main component logic for best practices to maintain.

## Features:
* Developed a filter pipe in `src/app/pipes` to use it on historical transactions.
* Responsiveness strategy under 600px.
* Developed css with sass to perform nested class rules.
* Own amount decrease when transactions successfully done.
* Own account, and amount could not be edited by the user.
* Own account could not be overdraft by -$500
* New transactions stored on the top of the list.
* Required fields to unblock the transfer button.
* App successfully deployed on Firebase https://peachthreebank.web.app/
