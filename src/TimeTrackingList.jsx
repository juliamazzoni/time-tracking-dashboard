
export const TimeTrackingList = ({ activeTab, initialState, filteredData }) => {

  let timeTracking = activeTab === '' ? initialState : filteredData
  console.log(timeTracking)

  return (
    <>
    {timeTracking.map((item, index) => {
      return (
        <div key={index} className={`${item.backgroundColors} cell-wrapper`} >
          <img src={item.icons} alt="" />

          <div className="cell">
            <h5>{item.title}</h5>
            <h2>{item.current}hrs</h2>
            <h6>{item.previous}hrs</h6>
          </div>
        </div>
      )
    })}
    </>
  )
  
}