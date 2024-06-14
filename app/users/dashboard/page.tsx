import React from "react";
// 1. Student Personal Information
const StudentPersonalInfo = () => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg shadow-md p-6 m-5 ">
      <h2 className="text-2xl font-bold mb-4">Student Personal Information</h2>
      <p className="text-gray-600 mb-2">Name: John Doe</p>
      <p className="text-gray-600 mb-2">Student ID:11252855</p>
      <p className="text-gray-600 mb-2">Program: CPEN (Computer Engineering)</p>
      <p className="text-gray-600 mb-2">Level: 200</p>
    </div>
  );
};

// 2. Course Enrollment
const CourseEnrollment = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg shadow-md p-6 m-5">
      <h2 className="text-2xl font-bold mb-4">Course Enrollment</h2>
      <ul className="space-y-2">
        <li>CPEN 201 - Digital Logic Design</li>
        <li>CPEN 202 - Computer Architecture</li>
        <li>CPEN 203 - Signals and Systems</li>
        <li>CPEN 204 - Probability and Statistics</li>
        <li>CPEN 205 - Electromagnetic Theory</li>
      </ul>
      <button
        type="button"
        className="py-2.5 px-5  mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Add a course
      </button>
    </div>
  );
};

// 3.Timetable
const Timetable = () => {
  return (
    <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg shadow-md p-6 m-5">
      <h2 className="text-2xl font-bold mb-4">Timetable</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">Day</th>
            <th className="text-left pb-2">Time</th>
            <th className="text-left pb-2">Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>9:00 AM - 11:00 AM</td>
            <td>CPEN 201 - Digital Logic Design</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>CPEN 202 - Computer Architecture</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>11:00 AM - 1:00 PM</td>
            <td>CPEN 203 - Signals and Systems</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>3:00 PM - 5:00 PM</td>
            <td>CPEN 204 - Probability and Statistics</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>1:00 PM - 3:00 PM</td>
            <td>CPEN 205 - Electromagnetic Theory</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="py-2.5 px-5 me-4 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Set a reminder!
      </button>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  return (
    <div className="h-full container grid grid-cols-2 gap-2 auto-rows-auto bg-[whitesmoke] shadow-lg mx-auto">
      <StudentPersonalInfo />
      <CourseEnrollment />
      <Timetable />
    </div>
  );
};

export default Dashboard;
