import { Button, Box, TextField, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import '../../css/ContactPage.css'

const ContactusPage = () => {

    return (
        <div className='main-div'>
            <div className='contact'>
                <form>
                    <Box sx={{
                        margin: '5px',
                        background: 'white',
                        padding: '30px',
                        boxshadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '1rem'
                    }}>
                        <div>

                            <TextField
                                required
                                id="name"
                                name='name'
                                label="İsim"
                                variant="outlined"
                                className='custom-textfield'
                                sx={{ marginBottom: '15px' }}
                            />
                            <TextField
                                required
                                id="email"
                                name='email'
                                label="E-posta"
                                variant="outlined"
                                className='custom-textfield'
                                sx={{ marginBottom: '15px' }}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="message"
                                name='message'
                                label="Mesajınız"
                                variant="outlined"
                                className='custom-textfield'
                                multiline
                                minRows={5}
                                sx={{ marginBottom: '15px' }}
                            />
                        </div>
                        <div>
                            <Button type='submit' className='custom-button' variant='contained' > Gönder </Button>
                        </div>
                    </Box>
                </form>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column', margin: '5px',
                    background: 'white',
                    padding: '30px',
                    boxshadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '1rem'
                }}>
                    <div>
                        <div className='contact-icon-div '>
                            <LocationOnIcon className='contact-icon' sx={{ fontSize: '2rem' }} />
                            <div>
                                <Typography variant="body1">Konum</Typography>
                                <Typography variant="body2" color="textSecondary">Karabük-Turkey</Typography>
                            </div>
                        </div>

                        <div className='contact-icon-div '>
                            <EmailIcon className='contact-icon' sx={{ fontSize: '2rem' }} />
                            <div>
                                <Typography variant="body1">E-posta</Typography>
                                <Typography variant="body2" color="textSecondary">senaarican01@gmail.com</Typography>
                            </div>
                        </div>

                        <div className='contact-icon-div'>
                            <PhoneIphoneIcon className='contact-icon' sx={{ fontSize: '2rem' }} />
                            <div>
                                <Typography variant="body1" > Telefon</Typography>
                                <Typography variant="body2" color="textSecondary">+90 538 736 6960</Typography>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe className='map'
                            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Karabük-Turkey&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            allowFullScreen
                        ></iframe>
                    </div>

                </Box>
            </div>
        </div >

    );
}

export default ContactusPage;
