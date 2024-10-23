import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
type Props = {}

const ContactusPage = (props: Props) => {
    return (
        <div className='flex-row'>
            <Box sx={{
                width: '600px'
            }}>
                <div className='flex-row'>
                    <TextField
                        id="name"
                        label="İsim"
                        variant="outlined"
                        className='custom-textfield'
                        sx={{ margin: '10px', width: '50%' }}
                    />
                    <TextField
                        id="email"
                        label="E-posta"
                        variant="outlined"
                        className='custom-textfield'
                        sx={{ margin: '10px', width: '50%' }}
                    />
                </div>
                <div className='flex-row'>
                    <TextField
                        id="subject"
                        label="Konu"
                        variant="outlined"
                        className='custom-textfield'
                        sx={{ margin: '10px', width: '100%' }}
                    />
                </div>
                <div className='flex-row'>
                    <TextField
                        id="message"
                        label="Mesajınız"
                        variant="outlined"
                        className='custom-textfield'
                        sx={{ margin: '10px', width: '100%' }}
                    />
                </div>
                <div className='flex-row'>
                    <Button className='custom-button' variant='contained' sx={{ margin: '10px', width: '100%' }}> Gönder </Button>
                </div>
            </Box>
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