import { FaRupeeSign } from 'react-icons/fa';
import { LuBadgePercent } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import { MdHandshake } from 'react-icons/md';
import { faq } from './types';
import { FaUserCheck } from 'react-icons/fa';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { MdOutlineScreenSearchDesktop, MdInventory } from 'react-icons/md';

// Home Data
export const HomeShopCardsData = [
  {
    id: 1,
    tagTitle: 'Top Rated',
    imageLink: '/shop1.png',
    imageAltDesc: 'Astel Systems',
    shopName: 'Astel Systems',
    location: 'C 7, Tonk Road, Gandhi Nagar, Jaipur, Rajasthan 302015',
    link: 'https://www.google.com/maps/place/Astel+Systems+-+Best+Mobile+Shop(+Mobile+Ki+Dukan)+in+Jaipur/@26.886707,75.7996801,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4266c78339b:0xf106407e88e5d83a!8m2!3d26.886707!4d75.802255!16s%2Fg%2F1yfj675hw?hl=en-IN&entry=ttu',
    rating: 4.9,
    ratingNum: 1283,
    phoneNumber: '+919828012200',
  },
  {
    id: 2,
    tagTitle: 'Top Rated',
    imageLink: '/shop3.png',
    imageAltDesc: 'Shivaay Mobiles & More',
    shopName: 'Shivaay Mobiles & More',
    location: '38/3, Kiran Path, Madhyam Marg, Kiran Path, Mansarovar Sector 3, Mansarovar, Jaipur, Rajasthan 302020',
    link: 'https://www.google.com/maps/place/Shivaay+Mobiles+%26+More+-+Best+Mobile+Shop,+Laptop+Shop,+LED+Retail+Shop,+Desktop+Service+Centre+(Mobile+ki+Dukan)/@26.8673959,75.7545785,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52886063d29:0xd9e62430fdaa941f!8m2!3d26.8673959!4d75.7571534!16s%2Fg%2F11q1c_nj82?hl=en-IN&entry=ttu',
    rating: 4.9,
    ratingNum: 385,
    phoneNumber: '+91-9929094574',
  },
  {
    id: 3,
    tagTitle: 'Top Rated',
    imageLink: '/shop2.png',
    imageAltDesc: 'Mobile Station',
    shopName: 'Mobile Station',
    location:
      'Shop No 20, JDA Market Near Burger Farm, Opp. Jaipur Electronic Market, Ridhi Sidhi Chouraha, Jaipur, Rajasthan 302018',
    link: 'https://www.google.com/maps/place/Mobile+Station,+the+best+Mobile+Ki+Dukan/@26.8786155,75.7560296,15z/data=!4m10!1m2!2m1!1sMobile+Station,+the+best+Mobile+Ki+Dukan!3m6!1s0x396db1af498c33a9:0x60dc645c5033d84e!8m2!3d26.8728368!4d75.7755053!15sCihNb2JpbGUgU3RhdGlvbiwgdGhlIGJlc3QgTW9iaWxlIEtpIER1a2FuWikiJ21vYmlsZSBzdGF0aW9uIHRoZSBiZXN0IG1vYmlsZSBraSBkdWthbpIBEGNlbGxfcGhvbmVfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnRlRWxwUjJwUlJSQULgAQA!16s%2Fg%2F11hs37qs78?hl=en-IN&entry=ttu',
    rating: 4.9,
    ratingNum: 559,
    phoneNumber: '+91-7793040006',
  },
  {
    id: 4,
    tagTitle: 'Top Rated',
    imageLink: '/shop4.png',
    imageAltDesc: 'TOMHUNT A Mobile Gallery',
    shopName: 'TOMHUNT A Mobile Gallery',
    location: 'shop no 2, 80/16, Kumbha Marg, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033',
    link: 'https://www.google.com/maps/place/TOMHUNT+A+Mobile+Gallery/@26.8697301,75.7347982,12z/data=!4m10!1m2!2m1!1sTOMHUNT+A+Mobile+Gallery!3m6!1s0x396dc98e7d1be623:0x35edc2024450c5de!8m2!3d26.7984224!4d75.8160704!15sChhUT01IVU5UIEEgTW9iaWxlIEdhbGxlcnlaGiIYdG9taHVudCBhIG1vYmlsZSBnYWxsZXJ5kgEQY2VsbF9waG9uZV9zdG9yZeABAA!16s%2Fg%2F11c1x08yc0?hl=en-IN&entry=ttu',
    rating: 4.5,
    ratingNum: 108,
    phoneNumber: '+91-09983151078',
  },
];

