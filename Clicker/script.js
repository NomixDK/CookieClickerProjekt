//START DEFINITIONER
let score = 0;
let click = 1;
let displayValue = 0;
let BPS = 0;

    

//UNITS
let FMonkeys = 0;
let FMonkeyPrice = 20;
let FMonkeyM = 0.05;
let FMonkeyValue = 0;

let BFields = 0;
let BFieldPrice = 100;
let BFieldM = 0.2;
let BFieldValue = 0;

let BBanks = 0;
let BBankPrice = 400;
let BBankM = 1;
let BBankValue = 0;

let BSStations = 0;
let BSStationPrice = 1000;
let BSStationM = 10;
let BSStationValue = 0;


//UPGRADES
let C1Unlocked = false;
let C2Unlocked = false;
let C3Unlocked = false;
let C4Unlocked = false;

let M1Unlocked = false;
let M2Unlocked = false;
let M3Unlocked = false;
let M4Unlocked = false;

let BF1Unlocked = false;
let BF2Unlocked = false;
let BF3Unlocked = false;
let BF4Unlocked = false;

//ANDET
let iD = 1;
load();


//CLASSES DER IKKE GOER NOGET
class Unit {
  constructor(name, price, amount, multiplier) {
    this.name = name;
    this.price = price;
    this.income = amount;
    this.multiplier = multiplier;
    let tValue = this.income + this.multiplier;

  }

}
let t1 = new Unit("Farmer Monkey", 20, 0, 0.2)
let t2 = new Unit("Monkey Farm", 100, 0, 1)
let t3 = new Unit("Monkey Bank", 200, 0, 10)
console.log(t1,t2,t3)


//CLICKER
function add () {
 score += click;
 console.log(score)
 load();
}


//FARMER MONKEY
function buyFMonkey () {
    if (score >= FMonkeyPrice) {
        score -= FMonkeyPrice;
        FMonkeys += 1;  
        load();
    }
    FMonkeyPrice = (1 + (0.2 * FMonkeys)) * 20;
}

function FMonkeyWork () { //Får variablen til at generere "score"
    FMonkeyValue = FMonkeys * FMonkeyM;
    if (FMonkeys > 0) {
        console.log(score)
        score += FMonkeyValue;       
    }
}


//BANANA FIELD
function buyBField () {
    if (score >= BFieldPrice) {
        score -= BFieldPrice;
        BFields += 1;  
        load();
    }
    BFieldPrice = (1 + (0.2 * BFields)) * 100;
}

function BFieldWork () { //Får variablen til at generere "score"
  BFieldValue = BFields * BFieldM;
    if (BFields > 0) {
        console.log(score)
        score += BFieldValue;       
    }
}


//BANANA BANK
function buyBBank () {
  if (score >= BBankPrice) {
      score -= BBankPrice;
      BBanks += 1;  
      load();
  }
  BBankPrice =  (1 + (0.3 * BBanks)) * 400;
}

function BBankWork () { //Får variablen til at generere "score"
  BBankValue = BBanks * BBankM;
  if (BBanks > 0) {
      console.log(score)
      score += BBankValue;       
  }
}


//BANANA SPACE STATION
function buyBSStation () {
  if (score >= BSStationPrice) {
      score -= BSStationPrice;
      BSStations += 1;  
      load();
  }
  BSStationPrice =  (1 + (0.3 * BSStations)) * 1000;
}

function BSStationWork () { //Får variablen til at generere "score"
  BSStationValue = BSStations * BSStationM;
  if (BSStations > 0) {
      console.log(score)
      score += BSStationValue;       
  }
}


