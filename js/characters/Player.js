

export default class Player {
    constructor(name){
        this.name = name;
        this.attack = 0;
        this.defense = 0;
        this.spAtk = 0;
        this.spDef = 0;
        this.hp = 50;
        this.luck = 0;
        this.exp = 0;
        this.lvl = 1;
        this.sp = 0;
        this.expNeeded = 100;
    }

    createCharacter() {
        console.log("Allocate your skill points!");
        
        

    }

    levelUp(){
        if(this.exp >= this.expNeeded){
            this.exp -= this.expNeeded;
            this.expNeeded *= 1.10;
            this.sp += 1;
        }
    }

    spendPoint(){
        
    }






}