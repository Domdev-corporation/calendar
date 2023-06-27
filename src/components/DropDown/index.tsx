import Flex from '../Flex'
import Button from '../../features/Button'

import { useDropDown } from './useDropDown'
import { DropDownProps } from './types'

const DropDown = ({
  onChange,
  value,
  list,
  dropdownArrow,
}: DropDownProps): JSX.Element => {
  const { isShowDropdown, dropDownRef, handleIsShowDropdown } = useDropDown()

  return (
    <Flex
      sx={{ position: 'relative', minHeight: '36px' }}
      refObject={dropDownRef}
      onClick={handleIsShowDropdown}
      className="dropdown-wrapper"
    >
      <Button ariaLabel="Chevron Down" className="dropdown-button">
        {value} {dropdownArrow}
      </Button>
      {isShowDropdown && (
        <ul className="dropdown">
          {list.map(item => (
            <li
              key={item}
              className="dropdown-item"
              onClick={() => onChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Flex>
  )
}

export default DropDown
