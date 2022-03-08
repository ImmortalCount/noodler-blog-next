import React from 'react'
import Sidebar from './Sidebar'

export default function Doc_Page({content, name}) {
  return (
        <div>
            <div className='doc_wrapper'>
                <Sidebar active={name} />
                <div>
                    {content}
                </div>
            </div>
        </div>
      
  )
}