//REFRESHER
function load () {
    displayValue = parseInt(score); //Bananer
    document.getElementById("currentScore").innerHTML = displayValue; //Refresher "Score"
    BPS = (FMonkeyValue + BFieldValue + BBankValue + BSStationValue) * 10; 
    document.getElementById("currentBPS").innerHTML = BPS; //Refresher "Banana per second"

    //Farmer Monkey
    document.getElementById("currentFMonkeys").innerHTML = FMonkeys; //Refresher "Monkeys"
    document.getElementById("currentFMonkeyPrice").innerHTML = FMonkeyPrice; //Refresher "Monkey Price"

    //Banana Field
    document.getElementById("currentBFields").innerHTML = BFields; //Refresher "Banana Field"
    document.getElementById("currentBFieldPrice").innerHTML = BFieldPrice; //Refresher "Banana Field Price"
  
    //Banana Bank
    document.getElementById("currentBBanks").innerHTML = BBanks; //Refresher "Banana Bank"
    document.getElementById("currentBBankPrice").innerHTML = BBankPrice; //Refresher "Banana Bank Price"

    
    //Banana Space Station
    document.getElementById("currentBSStations").innerHTML = BSStations; //Refresher "Banana Bank"
    document.getElementById("currentBSStationPrice").innerHTML = BSStationPrice; //Refresher "Banana Bank Price"     
}


//UPGRADES DEL 2
//CLICK
  function buyUC1(i) { 
  if (C1Unlocked === false) {

    console.log("Works")
    if (score >= 100) {
      score -= 100;
      click = 2;
      C1Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";

    }
  }
}

function buyUC2(i) { 
  if (C1Unlocked === true && C2Unlocked === false) {
    if (score >= 500) {
      score -= 500;
      click = 4;
      C2Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyUC3(i) { 
  if (C2Unlocked === true && C3Unlocked === false) {
    if (score >= 1000) {
      score -= 1000;
      click = 8;
      C3Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyUC4(i) { 
  if (C3Unlocked === true && C4Unlocked === false) {
    if (score >= 2000) {
      score -= 2000;
      click = 16;
      C4Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

//MONKEY
function buyM1(i) { 
  if (M1Unlocked === false) {

    console.log("Works")
    if (score >= 100) {
      score -= 100;
      FMonkeyM *= 2;
      M1Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";

    }
  }
}

function buyM2(i) { 
  if (M1Unlocked === true && M2Unlocked === false) {
    if (score >= 500) {
      score -= 500;
      FMonkeyM *= 2;
      M2Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyM3(i) { 
  if (M2Unlocked === true && M3Unlocked === false) {
    if (score >= 1000) {
      score -= 1000;
      FMonkeyM *= 2;
      M3Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyM4(i) { 
  if (M3Unlocked === true && M4Unlocked === false) {
    if (score >= 2000) {
      score -= 2000;
      FMonkeyM *= 2;
      M4Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}


//BANANA FIELDS
function buyBF1(i) { 
  if (BF1Unlocked === false) {

    console.log("Works")
    if (score >= 200) {
      score -= 200;
      BFieldM *= 2;
      BF1Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";

    }
  }
}

function buyBF2(i) { 
  if (BF1Unlocked === true && BF2Unlocked === false) {
    if (score >= 750) {
      score -= 750;
      BFieldM *= 2;
      BF2Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyBF3(i) { 
  if (BF2Unlocked === true && BF3Unlocked === false) {
    if (score >= 1500) {
      score -= 1500;
      BFieldM *= 2;
      BF3Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}

function buyBF4(i) { 
  if (BF3Unlocked === true && BF4Unlocked === false) {
    if (score >= 3000) {
      score -= 3000;
      BFieldM *= 2;
      BF4Unlocked = true;
      i.style.backgroundColor="#352111";
      i.style.borderColor="lime";
    }
  }
}


//CHEAT POINTS
function CP () {
  score += 1000000;
}

//DELAY
  let delayCounter = 1;                  

  function delay() {        
    setTimeout(function() {   
      console.log("loop");
        FMonkeyWork();
        BFieldWork();
        BBankWork();
        BSStationWork();
        load();
      delayCounter++;                    
      if (delayCounter = 10) {           
        delay();              
      }                       
    }, 110)
  }
  
  delay();        
