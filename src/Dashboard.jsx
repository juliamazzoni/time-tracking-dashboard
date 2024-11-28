import { useEffect, useState } from "react"

export const Dashboard = () => {

  const [data, setData] = useState([])
  const [timeTracking, setTimeTracking] = useState([])
  const [activeTab, setActiveTab] = useState('')


  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const backgroundColors = ['orange', 'blue', 'pink', 'green', 'purple', 'yellow']
        const icons = []

        const updatedData = data.map((item, index) => {
          return {...item, class: backgroundColors[index]}
        })

        const initialState = data.map((item, index) => {
          return {title: item.title, current: 0, previous: 0,  class: backgroundColors[index]}
        })

        setData(updatedData)
        setTimeTracking(initialState)

      })
  }, [])


  const handleDailyClick = () => {
    setActiveTab('daily')
    let dailyData = data.map(item => {
      return {title: item.title, current: item.timeframes.daily.current, previous: 'Yesterday - ' + item.timeframes.daily.previous, class: item.class}
    })
    setTimeTracking(dailyData)
  }

  const handleWeeklyClick = () => {
    setActiveTab('weekly')
    const weeklyData = data.map(item => {
      return {title: item.title, current: item.timeframes.weekly.current, previous: 'Last Week - ' + item.timeframes.weekly.previous,  class: item.class}
    })
    setTimeTracking(weeklyData)
  }

  const handleMonthlyClick = () => {
    setActiveTab('monthly')
    const monthlyData = data.map(item => {
      return {title: item.title, current: item.timeframes.monthly.current, previous: 'Last Month - ' + item.timeframes.monthly.previous,  class: item.class}
    })
    setTimeTracking(monthlyData)
  }



  return (
    <div className="container">

      <div className="jeremy">

          <div className="jeremy-profile">
            <img className="jeremy-image" src="/images/image-jeremy.png" alt="" />
            <div className="jeremy-text-wrapper">
              <h4>Report for</h4>
              <h1>Jeremy Robson</h1>
            </div>
          </div>

          <div className="tabs-container">
            <h3 className={activeTab === 'daily' ? 'active-tab' : 'tabs'} onClick={handleDailyClick}>Daily</h3>
            <h3 className={activeTab === 'weekly' ? 'acitve-tab' : 'tabs'} onClick={handleWeeklyClick}>Weekly</h3>
            <h3 className={activeTab === 'monthly' ? 'acitve-tab' : 'tabs'} onClick={handleMonthlyClick}>Monthly</h3>
          </div>
          

      </div>

      {timeTracking.map((item, index) => {
        return (
          <div key={index} className={`${item.class} cell-wrapper`} >
            <div className="cell">
              <h5>{item.title}</h5>
              <h2>{item.current}hrs</h2>
              <h6>{item.previous}hrs</h6>
            </div>
          </div>
        )
      })}
    </div>
  )
} 