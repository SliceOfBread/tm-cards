# tm-cards
machine usable description of Terraforming Mars cards

Mainly for use with TM playing bots.
The first iteration will include only cards from base+corporate era+Prelude.

All card names now match exactly to the file names used in https://github.com/bafolts/terraforming-mars

Since card names available in the "WaitingFor" data includes spaces and such the simple transformation such as
let cardInfo = oAllCards[waitingFor["cards"][0]["name"].replace(/[-'\s]/g,'')];


