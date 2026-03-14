import React from 'react'

const SuggetionCard = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex-items-center'>
                <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='profile' />
                <div className='ml-2'>
                    <p className='text-sm font-semibold'>username</p>
                    <p className='text-sm font-semibold opacity-70m'>Follows you</p>
                </div>
            </div>
            <p className='text-blue-700 text-sm font-semibold'>Follow</p>
                </div>
        </div>
    )
}

export default SuggetionCard