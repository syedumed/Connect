import bgImage from "./bg.jpg";
import logo from "./Logo.svg";
import sample_cover from "./sample_cover.jpg"
import sample_profile from "./sample_profilePic.jpg"
import { Home, MessageCircle, Users, Search, UserIcon } from "lucide-react";

export const assets = {
  bgImage,
  logo,
  sample_cover,
  sample_profile
};

export const menuItemsData = [
  { to: "/", label: "Feed", Icon: Home },
  { to: "/messages", label: "messages",Icon: MessageCircle },
  { to: "/connections", label: "connections", Icon: Users },
  { to: "/discover", label: "discover", Icon: Search },
  { to: "/profile", label: "profile", Icon: UserIcon },
];

export const dummyUserData = {
  _id: "user_2zdFoZib5lNr614LgkONd8WG32",
  email: "admin@example.com",
  full_name: "Syed Umed",
  username: "Syed_Umed",
  bio: "🌍 Dreamer | 📚 Learner | 🚀 Doer\r\nExploring life one step at a time.\r\n✨ Staying curious. Creating with purpose.",
  profile_picture: sample_profile,
  cover_photo: sample_cover,
  location: "New York, NY",
  followers: ["user_2", "user_3"],
  following: ["user_2", "user_3"],
  connections: ["user_2", "user_3"],
  posts: [],
  is_verified: true,
};
// const dummyUser2Data = {
//   ...dummyUserData,
//   _id: "user_2",
//   username: "clark_kent",
//   full_name: "clark_kent",
//   profile_picture:"https://images.unsplash.com/photo-1690687505782-b7cc62530e0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
// };
// const dummyUser3Data = {
//   ...dummyUserData,
//   _id: "user_3",
//   username: "Bruce_Wayn",
//   full_name: "Bruce_Wayn",
//   profile_picture:"https://images.unsplash.com/photo-1690687505782-b7cc62530e0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
// };

export const dummyPostsData = [
  {
    _id: "post_1",
    userId: "user_2zdFoZib5lNr614LgkONd8WG32",
    username: "Syed_Umed",
    profile_picture: "https://randomuser.me/api/portraits/men/32.jpg",
    caption: "🚀 Just finished my first full-stack project using MERN! Excited to share it soon 💻🔥",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    createdAt: "2025-11-06T08:30:00Z",
    likes: ["user_2", "user_3", "user_4", "user_5"],
    comments: [
      {
        userId: "user_2",
        username: "AyeshaFarhath",
        text: "That’s amazing! Can’t wait to see your project 🎉",
        createdAt: "2025-11-06T09:00:00Z",
      },
      {
        userId: "user_3",
        username: "Junaid",
        text: "Keep pushing bro 💪",
        createdAt: "2025-11-06T09:10:00Z",
      },
    ],
  },
  {
    _id: "post_2",
    userId: "user_2",
    username: "AyeshaFarhath",
    profile_picture: "https://randomuser.me/api/portraits/women/68.jpg",
    caption: "☕ Nothing beats a quiet morning with coffee and code.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    createdAt: "2025-11-05T10:15:00Z",
    likes: ["user_3", "user_4", "user_5", "user_6"],
    comments: [
      {
        userId: "user_3",
        username: "Junaid",
        text: "Absolutely agree! Morning energy hits different 🌞",
        createdAt: "2025-11-05T11:00:00Z",
      },
    ],
  },
  {
    _id: "post_3",
    userId: "user_3",
    username: "Junaid",
    profile_picture: "https://randomuser.me/api/portraits/men/75.jpg",
    caption: "🎧 Late-night coding sessions with lo-fi beats hit differently.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    createdAt: "2025-11-04T21:45:00Z",
    likes: ["user_2", "user_4", "user_5"],
    comments: [
      {
        userId: "user_4",
        username: "DevLearner",
        text: "Same here! That’s when my best ideas come 💡",
        createdAt: "2025-11-04T22:00:00Z",
      },
    ],
  },
  {
    _id: "post_4",
    userId: "user_4",
    username: "DevLearner",
    profile_picture: "https://randomuser.me/api/portraits/men/43.jpg",
    caption: "📱 Built a new mobile UI with React Native — sleek and fast!",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    createdAt: "2025-11-03T14:20:00Z",
    likes: ["user_2", "user_3"],
    comments: [
      {
        userId: "user_2",
        username: "AyeshaFarhath",
        text: "Looks awesome! 🔥",
        createdAt: "2025-11-03T14:40:00Z",
      },
    ],
  },
  {
    _id: "post_5",
    userId: "user_5",
    username: "CodeExplorer",
    profile_picture: "https://randomuser.me/api/portraits/men/21.jpg",
    caption: "🌄 Took a break from coding to enjoy nature. Sometimes, you just need fresh air!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    createdAt: "2025-11-02T07:15:00Z",
    likes: ["user_2", "user_3", "user_4"],
    comments: [
      {
        userId: "user_3",
        username: "Junaid",
        text: "True that — balance is key 🌿",
        createdAt: "2025-11-02T07:30:00Z",
      },
    ],
  },
];
export const dummyRecentMessages = [
  {
    _id: "msg_1",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_2",
    username: "angelina jolie",
    profile_picture: "https://randomuser.me/api/portraits/women/68.jpg",
    lastMessage: "Hey! How’s your project going? 🚀",
    time: "2025-11-06T09:30:00Z",
    unread: true,
  },
  {
    _id: "msg_2",
    senderId: "user_3",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    username: "Junaid",
    profile_picture: "https://randomuser.me/api/portraits/men/75.jpg",
    lastMessage: "Check out this cool API I found!",
    time: "2025-11-06T08:45:00Z",
    unread: false,
  },
  {
    _id: "msg_3",
    senderId: "user_4",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    username: "DevLearner",
    profile_picture: "https://randomuser.me/api/portraits/men/43.jpg",
    lastMessage: "Let’s collaborate on a new React project 👨‍💻",
    time: "2025-11-05T21:10:00Z",
    unread: true,
  },
  {
    _id: "msg_4",
    senderId: "user_5",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    username: "CodeExplorer",
    profile_picture: "https://randomuser.me/api/portraits/men/21.jpg",
    lastMessage: "Nature trip this weekend? 🌄",
    time: "2025-11-05T18:25:00Z",
    unread: false,
  },
  {
    _id: "msg_5",
    senderId: "user_6",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    username: "TechGuru",
    profile_picture: "https://randomuser.me/api/portraits/men/36.jpg",
    lastMessage: "Just watched your latest post — amazing work 🔥",
    time: "2025-11-04T14:50:00Z",
    unread: false,
  },
];

