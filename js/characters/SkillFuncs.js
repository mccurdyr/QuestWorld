import Player from "./Player.js";

const atkUpBtn = document.querySelector("#attackUp");
const atkDownBtn = document.querySelector("#attackDown");
const defUpBtn = document.querySelector("#defenseUp");
const defDownBtn = document.querySelector("#defenseDown");
const spAtkUpBtn = document.querySelector("#spAtkUp");
const spAtkDownBtn = document.querySelector("#spAtkDown");
const spDefUpBtn = document.querySelector("#spDefUp");
const spDefDownBtn =document.querySelector("#spDefDown");
const hpUpBtn = document.querySelector("#hpUp");
const hpDownBtn = document.querySelector("#hpDown");
const luckUpBtn = document.querySelector("#luckUp");
const luckDownBtn = document.querySelector("#luckDown");





function Allocate(Player) {
    this.sp += 20;
    console.log("working, skill points: " + this.sp);
}
