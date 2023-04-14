import Mem from "./Mem"
import Info from "./Info"
import Cpu from "./Cpu"
function Widget(props) {


    return (
        <div>
            <h1>Widget</h1>
            <Mem />
            <Info />
            <Cpu />
        </div>
    )
}



export default Widget