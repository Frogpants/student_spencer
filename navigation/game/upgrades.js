
export const upgrades = {
    bullets: 1,
    spread: 0,
    bSpeed: 10,
    health: 100,
    maxHealth: 100,
    heal: 0,
    pSpeed: 0.6,
    dmg: 50,
    fire: false,
    ice: false,
    split: false
};



export function upgradeItem(item, perc) {
    if (upgrades[item] !== undefined) {
        switch(item) {
            case 'bullets':
                upgrades.bullets *= perc;
                break;
            case 'spread':
                upgrades.spread *= perc;
                break;
            case 'bSpeed':
                upgrades.bSpeed *= perc;
                break;
            case 'health':
                upgrades.maxHealth *= perc;
                upgrades.health *= perc;
                break;
            case 'heal':
                upgrades.heal += 1;
                break;
            case 'pSpeed':
                upgrades.pSpeed *= perc;
                break;
            case 'dmg':
                upgrades.dmg *= perc;
                break;
            case 'fire':
                upgrades.fire = true;
                break;
            case 'ice':
                upgrades.ice = true;
                break;
            case 'split':
                upgrades.split = true;
                break;
        }
    }  
};