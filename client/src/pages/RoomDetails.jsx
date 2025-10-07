import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const foundRoom = roomsDummyData.find(room => room._id === id)
    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.images[0])
    }
  }, [id])

  if (!room) return <p className="text-center mt-20">Loading...</p>

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <h1 className='text-3xl md:text-4xl font-playfair'>
        {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
      </h1>
      <div className='flex items-center gap-2 mt-2'>
        <StarRating rating={room.rating || 4} />
        <p>200+ reviews</p>
      </div>
      <div className='flex mt-2 text-gray-500 items-center gap-1'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room.images.map((img, idx) => (
            <img
              key={idx}
              onClick={() => setMainImage(img)}
              src={img}
              alt="Room Image"
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === img ? 'outline-3 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
        {room.amenities.map((item, index) => (
          <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
            <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
            <p className='text-xs'>{item}</p>
          </div>
        ))}
      </div>

      {/* Price */}
      <p className='text-2xl font-medium mt-4'>${room.pricePerNight}/night</p>
    </div>
  )
}

export default RoomDetails
