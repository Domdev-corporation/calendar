import '../theme/colors.css'
import './styles.css'

import { format } from 'date-fns'

import colors from '../theme/colors'
import Button from '../features/Button'
import { ModalProvider } from '../context/ModalContext'
import { DateFormat, Devices, Views } from '../constants'
import Text from '../components/Text'
import RightArrow from '../components/RightArrow'
import { NavigationButton } from '../components/NavigationButton'
import ListIcon from '../components/ListIcon'
import LeftArrow from '../components/LeftArrow'
import Flex from '../components/Flex'
import DropDown from '../components/DropDown'
import ChevronDown from '../components/ChevronDown'

import { useCalendar } from './useCalendar'
import { CalendarProps, CombinedViewRowsType } from './types'
import { mockEvents } from './mockData'
import { isMobileMode, isWeekView } from './helpers'
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
  renderEventComponent,
  startHour = START_HOUR,
  mode = Devices.DESKTOP,
  currentDay = new Date(),
  dropDownArrow = <ChevronDown />,
  eventModal,
  newEventModal,
  onClickCell = () => {},
  onClickEvent = () => {},
  onChangeDate = () => {},
  onChangeView = () => {},
}: CalendarProps): JSX.Element => {
  const {
    endDate,
    viewMode,
    startDate,
    deviceMode,
    renderRows,
    currentYear,
    selectedDate,
    isDisabledNext,
    isDisabledPrevious,
    next,
    goToday,
    previous,
    handleViewMode,
    selectDateHandler,
  } = useCalendar({
    mode,
    view,
    events,
    config,
    endHour,
    startHour,
    currentDay: new Date(currentDay),
    onChangeView,
    onChangeDate,
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
        <div
          className={`header-grid ${
            isMobileMode(deviceMode) && isWeekView(viewMode)
              ? 'header-grid_mobile'
              : ''
          }`}
        >
          {isMobileMode(deviceMode) && isWeekView(viewMode) ? (
            <Flex
              align="center"
              className="header-grid__back-month"
              onClick={() => handleViewMode('Month')}
            >
              <LeftArrow />
              <Text>{format(startDate, DateFormat.MONTH_LONG)}</Text>
            </Flex>
          ) : null}

          <Button
            ariaLabel="Today"
            className="today-button header-grid-today"
            onClick={goToday}
          >
            Today
          </Button>
          <Flex spacing={16} className="header-grid-arrows">
            <NavigationButton
              ariaLabel="Left Arrow"
              customButton={prevButton}
              hoverBG={colors.powderBlue}
              isDisabled={isDisabledPrevious}
              defaultStyles="button arrow-button"
              defaultButton={<LeftArrow color={colors.teal} />}
              onClick={previous}
            />
            <NavigationButton
              ariaLabel="Right Arrow"
              customButton={nextButton}
              isDisabled={isDisabledNext}
              hoverBG={colors.powderBlue}
              defaultStyles="button arrow-button"
              defaultButton={<RightArrow color={colors.teal} />}
              onClick={next}
            />
          </Flex>

          {!isMobileMode(deviceMode) && isWeekView(viewMode) ? (
            <Text className="current-date header-grid-date">
              {format(startDate, DateFormat.MONTH_LONG)}
              {startDate.getMonth() !== endDate.getMonth() &&
                `-${format(endDate, DateFormat.MONTH_LONG)}`}
              {` `}
              {currentYear}
            </Text>
          ) : null}

          <Button ariaLabel="List icon" className="header-grid-list">
            <ListIcon />
          </Button>

          <DropDown
            value={viewMode}
            list={Object.values(Views)}
            dropdownArrow={dropDownArrow}
            onChange={handleViewMode}
          />
        </div>
        <div className="calendar">
          <View
            events={events}
            endHour={endHour}
            startHour={startHour}
            startDate={startDate}
            deviceMode={deviceMode}
            selectedDate={selectedDate}
            selectedEvent={selectedEvent}
            renderEventComponent={renderEventComponent}
            renderRows={renderRows as CombinedViewRowsType}
            eventModal={eventModal}
            onClickCell={onClickCell}
            onClickEvent={onClickEvent}
            newEventModal={newEventModal}
            selectDateHandler={selectDateHandler}
          />
        </div>
        {children}
      </Flex>
    </ModalProvider>
  )
}

export default Calendar
