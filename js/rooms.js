document.addEventListener("DOMContentLoaded", () => {
  // Room data with additional images and details
  const roomsData = [
    {
      id: 1,
      name: "Deluxe Double Room with Balcony",
      description:
        "Experience luxury with breathtaking ocean views from your private balcony. Our Deluxe Ocean View rooms offer the perfect blend of comfort and elegance. Wake up to stunning sunrises and fall asleep to the soothing sound of waves. Each room is meticulously designed with your comfort in mind, featuring premium furnishings and a serene color palette inspired by the ocean.",
      price: 299,
      images: ["images/room-1.jpg", "images/room-1-alt1.jpg", "images/room-1-alt2.jpg", "images/room-1-alt3.jpg"],
      features: [
        { icon: "fas fa-water", text: "Ocean View" },
        { icon: "fas fa-bed", text: "King Bed" },
        { icon: "fas fa-door-open", text: "Private Balcony" },
        { icon: "fas fa-cocktail", text: "Mini Bar" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "Luxury Bathroom" },
        { icon: "fas fa-coffee", text: "Coffee Maker" },
        { icon: "fas fa-tv", text: '55" Smart TV' },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-concierge-bell", text: "Room Service" },
        { icon: "fas fa-lock", text: "In-Room Safe" },
      ],
      size: "45 m²",
      maxOccupancy: "2 Adults",
    },
    {
      id: 2,
      name: "Garden Suite",
      description:
        "Nestled among lush tropical gardens, our Garden Suites provide a serene retreat with spacious accommodations and a private terrace. Immerse yourself in the tranquility of nature with views of our meticulously maintained gardens. These suites offer a peaceful sanctuary after a day of beach activities or exploring the island.",
      price: 349,
      images: ["images/room-2.jpg", "images/room-2-alt1.jpg", "images/room-2-alt2.jpg", "images/room-2-alt3.jpg"],
      features: [
        { icon: "fas fa-tree", text: "Garden View" },
        { icon: "fas fa-bed", text: "King Bed" },
        { icon: "fas fa-umbrella-beach", text: "Private Terrace" },
        { icon: "fas fa-couch", text: "Sitting Area" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "Rainfall Shower" },
        { icon: "fas fa-coffee", text: "Espresso Machine" },
        { icon: "fas fa-tv", text: "Smart TV" },
        { icon: "fas fa-snowflake", text: "Climate Control" },
        { icon: "fas fa-concierge-bell", text: "Room Service" },
        { icon: "fas fa-lock", text: "Digital Safe" },
      ],
      size: "55 m²",
      maxOccupancy: "2 Adults",
    },
    {
      id: 3,
      name: "Family Villa",
      description:
        "Perfect for families, our spacious Family Villas offer multiple bedrooms, a living area, and a private pool, ensuring a comfortable stay for everyone. These villas provide the ultimate family getaway with plenty of space for both togetherness and privacy. Enjoy meals together in your dining area or relax by your private pool while the kids play.",
      price: 499,
      images: ["images/room-3.jpg", "images/room-3-alt1.jpg", "images/room-3-alt2.jpg", "images/room-3-alt3.jpg"],
      features: [
        { icon: "fas fa-home", text: "2 Bedrooms" },
        { icon: "fas fa-swimming-pool", text: "Private Pool" },
        { icon: "fas fa-couch", text: "Living Area" },
        { icon: "fas fa-utensils", text: "Dining Area" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "2 Bathrooms" },
        { icon: "fas fa-kitchen-set", text: "Kitchenette" },
        { icon: "fas fa-tv", text: "Multiple TVs" },
        { icon: "fas fa-snowflake", text: "Climate Control" },
        { icon: "fas fa-concierge-bell", text: "Butler Service" },
        { icon: "fas fa-lock", text: "In-Room Safe" },
      ],
      size: "120 m²",
      maxOccupancy: "4 Adults, 2 Children",
    },
    {
      id: 4,
      name: "Honeymoon Suite",
      description:
        "Designed for romance, our Honeymoon Suites feature luxurious amenities, stunning views, and special touches to make your stay unforgettable. Celebrate your love in this intimate setting with panoramic ocean views and exclusive amenities. Enjoy champagne on your private balcony as you watch the sunset over the horizon.",
      price: 399,
      images: ["images/room-4.jpg", "images/room-4-alt1.jpg", "images/room-4-alt2.jpg", "images/room-4-alt3.jpg"],
      features: [
        { icon: "fas fa-water", text: "Ocean View" },
        { icon: "fas fa-bed", text: "King Bed" },
        { icon: "fas fa-hot-tub", text: "Jacuzzi" },
        { icon: "fas fa-glass-cheers", text: "Champagne Service" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "Luxury Bathroom" },
        { icon: "fas fa-spa", text: "Couples Spa Kit" },
        { icon: "fas fa-tv", text: "Smart TV" },
        { icon: "fas fa-music", text: "Sound System" },
        { icon: "fas fa-concierge-bell", text: "24/7 Room Service" },
        { icon: "fas fa-lock", text: "Digital Safe" },
      ],
      size: "65 m²",
      maxOccupancy: "2 Adults",
    },
    {
      id: 5,
      name: "Presidential Suite",
      description:
        "The epitome of luxury, our Presidential Suite offers unparalleled amenities, breathtaking views, and personalized service for the most discerning guests. This exclusive suite represents the pinnacle of luxury accommodation, with expansive living spaces and premium finishes throughout. Enjoy the services of a dedicated butler and exclusive access to our VIP facilities.",
      price: 899,
      images: ["images/room-5.jpg", "images/room-5-alt1.jpg", "images/room-5-alt2.jpg", "images/room-5-alt3.jpg"],
      features: [
        { icon: "fas fa-mountain", text: "Panoramic View" },
        { icon: "fas fa-door-open", text: "Multiple Bedrooms" },
        { icon: "fas fa-user-tie", text: "Private Butler" },
        { icon: "fas fa-utensils", text: "Dining Room" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "Luxury Bathrooms" },
        { icon: "fas fa-kitchen-set", text: "Full Kitchen" },
        { icon: "fas fa-tv", text: "Multiple TVs" },
        { icon: "fas fa-briefcase", text: "Office Space" },
        { icon: "fas fa-concierge-bell", text: "24/7 Butler Service" },
        { icon: "fas fa-lock", text: "Advanced Security" },
      ],
      size: "200 m²",
      maxOccupancy: "6 Adults",
    },
    {
      id: 6,
      name: "Standard Room",
      description:
        "Comfortable and well-appointed, our Standard Rooms provide all the essentials for a pleasant stay at an affordable price. These cozy rooms offer excellent value without compromising on quality or comfort. Each room features modern amenities and comfortable furnishings to ensure a restful stay for budget-conscious travelers.",
      price: 199,
      images: ["images/room-6.jpg", "images/room-6-alt1.jpg", "images/room-6-alt2.jpg", "images/room-6-alt3.jpg"],
      features: [
        { icon: "fas fa-bed", text: "Queen Bed" },
        { icon: "fas fa-desktop", text: "Work Desk" },
        { icon: "fas fa-shower", text: "Shower" },
        { icon: "fas fa-tv", text: "TV" },
        { icon: "fas fa-wifi", text: "Free Wi-Fi" },
      ],
      amenities: [
        { icon: "fas fa-bath", text: "Private Bathroom" },
        { icon: "fas fa-coffee", text: "Coffee Maker" },
        { icon: "fas fa-phone", text: "Telephone" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-concierge-bell", text: "Room Service" },
        { icon: "fas fa-lock", text: "In-Room Safe" },
      ],
      size: "30 m²",
      maxOccupancy: "2 Adults",
    },
  ]

  // Function to create room cards
  function createRoomCards() {
    const roomsGrid = document.querySelector(".rooms-grid")

    roomsData.forEach((room) => {
      const roomCard = document.createElement("div")
      roomCard.className = "room-card"
      roomCard.dataset.roomId = room.id

      roomCard.innerHTML = `
                <div class="room-img">
                    <img src="${room.images[0]}" alt="${room.name}">
                </div>
                <div class="room-details">
                    <div class="room-header">
                        <h3>${room.name}</h3>
                        <div class="price">$${room.price}<span>/night</span></div>
                    </div>
                    <p class="room-description">${room.description}</p>
                    <button class="view-details">View Details</button>
                </div>
            `

      roomsGrid.appendChild(roomCard)

      // Add click event to the room card
      roomCard.addEventListener("click", () => openRoomModal(room))
    })
  }

  // Function to open room modal
  function openRoomModal(room) {
    const modal = document.getElementById("roomModal")
    const modalMainImage = document.getElementById("modalMainImage")
    const thumbnailGallery = document.getElementById("thumbnailGallery")
    const modalRoomName = document.getElementById("modalRoomName")
    const modalPrice = document.getElementById("modalPrice")
    const modalDescription = document.getElementById("modalDescription")
    const modalFeatures = document.getElementById("modalFeatures")
    const modalAmenities = document.getElementById("modalAmenities")

    // Set room details
    modalMainImage.src = room.images[0]
    modalMainImage.alt = room.name
    modalRoomName.textContent = room.name
    modalPrice.textContent = `$${room.price}`
    modalDescription.textContent = room.description

    // Clear existing thumbnails
    thumbnailGallery.innerHTML = ""

    // Add thumbnails
    room.images.forEach((image, index) => {
      const thumbnail = document.createElement("div")
      thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`
      thumbnail.innerHTML = `<img src="${image}" alt="${room.name} Image ${index + 1}">`

      thumbnail.addEventListener("click", () => {
        // Update main image
        modalMainImage.src = image

        // Update active thumbnail
        document.querySelectorAll(".thumbnail").forEach((thumb) => thumb.classList.remove("active"))
        thumbnail.classList.add("active")
      })

      thumbnailGallery.appendChild(thumbnail)
    })

    // Clear existing features
    modalFeatures.innerHTML = ""

    // Add features
    room.features.forEach((feature) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="${feature.icon}"></i> ${feature.text}`
      modalFeatures.appendChild(li)
    })

    // Clear existing amenities
    modalAmenities.innerHTML = ""

    // Add amenities
    room.amenities.forEach((amenity) => {
      const li = document.createElement("li")
      li.innerHTML = `<i class="${amenity.icon}"></i> ${amenity.text}`
      modalAmenities.appendChild(li)
    })

    // Show modal
    modal.classList.add("show")
    document.body.style.overflow = "hidden" // Prevent scrolling
  }

  // Function to close room modal
  function closeRoomModal() {
    const modal = document.getElementById("roomModal")
    modal.classList.remove("show")
    document.body.style.overflow = "" // Restore scrolling
  }

  // Close modal when clicking on close button
  document.querySelector(".close-modal").addEventListener("click", closeRoomModal)

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("roomModal")
    if (event.target === modal) {
      closeRoomModal()
    }
  })

  // Close modal when pressing Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeRoomModal()
    }
  })

  // Initialize room cards
  createRoomCards()
})
