export const InputGroup = ({title,handleInput}) => {
    return(
        <p>
            <label>Initial Investment</label>
            <input type="number" required onChange={handleInput}/>
        </p>
    )
}