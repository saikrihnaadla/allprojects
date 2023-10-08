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
    <div className="title-bg-container">
      <h1 className="main-head">MY JOURNEY OF CCBP 4.0</h1>
      <div className="main-bg-container2">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          cardHeight={250}
          cardWidth={400}
          slideShow
          theme={{
            primary: ' #0967d2',
            secondary: 'white',

            titleColor: ' #0967d2',
          }}
        >
          {timelineItemsList.map(item => renderObjects(item))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
