import BookingForm from "./BookingForm";
const BookingPage=() => {
    return (
        <>
            <h2 className="h2_pages"> Reserve a table</h2>
            <p className="p_pages" style={{position:"relative"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla, dolor dui vestibulum lorem, non posuere lectus sem id magna. Maecenas ut nulla quis ligula efficitur pretium eu elementum mi. Donec tempor eget felis et convallis. Aenean et scelerisque est. Aenean rhoncus felis non metus facilisis, at tincidunt orci faucibus. Integer hendrerit nec nisi quis aliquam. Integer rutrum, justo semper luctus auctor.</p>
            {/* <img className="img_booking" src="booking.jpg" alt="table" style={{position:"absolute"}} width={400}/> */}
            <BookingForm />
            <br style={{padding:20}}></br>
        </>
    )
};

export default BookingPage;