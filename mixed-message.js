// Adjectives from: https://www.studentandwriter.com/2018/06/15/list-of-50-funny-adjectives-for-mad-libs/
// Nouns from: https://www.studentandwriter.com/2015/01/08/funny-noun-list-for-mad-libs/
// Console colours: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

const adjectives = [
    "adulterous",
    "alcoholic",
    "angry",
    "arrogant",
    "at-the-ready",
    "bat-shit-crazy",
    "blithering",
    "bull-headed",
    "confused",
    "cruel-hearted",
    "demanding",
    "drunken",
    "fiercely loyal",
    "flickering",
    "flirting",
    "free-loading",
    "frisky",
    "greedy",
    "hateful",
    "house-broken",
    "hyperactive",
    "high-end",
    "idiotic",
    "infuriating",
    "insecure",
    "maniacal",
    "mentally impaired",
    "misunderstood",
    "naked",
    "narrow-minded",
    "out-of-control",
    "outnumbered",
    "pea-brained",
    "rebellious",
    "self-absorbed",
    "shaky",
    "shivering",
    "sickened",
    "slippery",
    "stubborn",
    "territorial",
    "tripping",
    "twisted",
    "underhanded",
    "useless",
    "vengeful",
    "vile",
    "yapping",
    "zippy",
    "zombie-like",
];

const nouns = [
    "hunting ground",
    "lettuce",
    "kitty",
    "friendly grandma",
    "french chef",
    "antidepressant drug",
    "corn cake",
    "president of the night",
    "candlestick maker",
    "coffee pot",
    "brethren",
    "national security agency",
    "tank",
    "useless brakes",
    "international law enforcement agency",
    "sound barrier",
    "skinny woman",
    "private investor",
    "main people",
    "stock car",
    "elastic band",
    "whole blood",
    "telephone",
    "mad cow disease",
    "scourge upon the earth",
    "rough-skinned newt",
    "karate",
    "pistol",
    "legal warrant",
    "people who are hurt",
    "idea he suggested",
    "party of the first part",
    "place of business",
    "double fault",
    "kitty cat",
    "famous landscape painting",
    "hairy legs",
    "old irish cottage",
    "pocket flask",
    "liquid oxygen",
    "laser beams",
    "preventive strike",
    "dingle berry",
    "reading party",
    "generalized bond",
    "indirect expression",
    "messiness",
    "love of her life",
    "trust fund",
    "volcanic crater",
    "travel guidebook",
    "electric furnace",
    "internal respiration",
    "police squad",
    "mad-dog skullcap",
    "sneaky criminal",
    "new version",
    "keepsake machete",
    "gaming laptop",
    "hissy fit",
    "dog poop",
    "dragon",
    "mediation",
    "patrolman",
    "pervert",
    "toilet seat",
    "haunted graveyard",
    "really tough guy",
    "twinkling uncleanness",
    "wrinkle",
    "personal credit line",
    "multi-billionaire",
    "mental disorder",
    "sweet tailpipe",
    "boiling water",
    "deer antler",
    "background story",
    "mood",
    "nibblets",
    "striped hyena",
    "weed wacker",
    "man of my dreams",
    "pilot chart",
    "suckling pig",
    "sight of the girl",
    "idiot",
    "wiley coyote",
    "crime scene",
    "most beautiful girl",
    "gothic romance",
    "first born",
    "tire iron",
    "planetary house",
    "lieutenant governor",
    "manure",
    "rocket science",
    "ways of world",
    "wild, wild sheep",
    "kind and gentle folk",
    "ice cream",
    "diplomatic negotiation",
    "marshmallow",
    "internal control",
    "totem pole",
    "remnant of chaos",
    "space emulator",
    "serious question",
    "general knowledge",
    "pile of decomposition",
    "change for good",
    "ship’s captain",
    "hiking boots",
    "lips",
    "big polar bear",
    "erie canal",
    "sphere of influence",
    "temper tantrum",
    "elegant question",
    "nature trail",
    "indestructible empire",
    "dentist’s drill",
    "eskimo",
    "indiscriminate killer",
    "monkey",
    "stick figure",
    "day before",
    "matrimonial law",
    "sealed off tomb",
    "unit of unholy depth",
    "broken promises",
    "notion of love",
    "obviousness",
    "fluffy clouds",
    "shoe string",
    "body",
    "stir stick",
    "people",
    "divergent thinking",
    "latest version",
    "baptist church",
    "dirty coffee cup",
    "towelette",
    "amish folk",
    "pillow",
    "roadblock",
    "disorder",
    "big jerk",
    "toilet",
    "snakehead",
    "descending color",
    "merry bells",
    "knight’s service",
    "life raft",
    "radio beam",
    "brainchild",
    "orbital plane",
    "confusing situation",
    "manipulating ass",
    "microwaved eggs",
    "shivering toes",
    "natural history",
    "positive feedback",
    "modern times",
    "mistress",
    "animal psychology department",
    "sewing-machine operator",
    "light bulb",
    "jet ski",
    "constant reminder",
    "baby",
    "snake",
    "mathematics department",
    "video game",
    "musical chairs",
    "pancake",
    "skull and crossbones",
    "fluffy slippers",
    "nonbeliever",
    "phonograph record",
    "friendly claim",
    "willow",
    "trooper",
    "clan member",
    "bouncy ball",
    "tentacle",
    "police department",
    "bored child",
    "thunder legs",
    "abnormal behavior",
    "drug addict",
    "meeting with my mom",
    "control account",
    "mimicker",
    "overlord",
    "informal request",
    "railroad worm",
    "nudist camp",
    "mental case",
    "date of improvement",
    "sheep dip",
    "toast",
    "polkdot",
    "pizza cutter",
    "locker room",
    "litter pan",
    "wiener",
    "chicken stew",
    "jungle psychology",
    "extremity",
    "invisibility cloak",
    "biology lab",
    "fact that i don’t think",
    "fairy lantern"
];

