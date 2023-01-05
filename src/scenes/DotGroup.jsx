import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({pageOn, setPageOn}) => {

    const navigatorStyles = `relative bg-yellow
                            before:absolute
                            before:w-6
                            before:h-6
                            before:rounded-full
                            before:border-2
                            before:border-yellow
                            before:left-[-50%]
                            before:top-[-50%]
                            `


  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
       <AnchorLink
            className={`${pageOn === 'home' ? navigatorStyles : 'bg-dark-grey'}
                w-3 h-3 rounded-full
            `}
            href = '#home'
            onClick ={()=> setPageOn("home")}
        />
        <AnchorLink
            className={`${pageOn === 'skills' ? navigatorStyles : 'bg-dark-grey'}
                w-3 h-3 rounded-full
            `}
            href = '#skills'
            onClick ={()=> setPageOn("skills")}
        />
        <AnchorLink
            className={`${pageOn === 'projects' ? navigatorStyles : 'bg-dark-grey'}
                w-3 h-3 rounded-full
            `}
            href = '#projects'
            onClick ={()=> setPageOn("projects")}
        />
        <AnchorLink
            className={`${pageOn === 'testimonials' ? navigatorStyles : 'bg-dark-grey'}
                w-3 h-3 rounded-full
            `}
            href = '#testimonials'
            onClick ={()=> setPageOn("testimonials")}
        />
        <AnchorLink
            className={`${pageOn === 'contact' ? navigatorStyles : 'bg-dark-grey'}
                w-3 h-3 rounded-full
            `}
            href = '#contact'
            onClick ={()=> setPageOn("contact")}
        />
     
    </div>
  )
}

export default DotGroup