import {AiFillCompass, AiFillHeart, AiFillHome, AiFillPlusCircle, AiOutlineCompass, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch} from 'react-icons/ai'
import {RiVideoLIne, RiVideoLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"

export const mainu=[
    {title:"Home",icon: <AiOutlineHome className='text-2xl mr-5'></AiOutlineHome>, activeIcon:<AiFillHome className='text-2xl mr-5'></AiFillHome>},
    {
        title:"Search", icon:<AiOutlineSearch></AiOutlineSearch>, activeIcon:<AiOutlineSearch></AiOutlineSearch>
    },
    {
        title:"Explore", icon: <AiOutlineCompass className='text-2xl mr-5'></AiOutlineCompass>, activeIcon: <AiFillCompass></AiFillCompass>
    },
    {
        title:"Reels", icon:<RiVideoLIne className='text-2xl mr-5'></RiVideoLIne>
    },
    {
        title:"Message",

      
        icon:<AiOutlineMessage className='text-2xl mr-5'></AiOutlineMessage>,
        activeIcon:<AiFillMessage className='text-2xl mr-5'></AiFillMessage>
    }
    ,{
        title:"Notifications",
        icon:<AiOutlineHeart className='text-2xl mr-5'></AiOutlineHeart>,
        activeIcon:<AiFillHeart className='text-2xl mr-5'></AiFillHeart>
    },{
        title:"Create",
        icon:<AiOutlinePlusCircle className='text-2xl mr-5'></AiOutlinePlusCircle>,
        activeIcon:<AiFillPlusCircle className='text-2xl mr-5'></AiFillPlusCircle>
    },{
        title:"Profile",
        icon:<CgProfile className='text-2xl mr-5'></CgProfile>,
        activeIcon:<CgProfile className='text-2xl mr-5'></CgProfile>
    }

]