export const HomepageFeaturesData = [
  {
    id: 1,
    title: 'Best price',
    icon: FaRupeeSign,
    desc: 'best Price, amazing deals and great offers.',
  },
  {
    id: 2,
    title: 'Genuine Products',
    icon: MdHandshake,
    desc: 'Explore wide range of 100% genuine mobile accessories with the best price.',
  },
  {
    id: 3,
    title: 'Exclusive Offers',
    icon: LuBadgePercent,
    desc: 'Discover amazing offers and deals on variety of mobiles and accessories!',
  },
  {
    id: 4,
    title: 'Premium Services',
    icon: FaStar,
    desc: 'Your trust, satisfaction and delightful experience are our top priorities!',
  },
];

export const HomeTestimonialData = [
  {
    id: 1,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    author: 'Ramesh',
    // company: ' age 39',
    content: `Maine Mobile Ki Dukan pe Samsung ke naye s22 Ultra model ke liye search kiya. Mujhe mere area ke pas jo 3-4 shops dikhai, main unpe offer dekh ke best choose kar paya. Phone bahut accha mila aur shop owner bhi polite tha. #nextgenerationshop`,
  },

  {
    id: 2,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 4,
    author: 'Neha',
    // company: 'Electronics Business',
    content: `I was looking for an iphone with a maximum discount as my budget was tight. Comparing Mobile Ki Dukan listed store deals, I got Rs. 8,000 off on Iphone 12 from a seller near my college. Awesome platform for mobile shopping." #nextgenerationshop`,
  },
  {
    id: 3,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 4,
    author: 'Rahul Sharma',
    // company: 'PF Samadhan',
    content: `My father urgently needed a basic 4G phone with big buttons. Through the location filter on Mobile Ki Dukan, I easily found mobile stores in our area of Jaipur selling keypad phones. We got a quick demo experience and bought from the nearest seller`,
  },
  {
    id: 4,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    author: 'Suraj Kumar',
    // company: 'VP, LLA',
    content:
      'As college students with limited budget, my friends & I struggled to find mobile covers. With 300+ jaipur shops listed, Mobile Ki Dukan made it so easy to pick stores having good designer covers at wholesale rate. We had a nice shopping trip in the old city area. #nextgenerationshop',
  },
  {
    id: 5,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 4,
    author: 'Manuj ',
    // company: 'Freelancer',
    content:
      'Being new to Jaipur, I was skeptical about getting cheated on a new iPhone purchase. But the transparent seller ratings & reviews on Mobile Ki Dukan gave confidence. Got my 13 Pro from a reputable shop at Nehru Place with warranty, without risk',
  },
];

export const HomePageCTA = {
  title: 'Discover Best Mobile Stores Near You!',
  desc: 'Searching for mobile shops near you? Discover the best collection of 100+ local mobile shop dealing in brands like Apple, Samsung, Xiaomi & more only on Mobile Ki Dukan. Find updated store listings, offers, contact details, directions and customer ratings.',
  btnUrl: '/register-your-business',
  bgUrl: '/cta-banner-3.jpg',
};

export const GeneralFaqQuestions = [
  {
    id: 1,
    question: 'What parameters do I need to check about listed mobile shops before visiting?',
    answer:
      'At mobile Ki Dukan you can check Customer ratings, brands availability matching your preferences, pricing, post-purchase support policy, ease of contact and location convenience.',
  },
  {
    id: 2,
    question: 'Whom do I contact if I face issues regarding the service quality of a listed shop?',
    answer:
      'Get in touch with the mobile Shop owner, The contact no has been provided for every store owner, Mobile Ki Dukan directly isn’t responsible for it.',
  },
  {
    id: 3,
    question: 'What happens if listed details such as mobile shop contact number is inaccurate?',
    answer:
      ' Our dedicated quality team at Mobile Ki Dukan takes data accuracy very seriously. Incorrect listings are removed immediately until info is verified again through appropriate checks.',
  },
  {
    id: 4,
    question: 'Does Mobile Ki Dukan provide after-sales service support for phones bought from listed sellers? ',
    answer:
      'We connect buyers to sellers and do not directly offer after-sales support. Though listed mobile shops are vetted thoroughly for capability to handle post-purchase servicing before being recommended.',
  },
  {
    id: 5,
    question: 'Can I buy mobiles online directly instead of having to visit the store?',
    answer:
      'Our primary model is connecting buyers and nearby shops for offline purchases, but we are working on an e-Commerce Model so stay tuned!',
  },
  {
    id: 6,
    question: 'Can I trust the ratings at Mobile ki Dukan?',
    answer:
      ' Absolutely, all the reviews and ratings at Mobile Ki Dukan are from the verified users that have firsthand experience.',
  },
];

// ABOUT
export const AboutPageCTA = {
  title: 'Take your mobile shop online with us!',
  desc: 'If you are a passionate mobile store owner looking for serious expansion online, Mobile Ki Dukan is the platform built just for you!Avail a direct channel for driving more walk-ins, sales requests, and branding among only relevant mobile buyers in India with just a few steps.',
  btnUrl: '/register-your-business',
  bgUrl: '/cta-banner-1.jpg',
};

export const testimonialData = [
  {
    id: 1,
    imgUrl: '/review-img.jpg',
    stars: 5,
    author: 'Ramesh',
    company: ' age 39',
    content: `Maine Mobile Ki Dukan pe Samsung ke naye s22 Ultra model ke liye search kiya. Mujhe mere area ke pas jo 3-4 shops dikhai, main unpe offer dekh ke best choose kar paya. Phone bahut accha mila aur shop owner bhi polite tha. #nextgenerationshop`,
  },
  {
    id: 2,
    imgUrl: '/review-img-2.jpeg',
    stars: 4,
    author: 'Mr. Rajesh Lakhani',
    company: 'Electronics Business',
    content:
      'Markals seemed like the right choice for our business in Jaipur. Our website needed an update, and they made it noticeable. They understand the practical challenges we face every day and provided regular updates.',
  },
  {
    id: 3,
    imgUrl: '/review-img-3.jpg',
    stars: 4,
    author: 'Pranay Sharma',
    company: 'PF Samadhan',
    content:
      'Siddharth & Shivam helped me curate content for my blog and helped me rank on some of the most trending topics. And also optimized it for my audience.',
  },
  {
    id: 4,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    author: 'Anirudh Sharma',
    company: 'VP, LLA',
    content:
      'Markals is an absolute game-changer! Their creative and development services exceeded my expectations. The team is not just skilled but also incredibly friendly and easy to work with. They turned my ideas into a stunning reality. Highly recommend Markals for anyone seeking top-notch creative solutions',
  },
  {
    id: 5,
    imgUrl: '/review-img-5.png',
    stars: 4,
    author: 'Aryan ',
    company: 'Freelancer',
    content:
      'Great work done by these folks, delivery was on time and design was really good. definately recommend if you need a creative agency.',
  },
];

export const mediaRecognition = [
  {
    id: 1,
    src: '/media-1.png',
    altText: 'Danik-bhashkar-logo',
  },
  {
    id: 2,
    src: '/media-2.png',
    altText: 'My-fm-logo',
  },
  {
    id: 3,
    src: '/media-3.png',
    altText: 'India-mobile-congress-logo',
  },
  {
    id: 4,
    src: '/media-4.png',
    altText: 'Startup-india-logo',
  },
  {
    id: 5,
    src: '/media-5.png',
    altText: 'iStart-logo',
  },
];

export const brandsRecognition = [
  {
    id: 1,
    src: '/media-1.png',
    altText: 'Danik-bhashkar-logo',
  },
  {
    id: 2,
    src: '/media-2.png',
    altText: 'My-fm-logo',
  },
  {
    id: 3,
    src: '/media-3.png',
    altText: 'India-mobile-congress-logo',
  },
  {
    id: 4,
    src: '/media-4.png',
    altText: 'Startup-india-logo',
  },
  {
    id: 5,
    src: '/media-5.png',
    altText: 'iStart-logo',
  },
];

