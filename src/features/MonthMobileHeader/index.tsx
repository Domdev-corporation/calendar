import { ShortDayNames } from '../../constants'
import Text from '../../components/Text'
import Flex from '../../components/Flex'
import './styles.css'

const MonthMobileHeader = (): JSX.Element => {
  return (
    <Flex justify="space-around" className="month-header-mobile">
      {Object.values(ShortDayNames).map(day => (
        <Text>{day}</Text>
      ))}
    </Flex>
  )
}

export default MonthMobileHeader
