import { InputGroup } from "./InputGroup"

export const UserInput = () => {
    const handleInput = (event) => {
        console.log(event.target.value)
    }
    return(
        <div id="user-input">
            <div className="input-group">
                <InputGroup title="Initial Investment" handleInput={handleInput}/>
                <InputGroup title="Annual Investment" handleInput={handleInput}/>
            </div>
            <div className="input-group">
                <InputGroup title="Expencted Return" handleInput={handleInput}/>
                <InputGroup title="Duration" handleInput={handleInput}/>
            </div>
        </div>
    )
}