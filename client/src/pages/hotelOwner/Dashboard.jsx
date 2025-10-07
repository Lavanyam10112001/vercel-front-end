import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div className="min-h-screen bg-#da91b7-200vh p-10">
      {/* Title */}
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* Total Bookings & Revenue */}
      <div className="flex gap-4 my-8">
        <div className="bg-white border border-gray-200 rounded flex p-4 shadow">
          <img src={assets.totalBookingIcon} alt="" className="max-sm:hidden h-10" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-gray-700 text-base">{dashboardData.totalBookings}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded flex p-4 shadow">
          <img src={assets.totalRevenueIcon} alt="" className="max-sm:hidden h-10" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-gray-700 text-base">${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h2 className="text-xl text-gray-700 font-medium mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-gray-800">User Name</th>
                <th className="py-3 px-4 text-left text-gray-800 hidden sm:table-cell">Room Name</th>
                <th className="py-3 px-4 text-left text-gray-800">Total Amount</th>
                <th className="py-3 px-4 text-center text-gray-800">Payment Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dashboardData.bookings.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-t border-gray-200">{item.user.username}</td>
                  <td className="py-3 px-4 border-t border-gray-200 hidden sm:table-cell">{item.room.roomType}</td>
                  <td className="py-3 px-4 border-t border-gray-200">${item.totalPrice}</td>
                  <td className="py-3 px-4 border-t border-gray-200 text-center">
                    <span
                      className={`py-1 px-3 text-xs rounded-full ${
                        item.isPaid ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {item.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
