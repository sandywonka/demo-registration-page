# Demo Registration Page

This repository contains a demo registration page built using Django and React. The registration page allows users to sign up for an account by providing their name, email address, and password.

## Prerequisites

- [Python](https://www.python.org/downloads/) (3.6 or above) and [pip](https://pip.pypa.io/en/stable/installing/) are required to run the Django server.
- [Node.js](https://nodejs.org/en/download/) (10.0 or above) and [npm](https://www.npmjs.com/get-npm) are required to run the React app.

## Getting Started

To run the demo registration page, follow these steps:

1. Clone the repository using the following command:
   ```bash
   git clone https://github.com/sandywonka/demo-registration-page.git
   ```

2. Navigate to the Django directory:
   ```bash
   cd django
   ```

3. Install the Python dependencies using pip:
   ```bash
   pip install -r requirements.txt
   ```

4. Modify the database configuration in the Django settings. Open `django/demo_registration_page/settings.py` and update the database settings according to your local environment.

5. Apply the database migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the Django server:
   ```bash
   python manage.py runserver
   ```

   The server will start running at `http://localhost:8000`.

7. Open a new terminal and navigate to the React directory:
   ```bash
   cd ../react
   ```

8. Install the npm dependencies:
   ```bash
   npm install
   ```

9. Start the React app:
   ```bash
   npm start
   ```

   The React app will be accessible at `http://localhost:3000`.

10. Access the demo registration page by opening a web browser and visiting `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.