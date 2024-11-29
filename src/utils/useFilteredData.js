
export const useFilteredData = (data, activeTab) => {

  let filteredData
  
  if(activeTab === 'daily'){
    filteredData = data.map(item => ({...item, current: item.timeframes.daily.current, previous: 'Yesterday - ' + item.timeframes.daily.previous}))
  }

  if(activeTab === 'weekly'){
    filteredData = data.map(item => ({...item, current: item.timeframes.weekly.current, previous: 'Last Week - ' + item.timeframes.weekly.previous}))
  }

  if(activeTab === 'monthly'){
    filteredData = data.map(item => ({...item, current: item.timeframes.monthly.current, previous: 'Last Month - ' + item.timeframes.monthly.previous}))
  }
   
    return filteredData

}