export const dummyConnectionData = [
  {
    _id: "user_2",
    full_name: "Amanda Waynes",
    username: "AmandaWaynes",
    bio: "☕ Coffee lover | 💻 Frontend Developer | ✨ Always learning.",
    profile_picture: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Hyderabad, India",
    is_verified: true,
  },
  {
    _id: "user_3",
    full_name: "Syed Ahefaz Junaid",
    username: "Junaid",
    bio: "💡 Backend Developer | ⚙️ MERN Stack | 🚀 Love building scalable apps.",
    profile_picture: "https://randomuser.me/api/portraits/men/75.jpg",
    location: "Bangalore, India",
    is_verified: false,
  },
  {
    _id: "user_4",
    full_name: "Clark Kent",
    username: "clark_kent",
    bio: "🦸 Full Stack Engineer | Passionate about design systems and clean code.",
    profile_picture: "https://randomuser.me/api/portraits/men/43.jpg",
    location: "New York, USA",
    is_verified: true,
  },
  {
    _id: "user_5",
    full_name: "Bruce Wayne",
    username: "Bruce_Wayne",
    bio: "🦇 Founder @WayneTech | 💼 Investor | 🧠 Tech Visionary.",
    profile_picture: "https://randomuser.me/api/portraits/men/21.jpg",
    location: "Gotham City",
    is_verified: true,
  },
  {
    _id: "user_6",
    full_name: "Diana Prince",
    username: "WonderDev",
    bio: "💪 Software Engineer | 🌍 Advocate for Women in Tech | ⚡ React Enthusiast.",
    profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "London, UK",
    is_verified: true,
  },
];
// ✅ Connections (mutual)
export const dummyConnectionsData = [
  {
    _id: "user_2",
    full_name: "angelina jolie",
    username: "AyeshaFarhath",
    bio: "☕ Coffee lover | 💻 Frontend Developer | ✨ Always learning.",
    profile_picture: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Hyderabad, India",
    is_verified: true,
  },
  {
    _id: "user_3",
    full_name: "Syed Ahefaz Junaid",
    username: "Junaid",
    bio: "💡 Backend Developer | ⚙️ MERN Stack | 🚀 Love building scalable apps.",
    profile_picture: "https://randomuser.me/api/portraits/men/75.jpg",
    location: "Bangalore, India",
    is_verified: false,
  },
  {
    _id: "user_4",
    full_name: "Clark Kent",
    username: "clark_kent",
    bio: "🦸 Full Stack Engineer | Passionate about design systems and clean code.",
    profile_picture: "https://randomuser.me/api/portraits/men/43.jpg",
    location: "New York, USA",
    is_verified: true,
  },
];