export const markersLocation = [
  {
    id: 1,
    name: 'Astel Systems',
    address: 'C 7, Tonk Road, Gandhi Nagar, Jaipur, Rajasthan 302015',
    link: 'https://www.google.com/maps/place/Astel+Systems+-+Best+Mobile+Shop(+Mobile+Ki+Dukan)+in+Jaipur/@26.886707,75.7996801,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4266c78339b:0xf106407e88e5d83a!8m2!3d26.886707!4d75.802255!16s%2Fg%2F1yfj675hw?hl=en-IN&entry=ttu',
    rating: 4.9,
    phoneNumber: '+919828012200',
    position: { lat: 26.886860105099988, lng: 75.80227645767076 },
  },
  {
    id: 2,
    name: 'Shivaay Mobiles & More',
    address: '38/3, Kiran Path, Madhyam Marg, Kiran Path, Mansarovar Sector 3, Mansarovar, Jaipur, Rajasthan 302020',
    link: 'https://www.google.com/maps/place/Shivaay+Mobiles+%26+More+-+Best+Mobile+Shop,+Laptop+Shop,+LED+Retail+Shop,+Desktop+Service+Centre+(Mobile+ki+Dukan)/@26.8673959,75.7545785,17z/data=!3m1!4b1!4m6!3m5!1s0x396db52886063d29:0xd9e62430fdaa941f!8m2!3d26.8673959!4d75.7571534!16s%2Fg%2F11q1c_nj82?hl=en-IN&entry=ttu',
    rating: 4.9,
    phoneNumber: '+91-9929094574',
    position: { lat: 26.86768302093485, lng: 75.75714267116463 },
  },
  {
    id: 3,
    name: 'Mobile Station',
    address:
      'Shop No 20, JDA Market Near Burger Farm, Opp. Jaipur Electronic Market, Ridhi Sidhi Chouraha, Jaipur, Rajasthan 302018',
    link: 'https://www.google.com/maps/place/Mobile+Station,+the+best+Mobile+Ki+Dukan/@26.8786155,75.7560296,15z/data=!4m10!1m2!2m1!1sMobile+Station,+the+best+Mobile+Ki+Dukan!3m6!1s0x396db1af498c33a9:0x60dc645c5033d84e!8m2!3d26.8728368!4d75.7755053!15sCihNb2JpbGUgU3RhdGlvbiwgdGhlIGJlc3QgTW9iaWxlIEtpIER1a2FuWikiJ21vYmlsZSBzdGF0aW9uIHRoZSBiZXN0IG1vYmlsZSBraSBkdWthbpIBEGNlbGxfcGhvbmVfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnRlRWxwUjJwUlJSQULgAQA!16s%2Fg%2F11hs37qs78?hl=en-IN&entry=ttu',
    rating: 4.9,
    phoneNumber: '+91-7793040006',
    position: { lat: 26.873868799222233, lng: 75.77568482640969 },
  },
  {
    id: 4,
    name: 'TOMHUNT A Mobile Gallery',
    address: 'shop no 2, 80/16, Kumbha Marg, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033',
    link: 'https://www.google.com/maps/place/TOMHUNT+A+Mobile+Gallery/@26.8697301,75.7347982,12z/data=!4m10!1m2!2m1!1sTOMHUNT+A+Mobile+Gallery!3m6!1s0x396dc98e7d1be623:0x35edc2024450c5de!8m2!3d26.7984224!4d75.8160704!15sChhUT01IVU5UIEEgTW9iaWxlIEdhbGxlcnlaGiIYdG9taHVudCBhIG1vYmlsZSBnYWxsZXJ5kgEQY2VsbF9waG9uZV9zdG9yZeABAA!16s%2Fg%2F11c1x08yc0?hl=en-IN&entry=ttu',
    rating: 4.5,
    phoneNumber: '+91-9983151078',
    position: { lat: 26.80386581550804, lng: 75.81788230115532 },
  },
  {
    id: 1,
    name: 'Balaji Communication',
    address: '69/337, VT Rd, Ward Number 42, Mansarovar Sector 6, Mansarovar, Jaipur, Rajasthan 302020',
    phoneNumber: '+918952099999',
    link: 'https://www.google.com/maps/search/Balaji+Communication/@26.7942924,75.7874916,13z/data=!3m1!4b1?hl=en-IN&entry=ttu',
    rating: 4.9,
    position: { lat: 26.8612086014191, lng: 75.76320781211534 },
  },
  {
    id: 2,
    name: 'Mahendra Mobile',
    address: '62, Vijay Path, Sector 122, Agarwal Farm, Barh Devariya, Mansarovar, Jaipur, Rajasthan 302020',
    phoneNumber: '',
    link: 'https://www.google.com/maps/search/Mahendra+Mobile/@26.8558103,75.7540277,15z/data=!3m1!4b1?hl=en-IN&entry=ttu',
    rating: 3.9,
    position: { lat: 26.847329441589974, lng: 75.77009945118317 },
  },
  {
    id: 3,
    name: 'Smart Digital',
    address: 'S-3, Madhyam Marg, opp. sharda hospital, Sector 12, Mansarovar, Jaipur, Rajasthan 302020',
    phoneNumber: '+919314654084',
    link: 'https://www.google.com/maps/place/Smart+Digital/@26.8449283,75.7678869,17z/data=!3m1!4b1!4m6!3m5!1s0x396db501c4daf8ef:0xb6fae77d2fe25133!8m2!3d26.8449235!4d75.7704672!16s%2Fg%2F11b75gp4j0?hl=en-IN&entry=ttu',
    rating: 4.8,
    position: { lat: 26.84516279161753, lng: 75.77062812931105 },
  },
  {
    id: 4,
    name: 'Topline Communication',
    address: 'Mehal Road, Income Tax Colony, Jagatpura, Jaipur, Rajasthan 302017',
    phoneNumber: '+919784160174',
    link: 'https://www.google.com/maps/place/Topline+Communication/@26.8347641,75.8330192,17z/data=!3m1!4b1!4m6!3m5!1s0x396db62135d65dd5:0xec26d8b31197b92e!8m2!3d26.8347641!4d75.8355941!16s%2Fg%2F1ygbbbfrj?hl=en-IN&entry=ttu',
    rating: 4.1,
    position: { lat: 26.835046493703423, lng: 75.83561018933402 },
  },

  {
    id: 5,
    name: 'Hello Brothers Communication',
    address:
      'HB TOWER, 4/11, Shivanand Marg, Vidyut Abhiyanta Colony, Sector 2, Malviya Nagar, Jaipur, Rajasthan 302017',
    phoneNumber: '',
    link: 'https://www.google.com/maps/place/Hello+Brothers+Communication/@26.8502883,75.8137666,17z/data=!3m1!4b1!4m6!3m5!1s0x396db60d5bba1b65:0xe19b5f2d7b346c29!8m2!3d26.8502883!4d75.8163415!16s%2Fg%2F1td2kwx0?hl=en-IN&entry=ttu',
    rating: 3.9,
    position: { lat: 26.850561082838173, lng: 75.81627175864642 },
  },
  {
    id: 6,
    name: 'Madhav Mobile Malviyanagar',
    address: '1, 13, Sector 12 Rd, Siddharth Nagar, Sector 10, Malviya Nagar, Jaipur, Rajasthan 302017',
    phoneNumber: '+919782885566',
    link: 'https://www.google.com/maps/place/Madhav+Mobile+Malviyanagar/@26.8489922,75.8073979,17z/data=!3m1!4b1!4m6!3m5!1s0x396db60b1d2f8069:0x91706b24c72cf99b!8m2!3d26.8489922!4d75.8099728!16s%2Fg%2F1ptymrz02?hl=en-IN&entry=ttu',
    rating: 4.1,
    position: { lat: 26.849140546724826, lng: 75.80995670282647 },
  },
  {
    id: 7,
    name: 'Vikas Mobile Shop',
    address: '302033, Sector 8, Sector 6, Pratap Nagar, Jaipur, Rajasthan 302033',
    phoneNumber: '+919314969703',
    link: 'https://www.google.com/maps/place/Vikas+Mobile+Shop/@26.7942924,75.787631,13z/data=!4m10!1m2!2m1!1sVikas+Mobile+Shop!3m6!1s0x396dc98eb5c5288f:0x2e35d8472d5c9f5b!8m2!3d26.7982156!4d75.8130243!15sChFWaWthcyBNb2JpbGUgU2hvcFoTIhF2aWthcyBtb2JpbGUgc2hvcJIBEGNlbGxfcGhvbmVfc3RvcmXgAQA!16s%2Fg%2F11dxd9jqpm?hl=en-IN&entry=ttu',
    rating: 4.3,
    position: { lat: 26.801877009195522, lng: 75.8139809803346 },
  },
  {
    id: 8,
    name: 'Kesari Mobile Point',
    address:
      'Plot 28, Sikar Rd, opp. SECTOR ,2, behind murlipura, Sector 2, Vijay Bari, Vidyadhar Nagar, Jaipur, Rajasthan 302039',
    phoneNumber: '+919413323160',
    link: 'https://www.google.com/maps/place/Kesari+Mobile+Point/@26.9677322,75.7397364,14z/data=!4m10!1m2!2m1!1sKesari+Mobile+Point!3m6!1s0x396db3ca0ffacd85:0x510b198e4a141939!8m2!3d26.9593018!4d75.7723261!15sChNLZXNhcmkgTW9iaWxlIFBvaW50WhUiE2tlc2FyaSBtb2JpbGUgcG9pbnSSARBjZWxsX3Bob25lX3N0b3Jl4AEA!16s%2Fg%2F11bby72p90?hl=en-IN&entry=ttu',
    rating: 4.0,
    position: { lat: 26.96065594975897, lng: 75.77239501156029 },
  },
  {
    id: 9,
    name: 'Sujal communication',
    address: 'TULIP ENCLAVE, G-, Central Spine Rd, Sector 6, Vidyadhar Nagar, Jaipur, Rajasthan 302039',
    phoneNumber: '01412339688',
    link: 'https://www.google.com/maps/place/Sujal+communication/@26.9618752,75.7767166,17z/data=!3m1!4b1!4m6!3m5!1s0x396db3b4ea7fe965:0x435e72c9a5f5a4b7!8m2!3d26.9618752!4d75.7792915!16s%2Fg%2F1q5gjdnm5?hl=en-IN&entry=ttu',
    rating: 3.2,
    position: { lat: 26.962023398396187, lng: 75.7793183181745 },
  },
  {
    id: 10,
    name: 'Aashirwad Communication',
    address:
      'Teen Dukan, Shop No. - 504-505 Ratan Nagar Opp. Toran Marriage Garden, Sikar Rd, Jaipur, Rajasthan 302012',
    phoneNumber: '+919983409249',
    link: 'https://www.google.com/maps/place/Aashirwad+Communication/@26.9550477,75.7687064,17z/data=!3m1!4b1!4m6!3m5!1s0x396db3ae2d5c2943:0xb14c7f084a8384be!8m2!3d26.9550477!4d75.7712813!16s%2Fg%2F11b7l6zcrq?hl=en-IN&entry=ttu',
    rating: 4.1,
    position: { lat: 26.955253286981254, lng: 75.77129738933823 },
  },
  {
    id: 11,
    name: 'TANWAR TELECOM',
    address: 'A91, Kalwar Rd, Raghunathpuri, Jagannath Puri, Jhotwara, Jaipur, Rajasthan 302012',
    phoneNumber: '+919680800808',
    link: 'https://www.google.com/maps/place/TANWAR+TELECOM/@26.9088158,75.71389,13z/data=!4m10!1m2!2m1!1sTANWAR+TELECOM!3m6!1s0x396db35215528541:0xedfc1ab358d4ecad!8m2!3d26.9436589!4d75.7479966!15sCg5UQU5XQVIgVEVMRUNPTVoQIg50YW53YXIgdGVsZWNvbZIBEGNlbGxfcGhvbmVfc3RvcmXgAQA!16s%2Fg%2F11tn_b9cvt?hl=en-IN&entry=ttu',
    rating: 5,
    position: { lat: 26.946695583969877, lng: 75.74744981722462 },
  },
  {
    id: 12,
    name: 'kothari mobile store',
    address: 'LG-2, BRIJ BHAWAN, opposite HP PETROL PUMP AND HOTEL REGENTA CENTRAL, Jhotwara, Jaipur, Rajasthan 302012',
    phoneNumber: '+918696659462',
    link: 'https://www.google.com/maps/place/kothari+mobile+store/@26.9434635,75.7461192,17z/data=!3m1!4b1!4m6!3m5!1s0x396db393ce48ae23:0x34c1cd7c6331231a!8m2!3d26.9434635!4d75.7486941!16s%2Fg%2F11skyklx8g?hl=en-IN&entry=ttu',
    rating: 4.7,
    position: { lat: 26.943707365105393, lng: 75.74865654515773 },
  },
];

