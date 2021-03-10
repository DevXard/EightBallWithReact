import {useState} from 'react'
import "./EightBall.css"
const EightBall = (props) => {
    // console.log(props.awncers)
    const randomAwncer = (arr = [...props.awncers]) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    
    const setAwncer = () => {
        let awncer = randomAwncer()
        console.log(awncer.color)
        setColor(awncer.color)
        setMessage(awncer.msg)
    }
    const [color, setColor] = useState("black")
    const [message, setMessage] = useState("Think of a question")
    return (
        <div id="ball" onClick={setAwncer} style={{backgroundColor: color}} >
            <h3 id="text"  >{message}</h3>
        </div>
    )
}

export default EightBall