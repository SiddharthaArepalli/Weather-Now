# Weather-Now

**Weather-Now** is a simple, intuitive web application for checking the latest weather conditions in any city worldwide. Built to deliver fast, accurate weather updates, Weather-Now leverages modern web technologies and reliable weather APIs to provide users with current temperature, humidity, wind speed, and more.

---

## 🚀 Features

- **City-based Search**: Instantly retrieve weather information for any city.
- **Current Conditions**: Display temperature, humidity, wind, and weather description.
- **Responsive Design**: Mobile-friendly UI for seamless use on any device.
- **Easy to Use**: Minimalistic interface for quick and efficient weather checks.
- **API Integration**: Fetches live data from trusted weather APIs (e.g., OpenWeatherMap).

---

## 🖼️ Demo

![Weather-Now Screenshot](./assets/demo-screenshot.png)

---

## 🌐 Live Site

> [Try Weather-Now Live](https://your-deployment-url.com)  
> *(Replace with actual deployed URL if available)*

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Framework/Library**: [React.js](https://react.dev/) *(if used)*
- **APIs**: [OpenWeatherMap](https://openweathermap.org/api) *(or your chosen provider)*
- **Deployment**: GitHub Pages / Vercel / Netlify *(update as applicable)*

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiddharthaArepalli/Weather-Now.git
   cd Weather-Now
   ```
2. **Install dependencies** (if using Node.js/React):
   ```bash
   npm install
   ```

3. **Set up API Key**  
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) and get your API key.
   - Create a `.env` file in the project root:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
   - *(Adapt instructions based on your actual setup)*

4. **Run the app locally:**
   ```bash
   npm start
   ```
   *(Or open `index.html` directly if using plain HTML/JS)*

---

## 🧑‍💻 Usage

- Enter the name of a city in the search bar.
- Click "Search" or press Enter.
- View the latest weather details instantly.

---

## 📁 Project Structure

```
Weather-Now/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   └── ...
├── assets/
│   └── demo-screenshot.png
├── README.md
├── package.json
└── ...
```
*(Structure may vary depending on your stack.)*

---

## 📝 Contributing

Contributions are welcome!  
To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

- **Siddhartha Arepalli**
- [GitHub Profile](https://github.com/SiddharthaArepalli)
- [LinkedIn](https://www.linkedin.com/in/siddhartha-arepalli/) *(if applicable)*

---

> *Weather-Now – Stay updated, rain or shine!* ☀️🌧️# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
