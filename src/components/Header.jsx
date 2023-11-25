import Logo from '/investment-calculator-logo.png'
export const Header = () => {
    return(
        <header id="header">
            <img src={Logo}/>
            <h1>React Investment Calculator</h1>
        </header>
    )
}