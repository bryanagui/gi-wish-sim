const pity = 90;
const softPity = 75;
let fiveStarRate = 0.006;
let fourStarRate = 0.051;
let threeStarRate = 0.943;

const featuredFiveStar = ["Yelan"];
const nonFeaturedFiveStar = ["Diluc", "Jean", "Keqing", "Mona", "Qiqi"];
const featuredFourStars = ["Barbara", "Noelle", "Yanfei"];
const nonFeaturedFourStars = [
  "Chongyun",
  "Sacrificial Sword",
  "The Widsith",
  "Rainslasher",
  "Sucrose",
  "Kujou Sara",
  "Bennett",
  "Thoma",
  "The Stringless",
  "The Bell",
  "Xinyan",
  "Fischl",
  "Sacrificial Bow",
  "Razor",
  "Rosaria",
  "Favonius Codex",
  "Faconius Lance",
  "Sayu",
  "Favonius Warbow",
  "Lion's Roar",
  "Ningguang",
  "Beidou",
  "Rust",
  "Gorou",
  "Yunjin",
  "Sacrificial Fragments",
  "Xiangling",
  "Favonius Sword",
  "The Flute",
  "Xingqiu",
  "Eye of Perception",
  "Diona",
  "Favonius Greatsword",
  "Dragon's Bane",
  "Sacrificial Greatsword",
];
const threeStars = [
  "Cool Steel",
  "Slingshot",
  "Ferrous Shadow",
  "Thrilling Tales of Dragon Slayers",
  "Bloodtainted Greatsword",
  "Shapshooter's Oath",
  "Skyrider Sword",
  "Emerald Orb",
  "Harbringer of Dawn",
  "Black Tassel",
  "Debate Club",
  "Raven Bow",
  "Magic Guide",
];

let wishCount = 0;
let fiveStarPity = 0;
let fourStarPity = 0;
let isFourStarGuaranteed = false;
let isFiveStarGuaranteed = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function onePull() {
  let item = null;
  let chance = Math.random();
  let fiftyFifty = Math.random();

  if (fiveStarPity == 89) {
    if (!isFiveStarGuaranteed) {
      if (fiftyFifty <= 0.5) {
        item = nonFeaturedFiveStar[getRandomInt(nonFeaturedFiveStar.length)];
        isFiveStarGuaranteed = true;
      } else {
        item = featuredFiveStar[getRandomInt(featuredFiveStar.length)];
        isFiveStarGuaranteed = false;
      }
    } else {
      item = featuredFiveStar[getRandomInt(featuredFiveStar.length)];
      isFiveStarGuaranteed = false;
    }
    fiveStarPity = 0;
    fiveStarRate = 0.006;
    return item;
  } else if (fourStarPity == 9) {
    if (!isFourStarGuaranteed) {
      if (fiftyFifty <= 0.5) {
        item = nonFeaturedFourStars[getRandomInt(nonFeaturedFourStars.length)];
        isFourStarGuaranteed = true;
      } else {
        item = featuredFourStars[getRandomInt(featuredFourStars.length)];
        isFourStarGuaranteed = false;
      }
    } else {
      item = featuredFourStars[getRandomInt(featuredFourStars.length)];
      isFourStarGuaranteed = false;
    }
    fourStarPity = 0;
    fourStarRate = 0.051;
    fiveStarPity++;
    return item;
  } else {
    if (fiveStarPity >= 75) {
      for (let i = 76; i <= fiveStarPity; i++) {
        fiveStarRate += 0.071;
      }
    }
    if (fourStarPity >= 8) {
      fourStarRate += 0.3;
    }
  }

  if (chance <= fiveStarRate) {
    if (!isFiveStarGuaranteed) {
      if (fiftyFifty <= 0.5) {
        item = nonFeaturedFiveStar[getRandomInt(nonFeaturedFiveStar.length)];
        isFiveStarGuaranteed = true;
      } else {
        item = featuredFiveStar[getRandomInt(featuredFiveStar.length)];
        isFiveStarGuaranteed = false;
      }
    } else {
      item = featuredFiveStar[getRandomInt(featuredFiveStar.length)];
      isFiveStarGuaranteed = false;
    }
    fiveStarPity = 0;
    fiveStarRate = 0.006;
    return item;
  } else if (chance <= fourStarRate && chance >= fiveStarRate) {
    if (!isFourStarGuaranteed) {
      if (fiftyFifty <= 0.5) {
        item = nonFeaturedFourStars[getRandomInt(nonFeaturedFourStars.length)];
        isFourStarGuaranteed = true;
      } else {
        item = featuredFourStars[getRandomInt(featuredFourStars.length)];
        isFourStarGuaranteed = false;
      }
    } else {
      item = featuredFourStars[getRandomInt(featuredFourStars.length)];
      isFiveStarGuaranteed = false;
    }
    fiveStarPity++;
    fourStarPity = 0;
    fourStarRate = 0.051;
    return item;
  } else {
    item = threeStars[getRandomInt(threeStars.length)];
    fourStarPity++;
    fiveStarPity++;
    return item;
  }
}

function tenPull() {
  let item = [];
  for (let i = 0; i < 10; i++) {
    item[i] = onePull();
  }
  return item;
}
