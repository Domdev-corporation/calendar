import '../../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import CreateNewEvent from '../CreateNewEvent'
import Button from '../Button'
import { ModalProvider } from '../../contexts/ModalContext'
import { ArrowDirections, DateFormat, Devices, Views } from '../../constants'
import Text from '../../components/Text'
import { NavigationButton } from '../../components/NavigationButton'
import ListIcon from '../../components/ListIcon'
import Flex from '../../components/Flex'
import DropDown from '../../components/DropDown'
import ChevronDown from '../../components/ChevronDown'
import Arrow from '../../components/Arrow'

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
  selectedEvent,
  view = Views.WEEK,
  endHour = END_HOUR,
  events = mockEvents,
  customEventComponent,
  mode = Devices.DESKTOP,
  startHour = START_HOUR,
  currentDay = new Date(),
  dropDownArrow = <ChevronDown />,
  eventModal,
  newEventModal = () => null,
  onCellClick = () => {},
  onEventClick = () => {},
  onDateChange = () => {},
  onViewChange = () => {},
}: CalendarProps): JSX.Element => {
  const {
    isWeek,
    endDate,
    isMobile,
    viewMode,
    startDate,
    deviceMode,
    renderRows,
    currentYear,
    selectedDate,
    isEventsList,
    isDisabledNext,
    isDisabledPrevious,
    next,
    goToday,
    previous,
    handleViewMode,
    selectDateHandler,
    handleEventsList,
  } = useCalendar({
    mode,
    view,
    events,
    config,
    endHour,
    startHour,
    currentDay: new Date(currentDay),
    onViewChange,
    onDateChange,
  })

  const View = VIEW_MODES[viewMode]

  return (
    <ModalProvider>
      <Flex
        spacing={16}
        direction="column"
        sx={{ margin: 16 }}
        className={className}
      >
        <div className={`header-grid ${isMobile ? 'header-grid_mobile' : ''}`}>
          {isMobile && isWeek ? (
            <Flex
              align="center"
              className="header-grid__back-month"
              onClick={() => handleViewMode('month')}
            >
              <Arrow />
              <Text>{format(startDate, DateFormat.MONTH_LONG)}</Text>
            </Flex>
          ) : null}

          {!isMobile && (
            <Button
              ariaLabel="Today"
              className="today-button header-grid-today"
              onClick={goToday}
            >
              Today
            </Button>
          )}

          <Flex className="header-grid-arrows">
            <NavigationButton
              ariaLabel="Left Arrow"
              defaultButton={<Arrow />}
              customButton={prevButton}
              isDisabled={isDisabledPrevious}
              defaultStyles="button arrow-button"
              onClick={previous}
            />
            <NavigationButton
              ariaLabel="Right Arrow"
              customButton={nextButton}
              isDisabled={isDisabledNext}
              defaultStyles="button arrow-button"
              defaultButton={<Arrow direction={ArrowDirections.RIGHT} />}
              onClick={next}
            />
          </Flex>
          {isMobile && (
            <CreateNewEvent
              onCellClick={onCellClick}
              newEventModal={newEventModal}
            />
          )}
          {!isMobile && (
            <Text className="current-date header-grid-date">
              {format(startDate, DateFormat.MONTH_LONG)}
              {startDate.getMonth() !== endDate.getMonth() &&
                `-${format(endDate, DateFormat.MONTH_LONG)}`}
              {` `}
              {currentYear}
            </Text>
          )}

          <Button
            ariaLabel="List icon"
            className={`header-grid-list ${isEventsList ? 'active-list' : ''}`}
            onClick={handleEventsList}
          >
            <ListIcon />
          </Button>

          {!isMobile && (
            <DropDown
              value={viewMode}
              list={Object.values(Views)}
              dropdownArrow={dropDownArrow}
              onChange={handleViewMode}
            />
          )}
        </div>
        <div className="calendar">
          <View
            events={events}
            endHour={endHour}
            startHour={startHour}
            startDate={startDate}
            deviceMode={deviceMode}
            isEventsList={isEventsList}
            selectedDate={selectedDate}
            selectedEvent={selectedEvent}
            renderEventComponent={customEventComponent}
            renderRows={renderRows as CombinedViewRowsType}
            eventModal={eventModal}
            onCellClick={onCellClick}
            onEventClick={onEventClick}
            newEventModal={newEventModal}
            selectDateHandler={selectDateHandler}
          />
        </div>
        {children}
        {isMobile && (
          <Flex className="footer">
            <Button
              ariaLabel="Today"
              className="today-button header-grid-today"
              onClick={goToday}
            >
              Today
            </Button>
          </Flex>
        )}
      </Flex>
    </ModalProvider>
  )
}

export default Calendar
