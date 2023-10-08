import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="bg-container">
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <div className="calender-style">
          <AiFillClockCircle />
          <p className="hours-style">{duration}</p>
        </div>
      </div>
      <p className="description-style">{description}</p>
      <ul className="skills-container">
        {tagsList.map(eachObject => (
          <li className="skills-bg" key={eachObject.id}>
            <p className="skills-head">{eachObject.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
