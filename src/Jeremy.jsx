
import { JeremyProfile } from "./JeremyProfile"
import { Tabs } from "./Tabs"

export const Jeremy = ({ activeTab, handleDailyClick, handleWeeklyClick, handleMonthlyClick }) => {
  return (
    <div className="jeremy">
          <JeremyProfile />
          <Tabs activeTab={activeTab} handleDailyClick={handleDailyClick} handleWeeklyClick={handleWeeklyClick} handleMonthlyClick={handleMonthlyClick}/>  
      </div>
  )
}