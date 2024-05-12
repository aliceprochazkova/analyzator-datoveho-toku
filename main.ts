let data: Array<number> = [19001264, 16633737, 14572964, 13994284, 21105829, 2951431, 29360416, 31644638, 23902405, 18661594, 8263449, 19204170, 10708400, 7844183, 7590074, 5913449, 4081707, 24082970, 15694899, 3597721];

// Ukázkový výstup
/*
  Na každý řádek console.log() vypište číslo zaokrouhlené na jedno desetinné místo, ve tvaru XX.X Mbps
  (Představuje aktuální efektivní propustnost sítě. Uvidíme tak, jak kolísá reálné vytížení naší sítě v čase.)
*/
let pomocnePocitani: number = 1;
let soucet: number = 0;
for (let i: number = 0; i < data.length; i++) {
    //console.log(pomocnePocitani);
    soucet += (data[i] / 1000000);
    if (pomocnePocitani === 10) {
        //console.log(Math.round(soucet) + " Mbps"); varianta pro visual studio
        basic.showString(Math.roundWithPrecision(soucet, 1) + " Mbps");
        soucet = 0;
        pomocnePocitani = 1;
    }
    else {
        pomocnePocitani++;
    }
    //console.log(data[i]);
}

