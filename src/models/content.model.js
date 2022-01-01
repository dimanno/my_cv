import {AboutBlock, ExperienceBlock, EducationBlock} from '../classes/content.blocks'

export const contentModel = [
    new AboutBlock( 'ABOUT ME', 'I would like to offer you my services as a Junior JS developer.' +
        '                    I am currently improving my skills at React, MongoDB, Node.js and TypeScript.' +
        ' I can apply these skills to work effectively in your company.' +
        '                    it is equally important to me to benefit a certain project and grow professionally'),
    new ExperienceBlock('WORK EXPERIENCE', [
        {
            title: 'Private entrepreneur',
            text: ' Customs broker services\n' +
                '                        June 2020 – June 2021'
        },
        {
            title: 'Financial consultant',
            text: '"OVB Alfinanz-Ukraine"\n' +
                '                        2016 – 2019'
        },
        {
            title: 'University Lecturer',
            text: 'Teacher of tourism at Drohobych Pedagogical University\n' +
                '                        2011-2016'
        },
    ]),
    new  EducationBlock('EDUCATION' ,[
        {
            title: 'Course in Okten School',
            text: 'JS Developer (FullStack )\n' +
                '                        June 2021'
        },
        {
            title: 'Lviv National University by Ivan Franko',
            text: 'Natural sciences\n' +
                '                        2004 – 2009'
        }
    ])
]
