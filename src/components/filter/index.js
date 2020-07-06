import React, { useState, useEffect, useRef } from 'react'

import FilterTab from './filters-tab'
import FilterTabFixed from './filters-tab-fixed'
import FilterContent from './filters-content'
import MailTo from '../mail-to'

export default () => {

  const [ activeFilter, setActiveFilter ] = useState(false)
  const [ activeTab, setActiveTab ] = useState("all");
  const [ elementAppear, setElementAppear] = useState(false);

  const handleActiveTab = e => {
    setActiveTab(e.target.id)
  }
  const handleActiveFilter = () => {
    setActiveFilter(!activeFilter)
  }

  let tabsRef = useRef(null)

  useEffect(() => {

    function handleAppear() {
      if ( tabsRef.current.getBoundingClientRect().top < -100){
        setElementAppear(true)
      } else {
        setElementAppear(false)
      }
    }
    window.addEventListener("scroll", handleAppear)
    return () => {
      window.removeEventListener("scroll", handleAppear)
    }
  }, [])


  return (
    <React.Fragment>
      <FilterTab
        handleActiveTab={handleActiveTab}
        handleActiveFilter={handleActiveFilter}
        activeTab={activeTab}
        activeFilter={activeFilter}
        refProp={tabsRef}
      />
      <FilterTabFixed
        handleActiveTab={handleActiveTab}
        handleActiveFilter={handleActiveFilter}
        activeTab={activeTab}
        activeFilter={activeFilter}
        translateEl={elementAppear}
      />
      <MailTo translateEl={elementAppear}/>
      <FilterContent activeTab={activeTab}/>
    </React.Fragment>
  )
}
