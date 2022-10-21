import React, { useState } from 'react'
import './Contact.css'
import { Button, Modal, Box } from '@mui/material';
import colors from '../../utils/colors';

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
        <Box id='contact-container'>
            <h1>Contact Me</h1>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: colors['boxShadow'],
                marginTop: 5,
                padding: 5
            }}>
            <p>Any questions can be directed toward my email or phone number. 
                I'm located in New Jersey, so I'll respond in an orderly fashion 
                knowing my timezone is Eastern.
            </p>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '3%',
                    '@media screen and (max-width: 1100px)': {
                        marginLeft: '10%'}

                }}>
                <div>
                    <Button
                        onClick={handleOpenEmail}
                        variant='outlined'
                        sx={{
                            color: 'white', borderWidth: 3, borderColor: 'aqua', fontSize: '20px',
                            boxShadow: '0px 5px 15px black', height: '100%', width: '100%', marginRight: 1
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
                            boxShadow: '0px 5px 15px black', height: '100%', width: '100%', marginLeft: 1
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
            </Box>
        </Box>
    )
}

export default Contact