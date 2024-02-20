import { createContext,useState } from "react"
const DataContext =createContext()
export const DataProvider =({children})=>{
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
           setData([newData,...Data])
        }   
    } 
    return <DataContext.Provider value={{
        Data,
        addData
        }}>
            {children}
        </DataContext.Provider>
    }
    export default DataContext