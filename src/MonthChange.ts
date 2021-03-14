
type ReturnProps = ( 
    fromDate:string ,
    toDate:string,
    counter:number,
    oldCounter:React.MutableRefObject<number>,
    setFromDate:React.Dispatch<React.SetStateAction<string>>,
    setToDate:React.Dispatch<React.SetStateAction<string>>

) => void
// const monthChange: 

const monthChange :ReturnProps = (fromDate,toDate,counter,oldCounter,setFromDate,setToDate)  => {
    //Format month function
    const monthFormat = (monthInt: number) => {
        let monthStr = monthInt.toString();
        if (monthStr.length === 1) {
          return "0" + monthStr;
        } else {
          return monthStr;
        }
    }

    const currentFromDate: string[] = fromDate.split("-");
    const currentToDate: string[] = toDate.split("-");
    let newFromDate: string[] = [];
    let newToDate: string[] = [];
    let step: number = 0;
    if (counter > oldCounter.current) {
      step = 1;
      console.log("inc");
    } else {
      step = -1;
      console.log("dec");
    }
    if (step === 1) {
      let newToMonth = parseInt(currentToDate[1]) + step;
      let newToMonthStr = monthFormat(newToMonth);
      if (newToMonth > 12) {
        let newToYear = parseInt(currentToDate[0]) + 1;
        newToDate = [newToYear.toString(), "01", currentFromDate[2]];
      } else {
        newToDate = [currentToDate[0], newToMonthStr, currentFromDate[2]];
      }
      newFromDate = [currentToDate[0], currentToDate[1], currentFromDate[2]];
    }
    if (step === -1) {
      let newFromMonth = parseInt(currentFromDate[1]) + step;
      let newFromMonthStr = monthFormat(newFromMonth);
      if (newFromMonth < 1) {
        let newFromYear = parseInt(currentFromDate[0]) - 1;
        newFromDate = [newFromYear.toString(), "12", currentFromDate[2]];
      } else {
        newFromDate = [currentFromDate[0], newFromMonthStr, currentFromDate[2]];
      }
      newToDate = [currentFromDate[0], currentFromDate[1], currentToDate[2]];
    }
    setFromDate(newFromDate.join("-"));
    setToDate(newToDate.join("-"));
  
}


  

export default monthChange