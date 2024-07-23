function HeroStorer(arrayofHeroes){
    let legends = [];
    
    for(h of arrayofHeroes){
        let tokens = String(h).split(" / ");
        let champ = {name: "", level: 0, items: []};

        champ.name = tokens[0];
        champ.level = tokens[1];
        champ.items = tokens[2];

        legends.push(champ);
    }
    legends.sort((a,b)=> a.level-b.level);
    for(league of legends){
        console.log(`Hero: ${league.name}`);
        console.log(`level => ${league.level}`);
        console.log(`items => ${league.items}`);
    }
}

HeroStorer(['Isacc / 25 / Apple, GravityGun',
            'Derek / 12 / BarrelVest, DestructionSword',
            'Hes / 1 / Desolator, Sentinel, Antara']);

HeroStorer(['Batman / 2 / Banana, Gun',
            'Superman / 18 / Sword',
            'Poppy / 28 / Sentinel, Antara']);