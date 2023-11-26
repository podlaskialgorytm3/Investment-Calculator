import { calculateInvestmentResults } from "../util/investment"
export const Result = ({result}) => {
    console.log(calculateInvestmentResults(result[0].value,result[1].value,result[2].value,result[3].value));
    return(
        <table id="result">
            {/* <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>

            </tbody> */}
            
        </table>
    )
}