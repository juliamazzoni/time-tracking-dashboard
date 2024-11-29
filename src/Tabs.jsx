
export const Tabs = ({ activeTab, handleDailyClick, handleWeeklyClick, handleMonthlyClick }) => {

  let dailyClass = activeTab === 'daily' ? 'active-tab' : 'tabs'
  let weeklyClass = activeTab === 'weekly' ? 'active-tab' : 'tabs'
  let monthlyClass = activeTab === 'monthly' ? 'active-tab' : 'tabs'

  return (
    <div className="tabs-container">
        <h3 className={dailyClass} onClick={handleDailyClick}>Daily</h3>
        <h3 className={weeklyClass} onClick={handleWeeklyClick}>Weekly</h3>
        <h3 className={monthlyClass} onClick={handleMonthlyClick}>Monthly</h3>
    </div>
  )
}