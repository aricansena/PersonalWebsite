
import { Button, Box, TextField, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import '../../css/ContactusPage.css';

const ContactusPage = () => {
    return (
        <div className='main-div'>
            <div className='contact'>
                <form style={{ flex: 1 }}>
                    <Box sx={{ width: "450px", border: '1px solid pink', marginBottom: '0 0 50px 0', margin: '5px', padding: '15px' }} >
                        <div className='flex-row-d'>
                            <TextField
                                required
                                id="name"
                                name='name'
                                label="İsim"
                                variant="outlined"
                                className='custom-textfield'
                                sx={{
                                    margin: '10px 10px 0 10px',
                                    width: { xs: '100%', md: '50%' },
                                }}
                            />
                            <TextField
                                required
                                id="email"
                                name='email'
                                label="E-posta"
                                variant="outlined"
                                className='custom-textfield'
                                sx={{
                                    margin: '10px 10px 0 10px ',
                                    width: { xs: '100%', md: '50%' },
                                }}
                            />
                        </div>
                        <div className='flex-row'>
                            <TextField
                                required
                                id="message"
                                name='message'
                                label="Mesajınız"
                                variant="outlined"
                                className='custom-textfield'
                                sx={{ margin: '10px 10px 0 10px', width: '100%' }}
                            />
                        </div>
                        <div className='flex-row'>
                            <Button type='submit' className='custom-button' variant='contained' sx={{ margin: '10px 10px 0 10px', width: '100%' }}> Gönder </Button>
                        </div>
                    </Box>
                </form>

                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', md: '450px' },
                    border: '1px solid pink', padding: '15px', margin: '5px'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocationOnIcon className='contact-icon' />
                            <div>
                                <Typography variant="body1">Konum</Typography>
                                <Typography variant="body2" color="textSecondary">Karabük-Turkey</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <EmailIcon className='contact-icon' />
                            <div>
                                <Typography variant="body1">E-posta</Typography>
                                <Typography variant="body2" color="textSecondary">senaarican01@gmail.com</Typography>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <PhoneIphoneIcon className='contact-icon' />
                            <div>
                                <Typography variant="body1" > Telefon</Typography>
                                <Typography variant="body2" color="textSecondary">+90 538 736 6960</Typography>
                            </div>
                        </div>
                    </div>
                    <div className='map-container' style={{ marginTop: '20px' }}>
                        <iframe
                            style={{ width: '100%', height: '100px', border: 0 }}
                            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Karabük-Turkey&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Box>
            </div>
        </div>

    );
}

export default ContactusPage;
