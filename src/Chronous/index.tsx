import '../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import { ViewsT } from '../types'
import colors from '../theme/colors'
import Button from '../features/Button'
import { ModalProvider } from '../context/ModalContext'
import { DateFormat, Views } from '../constants'
import Text from '../components/Text'
import RightArrow from '../components/RightArrow'
import { NavigationButton } from '../components/NavigationButton'
import LeftArrow from '../components/LeftArrow'
import Flex from '../components/Flex'
import DropDown from '../components/DropDown'
import ChevronDown from '../components/ChevronDown'

import { useCalendar } from './useCalendar'
import { CalendarProps, CombinedViewRowsType } from './types'
import { mockEvents } from './mockData'
import { END_HOUR, START_HOUR, VIEW_MODES } from './constants'

const Calendar = ({
  children,
  className,
  nextButton,
  prevButton,
  config = [],
  endHour = END_HOUR,
  startHour = START_HOUR,
  selectedEvent,
  events = mockEvents,
  renderEventComponent,
  mode = Views.WEEK,
  currentDay = new Date(),
  dropDownArrow = <ChevronDown />,
  onClickEvent = () => {},
  onClickCell = () => {},
  onChangeDate = () => {},
  eventModal,
  newEventModal,
}: CalendarProps): JSX.Element => {
  const {
    viewMode,
    startDate,
    endDate,
    currentYear,
    renderRows,
    selectedDate,
    isDisabledNext,
    isDisabledPrevious,
    setViewMode,
    next,
    previous,
    selectDateHandler,
    goToday,
  } = useCalendar({
    currentDay: new Date(currentDay),
    events,
    onChangeDate,
    config,
    mode,
    startHour,
    endHour,
  })

  const View = VIEW_MODES[viewMode]

  return (
    <ModalProvider>
      <Flex
        direction="column"
        className={className}
        spacing={16}
        sx={{ margin: 16 }}
      >
        <div className="header-grid">
          <Button
            ariaLabel="Today"
            onClick={goToday}
            className="today-button header-grid-today"
          >
            Today
          </Button>
          <Flex spacing={16} className="header-grid-arrows">
            <NavigationButton
              isDisabled={isDisabledPrevious}
              onClick={previous}
              customButton={prevButton}
              hoverBG={colors.powderBlue}
              ariaLabel="Left Arrow"
              defaultStyles="button arrow-button"
              defaultButton={<LeftArrow color={colors.teal} />}
            />
            <NavigationButton
              isDisabled={isDisabledNext}
              onClick={next}
              customButton={nextButton}
              hoverBG={colors.powderBlue}
              ariaLabel="Right Arrow"
              defaultStyles="button arrow-button"
              defaultButton={<RightArrow color={colors.teal} />}
            />
          </Flex>

          <Text className="current-date header-grid-date">
            {format(startDate, DateFormat.MONTH_LONG)}
            {startDate.getMonth() !== endDate.getMonth() &&
              `-${format(endDate, DateFormat.MONTH_LONG)}`}
            {` `}
            {currentYear}
          </Text>

          <DropDown
            list={Object.values(Views)}
            value={viewMode}
            onChange={mode => setViewMode(mode as ViewsT)}
            dropdownArrow={dropDownArrow}
          />
        </div>
        <div className="calendar">
          <View
            endHour={endHour}
            startHour={startHour}
            eventModal={eventModal}
            newEventModal={newEventModal}
            onClickCell={onClickCell}
            events={events}
            renderRows={renderRows as CombinedViewRowsType}
            startDate={startDate}
            selectedDate={selectedDate}
            selectedEvent={selectedEvent}
            selectDateHandler={selectDateHandler}
            onClickEvent={onClickEvent}
            renderEventComponent={renderEventComponent}
          />
        </div>
        {children}
      </Flex>
    </ModalProvider>
  )
}

export default Calendar
