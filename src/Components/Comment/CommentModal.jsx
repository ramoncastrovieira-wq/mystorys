import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const CommentModal = (onClose, isOpen) => {
    return (
        <div>
            <Modal size={""} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>


                    <ModalBody>
                    <div>
                        <div className='w- [45%] flex flex-col justify-center'>
                        <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/03/17/10/44/sunset-7858360__340.jpg" alt=""/>
                    </div>
                        <div>
                        </div>
                    </div>
                    <div className="border w-55%">

                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal