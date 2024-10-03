// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/registration')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));

// // Define routes
// const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct and the file exists
// app.use('/api/users', userRoutes);

// // Define routes
// const userRoutes = require('./routes/adminRoutes'); // Ensure this path is correct and the file exists
// app.use('/api/user-admin', adminRoutes);

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve the admin page
// app.get('/admin', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'admin.html'), (err) => {
//     if (err) {
//       console.error('Error serving admin page:', err);
//       res.status(err.status || 500).end();
//     }
//   });
// });

// // Handle 404 errors for unmatched routes
// app.use((req, res, next) => {
//   res.status(404).send('Page not found');
// });

// // Global error handling
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).send('Something went wrong!');
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// // Graceful shutdown
// const server = app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server is running on port ${process.env.PORT || 5000}`);
// });

// process.on('SIGTERM', () => {
//   console.log('SIGTERM signal received: closing HTTP server');
//   server.close(() => {
//     console.log('HTTP server closed');
//     mongoose.connection.close(false, () => {
//       console.log('MongoDB connection closed');
//       process.exit(0);
//     });
//   });
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));

// // Define user routes
// const userRoutes = require('./routes/adminRoutes'); // Placeholder, assuming you have user routes defined similarly
// app.use('/api/admin', adminRoutes);

// // Admin routes
// // const adminRoutes = require('./routes/adminRoutes'); // Corrected route path
// // app.use('/api/user-admin', adminRoutes);



// // Admin routes
// const adminRoutes = require('./routes/adminRoutes');
// app.use('/api/admin', adminRoutes);

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve the admin.html page when the /admin route is accessed
// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'admin.html'), (err) => {
//         if (err) {
//             console.error('Error serving admin page:', err);
//             res.status(err.status || 500).end();
//         }
//     });
// });

// // const adminRoutes = require('./routes/adminRoutes');
// // app.use('/api/admin', adminRoutes);

// // // Serve static files from the 'public' directory
// // app.use(express.static(path.join(__dirname, 'public')));



// // // Serve the admin login page
// // app.get('/admin/login', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'adminLogin.html'));
// // });

// // Serve the user registration page
// app.get('/admin/register-user', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'registerUser.html'));
// });

// // Serve the admin page
// app.get('/admin', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'admin.html'), (err) => {
//     if (err) {
//       console.error('Error serving admin page:', err);
//       res.status(err.status || 500).end();
//     }
//   });
// });

// // Handle 404 errors for unmatched routes
// app.use((req, res, next) => {
//   res.status(404).send('Page not found');
// });

// // Global error handling
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).send('Something went wrong!');
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// // Graceful shutdown
// const server = app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// process.on('SIGTERM', () => {
//   console.log('SIGTERM signal received: closing HTTP server');
//   server.close(() => {
//     console.log('HTTP server closed');
//     mongoose.connection.close(false, () => {
//       console.log('MongoDB connection closed');
//       process.exit(0);
//     });
//   });
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const path = require('path');
// const excel = require('exceljs');

// // Initialize Express
// const app = express();
// const port = 5000;
// const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a strong secret key

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/GoldGladiators')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));


// // Define a schema and model
// // const userSchema = new mongoose.Schema({
// //     name: String,
// //     email: String,
// //     tradingExperience: String,
// //     mobileNumber: String
// // });

// // const userSchema = new mongoose.Schema({
// //     name: String,
// //     email: String,
// //     tradingExperience: String,
// //     mobileNumber: String,
// //     registerDate: { type: Date, default: Date.now } // Add this line
// // });

// // const User = mongoose.model('User', userSchema);

// // Handle POST request
// // app.post('/api/users/user-register', async (req, res) => {
// //     try {
// //         const user = new User(req.body);
// //         await user.save();
// //         res.status(200).send('User registered successfully');
// //     } catch (error) {
// //         console.error('Error saving user:', error);
// //         res.status(500).send('Error registering user');
// //     }
// // });

// // app.post('/api/users/user-register', async (req, res) => {
// //     try {
// //         const user = new User(req.body); // `registerDate` is automatically set here
// //         await user.save();
// //         res.status(200).send('User registered successfully');
// //     } catch (error) {
// //         console.error('Error saving user:', error);
// //         res.status(500).send('Error registering user');
// //     }
// // });






// // Define User Schema with validations
// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     tradingExperience: String,
//     mobileNumber: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(v) {
//                 return /^\d{10}$/.test(v); // Validate that the number has exactly 10 digits
//             },
//             message: props => `${props.value} is not a valid 10-digit mobile number!`
//         }
//     },
//     registerDate: { type: Date, default: Date.now } // Automatically set to current date and time
// });

