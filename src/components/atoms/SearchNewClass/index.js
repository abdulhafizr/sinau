import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { ICSearch, ICBottomArrow } from '../../../assets'
import './index.css'

function SearchNewClass() {
    
    const [dropdownCategory, setDropdownCategory] = useState(false)
    const [dropdownLevel, setDropdownLevel] = useState(false)
    const [dropdownPricing, setDropdownPricing] = useState(false)
    
    const toggleCategory = (toggler) => toggler(prevState => !prevState);

    return (
        <div className="new__class-search">
            <div className="new__class-search-input">
                <img src={ICSearch} alt="Search"/>
                <input type="text" placeholder="Quick Search"/>
                <button className="btn__search-class">Search</button>
            </div>
            <div className="new__class-search-option">
                <Dropdown isOpen={dropdownCategory} toggle={() => toggleCategory(setDropdownCategory)}>
                    <DropdownToggle className="btn-option-category" caret>
                        Categories
                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Category 1</DropdownItem>
                        <DropdownItem>Category 2</DropdownItem>
                        <DropdownItem>Category 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={dropdownLevel} toggle={() => toggleCategory(setDropdownLevel)}>
                    <DropdownToggle className="btn-option-category" caret>
                        Level
                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Level 1</DropdownItem>
                        <DropdownItem>Level 2</DropdownItem>
                        <DropdownItem>Level 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={dropdownPricing} toggle={() => toggleCategory(setDropdownPricing)}>
                    <DropdownToggle className="btn-option-category" caret>
                        Pricing
                        <img src={ICBottomArrow} className="option__arrow" alt=">"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Pricing 1</DropdownItem>
                        <DropdownItem>Pricing 2</DropdownItem>
                        <DropdownItem>Pricing 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    )
}

export default SearchNewClass
