import React, { useState } from 'react'
import './Contact.css'
import { Button, Modal, Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '5px solid aqua',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#00008b',
    justifyContent: 'center',
    alignItems: 'center'
};


const Contact = () => {

    const [openEmail, setOpenEmail] = useState(false);
    const [openPhone, setOpenPhone] = useState(false);
    const handleOpenEmail = () => setOpenEmail(true);
    const handleCloseEmail = () => setOpenEmail(false);
    const handleOpenPhone = () => setOpenPhone(true);
    const handleClosePhone = () => setOpenPhone(false);


    return (
        <div id='contact-container'>
            <h1>Contact Me</h1>
            <Box
                sx={{
                    display: 'flex',
                    width: '20%',
                    height: '10%',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    background: 'rgb(167, 255, 255, .1)',
                    boxShadow: '0px 5px 15px black',
                    borderRadius: '3%'
                }}>
                <div>
                    <Button
                        onClick={handleOpenEmail}
                        variant='outlined'
                        sx={{
                            color: 'white', borderWidth: 3, borderColor: 'aqua', fontSize: '20px',
                            boxShadow: '0px 5px 15px black', height: '100%', width: '100%'
                        }}>EMAIL</Button>
                    <Modal
                        open={openEmail}
                        onClose={handleCloseEmail}
                    >
                        <Box
                            sx={style}>
                            <p className='contact-modal-title'>
                                zacheryahaley@gmail.com
                            </p>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <Button
                        onClick={handleOpenPhone}
                        variant='outlined'
                        sx={{
                            color: 'white', borderWidth: 3, borderColor: 'aqua', fontSize: '20px',
                            boxShadow: '0px 5px 15px black', height: '100%', width: '100%',
                        }}>PHONE</Button>
                    <Modal
                        open={openPhone}
                        onClose={handleClosePhone}
                    >
                        <Box sx={style}>
                            <p className='contact-modal-title'>
                                501-773-7093
                            </p>
                        </Box>
                    </Modal>
                </div>
            </Box>
        </div>
    )
}

export default Contact