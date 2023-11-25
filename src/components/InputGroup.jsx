export const InputGroup = ({title,handleInput}) => {
    return(
        <p>
            <label>{title}</label>
            <input type="number" required onChange={(e) => handleInput(e,title)}/>
        </p>
    )
}