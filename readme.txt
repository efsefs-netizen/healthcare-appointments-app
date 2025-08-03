# 🩺 Doctor Appointment Booking Web App

A responsive full-stack web application that allows users to view a list of doctors, book appointments, and view their upcoming appointments.

---

## 🚀 Features Implemented

- 🧑‍⚕️ Display list of doctors with image, specialization, and availability.
- 📅 Book appointment with a doctor by providing patient name, date, and time.
- 📋 View all booked appointments.
- 🔄 Real-time update after booking.
- 🔗 Navigation using React Router DOM.
- 💻 Fully responsive using Bootstrap and custom CSS.

---

## 🛠️ Tech Stack

### Frontend:
- **ReactJS (Class Components)**
- **React Router DOM**
- **Bootstrap 5**
- **CSS**

### Backend:
- **Node.js**
- **Express.js**
- **Local JSON storage** (using an in-memory array or mock response,for doc-list,images url from online)
- **Fetch API (for communication between frontend and backend)**

---

## 🔍 Services

- `getDoctorInfoApi.js` — Fetch doctor info by ID.
- `makeAppointmentApi.js` — Send appointment data to backend.
- `getAppointmentsApi.js` — Retrieve all appointments.

---

## ❗ Challenges Faced During Development

1. **Async API Handling in Class Components**  
   - Needed to carefully manage `async/await` inside `componentDidMount` to fetch doctor details.
   - Solved by modularizing API calls into separate service files and using `setState` properly.

2. **Testing Local APIs Without File System**  
   - Faced issues storing persistent data without a database or file system.
   - Temporarily used in-memory arrays for mock data handling.

3. **Routing and Param Handling Without Hooks**  
   - Since hooks like `useParams` can’t be used in class components directly, had to use a wrapper functional component to pass `doctorId` as props.

---

## 🧠 Improvements (Future Scope)

With more time and development, the app can be improved by:

- 🔎 **Adding a Search Bar** to filter doctors by name or specialization.
- 👤 **Dedicated Doctor Profile Page** with detailed bio, rating, experience, etc.
- ✅ **Status Updates** (like "Booked", "Available") shown live after appointment booking.
- 💾 **Database Integration** using MongoDB or SQLite for persistent data storage.
- ✉️ **Email/SMS Notification Integration** after booking confirmation.
- 🛡️ **Input Validation and Error Handling** to improve user experience.
- using params , hooks etc;
- need to apply try and catch more..(error handling)
- able edit appointments;

---

## 📂 Folder Structure (Simplified)

/healthcare-app
├── /backend
│ └── server.js
├── /frontend
│ ├── /components
│ │ ├── AllDoctorsPage.js
│ │ ├── BookAppointment.js
│ │ └── MyAppointmentsPage.js
│ ├── /services
│ │ ├── getDoctorInfoApi.js
│ │ ├── getAppointmentsApi.js
│ │ └── makeAppointmentApi.js
│ └── App.js


---

## ✅ Status

✔️ MVP Completed  
🚧 Additional features planned  
🎯 Ready for enhancement and deployment

---

## 🙌 Author

**Pala Naga Venkata Reddy**  
Built for assessment project to explore full-stack development and healthcare tech.