export const RegisterBusinessFAQ = [
  {
    id: 1,
    question: 'What is Mobile Ki Dukan and how can it help my mobile shop?',
    answer:
      "Mobile Ki Dukan is Rajasthan's next generation shop and leading marketplace to list & promote mobile shops to drive discovery, walk-ins, calls & sales through better visibility among relevant buyers.",
  },
  {
    id: 2,
    question: 'As a mobile shop owner, what details should I provide when listing on Mobile Ki Dukan?',
    answer:
      'While registering, share accurate shop name, contact numbers, address, brands you deal in, price brackets, store images etc. to maximize leads.',
  },
  {
    id: 3,
    question: 'What kind of mobile shops can be listed on the Mobile Ki Dukan platform?',
    answer:
      'All mobile stores based out of Jaipur selling phones, accessories like covers or providing services like screen repairs are eligible. Make your mobile dukaan a next generation shop with us.',
  },
  {
    id: 4,
    question: 'Does my mobile shop need functional e-commerce to get listed and benefit?',
    answer:
      'No, only a physical storefront is needed. E-commerce enablement or custom CMS is not required at all to tap a larger offline customer base using our platform.',
  },
  {
    id: 5,
    question: "How can listings boost my individual mobile shop's visibility?",
    answer:
      "Through integrated search, ads, and buyer recommendations across one of Rajasthan's largest mobile marketplace networks visited by thousands seeking sellers matching their requirements.",
  },
  {
    id: 6,
    question: 'What happens if I enter incorrect details by mistake?',
    answer: 'You can contact us on our email and mobile number provided on the website.',
  },
  {
    id: 7,
    question: 'How can I make my mobile shop listing on Mobile Ki Dukan stand out?',
    answer:
      'Offer unique deals, highlight brands catered to, share store images, optimize contact details etc. so more nearby buyers interested in your mobile offerings can discover you.',
  },
];

