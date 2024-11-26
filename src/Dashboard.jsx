import { useEffect, useState } from "react"

export const Dashboard = () => {

  const [timeTracking, setTimeTracking] = useState([{title: 'Work', current: 0, previous: 0}, {title:'Play', current: 0, previous: 0}, {title:'Study', current: 0, previous: 0}, {title:'Exercise', current: 0, previous: 0}, {title:'Social', current: 0, previous: 0}, {title:'Self Care', current: 0, previous: 0}])

  const [data, setData] = useState([])

  useEffect(() => {

    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])


  const handleDailyClick = () => {
    const dailyData = data.map(item => {
      return {title: item.title, current: item.timeframes.daily.current, previous: 'Yesterday - ' + item.timeframes.daily.previous}
      
    })
    setTimeTracking(dailyData)
  }

  const handleWeeklyClick = () => {
    const weeklyData = data.map(item => {
      return {title: item.title, current: item.timeframes.weekly.current, previous: 'Last Week - ' + item.timeframes.weekly.previous}
      
    })
    setTimeTracking(weeklyData)
  }

  const handleMonthlyClick = () => {
    const monthlyData = data.map(item => {
      return {title: item.title, current: item.timeframes.monthly.current, previous: 'Last Month - ' + item.timeframes.monthly.previous}
      
    })
    setTimeTracking(monthlyData)
  }



  return (
    <div className="container">

      <div className="jeremy">

          <div className="jeremy-profile">
            <img className="jeremy-image" src="/images/image-jeremy.png" alt="" />
            <h4>Report for</h4>
            <h1>Jeremy Robson</h1>
          </div>

          <div className="tabs">
            <h3 onClick={handleDailyClick}>Daily</h3>
            <h3 onClick={handleWeeklyClick}>Weekly</h3>
            <h3 onClick={handleMonthlyClick}>Monthly</h3>
          </div>
          

      </div>

      {timeTracking.map((item, index) => {
        return (
          <div className="cell">
            <h5>{item.title}</h5>
            <h2>{item.current}hrs</h2>
            <h6>{item.previous}hrs</h6>
          </div>
        )
      })}
    </div>
  )
} 