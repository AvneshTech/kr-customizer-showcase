import imgHandbag from '../assets/images/hero-handbag.png';
import imgHoodie from '../assets/images/hero-hoodie.jpg';
import imgResults from '../assets/images/results-dashboard.png';
import imgHeadphones from '../assets/images/feature-headphones.png';
import imgLaptop from '../assets/images/feature-laptop.png';
import imgFashion from '../assets/images/category-fashion.png';
import imgJewelry from '../assets/images/category-jewelry.png';
import imgPod from '../assets/images/category-pod.png';
import imgTools from '../assets/images/category-tools.png';
import imgFood from '../assets/images/category-food.png';
import imgAuto from '../assets/images/category-automotive.png';

export const krData = {
  hero: {
    badge: "KR CUSTOMIZER STUDIO",
    title: "KR Customizer Product Customizer Software",
    description:
      "KR Customizer delivers smart product customizer software for online stores in Toronto, Ontario, and key U.S. markets like Texas, Ohio, and Missouri. It lets shoppers design products in real time. They can change colors, add text, and upload images. Every update appears instantly. No confusion. No surprises. Just clear previews and better decisions.",
    primaryCta: "GET STARTED FREE",
    secondaryCta: "BOOK FREE DEMO",
    previewTabs: [
      { id: "handbag", name: "Handbag" },
      { id: "hoodie", name: "Hoodie" },
      { id: "watch", name: "Smartwatch" },
    ],
    handbag: {
      image: imgHandbag,
      colors: [
        { id: "white", hex: "#f8fafc", name: "Classic White" },
        { id: "slate", hex: "#64748b", name: "Slate Gray" },
        { id: "emerald", hex: "#10b981", name: "Emerald Green" },
        { id: "navy", hex: "#1e293b", name: "Deep Navy" },
        { id: "amber", hex: "#f59e0b", name: "Warm Amber" },
        { id: "rose", hex: "#f43f5e", name: "Rose Pink" },
        { id: "orange", hex: "#f97316", name: "Burnt Orange" },
        { id: "tan", hex: "#d97706", name: "Saddle Tan" },
        { id: "blush", hex: "#fbcfe8", name: "Soft Blush" },
      ],
      patterns: [
        { id: "leopard", name: "Leopard Print", thumb: "#b45309" },
        { id: "floral", name: "Dark Floral", thumb: "#451a03" },
        { id: "croc", name: "Croc Embossed", thumb: "#1e1b4b" },
        { id: "pebble", name: "Pebble Grain", thumb: "#0f172a" },
      ],
    },
    hoodie: {
      image: imgHoodie,
      colors: [
        { id: "gray", hex: "#94a3b8", name: "Heather Gray" },
        { id: "black", hex: "#0f172a", name: "Midnight Black" },
        { id: "olive", hex: "#3f6212", name: "Olive Green" },
        { id: "sand", hex: "#d6d3d1", name: "Desert Sand" },
      ],
    },
  },

  topFeatures: {
    title: "Top Features You’ll Love",
    list: [
      {
        id: "realtime",
        title: "Real-Time Product Customization",
        description:
          "Customers can customize products live. Changes appear instantly. This product customizer software removes errors, confusions, guessings and builds buying confidence in Toronto and Ontario.",
        icon: "Sliders",
      },
      {
        id: "views",
        title: "Clear 2D and 3D Views",
        description:
          "The product customizer software previews in 2D and 3D. Customers can see their customized products before purchase",
        icon: "Box",
      },
      {
        id: "nocode",
        title: "Easy Setup Without Coding",
        description:
          "KR Customizer is simple to manage. This product customizer software works without technical skills or a complex setup for any North American store.",
        icon: "MousePointerClick",
      },
      {
        id: "engagement",
        title: "Better Customer Engagement",
        description:
          "Shoppers customize more. Strong product customizer software boosts conversions and interactivity. This works for Toronto, Texas, and Ohio online retailers.",
        icon: "Percent",
      },
      {
        id: "flexible",
        title: "Flexible Personalization Options",
        description:
          "This product customizer software supports text, images, colors, and materials. Give your shoppers total control over their designs and options.",
        icon: "Sparkles",
      },
      {
        id: "scale",
        title: "Built to Grow With Your Store",
        description:
          "KR Customizer scales easily. This product customizer software handles high traffic, large catalogs, and rapid store expansion across North America.",
        icon: "TrendingUp",
      },
    ],
  },

  results: {
    title: "Results Brands Can See",
    description:
      "Sales improve naturally. Engagement goes up. Returns go down. Customers feel happy with what they receive in Toronto, Missouri, and other North American markets. That’s why brands keep using KR Customizer and recommend it to others.",
    image: imgResults,
    metrics: [
      { label: "Revenue Growth", value: "+28%", sub: "Total sales increase" },
      { label: "Total Sales", value: "450K+", sub: "Across active merchants" },
      { label: "Conversion Rate", value: "12.5%", sub: "Average configured checkout" },
      { label: "Return Rate", value: "-62%", sub: "Reduction in order errors" },
    ],
  },

  whyDifferent: {
    title: "Why Does KR Customizer Feel Different From Other Tools?",
    subtitle:
      "KR Customizer is not built just for features. It is built for real shoppers and real store owners across Ontario, Texas, and Ohio. Everything feels simple, clear, and easy to trust.",
    cards: [
      {
        id: "shopping",
        title: "Built for Real Shopping Behavior",
        description:
          "KR Customizer product customizer software follows how people actually shop. Customers click, change, and see results instantly. No loading stress. No confusion. This real-time preview removes doubt and helps buyers feel confident before checkout in Missouri and Toronto.",
        image: imgHeadphones,
        tooltip: "Customize Every thing",
      },
      {
        id: "teams",
        title: "Simple for Teams, Powerful for Stores",
        description:
          "KR Customizer keeps things easy behind the scenes. No coding needed. No complex setup. Store owners manage products, rules, and options smoothly in Texas, Ontario, and other North American stores. Updates take minutes, not days.",
        image: imgLaptop,
      },
    ],
  },

  categories: {
    title: "3D Product Configurator",
    subtitle: "Perfect for Any Business",
    description:
      "The best part about KR Customizer's 3D product configurator is how versatile it is. If you want to offer a personalized experience for any catalog, we have you covered.",
    list: [
      {
        id: "apparel",
        title: "Fashion & Apparel",
        description:
          "When it comes to clothing, consumers have the ability to select the colors, fabrics, and patterns of the garments they purchase, and they can even add their own prints to the garments. The garments can be turned over so that individuals can get a better look at the details and see how the various options look when they are applied to the item.",
        image: imgFashion,
      },
      {
        id: "jewelry",
        title: "Jewelry & Accessories",
        description:
          "Give customers the freedom to design their own jewelry and turn them into returning buyers. With our 3D product configurator, they can customize rings, necklaces, bracelets, and watches—adjusting size, metal, stones, and engravings—while viewing a realistic 3D preview before making the final purchase.",
        image: imgJewelry,
      },
      {
        id: "pod",
        title: "Print-on-Demand (POD)",
        description:
          "From mugs, t-shirts, photographs, phone cases, and tote bags, you can customize everything and check the preview of how it looks after customization. It helps in increasing customer satisfaction and reducing errors.",
        image: imgPod,
      },
      {
        id: "tools",
        title: "Equipment & Tools",
        description:
          "People can customize every component, add-ons, or sets for machinery, tools, and devices. It lets them see each part in great detail and know how changes affect the whole.",
        image: imgTools,
      },
      {
        id: "food",
        title: "Food & Beverage",
        description:
          "When it comes to food and beverages, customers can personalize flavors, ingredients, packaging, and portion sizes to match their preferences. They can preview their selections in real time, helping them understand exactly how the final product will look and feel before placing an order.",
        image: imgFood,
      },
      {
        id: "auto",
        title: "Automotive",
        description:
          "Virtual showrooms are available to car and bike dealers. Because they can see colors, trims, wheels, interior features, and accessories from any aspect, they may design their perfect car without visiting a shop.",
        image: imgAuto,
      },
    ],
  },

  faqs: [
    {
      question: "How fast is the setup for KR Customizer in WooCommerce or Shopify?",
      answer:
        "Setup takes less than 30 minutes! You can install our plugin with 1 click, sync your product catalog, and begin creating interactive 3D/2D customization rules without writing any code.",
    },
    {
      question: "Does KR Customizer support businesses in Toronto, Texas, and Ohio?",
      answer:
        "Yes, absolutely. KR Customizer is optimized for North American e-commerce merchants across Canada (Ontario, Toronto) and the United States (Texas, Ohio, Missouri), providing high-speed CDN delivery and tax/currency compliance.",
    },
    {
      question: "Can customers upload their own custom logos and images?",
      answer:
        "Yes! Shoppers can upload custom PNG, JPG, or SVG graphics, resize them, rotate them, and preview exactly how their print or embroidery will look on apparel, promotional gifts, or packaging.",
    },
    {
      question: "What format are the manufacturing print files exported in?",
      answer:
        "Whenever an order is placed, KR Customizer automatically generates vector-ready PDF, DXF, or high-resolution PNG files with exact coordinates and color profiles sent directly to your order dashboard or manufacturer.",
    },
  ],
};
