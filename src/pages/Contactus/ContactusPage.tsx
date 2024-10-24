import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import '../../css/ContactusPage.css'

const ContactusPage = () => {

    return (
        <div className='contact flex-row'>
            <form>
                <Box sx={{
                    width: '600px'
                }}>
                    <div className='flex-row-c'>
                        <TextField
                            required
                            id="name"
                            name='name'
                            label="İsim"
                            variant="outlined"
                            className='custom-textfield'
                            sx={{ margin: '10px', width: '50%' }}
                        />
                        <TextField
                            required
                            id="email"
                            name='email'
                            label="E-posta"
                            variant="outlined"
                            className='custom-textfield'
                            sx={{ margin: '10px', width: '50%' }}
                        />
                    </div>
                    <div className='flex-row-c'>
                        <TextField
                            required
                            id="message"
                            name='message'
                            label="Mesajınız"
                            variant="outlined"
                            className='custom-textfield'
                            sx={{ margin: '10px', width: '100%' }}
                        />
                    </div>
                    <div className='flex-row-c'>
                        <Button type='submit' className='custom-button' variant='contained' sx={{ margin: '10px', width: '100%' }}> Gönder </Button>
                    </div>
                </Box>
            </form>
            <Box sx={{
                width: '600px'
            }}>
                <div className='flex-column'>
                    <LocationOnIcon />
                    <EmailIcon />
                    <PhoneIphoneIcon />
                </div>
            </Box>
        </div>
    )
}

export default ContactusPage