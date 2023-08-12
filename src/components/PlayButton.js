import './PlayButton.css'
// function PlayButton(){
      
//     function handleClick(){
//         console.log('play')
//     }

//     return (
//         // <button onClick={console.log('play')}>Play</button>
//         // <button onClick={()=>console.log('play')}>Play</button>
//         <button onClick={handleClick}>Play</button>
//     )
// }



//using props

function PlayButton({message,name,onClick}){
      
    function handleClick(){
        // console.log(message)
        onClick();
    }

    return (
        <button onClick={handleClick}>{name}</button>
    )
}

export default PlayButton;