export const OntheGoFAQ = [
  {
    id: 1,
    question: 'Is Mobile ki Dukan suitable for both beginners and experienced entrepreneurs?',
    answer:
      'Absolutely! Whether you’re a first-time business owner or an experienced entrepreneur, Mobile ki Dukan provides On-The-Go options that cater to your needs. Choose the model that aligns with your goals and make your mobile dukaan the next generation shop.',
  },
  {
    id: 2,
    question: 'What kind of mobile accessories can I sell through Mobile ki Dukan?',
    answer:
      'You can sell a wide range of mobile accessories, including phone cases, screen protectors, chargers, earphones, power banks, and more. Stay updated with the latest trends to offer what your customers need.',
  },
  {
    id: 3,
    question: 'What’s included in the “On-The-Go” package?',
    answer:
      'A fully furnished E-kart vehicle that’s shop-like and ready to impress customers, access to high-quality mobile accessories sourced from renowned brands.',
  },
  {
    id: 4,
    question: 'Can I customize my E-kart vehicle with Mobile ki Dukan branding?',
    answer:
      'Absolutely! Our fully furnished E-kart vehicles are shop-like and ready to impress customers. Showcase Mobile ki Dukan branding proudly as you serve your local community.',
  },
  {
    id: 5,
    question: 'Can I start my own mobile accessory business with Mobile ki Dukan?',
    answer:
      'Absolutely! Mobile ki Dukan’s “On-The-Go” option allows aspiring entrepreneurs to start their business at an affordable cost. No paperwork, just entrepreneurial spirit!',
  },
  {
    id: 6,
    question: 'Do I need any prior business experience to start “On-The-Go”?',
    answer:
      'Not at all! The “On-The-Go” model is designed for beginners. We provide guidance, support, and a user-friendly setup. Your enthusiasm is your best qualification!',
  },
];

