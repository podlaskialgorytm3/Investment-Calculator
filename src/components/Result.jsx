import { calculateInvestmentResults,formatter} from "../util/investment"
export const Result = ({result}) => {
    const annualInvestment = calculateInvestmentResults(result[0].value,result[1].value,result[2].value,result[3].value)
    let year = result[3].value || 0
    console.log(annualInvestment)
    return(
        <>
            {year > 0 ? (
            <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
               {annualInvestment.map(item => <tr key={item.year}>
               <td>{item.year}</td>
               <td>{formatter.format(item.valueEndOfYear)}</td>
               <td>{formatter.format(item.interest)}</td>
               <td>{formatter.format(item.year * item.interest)}</td>
               <td>{formatter.format(item.valueEndOfYear - (item.year * item.interest))}</td>
               </tr>
               )}
            </tbody>
            </table>
            ): (
                <p className="center">Complete the year correctly!</p>
            )}
        </>
    )
}