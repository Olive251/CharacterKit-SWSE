import CharacterHelper from '../../lib/helpers/CharacterHelper'


export default async function handler(req, res) {
    try {

      let characterHelper = new CharacterHelper();
      await characterHelper.initialize();

      await characterHelper.setSampleCharacter()
      .then((data) => {
        res.status(200).json(data);
      });
             
    } 
    catch (error) {
      console.log(error);
      res.status(400).json({error: error.message});
    }
}

// const setCharacter = async (e) => {
//   let characterHelper = new CharacterHelper();
//   await characterHelper.initialize();

//   let c = await characterHelper.setSampleCharacter()
  
//   alert(`Sample Character was created with _id: ${c.id}`);
//   e.preventDefault();
// }

// export default () => {

//   return(
//     <>
//       <input type="submit" value="Set Sample Character" onClick={setCharacter}/>
//     </>
//   )
// }