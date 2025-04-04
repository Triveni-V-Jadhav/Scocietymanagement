// import Navbar from '../../components/Navbar';

// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

// import "../../styles/Events.css"

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEventDetails, setShowEventDetails] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [formData, setFormData] = useState({ title: "", date: "", description: "" });

//   // Handle event click to show details
//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event);
//     setShowEventDetails(true);
//   };

//   // Handle date click to open form
//   const handleDateClick = (arg) => {
//     setFormData({ ...formData, date: arg.dateStr });
//     setShowForm(true);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit event
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEvents([...events, { title: formData.title, start: formData.date, extendedProps: { description: formData.description } }]);
//     setShowForm(false);
//     setFormData({ title: "", date: "", description: "" });
//   };

//   return (
//     <div className="container">
//        <Navbar title="Events Management" />
//       {/* <h1>Event Calendar</h1> */}
//       <div className="calendar-container">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events}
//           dateClick={handleDateClick}
//           eventClick={handleEventClick}
//         />
//       </div>

//       {/* Add Event Button */}
//       <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

//       {/* Event Form Modal */}
//       {showForm && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Event</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Title</label>
//               <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//               <label>Date</label>
//               <input type="date" name="date" value={formData.date} onChange={handleChange} required />

//               <label>Description</label>
//               <textarea name="description" value={formData.description} onChange={handleChange} required />

//               <button type="submit">Add Event</button>
//               <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Event Summary Modal */}
//       {showEventDetails && selectedEvent && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Event Details</h2>
//             <p><strong>Title:</strong> {selectedEvent.title}</p>
//             <p><strong>Date:</strong> {selectedEvent.start.toISOString().split("T")[0]}</p>
//             <p><strong>Description:</strong> {selectedEvent.extendedProps?.description || "No description available"}</p>
//             <button className="close-btn" onClick={() => setShowEventDetails(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events


// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

// import "../styles/Events.css";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEventDetails, setShowEventDetails] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [formData, setFormData] = useState({ title: "", date: "", description: "" });

//   // Handle event click to show details
//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event);
//     setShowEventDetails(true);
//   };

//   // Handle date click to open form
//   const handleDateClick = (arg) => {
//     setFormData({ ...formData, date: arg.dateStr });
//     setShowForm(true);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit event
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEvents([...events, { title: formData.title, start: formData.date, extendedProps: { description: formData.description } }]);
//     setShowForm(false);
//     setFormData({ title: "", date: "", description: "" });
//   };

//   return (
//     <div className="container">
//       <h1>Event Calendar</h1>
//       <div className="calendar-container">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events}
//           dateClick={handleDateClick}
//           eventClick={handleEventClick}
//         />
//       </div>

//       {/* Add Event Button */}
//       <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

//       {/* Event Form Modal */}
//       {showForm && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Event</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Title</label>
//               <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//               <label>Date</label>
//               <input type="date" name="date" value={formData.date} onChange={handleChange} required />

//               <label>Description</label>
//               <textarea name="description" value={formData.description} onChange={handleChange} required />

//               <button type="submit">Add Event</button>
//               <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Event Summary Modal */}
//       {showEventDetails && selectedEvent && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Event Details</h2>
//             <p><strong>Title:</strong> {selectedEvent.title}</p>
//             <p><strong>Date:</strong> {selectedEvent.start.toISOString().split("T")[0]}</p>
//             <p><strong>Description:</strong> {selectedEvent.extendedProps?.description || "No description available"}</p>
//             <button className="close-btn" onClick={() => setShowEventDetails(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events




// // import React, { useState, useEffect } from "react";
// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";
// // import interactionPlugin from "@fullcalendar/interaction";
// // import axios from "axios";

// // import "../styles/Events.css";

// // const Events = () => {
// //   const [events, setEvents] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [showEventDetails, setShowEventDetails] = useState(false);
// //   const [selectedEvent, setSelectedEvent] = useState(null);
// //   const [formData, setFormData] = useState({ title: "", date: "", description: "" });
// //   const [notification, setNotification] = useState("");

// //   // Fetch events from the backend
// //   useEffect(() => {
// //     const fetchEvents = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/events/all-events");
// //         const formattedEvents = response.data.map(event => ({
// //           id: event.id,
// //           title: event.title,
// //           start: event.date,
// //           extendedProps: { description: event.description }
// //         }));
// //         setEvents(formattedEvents);
// //       } catch (error) {
// //         console.error("Error fetching events:", error);
// //       }
// //     };
// //     fetchEvents();
// //   }, []);

// //   // Handle event click to show details
// //   const handleEventClick = (clickInfo) => {
// //     setSelectedEvent(clickInfo.event);
// //     setShowEventDetails(true);
// //   };

