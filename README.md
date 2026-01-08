# HealthApp - Medication Management for Elderly

**Course:** Embedded Systems  
**University:** Iran University of Science and Technology  
**Technologies:** React Native, Expo, Django (Backend), MQTT, ESP32, HX711 load cell sensor

---

## Project Overview
HealthApp is a mobile application designed to help elderly users manage their medications. The app provides reminders for medication intake, detects and logs when medications are taken, and communicates with a smart pillbox using sensors and IoT protocols.

The project integrates hardware and software components, including ESP32 sensors, a backend server with Django, and a React Native frontend, to provide a seamless medication tracking and notification system.

## Features
- **Main Page**: Displays pill box information such as Name, Status, Schduled Time, and Remaining Count.
- **Navigation**: File-based routing implemented with Expo Router.
- **Push Notifications**: Sends reminders even if the app is closed, with repeated alerts if medication is not taken.
- **Pillbox Detection**: Detects if the pill container is removed and logs the time automatically.
- **Backend Communication**: Uses Django and MQTT to synchronize data between the mobile app and ESP32 hardware.

## Hardware & IoT Integration
- **ESP32 & HX711 Load Cell**: Measures weight of pills to detect removal.
- **MQTT Protocol**: Facilitates real-time communication between ESP32 and the server.
- **Django Backend**: Processes sensor data, sends notifications, and provides API endpoints for the mobile app.

## Getting Started
To run the mobile app locally:

1. Clone the repository:
```bash
git clone https://github.com/Moeinkhan/Health_App.git
```
2. Navigate to the project folder:
```bash
cd Health_App
```
3. Install dependencies:
```bash
npm install --legacy-peer-deps
```
4. Start the Expo development server:
```bash
npx expo start
```
5. Open the app on a mobile device using **Expo Go** or on an emulator.

If you prefer not to clone the repository, you can install the app directly:

Download APK file from here: [HealthApp.apk](https://github.com/Moeinkhan/Health_App/releases/download/v1.0.0/HealthApp.apk)

## Links
- **Backend API Docs:** [https://embedded.liara.run/api/docs](https://embedded.liara.run/api/docs)
- **Android App Download:** [APK Build Link](https://github.com/Moeinkhan/Health_App/releases/download/v1.0.0/HealthApp.apk)

## Notes
- Developed as a final project for the **Embedded Systems** course.
- Integrates mobile development, IoT hardware, and backend communication.
- Designed for educational purposes and demonstrates full-stack mobile-IoT application development.

## License
This project is for educational use and does not include any commercial license.

