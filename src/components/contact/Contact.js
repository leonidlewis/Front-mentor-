import React from 'react'
import DataBank from '../DataBank'
import Heading from './section/Heading'
import Forms from './section/Forms'

export default function Contact() {
    const data = DataBank.contact
    return (
        <div>
            <Heading title={data.heading.title} desc={data.heading.desc}/>
            <Forms fields={data.forms.fields} contactInfo={data.contactInfo}/>
        </div>
    )
}