// //   // Handle date click to open form
// //   const handleDateClick = (arg) => {
// //     setFormData({ ...formData, date: arg.dateStr });
// //     setShowForm(true);
// //   };

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Submit event to backend
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("http://localhost:8080/events/add-events", formData);
// //       const newEvent = {
// //         id: response.data.id,
// //         title: response.data.title,
// //         start: response.data.date,
// //         extendedProps: { description: response.data.description },
// //       };
// //       setEvents([...events, newEvent]);
// //       setShowForm(false);
// //       setFormData({ title: "", date: "", description: "" });
// //       setNotification("🎉 Event added successfully!");
// //       setTimeout(() => setNotification(""), 3000);
// //     } catch (error) {
// //       console.error("Error adding event:", error);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h1>Event Calendar</h1>
// //       {notification && <div className="notification">{notification}</div>}

// //       <div className="calendar-container">
// //         <FullCalendar
// //           plugins={[dayGridPlugin, interactionPlugin]}
// //           initialView="dayGridMonth"
// //           events={events}
// //           dateClick={handleDateClick}
// //           eventClick={handleEventClick}
// //         />
// //       </div>

// //       <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

// //       {/* Event Form Modal */}
// //       {showForm && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <h2>Add Event</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>Title</label>
// //               <input type="text" name="title" value={formData.title} onChange={handleChange} required />

// //               <label>Date</label>
// //               <input type="date" name="date" value={formData.date} onChange={handleChange} required />

// //               <label>Description</label>
// //               <textarea name="description" value={formData.description} onChange={handleChange} required />

// //               <button type="submit">Add Event</button>
// //               <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* Event Summary Modal */}
// //       {showEventDetails && selectedEvent && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <h2>Event Details</h2>
// //             <p><strong>Title:</strong> {selectedEvent.title}</p>
// //             <p><strong>Date:</strong> {selectedEvent.start.toISOString().split("T")[0]}</p>
// //             <p><strong>Description:</strong> {selectedEvent.extendedProps?.description || "No description available"}</p>
// //             <button className="close-btn" onClick={() => setShowEventDetails(false)}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Events;



// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import axios from "axios";

// import "../../styles/Events.css";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showEventDetails, setShowEventDetails] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [formData, setFormData] = useState({ title: "", date: "", description: "" });
//   const [notification, setNotification] = useState("");

//   // Utility to convert "dd-mm-yyyy" to "yyyy-mm-dd"
//   const formatDateForBackend = (date) => {
//     const [day, month, year] = date.split("-");
//     return `${year}-${month}-${day}`;
//   };

//   // Fetch events from the backend
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/events");
//         const formattedEvents = response.data.map(event => ({
//           id: event.id,
//           title: event.title,
//           start: event.date,
//           extendedProps: { description: event.description }
//         }));
//         setEvents(formattedEvents);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // Handle event click to show details
//   const handleEventClick = (clickInfo) => {
//     setSelectedEvent(clickInfo.event);
//     setShowEventDetails(true);
//   };

//   // Handle date click to open form
//   const handleDateClick = (arg) => {
//     setFormData({ ...formData, date: arg.dateStr });
//     setShowForm(true);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit event to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedDate = formatDateForBackend(formData.date);

//     const newEvent = {
//       title: formData.title,
//       date: formattedDate,
//       description: formData.description,
//     };

//     try {
//       const response = await axios.post("http://localhost:8080/events/add-events", newEvent);
//       const addedEvent = {
//         id: response.data.id,
//         title: response.data.title,
//         start: response.data.date,
//         extendedProps: { description: response.data.description },
//       };
//       setEvents([...events, addedEvent]);
//       setShowForm(false);
//       setFormData({ title: "", date: "", description: "" });
//       setNotification("🎉 Event added successfully!");
//       setTimeout(() => setNotification(""), 3000);
//     } catch (error) {
//       console.error("Error adding event:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Event Calendar</h1>
//       {notification && <div className="notification">{notification}</div>}

//       <div className="calendar-container">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events}
//           dateClick={handleDateClick}
//           eventClick={handleEventClick}
//         />
//       </div>

//       <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

//       {/* Event Form Modal */}
//       {showForm && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Event</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Title</label>
//               <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//               <label>Date (dd-mm-yyyy)</label>
//               <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="dd-mm-yyyy" required />

//               <label>Description</label>
//               <textarea name="description" value={formData.description} onChange={handleChange} required />

