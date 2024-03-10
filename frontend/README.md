git init  (in root directory)
git add .
git commit -m "1st comment"
cd ./frontend/
npm run dev

now install tailwind css (terminal and tailwindconfig.js)
{
    npm install -D tailwindcss
npx tailwindcss init
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
}

@tailwind base;
@tailwind components;
@tailwind utilities;

now use daisy ui for tailwind_css
npm i -D daisyui@latest

npm install --global yarn
npm install --save-dev vite
yarn add --dev vite

Pages and component folder created 
es7 rafc (react)

tailwind css glass morephism generator (for login glassy button)

install react icons [npm install react-icons --save]

now working on conversation: in conversation.jsx {user pic, user_name, emoji displayed } Altered Conversations.jsx and Sidebar.jsx(main file)

now working on logout symbol: LogoutButton.jsx imported BiLogOut (react symbol) imported and compiled in Sidebar.jsx {Error: Compare code files || see ispect in chrome}
{Collection of contacts is done now started P2P conversation MessageContainer}

components-messages-MessageContiner.jsx (To:{name})-Messages.jsx-Message.jsx file created
Messages.jsx contains all messages 
Message.jsx contain chatBubble for caht-start and chat-end
Message.jsx contain {avatar, message, date}


New part started {connect backend with frontend}

(frontend) npm i react-router-dom  for {BrowserRoute, Route, Switch and Link}


npm i react-hot-toast


// "events": "^3.3.0",