const gunTypes = [
    "pistol",
    "revolver",
    "sub-machine gun",
    "shotgun",
    "battle rifle",
    "assault rifle",
    "sniper rifle",
    "machine gun",
    "carbine",
    "flamethrower",
    "grenade launcher",
];

const weaponFactory = () => {

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const gun = gunTypes[Math.floor(Math.random() * gunTypes.length)];

    let complete_name;

    if(Math.floor(Math.random() * 5) === 0){
        complete_name = `${adjective.charAt(0).toUpperCase() + adjective.slice(1)} ${gun.charAt(0).toUpperCase() + gun.slice(1)} of the ${noun}`;
    } else {
        complete_name = `${adjective.charAt(0).toUpperCase() + adjective.slice(1)} ${gun.charAt(0).toUpperCase() + gun.slice(1)}`;
    }

    const weaponStats = {
        fireRate: Math.floor(Math.random() * 5 + 1),
        ammo: Math.floor(Math.random() * 5 + 1),
        damage: Math.floor(Math.random() * 5 + 1),
        reloadSpeed: Math.floor(Math.random() * 5 + 1),
    }

    return {
        name: complete_name,
        gunType: gun,
        stats: weaponStats,
    };
};

const createWeapon = () => {
    const weapon = weaponFactory();
    const message = `\x1b[1m######### Your Weapon! #########
\x1b[96m${weapon.name}
\x1b[92mAmmo: ${'█ '.repeat(weapon.stats.ammo)}
Damage: ${'█ '.repeat(weapon.stats.damage)}
Fire Rate: ${'█ '.repeat(weapon.stats.fireRate)}
Reload Speed: ${'█ '.repeat(weapon.stats.reloadSpeed)}
\x1b[37m################################`;
    console.log(message, '\x1b[0m');
}

createWeapon();