import React, { useState } from "react";
import Title from "../../components/Title";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form>
      <Title
        font="outfit"
        title="Add Room"
        align="left"
        subtitle="Fill in the details carefully and provide accurate room details, pricing, and amenities, to enhance the user booking experience."
      />
    </form>
  );
};

export default AddRoom;