export const RegisterFeaturesData = [
  {
    id: 1,
    title: 'Wide Reach & Visibility',
    icon: AiOutlineAreaChart,
    desc: 'Instant access to thousands of active mobile buyers.',
  },
  {
    id: 2,
    title: 'High Trust',
    icon: MdHandshake,
    desc: 'Platform verified listings with customer ratings.',
  },
  {
    id: 3,
    title: 'User Friendly',
    icon: FaUserCheck,
    desc: 'All about your mobile Store in one place.',
  },
  {
    id: 4,
    title: 'Low Cost',
    icon: FaRupeeSign,
    desc: 'List your business with us at a minimal cost. ',
  },
];

export const OnTheGoFeaturesData = [
  {
    id: 1,
    title: 'High Income',
    icon: FaRupeeSign,
    desc: 'Earn up to 50K per month with our e-carts with ease',
  },
  {
    id: 2,
    title: 'Low investment',
    icon: LuBadgePercent,
    desc: 'Start your own shop with minimal investment.',
  },
  {
    id: 3,
    title: 'Better brand value',
    icon: MdOutlineScreenSearchDesktop,
    desc: 'Mobile Ki Dukan Provides brand value and trust.',
  },
  {
    id: 4,
    title: 'Best Brand Stock',
    icon: MdInventory,
    desc: 'get access to branded inventory from our associated brands.',
  },
];