// const User = mongoose.model('User', userSchema);


// // Helper function to filter users by date range
// function getDateFilter(dateFilter) {
//     const today = new Date();
//     let startDate;

//     switch (dateFilter) {
//         case 'today':
//             startDate = new Date(today.setHours(0, 0, 0, 0));
//             break;
//         case 'yesterday':
//             startDate = new Date(today.setDate(today.getDate() - 1));
//             startDate.setHours(0, 0, 0, 0);
//             break;
//         case 'last7Days':
//             startDate = new Date(today.setDate(today.getDate() - 7));
//             break;
//         case 'last30Days':
//             startDate = new Date(today.setDate(today.getDate() - 30));
//             break;
//         default:
//             return {};
//     }

//     return { registerDate: { $gte: startDate } };
// }

// // API to get all users with filtering, searching, and pagination
// app.get('/api/users/all', async (req, res) => {
//     try {
//         const { search = '', dateFilter, page = 1, limit = 10 } = req.query;
//         const searchRegex = new RegExp(search, 'i'); // Case-insensitive search
//         const dateQuery = getDateFilter(dateFilter);

//         // Filtering and pagination
//         const users = await User.find({
//             $or: [{ name: searchRegex }, { email: searchRegex }],
//             ...dateQuery
//         })
//         .skip((page - 1) * limit)
//         .limit(Number(limit));

//         const totalUsers = await User.countDocuments({
//             $or: [{ name: searchRegex }, { email: searchRegex }],
//             ...dateQuery
//         });

//         res.json({ users, totalUsers });
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).send('Error fetching users');
//     }
// });

// // API to download filtered users as Excel
// app.get('/api/users/download', async (req, res) => {
//     try {
//         const { search = '', dateFilter } = req.query;
//         const searchRegex = new RegExp(search, 'i');
//         const dateQuery = getDateFilter(dateFilter);

//         const users = await User.find({
//             $or: [{ name: searchRegex }, { email: searchRegex }],
//             ...dateQuery
//         });

//         // Create Excel workbook and sheet
//         const workbook = new excel.Workbook();
//         const worksheet = workbook.addWorksheet('Users');

//         // Add header row
//         worksheet.columns = [
//             { header: 'Name', key: 'name', width: 20 },
//             { header: 'Email', key: 'email', width: 30 },
//             { header: 'Trading Experience', key: 'tradingExperience', width: 20 },
//             { header: 'Mobile Number', key: 'mobileNumber', width: 15 },
//             { header: 'Registration Date', key: 'registerDate', width: 20 }
//         ];

//         // Add rows
//         users.forEach(user => {
//             worksheet.addRow({
//                 ...user.toObject(),
//                 registerDate: user.registerDate.toLocaleDateString('en-GB') // Format date as DD/MM/YYYY
//             });
//         });

//         // Write to response
//         res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//         res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');

//         await workbook.xlsx.write(res);
//         res.status(200).end();
//     } catch (error) {
//         console.error('Error downloading users:', error);
//         res.status(500).send('Error downloading users');
//     }
// });

// // Handle POST request
// app.post('/api/users/user-register', async (req, res) => {
//     try {
//         const { name, email, mobileNumber } = req.body;

//         // Check if the email or name already exists
//         const existingUser = await User.findOne({ $or: [{ email }, { name }] });
//         if (existingUser) {
//             return res.status(400).send('Name or Email already registered');
//         }

//         // Create a new user
//         const user = new User(req.body);
//         await user.save();
//         res.status(200).send('User registered successfully');
//     } catch (error) {
//         console.error('Error saving user:', error);
//         res.status(500).send('Error registering user');
//     }
// });



// // Define the schema
// const adminSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// // Create the model
// const Admin = mongoose.model('Admin', adminSchema);

// // Handle registration
// app.post('/api/admin/register', async (req, res) => {
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//         // const newAdmin = new Admin({ username, password });
//         // await newAdmin.save();
//         // res.status(201).json({ message: 'Admin registered successfully' });

//         const existingAdmin = await Admin.findOne({ username });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newAdmin = new Admin({ username, password: hashedPassword });
//         await newAdmin.save();
//         res.status(201).json({ message: 'Admin registered successfully' });

//     } catch (error) {
//         console.error('Error registering admin:', error);
//         res.status(500).json({ message: 'Error registering admin' });
//     }
// });


// // Handle login
// app.post('/api/admin/login', async (req, res) => {
//     const { username, password } = req.body;

//     console.log(username, password);
//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     try {
//         const admin = await Admin.findOne({ username });
//         if (!admin) {
//             console.log('Admin not found');
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, admin.password);
//         consloe.log(isMatch);
//         if (!isMatch) {
//             console.log('Password mismatch');
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '1h' });
//         res.json({ token });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
// });


// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve the admin page
// app.get('/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'admin.html'), (err) => {
//         if (err) {
//             console.error('Error serving admin page:', err);
//             res.status(err.status || 500).end();
//         }
//     });
// });

// // Handle 404 errors for unmatched routes
// app.use((req, res, next) => {
//     res.status(404).send('Page not found');
// });

// // Global error handling
// app.use((err, req, res, next) => {
//     console.error('Server error:', err);
//     res.status(500).send('Something went wrong!');
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// // Graceful shutdown
// const server = app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const excel = require('exceljs');

// Initialize Express
const app = express();
const port = 5000;
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a strong secret key

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/GoldGladiators')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define User Schema with validations
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    tradingExperience: String,
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Validate that the number has exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    registerDate: { type: Date, default: Date.now } // Automatically set to current date and time
});

const User = mongoose.model('User', userSchema);

// Helper function to filter users by date range
// function getDateFilter(dateFilter) {
//     const today = new Date();
//     console.log("Today varible:", today);
//     let startDate;
//     console.log("varible start date:",startDate);

//     switch (dateFilter) {
//         case 'today':
//             startDate = new Date(today.setHours(0, 0, 0, 0));
//             console.log("switch today : ",startDate);
//             break;
//         case 'yesterday':
//             startDate = new Date(today.setDate(today.getDate() - 1));
//             startDate.setHours(0, 0, 0, 0);
//             console.log("switch yesterday : ",startDate);
//             break;
//         case 'last7Days':
//             startDate = new Date(today.setDate(today.getDate() - 7));
//             console.log("switch tast7 : ",startDate);
//             break;
//         case 'last30Days':
//             startDate = new Date(today.setDate(today.getDate() - 30));
//             console.log("switch last30days : ",startDate);
//             break;
//         default:
//             return {};
//     }

//     return { registerDate: { $gte: startDate } };
// }

// Helper function to filter users by date range
// Helper function to set a Date object to midnight in the local time zone
// function setLocalMidnight(date) {
//     // Set the time to midnight local time (00:00:00.000)
//     date.setHours(0, 0, 0, 0);
//     return date;
// }

// // Main function to filter users by date range
// function getDateFilter(dateFilter) {
//     const today = new Date(); // Get the current date and time in local time
//     console.log("Before before localstring",today);
//     console.log("Testing purpose date:", today.toLocaleString()); // Log the date in local time
//     let startDate;

//     switch (dateFilter) {
//         case 'today':
//             // Set today's date to local midnight
//             startDate = setLocalMidnight(new Date()); // Use new Date() to ensure local midnight
//             console.log("Switch today:", startDate.toLocaleString());
//             break;
//         case 'yesterday':
//             // Create a copy of today's date, subtract one day, and set to local midnight
//             startDate = new Date(); // Create a new Date object to avoid modifying the original today
//             startDate.setDate(today.getDate() - 1);
//             startDate = setLocalMidnight(startDate); // Reset time to midnight of the previous day
//             console.log("Switch yesterday:", startDate.toLocaleString());
//             break;
//         case 'last7Days':
//             // Create a copy of today's date, subtract seven days, and set to local midnight
//             startDate = new Date(); // Create a new Date object to avoid modifying the original today
//             startDate.setDate(today.getDate() - 7);
//             startDate = setLocalMidnight(startDate); // Reset time to midnight of the date 7 days ago
//             console.log("Switch last7Days:", startDate.toLocaleString());
//             break;
//         case 'last30Days':
//             // Create a copy of today's date, subtract thirty days, and set to local midnight
//             startDate = new Date(); // Create a new Date object to avoid modifying the original today
//             startDate.setDate(today.getDate() - 30);
//             startDate = setLocalMidnight(startDate); // Reset time to midnight of the date 30 days ago
//             console.log("Switch last30Days:", startDate.toLocaleString());
//             break;
//         default:
//             return {}; // Return an empty object if no date filter is matched
//     }

//     console.log("Final start date (local midnight):", startDate.toLocaleString()); // Log the correctly set start date
//     return { registerDate: { $gte: startDate } }; // Example of MongoDB query filter
// }



// Helper function to set a Date object to midnight in the local time zone
function setLocalMidnight(date) {
    // Set the time to midnight local time (00:00:00.000)
    date.setHours(0, 0, 0, 0);
    return date;
}

// Helper function to set the end of the day (23:59:59.999)
function setLocalEndOfDay(date) {
    date.setHours(23, 59, 59, 999);
    return date;
}

