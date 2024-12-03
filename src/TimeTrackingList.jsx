
export const TimeTrackingList = ({ activeTab, initialState, filteredData }) => {

  let timeTrackingList = activeTab === '' ? initialState : filteredData

  return (
    <>
    {timeTrackingList.map((item, index) => {
      return (
        <div key={index} className={`${item.backgroundColors} cell-wrapper`} >
          <img src={item.icons} alt="" />

          <div className="cell">
            <h5>{item.title}</h5>
            <div className="time">
              <h2>{item.current}hrs</h2>
              <h6>{item.previous}hrs</h6>
            </div>
          </div>
        </div>
      )
    })}
    </>
  )
  
}