import Modal from "./Modal/Modal";
import {useState} from "react";
import SomeComponent from "./ExampleComponent/SomeComponent";

const App = () => {
    console.log(typeof SomeComponent);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal active={isOpen} setActive={() => {setIsOpen(false)}} Component={SomeComponent}/>
    )
}
export default App;