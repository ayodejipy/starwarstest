import { useState, useMemo } from 'react'

export const useSortedTable = (data, config = null, ) => {
    const [sortConfig, setSortConfig] = useState(config)
    // const [sortedTable, setSortedTable] = useState([])
    
    
    const sortedData = useMemo(() => {
        // create a copy of our character
        // setSortedTable([...data]) 
        let sortedItems = [...data];
        console.log({sortedItems})
        
        if(sortConfig !== null ) {
            sortedItems.sort((a, b) => {
                if(a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1 // returns negative because arg a's name comes before arg b's name
                } 
                if(a[sortConfig.key] > b[sortConfig.key])  {
                    return sortConfig.direction === 'ascending' ? 1 : -1 // returns positive because arg a's name comes after arg b's name                
                }
                return 0 // both have the same name
            })
        }
        return sortedItems
        
    }, [sortConfig, data])
    
    const requestSort = (key) => {
        let direction = 'ascending'
        if( sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        
        setSortConfig({ key, direction })
    }
    
    return { data: sortedData, requestSort, sortConfig }
} 