// ✅ Followers
export const dummyFollowersData = [
  {
    _id: "user_5",
    full_name: "Bruce Wayne",
    username: "Bruce_Wayne",
    bio: "🦇 Founder @WayneTech | 💼 Investor | 🧠 Tech Visionary.",
    profile_picture: "https://randomuser.me/api/portraits/men/21.jpg",
    location: "Gotham City",
    is_verified: true,
  },
  {
    _id: "user_6",
    full_name: "Diana Prince",
    username: "WonderDev",
    bio: "💪 Software Engineer | 🌍 Advocate for Women in Tech | ⚡ React Enthusiast.",
    profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "London, UK",
    is_verified: true,
  },
  {
    _id: "user_7",
    full_name: "Barry Allen",
    username: "SpeedCoder",
    bio: "⚡ Fastest learner alive | 💻 Frontend wizard | 🚀 JavaScript sprinter.",
    profile_picture: "https://randomuser.me/api/portraits/men/36.jpg",
    location: "Central City",
    is_verified: false,
  },
];

// ✅ Following
export const dummyFollowingData = [
  {
    _id: "user_8",
    full_name: "Selina Kyle",
    username: "CodeCat",
    bio: "🐈 UI/UX Designer | 💅 Passionate about elegant interfaces.",
    profile_picture: "https://randomuser.me/api/portraits/women/72.jpg",
    location: "Gotham City",
    is_verified: false,
  },
  {
    _id: "user_9",
    full_name: "Arthur Curry",
    username: "AquaTech",
    bio: "🌊 Backend Developer | 🐠 Exploring deep data structures.",
    profile_picture: "https://randomuser.me/api/portraits/men/41.jpg",
    location: "Atlantis",
    is_verified: true,
  },
  {
    _id: "user_10",
    full_name: "Peter Parker",
    username: "WebWizard",
    bio: "🕸️ React Developer | 📸 Part-time photographer | 🧠 Curious learner.",
    profile_picture: "https://randomuser.me/api/portraits/men/55.jpg",
    location: "New York, USA",
    is_verified: false,
  },
];

// ✅ Pending Connection Requests
export const dummyPendingConnectionsData = [
  {
    _id: "user_11",
    full_name: "Tony Stark",
    username: "IronDev",
    bio: "🤖 Building cool stuff | 💼 Founder of Stark Industries.",
    profile_picture: "https://randomuser.me/api/portraits/men/20.jpg",
    location: "Malibu, USA",
    is_verified: true,
  },
  {
    _id: "user_12",
    full_name: "Natasha Romanoff",
    username: "BlackCoder",
    bio: "🕶️ Cybersecurity expert | 💻 Passionate about ethical hacking.",
    profile_picture: "https://randomuser.me/api/portraits/women/60.jpg",
    location: "Moscow, Russia",
    is_verified: true,
  },
  {
    _id: "user_13",
    full_name: "Steve Rogers",
    username: "CapCode",
    bio: "🇺🇸 Software Architect | 💪 Leading by example | ❤️ Open Source Advocate.",
    profile_picture: "https://randomuser.me/api/portraits/men/47.jpg",
    location: "Brooklyn, USA",
    is_verified: true,
  },
];
export const dummyMessages = [
  {
    _id: "chat_1",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_2",
    text: "Hey! How’s your project going? 🚀",
    time: "2025-11-06T09:30:00Z",
  },
  {
    _id: "chat_2",
    senderId: "user_2",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    text: "It’s going great! Adding authentication today 🔐",
    time: "2025-11-06T09:32:00Z",
  },
  {
    _id: "chat_3",
    senderId: "user_3",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    text: "Bro check this API! It might help your project.",
    time: "2025-11-06T08:45:00Z",
  },
  {
    _id: "chat_4",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_3",
    text: "Nice! Thanks for sharing 🔥",
    time: "2025-11-06T08:47:00Z",
  },
  {
    _id: "chat_5",
    senderId: "user_4",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    text: "Let's collaborate on something new! 👨‍💻",
    time: "2025-11-05T21:10:00Z",
  },
  {
    _id: "chat_6",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_4",
    text: "Sure! React or Node project?",
    time: "2025-11-05T21:15:00Z",
  },
  {
    _id: "chat_7",
    senderId: "user_5",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    text: "Nature trip this weekend? 🌄",
    time: "2025-11-05T18:25:00Z",
  },
  {
    _id: "chat_8",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_5",
    text: "Yeah, let's plan it!",
    time: "2025-11-05T18:27:00Z",
  },
  {
    _id: "chat_9",
    senderId: "user_6",
    receiverId: "user_2zdFoZib5lNr614LgkONd8WG32",
    text: "Your latest post was amazing 🔥",
    time: "2025-11-04T14:50:00Z",
  },
  {
    _id: "chat_10",
    senderId: "user_2zdFoZib5lNr614LgkONd8WG32",
    receiverId: "user_6",
    text: "Thank you so much! 😊",
    time: "2025-11-04T14:52:00Z",
  },
];