//               <button type="submit">Add Event</button>
//               <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Event Summary Modal */}
//       {showEventDetails && selectedEvent && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Event Details</h2>
//             <p><strong>Title:</strong> {selectedEvent.title}</p>
//             <p><strong>Date:</strong> {selectedEvent.start.toISOString().split("T")[0]}</p>
//             <p><strong>Description:</strong> {selectedEvent.extendedProps?.description || "No description available"}</p>
//             <button className="close-btn" onClick={() => setShowEventDetails(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;



// // _____________
// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";

// import "../../styles/Events.css";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [formData, setFormData] = useState({ title: "", date: "", description: "", image: null });
//   const [previewImage, setPreviewImage] = useState(null);

//   // Handle date click to open form
//   const handleDateClick = (arg) => {
//     setFormData({ ...formData, date: arg.dateStr });
//     setShowForm(true);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (!file.type.startsWith("image/")) {
//         alert("Please select a valid image file.");
//         return;
//       }

//       if (file.size > 2 * 1024 * 1024) {
//         alert("File size should be less than 2MB.");
//         return;
//       }

//       setFormData({ ...formData, image: file });

//       const reader = new FileReader();
//       reader.onloadend = () => setPreviewImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Submit event
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEvents([
//       ...events,
//       { title: formData.title, start: formData.date, extendedProps: { description: formData.description, image: previewImage } },
//     ]);
//     setShowForm(false);
//     setFormData({ title: "", date: "", description: "", image: null });
//     setPreviewImage(null);
//   };

//   return (
//     <div className="container">
//       <h1>Event Calendar</h1>
//       <div className="calendar-container">
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           events={events}
//           dateClick={handleDateClick}
//         />
//       </div>

//       {/* Add Event Button */}
//       <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

//       {/* Event Form Modal (Overlay on Calendar) */}
//       {showForm && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Event</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Title</label>
//               <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//               <label>Date</label>
//               <input type="date" name="date" value={formData.date} onChange={handleChange} required />

//               <label>Description</label>
//               <textarea name="description" value={formData.description} onChange={handleChange} required />

//               <label>Event Image</label>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//               {previewImage && <img src={previewImage} alt="Preview" className="image-preview" />}

//               <button type="submit">Add Event</button>
//               <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;




import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import Navbar from '../../components/Navbar';
import "../../styles/Events.css";


const BACKEND_URL = "http://localhost:8080/api/events"; // Update with your backend URL

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", date: "", description: "", image: null });
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch events from the backend on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(BACKEND_URL);
      const eventData = response.data.map(event => ({
        title: event.name,
        start: event.date,
        extendedProps: {
          description: event.description,
          image: event.imageBase64 ? `data:image/png;base64,${event.imageBase64}` : null,
        },
      }));
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Handle date click to open form
  const handleDateClick = (arg) => {
    setFormData({ ...formData, date: arg.dateStr });
    setShowForm(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert("File size should be less than 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData({ ...formData, image: reader.result.split(",")[1] }); // Remove "data:image/png;base64,"
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Ensure the default form submission is prevented
  
  //   if (!formData.title || !formData.date || !formData.description) {
  //     alert("Please fill all required fields.");
  //     return;
  //   }
  
  //   try {
  //     const newEvent = {
  //       name: formData.title,
  //       date: formData.date,
  //       description: formData.description,
  //       image: formData.image,
  //     };
  
  //     await axios.post(BACKEND_URL, newEvent);
  
  //     // Fetch updated events after successful submission
  //     fetchEvents();
  
  //     // Reset form and hide modal
  //     setShowForm(false);
  //     setFormData({ title: "", date: "", description: "", image: null });
  //     setPreviewImage(null);
  //   } catch (error) {
  //     console.error("Error saving event:", error);
  //   }
  // };
  


  const handleSubmit = async (e) => {
    e.preventDefault(); // Ensure the default form submission is prevented
  
    if (!formData.title || !formData.date || !formData.description || !formData.image) {
      alert("Please fill all required fields.");
      return;
    }
  
    try {
      // Create FormData object for multipart/form-data request
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.title);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("image", formData.image);
  
      // Send the form data to the backend
      await axios.post(BACKEND_URL + "/add-events", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Fetch updated events after successful submission
      fetchEvents();
  
      // Reset form and hide modal
      setShowForm(false);
      setFormData({ title: "", date: "", description: "", image: null });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };
  
  return (
    <div className="container">
      {/* <Navbar title="Event Management" /> */}
      <h1>Event Calendar</h1>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
        />
      </div>

      {/* Add Event Button */}
      <button className="add-event-btn" onClick={() => setShowForm(true)}>+ Add Event</button>

      {/* Event Form Modal (Overlay on Calendar) */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />

              <label>Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />

              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required />

              <label>Event Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {previewImage && <img src={previewImage} alt="Preview" className="image-preview" />}

              <button type="submit">Add Event</button>
              <button className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
