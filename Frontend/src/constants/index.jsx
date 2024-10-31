import { BotMessageSquare } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Video } from "lucide-react";
import { Search } from "lucide-react";
import { UserCheck } from "lucide-react";
import { ShieldCheck } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Idea Generation", href: "/ideas" },
  { label: "Trend Analysis", href: "/trends" },
];

export const testimonials = [
  {
    user: "Alex Turner",
    company: "Digital Storytellers",
    image: user1,
    text: "This platform has been a game-changer for my YouTube channel! The data-driven video ideas helped me create content that truly resonates with my audience, and I've seen a 40% increase in views within the first month!",
  },
  {
    user: "Lisa Monroe",
    company: "Vlog Wonders",
    image: user2,
    text: "The trend analysis feature is incredible! It allowed me to stay ahead of the curve and produce trending content before my competitors. The SEO tips also ensured my videos reached the right audience!",
  },
  {
    user: "Mark Peterson",
    company: "Tech Insight",
    image: user3,
    text: "The SEO optimization tips are spot on! My videos are ranking higher, and I'm reaching a broader audience thanks to the keyword suggestions. Highly recommend this tool for any serious content creator!",
  },
  {
    user: "Samantha Lee",
    company: "Healthy Living Hub",
    image: user4,
    text: "I love the real-time trend analysis! It gives me a clear picture of what's popular, allowing me to create videos that gain traction quickly. The insights have saved me hours of brainstorming!",
  },
  {
    user: "Kevin Brown",
    company: "Adventure Vlogs",
    image: user5,
    text: "Switching between long-form and shorts content has never been this seamless. It helps me adapt my content strategy effortlessly, and I've noticed a substantial increase in my subscribers!",
  },
  {
    user: "Natalie Simmons",
    company: "Beauty Bliss",
    image: user6,
    text: "Generating video ideas has never been this easy. The integration with ChatGPT provided unique and engaging content ideas that helped boost my channel's engagement rate by over 50%!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Video Ideas",
    description: "Generate engaging and data-driven video ideas using our AI integration with ChatGPT, based on user-inputted terms.",
  },
  {
    icon: <TrendingUp />,
    text: "Trend Analysis",
    description:
      "Stay ahead with real-time trend analysis, integrated with Google Trends and YouTube data, showing the most popular topics in your niche.",
  },
  {
    icon: <Video />,
    text: "Content Type Toggle",
    description: "Easily switch between Shorts and Long-Form video ideas, ensuring tailored suggestions for your preferred content type.",
  },
  {
    icon: <Search />,
    text: "SEO Tips and Keyword Suggestions",
    description: "Get SEO optimization advice and keyword suggestions to enhance your video's visibility and reach a broader audience.",
  },
  {
    icon: <UserCheck />,
    text: "User-Friendly Interface",
    description: "Seamlessly generate video ideas and trends through an intuitive, easy-to-navigate interface designed for content creators.",
  },
  {
    icon: <ShieldCheck />,
    text: "Subscription-Based Access",
    description: "Access premium features like unlimited idea generation and advanced trend analysis with our flexible subscription plans.",
  },
];

export const checklistItems = [
  {
    title: "AI-Powered Video Idea Generation",
    description:
      "Generate tailored video ideas based on user-inputted terms with ChatGPT integration, providing data-driven and inspirational suggestions.",
  },
  {
    title: "Real-Time Trend Analysis",
    description: "Analyze real-time trends using data from YouTube and Google Trends to discover what's popular in your niche.",
  },
  {
    title: "SEO Optimization & Keyword Suggestions",
    description: "Get SEO tips and keyword suggestions to enhance the visibility of your videos and maximize audience reach.",
  },
  {
    title: "Niche Filtering",
    description: "Filter trends and ideas by category (e.g., gaming, cooking, technology) to generate targeted video content.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: ["Private board sharing", "5 Gb Storage", "Web Analytics", "Private Mode"],
  },
  {
    title: "Pro",
    price: "$10",
    features: ["Private board sharing", "10 Gb Storage", "Web Analytics (Advance)", "Private Mode"],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: ["Private board sharing", "Unlimited Storage", "High Performance Network", "Private Mode"],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
