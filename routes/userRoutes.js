const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure this path is correct
const ExcelJS = require('exceljs');

// Route to register a new user
router.post('/user-register', async (req, res) => {
  try {
    const { name, email, tradingExperience, mobileNumber } = req.body;

    // Automatically generate the current date for the 'registrationDate' field
    const currentDate = new Date();

    const newUser = new User({
      name,
      email,
      tradingExperience,
      mobileNumber,
      registrationDate: currentDate, // Set the current date here
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Error registering user');
  }
});

// Route to fetch all registered users with search functionality and pagination
router.get('/all', async (req, res) => {
  try {
    const { search = '', dateFilter = '', page = 1, limit = 10 } = req.query;
    const searchRegex = new RegExp(search, 'i');

    // Construct filter conditions
    const filterConditions = [
      {
        $or: [
          { name: searchRegex },
          { email: searchRegex },
          { tradingExperience: searchRegex },
          { mobileNumber: searchRegex },
        ],
      },
    ];

    // Apply date filter if specified
    const currentDate = new Date();
    if (dateFilter === 'today') {
      currentDate.setHours(0, 0, 0, 0);
      filterConditions.push({ registrationDate: { $gte: currentDate } });
    } else if (dateFilter === 'last7Days') {
      const last7Days = new Date();
      last7Days.setDate(currentDate.getDate() - 7);
      filterConditions.push({ registrationDate: { $gte: last7Days } });
    } else if (dateFilter === 'last30Days') {
      const last30Days = new Date();
      last30Days.setDate(currentDate.getDate() - 30);
      filterConditions.push({ registrationDate: { $gte: last30Days } });
    }

    // Calculate pagination values
    const skip = (page - 1) * limit;

    // Fetch users with pagination
    const users = await User.find({ $and: filterConditions })
      .skip(skip)
      .limit(parseInt(limit))
      .exec();

    // Get the total count of users matching the conditions (without pagination)
    const totalUsers = await User.countDocuments({ $and: filterConditions });

    // Format 'registrationDate' to DD/MM/YYYY before sending response
    const formattedUsers = users.map(user => ({
      ...user._doc,
      registrationDate: new Date(user.registrationDate).toLocaleDateString('en-GB'), // Format date to DD/MM/YYYY
    }));

    // Respond with users data and total count for pagination
    res.status(200).json({
      users: formattedUsers,
      totalUsers,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalUsers / limit)
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Error fetching users');
  }
});


// Endpoint to download users as Excel, filtered by search query
router.get('/download', async (req, res) => {
  try {
    const { search = '', dateFilter = '' } = req.query;
    const searchRegex = new RegExp(search, 'i');

    // Construct filter conditions similar to the '/all' route
    const filterConditions = [
      {
        $or: [
          { name: searchRegex },
          { email: searchRegex },
          { tradingExperience: searchRegex },
          { mobileNumber: searchRegex },
        ],
      },
    ];

    // Apply date filter if specified
    const currentDate = new Date();
    if (dateFilter === 'today') {
      currentDate.setHours(0, 0, 0, 0);
      filterConditions.push({ registrationDate: { $gte: currentDate } });
    } else if (dateFilter === 'last7Days') {
      const last7Days = new Date();
      last7Days.setDate(currentDate.getDate() - 7);
      filterConditions.push({ registrationDate: { $gte: last7Days } });
    } else if (dateFilter === 'last30Days') {
      const last30Days = new Date();
      last30Days.setDate(currentDate.getDate() - 30);
      filterConditions.push({ registrationDate: { $gte: last30Days } });
    }

    const users = await User.find({ $and: filterConditions });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Trading Experience', key: 'tradingExperience', width: 30 },
      { header: 'Mobile Number', key: 'mobileNumber', width: 15 },
      { header: 'Registration Date', key: 'registrationDate', width: 15 },
    ];

    users.forEach(user => {
      worksheet.addRow({
        name: user.name,
        email: user.email,
        tradingExperience: user.tradingExperience || 'N/A',
        mobileNumber: user.mobileNumber || 'N/A',
        registrationDate: new Date(user.registrationDate).toLocaleDateString('en-GB'), // Format date to DD/MM/YYYY
      });
    });

    // Set the format of the 'registrationDate' column in Excel
    worksheet.getColumn('registrationDate').numFmt = 'dd/mm/yyyy';

    res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error('Error generating Excel file:', err);
    res.status(500).send('Error generating Excel file');
  }
});

module.exports = router;