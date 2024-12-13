import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { useLocation } from 'react-router-dom';

export default function BookingSuccessful() {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  console.log(bookingDetails + 'Booking Data succesfull');

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/success.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="succcesfulbooking">
      <div className="correctimg">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
      <div className="successheading">Booking Successful</div>
      <div className="locationbooking">
        <div className="circle-small"></div> {bookingDetails.pickup}{' '}
        <img src="/arrow.png" alt="" className="arrow" /> {bookingDetails.drop}
      </div>
      <div className="passengersbooking">
        <div className="circle-small circlesummary blackcircle"></div>
        Passengers - {bookingDetails.passengers}
        {bookingDetails.hostel ? (
          <div className="passengersbooking">
            <div className="circle-small circlesummary blackcircle"></div>
            Pickup From Hostel
          </div>
        ) : null}
      </div>
      <div className="driverDetails">
        <div className="driverinfobooking">
          <img
            // src={bookingDetails.driver.image}
            src="https://media.istockphoto.com/id/1377893181/photo/shot-of-young-man-delivering-a-package-while-sitting-in-a-vehicle.jpg?s=612x612&w=0&k=20&c=yOMqI9TcSFRPKuLl40lUsjYmRkji9hoH_eUtKPUrZwk="
            alt="Driver image"
            className="driverimgbooking"
          />
          <div className="infobooking">
            <div className="drivernamebooking">
              {bookingDetails.driver.name}
            </div>
            <div className="driveragebooking">
              Age - {bookingDetails.driver.age}
            </div>
          </div>
        </div>
        <div className="driverspecifics">
          <div className="circlebooking"></div>Auto No -{' '}
          {bookingDetails.driver.Autono}
        </div>
        <div className="driverspecifics2">
          <div className="circlebooking"></div>License -{' '}
          {bookingDetails.driver.license}
        </div>
      </div>
      <div className="calldriverbutton">Call Driver</div>
    </div>
  );
}
