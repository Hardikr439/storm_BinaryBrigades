import { createContext,useState } from "react"
const DataContext =createContext()
export const FeedbackProvider =({children})=>{
    const [Data,setData] = useState(
        [
            {
               heading:"sjjds;dsfk",
               title:"dd;skfsd;fsd",
               date:"2022-10-02",
               qa:[]
            }]
    )
    const addData=(newData)=>{
        if(window.confirm('Are you sure you want to add?')){
           setData([newFeedBack,...feedback])
        }   
    } 
    return <FeedbackContext.Provider value={{
        Data,
        addData
        }}>
            {children}
        </FeedbackContext.Provider>
    }
    export default DataContext