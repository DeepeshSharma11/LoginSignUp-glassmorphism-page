# Login & Signup Page with Role-Based Functionality

This repository contains a web-based **Login** and **Signup** application with role-based functionality for *Recruiters* and *Clients*. The application is designed with clean and modern UI elements, responsive design, and dynamic user interactions.

---

## Features

### Login Page
- Users can log in with predefined credentials.
- Based on the role, users are redirected to the appropriate server:
  - **Recruiter** → Redirected to Recruiter Server.
  - **Client** → Redirected to Client Server.
- Error handling for invalid username and password.

### Signup Page
- Separate sign-up options for **Recruiters** and **Clients**.
- Role-specific fields:
  - Recruiter: Company Name, Position
  - Client: Full Name, Organization
- Validates form inputs to prevent empty submissions.
- Redirects to the appropriate server after successful sign-up.

### UI Design
- Modern, minimalistic design with **frosted glass effect** background.
- Fully responsive for different screen sizes.
- Background images included for enhanced aesthetics.

---

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling, including responsive design and modern UI effects.
- **JavaScript**: For form validation, dynamic role-based interactions, and handling login/signup logic.

---

## Installation and Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourGitHubUsername/YourRepoName.git
   cd YourRepoName
   ```

2. **Setup**
   - Ensure all files (HTML, CSS, and JavaScript) are in the same directory.
   - Place the background images in an `images/` folder.

3. **Run the Application**
   - Open `index.html` in any modern browser to access the login and signup pages.

4. **Credentials**
   - Use the following credentials for testing:
     - Recruiter:
       - Username: `recruiterUser`
       - Password: `recruiterPass`
     - Client:
       - Username: `clientUser`
       - Password: `clientPass`

---

## Project Structure

```
project-folder/
│
├── index.html                # Main HTML file
├── recruiter-server.html     # Redirect page for Recruiters
├── client-server.html        # Redirect page for Clients
├── style.css                 # CSS for styling
├── script.js                 # JavaScript for functionality
└── images/                   # Folder for background images
    └── background.jpg        # Background image for pages
```

---

## Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/acdd8cb1-f412-4aac-b72f-dd66dfba57a9)


### signUp Page
**recruiter SignUp**
![image](https://github.com/user-attachments/assets/d0bb987f-8352-4ce2-8cee-418c5a398fdf)

**Clientlogin**
![image](https://github.com/user-attachments/assets/fdc04cb4-1066-4140-8afc-99c37e60ad9d)






---

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any inquiries or feedback, feel free to reach out:
- **GitHub**: [YourGitHubUsername](https://github.com/YourGitHubUsername)
- **Email**: your.email@example.com
