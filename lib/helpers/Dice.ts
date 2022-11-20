
class Dice {

    _max: number;  //Max roll return num, effectively class type
    _min = 1;

    
    constructor (diceType:number) {

        try {
            this._max = diceType;
        } catch (err) {
            console.log(`Error creating Dice object using number "${diceType}"`);
            console.log(err);
        }
    }

    roll(rollsToMake:number = 1){
        let results : number[] = [];

        for (let i = 0; i < rollsToMake; i++)
        {
            results.push(Math.floor(Math.random() * this._max+1))l
        }

        return results;
    }
}