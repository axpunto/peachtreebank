## Description:
This repo contains an **Angular app** to simulate bank transactions, and its historical. No css frameworks were needed but used sass.

## Important notes:
* Find the developed app on `src/app/home`
* Find mock data on `home.component.ts` at line `10`. For best experience reading my code, reduce this variable content in your IDE to not show its entire content.
* `app.component.ts` only executes the router strategy (for now), which is in `app.routing.module.ts`. This will let us use app component as a main component logic for best practices to maintain.
* Once this repo downloaded run `npm install` then `ng serve` to run the app on your local host. Node installed on your machine it's required, if not visit https://nodejs.org/en/
* Due lack of time, sort feature by Amount, Name and Date were not developed, so I decided to hide its container under mobile devices screen (under 600px).

## Features:
I decided to keep focus on below features to show on the app and read how I did in code:
* Developed a filter pipe in `src/app/pipes` to use it on historical transactions.
* Used Angular pipes to apply format on currencies and dates.
* Responsiveness strategy to cover the most of width sizes. Also on mobile devices under 600px I chose to hide merchant logos and sorting controls.
* Developed css with sass to perform nested class rules, organization and simplicity.
* For best UX I decided to develop modals instead new views, only to review less info about the transaction before the transfer, and also to validate if the transfer couldn't be possible because overdrafting the account. This helps to keep focus on review the transactions.
* Own amount decrease when transactions successfully done.
* Own account, and amount could not be edited by the user.
* Own account could not be overdraft by -$500
* New transactions stored on the top of the list.
* Also I chose to develop required fields to unblock the transfer button, because one operation must contain beneficiary and amount.
* App successfully deployed on Firebase https://peachthreebank.web.app/
