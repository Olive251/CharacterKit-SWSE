import {atom, useSetAtom, useAtomValue} from 'jotai';

export const skillRules = atom(async(get) => {
    try {
        const response = await fetch(`http://localhost:3000/api/skills/${skill.skillRules}`);
        const data = await response.json();
        return data
    }
    catch (err) {
        console.log("Problem loading skill rules data...");
        console.log(err);
    }
})

export const sampleCharacter = atom(async(get) => {
    try{
        console.log(`sampleCharacter will be fetched`)
        const response = await fetch('http://localhost:3000/api/sampleCharacter');
        const data = await response.json();
        return data;

    }catch (err) {
        console.log("Problem loading sample character data...");
        console.log(err);
    }
})

