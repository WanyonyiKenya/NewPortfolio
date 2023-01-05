import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

const Link = ({page, pageOn, setPageOn}) => {
    const lowerCase = page.toLowerCase()
    return(
        <AnchorLink
            className={`${pageOn === lowerCase ? 'text-yellow' : ''}
            hover:text-yellow transition duration-500
            `}
            href = {`#${lowerCase}`}
            onClick ={()=> setPageOn(lowerCase)}
        >
            {
                page
            }
        </AnchorLink>
    )
}

const Nav = ({isTopOfPage,pageOn, setPageOn}) => {

    const[toggleMenu, setToggleMenu] = useState(false)
    const aboveSmallScreens = useMediaQuery('(min-width:760px)')
    const navBack =  isTopOfPage ? '' : 'bg-transparent'

  return (
    <nav className={`${navBack} z-40 w-full fixed top-0 py-6`}> {/*this z-40 sets the z-index to allows the nav popup above other components*/}
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair size-3xl font-bold'>WBW</h4>

            {/* Desktop Nav bar */}
            {
                aboveSmallScreens ? (
                    <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                        <Link
                            page='Home'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Skills'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Projects'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Testmonials'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Contacts'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        
                    </div>
                ) : (
                    <button
                    className='rounded-full bg-red p-2'
                    onClick={()=> setToggleMenu(!toggleMenu)}
                    >
                        <img alt='menu-icon'
                        src='./assets/menu-icon.svg'
                            />
                    </button>
                )
            }
            {/* mobile menu nav */}
             {/*the 300px in brackets show the minimum display size of the small screens that will be displayed well.*/}
            {
                !aboveSmallScreens && toggleMenu && ( 
                    <div className='fixed right-0 bottom-0 h-full bg-transparent w-[300px]'>
                        <div className='flex justify-end p-12'>
                            {/* close button */}
                            <button 
                                onClick={()=> setToggleMenu(!toggleMenu)}
                            >
                                 <img
                                    alt='close-icon'
                                    src='./assets/close-icon.svg'
                                />
                            </button>
                        </div>
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl'>
                        <Link
                            page='Home'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Skills'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Projects'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Testmonials'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        <Link
                            page='Contacts'
                            pageOn='pageOn'
                            setPageOn= 'setPageOn'

                        />
                        </div>
                    </div>
                     
                )
            }
        </div>
    </nav>
  )
}

export default Nav 