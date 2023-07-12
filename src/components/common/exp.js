function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75vw',
    height: '65vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='nav'>
      <div className='left'>
        {/* <EventSmallCalendar className='scal'></EventSmallCalendar> */}
        <SearchIcon className='search'></SearchIcon>
        <input className='inputs'></input>
        <AddCircleIcon className='micons' onClick={handleOpen}></AddCircleIcon>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </div>
      <Modale open={open} onClose={handleClose} />
      <div className='right'>
        <PersonIcon className='user'></PersonIcon>
      </div>
    </div>
  );
}


const Modale = (props) => {
  const { open, onClose } = props;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75vw',
    height: '85vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            <h3>Events and Invitations</h3>
          </Typography>
          {/* Rest of the modal content */}
          <div className='ebtn'>
            <button className='ebutton' onClick={onClose}>Close</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
