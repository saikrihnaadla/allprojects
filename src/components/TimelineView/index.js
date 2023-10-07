import {Chrono} from 'react-chrono'
import './index.css'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderObjects = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(item => renderObjects(item))}
      </Chrono>
    </div>
  )
}

export default TimelineView