export const shopkeeperTestimonials = [
  {
    id: 1,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Humne COVID pandemic ke baad apni mobile store kholi thi. Pehle customer itne jyada nahi aate the, phir manuj sir se milne ke baad humne apni dukaan Mobile Ki Dukan pad list kar di, uske baad se enquiries aur sales kafi badhi hai. #meridukanmeripahchan`,
  },
  {
    id: 2,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 4,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `   I have run my family mobile business for 10 years but lately online apps were hurting my shop traffic. One of my customers suggested registering my Sanganer showroom number on Mobile Ki Dukan. In just a few months my overall profit is up by 30%!`,
  },
  {
    id: 3,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: ` Mera mobile accessories ka ek shop hai near hawa mahal jo thik thak chal raha tha but ek din mere bete ne kaha ki ise mobile ki Dukan pe list kar ke dekhte hai, starting ke kuch din zyada fark nahi tha but dheere dheere humare pass kaafi customers aane lage. #meridukanmeripahchan`,
  },

  {
    id: 4,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Mera Pratap Nagar me mobile Shop hai, maine 3 mahine pehle Mobile ki Dukan pe register kiya tha tab se kaafi new customers ke phone aur enquiries aati hai. #meridukanmeripahchan`,
  },
  {
    id: 5,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Meri ek choti si mobile ki dukaan hai, advertisement ke liye jyada paise nahi the. Mobile ki Dukan ki kam listing price hone ki wajah se maine ye try  kiya aur tab se mere business me kaafi fyada hua hai.`,
  },
];

export const onTheGoTestimonials = [
  {
    id: 1,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Maine socha tha mobile accessories ka chota sa outlet shuru karne ka, paise aur jagah ki kami thi. Mobile Ki Dukan ke cart rental model ne sab kuch provide kar diya, ab 2 mahine mein hi ₹75,000 kama chuka hoon! #meridukanmeripahchan`,
  },
  {
    id: 2,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 4,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `कम निवेश से शुरू किया मोबाइल कवर्स-स्क्रीनगार्ड्स का छोटा सा धंधा, Mobile Ki Dukan की मदद से। हर  महीना रेंट भरनी होती है, बाकी सारा प्रॉफिट मेरा। अच्छी कमाई हो रही है, जल्द एक और कार्ट लेने की सोच रहा हूँ!" #मेरी_दुकान_मेरी_पहचान`,
  },
  {
    id: 3,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Branded latest mobile covers and power banks are always in demand, getting them from legit sources as a new shop was difficult earlier. But Mobile Ki Dukan takes care of sourcing genuine stocks in bulk directly from brands and delivering to my moving e- Kart on time.   #meridukanmeripahchan`,
  },

  {
    id: 4,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Maine 2-3 saal se soch raha tha apni shop kholne ki lekin risk aur overheads se darr lagta tha. Mere dost ne suggest kiya Mobile Ki Dukan ka movable cart model try karne ka. Investment bahut kam, support zabardast. Raste mein khada rehkar hi itne customers aa rahe mobile covers aur chargers lene. Good response and earnings abhi se! #meridukanmeripahchan`,
  },
  {
    id: 5,
    imgUrl: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
    stars: 5,
    // author: 'Ramesh',
    // company: ' age 39',
    content: `Maine 6 mahine pehle franchise liya MobileKiDukan ka cart ka. Daily college ke bahar khada rehta hoon branded accessories bechne. Itne achhe sales ho rahe, abhi ke liye ek hi kaafi hai par future mein ek aur lene ka soch raha hoon. Low cost mein shuru kiya, ab tak to 1.5 lakh kamaya. Badhiya hai bhai. `,
  },
];
