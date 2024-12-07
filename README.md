# Room: A Modern Video Conferencing App  

Room is a video conferencing application built using **Stream**, **React**, **Shadcn**, and **Clerk**. It offers real-time communication, secure user authentication, and a sleek, responsive design.  

## Features  
- **Real-Time Communication**: Powered by Stream for high-quality video and audio.  
- **Intuitive Interface**: Built with React and styled using Shadcn for a modern look and feel.  
- **Secure Authentication**: Integrated with Clerk for seamless and secure user login.  
- **Customizable Rooms**: Join or create meeting spaces effortlessly.  

## Tech Stack  
- **Frontend**: React  
- **UI Library**: Shadcn  
- **Authentication**: Clerk  
- **Real-Time Communication**: Stream  

## Installation and Setup  

### Prerequisites  
- [Node.js](https://nodejs.org/) installed.  
- Stream and Clerk accounts set up.  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/room.git  
   cd room  
   ```  

2. Install dependencies:  
   ```bash
   npm install  
   ```  

3. Configure environment variables:  
   Create a `.env` file in the project root with the following:  
   ```env
   REACT_APP_STREAM_API_KEY=your-stream-api-key  
   REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api  
   REACT_APP_CLERK_API_KEY=your-clerk-api-key  
   ```  

4. Start the development server:  
   ```bash
   npm start  
   ```  

5. Open your browser and go to `http://localhost:3000`.  

## Deployment  
To build the app for production:  
```bash
npm run build  
```  
Deploy the `build` directory to your hosting provider of choice.  

## Contributing  
Contributions are welcome! Feel free to fork the repository and submit a pull request.  

## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  

## Acknowledgments  
- [Stream](https://getstream.io) for real-time communication.  
- [Clerk](https://clerk.dev) for authentication.  
- [Shadcn](https://shadcn.dev) for UI components.  
```