// Main function to filter users by date range
function getDateFilter(dateFilter) {
    const today = new Date(); // Get the current date and time in local time
    let startDate;
    let endDate;

    switch (dateFilter) {
        case 'today':
            startDate = setLocalMidnight(new Date()); // Start of today
            endDate = setLocalEndOfDay(new Date());   // End of today
            break;
        case 'yesterday':
            startDate = new Date(); // Create a new Date object
            startDate.setDate(today.getDate() - 1);
            startDate = setLocalMidnight(startDate); // Start of yesterday
            endDate = new Date(startDate); // Copy of startDate
            endDate = setLocalEndOfDay(endDate); // End of yesterday
            break;
        case 'last7Days':
            startDate = new Date(); // Create a new Date object
            startDate.setDate(today.getDate() - 7);
            startDate = setLocalMidnight(startDate); // Start of 7 days ago
            endDate = setLocalEndOfDay(new Date()); // End of today
            break;
        case 'last30Days':
            startDate = new Date(); // Create a new Date object
            startDate.setDate(today.getDate() - 30);
            startDate = setLocalMidnight(startDate); // Start of 30 days ago
            endDate = setLocalEndOfDay(new Date()); // End of today
            break;
        default:
            return {}; // Return an empty object if no date filter is matched
    }

    // Return a MongoDB query filter for the specified date range
    return { registerDate: { $gte: startDate, $lte: endDate } };
}

// Example usage of the function:
console.log(getDateFilter('today'));     // Filters for today
console.log(getDateFilter('yesterday')); // Filters for yesterday
console.log(getDateFilter('last7Days')); // Filters for the last 7 days
console.log(getDateFilter('last30Days'));// Filters for the last 30 days






// API to get all users with filtering, searching, and pagination
app.get('/api/users/all', async (req, res) => {
    try {
        const { search = '', dateFilter, page = 1, limit = 10 } = req.query;
        const searchRegex = new RegExp(search, 'i'); // Case-insensitive search
        const dateQuery = getDateFilter(dateFilter);

        // Filtering and pagination
        const users = await User.find({
            $or: [{ name: searchRegex }, { email: searchRegex }],
            ...dateQuery
        })
        .skip((page - 1) * limit)
        .limit(Number(limit));

        const totalUsers = await User.countDocuments({
            $or: [{ name: searchRegex }, { email: searchRegex }],
            ...dateQuery
        });

        res.json({ users, totalUsers });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

// API to download filtered users as Excel
app.get('/api/users/download', async (req, res) => {
    try {
        const { search = '', dateFilter } = req.query;
        const searchRegex = new RegExp(search, 'i');
        const dateQuery = getDateFilter(dateFilter);

        const users = await User.find({
            $or: [{ name: searchRegex }, { email: searchRegex }],
            ...dateQuery
        });

        // Create Excel workbook and sheet
        const workbook = new excel.Workbook();
        const worksheet = workbook.addWorksheet('Users');

        // Add header row
        worksheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Trading Experience', key: 'tradingExperience', width: 20 },
            { header: 'Mobile Number', key: 'mobileNumber', width: 15 },
            { header: 'Registration Date', key: 'registerDate', width: 20 }
        ];

        // Add rows
        users.forEach(user => {
            worksheet.addRow({
                ...user.toObject(),
                registerDate: user.registerDate.toLocaleDateString('en-GB') // Format date as DD/MM/YYYY
            });
        });

        // Write to response
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');

        await workbook.xlsx.write(res);
        res.status(200).end();
    } catch (error) {
        console.error('Error downloading users:', error);
        res.status(500).send('Error downloading users');
    }
});

// Handle POST request to register a user
app.post('/api/users/user-register', async (req, res) => {
    try {
        const { name, email, mobileNumber } = req.body;

        // Check if the email or name already exists
        const existingUser = await User.findOne({ $or: [{ email }, { name }] });
        if (existingUser) {
            return res.status(400).send('Name or Email already registered');
        }

        // Create a new user
        const user = new User(req.body);
        await user.save();
        res.status(200).send('User registered successfully');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error registering user');
    }
});

// Define the schema for Admin
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Handle registration of admin
app.post('/api/admin/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the admin username already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password and save new admin
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });

    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({ message: 'Error registering admin' });
    }
});

// Handle admin login
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Find admin by username
        const admin = await Admin.findOne({ username });
        if (!admin) {
            console.log('Admin not found');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, admin.password);
        console.log(isMatch);  // Fixed typo for debugging

        if (!isMatch) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token as response
        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'), (err) => {
        if (err) {
            console.error('Error serving admin page:', err);
            res.status(err.status || 500).end();
        }
    });
});

// Handle 404 errors for unmatched routes
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Global error handling
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).send('Something went wrong!');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or exiting process
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });
});





