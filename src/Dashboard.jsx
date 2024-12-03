import { useEffect, useState } from "react"
import { useFilteredData } from "./utils/useFilteredData"
import { TimeTrackingList } from "./TimeTrackingList"
import { Jeremy } from "./Jeremy"


export const Dashboard = () => {

  const [data, setData] = useState([])
  const [activeTab, setActiveTab] = useState('')
  const [initialState, setInitialState] = useState([])

  const filteredData = useFilteredData(data, activeTab)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const result = await response.json();

        const tabIcons = [
          'images/icon-work.svg',
          'images/icon-play.svg',
          'images/icon-study.svg',
          'images/icon-exercise.svg',
          'images/icon-social.svg',
          'images/icon-self-care.svg',
        ];
        const backgroundColors = ['orange', 'blue', 'pink', 'green', 'purple', 'yellow'];

        const updatedData = result.map((item, index) => ({
          ...item,
          icons: tabIcons[index],
          backgroundColors: backgroundColors[index],
        }));
        setData(updatedData);

        const initialState = result.map((item, index) => ({
          ...item,
          current: 0,
          previous: 0,
          icons: tabIcons[index],
          backgroundColors: backgroundColors[index],
        }));
        setInitialState(initialState);
        
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDailyClick = () => setActiveTab('daily')
  const handleWeeklyClick = () => setActiveTab('weekly')
  const handleMonthlyClick = () => setActiveTab('monthly')

  return (
    <div className="container">      
      <Jeremy activeTab={activeTab} handleDailyClick={handleDailyClick} handleWeeklyClick={handleWeeklyClick} handleMonthlyClick={handleMonthlyClick}/>
      <TimeTrackingList activeTab={activeTab} initialState={initialState} filteredData={filteredData}/> 
    </div>
  )
} 