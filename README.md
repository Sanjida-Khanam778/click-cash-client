# Micro-Task and Earning Platform (Click Care) 
 
## Overview
Click Care is a Micro-Task and Earning Platform designed to connect workers and buyers in a streamlined environment. Workers can complete small tasks to earn rewards, while buyers can manage tasks and payments efficiently. The platform offers secure and categorized roles, ensuring a reliable experience for all users.

## Live Site 
[Click Care Live Site](https://click-cash-9fbe3.web.app) 
 
## Admin Details
- **Admin Username:** Sanjida Khanam
- **Admin Email:** clickcare@gmail.com
- **Admin Password:** Admin12 

> **Note:** Ensure to change admin credentials after deployment for security.

## Features
### For Workers:
1. Complete tasks to earn rewards by viewing and submitting tasks for review.
2. Withdraw earned coins securely.
3. Receive notifications when submissions are reviewed by buyers.

### For Buyers:
1. Create and manage tasks for workers.
2. Review worker submissions with options to approve or reject.
3. Make payments to workers upon task completion.
4. Purchase coins using Stripe for streamlined payments.

### For Admin:
1. Manage platform operations, including user roles and permissions.
2. Address user reports and maintain system integrity.
3. Oversee all transactions and activities for transparency.

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: Firebase
- Payment Integration: Stripe

## Dependencies:
```
"dependencies": {
    "@headlessui/react": "^2.2.0",
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.5.0",
    "@tanstack/react-query": "^5.64.1",
    "@tanstack/react-router": "^1.95.6",
    "aos": "^2.3.4",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.5.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.1",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  }
```
## Getting Started
### Prerequisites
- Node.js
- Firebase Account
- Stripe Account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sanjida-Khanam778/click-care.git
   ```
2. Navigate to the project directory:
   ```bash
   cd click-care
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Firebase and Stripe keys in `.env` file.

### Running the Application
```bash
npm start
```

## Usage
1. Register as a Worker or Buyer.
2. Browse available tasks or create a new task.
3. Complete tasks to earn rewards or manage submissions as a Buyer.
4. Admin can monitor all activities and ensure platform integrity.

## Security
- User roles are categorized to prevent unauthorized access.
- Payments are secured through Stripe integration.
- Regular audits and monitoring by Admin.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or support, please email us at [clickcare@gmail.com](mailto:clickcare@gmail.com).

## Acknowledgments
- Inspired by platforms like Picoworkers and Clickworker.
- Special thanks to the DevSafeX team for their support and collaboration.

