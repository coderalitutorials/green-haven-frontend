


// import React from 'react'
// import HeroSection from '../components/HeroSection'
// import StatsSection from '../components/StatsSection'
// import IronServices from '../components/IronServices'
// import IronFeatures from '../components/IronFeatures'
// import IronCallback from '../components/IronCallback'
// import CertifiedLogosSection from '../components/CertifiedLogosSection'
// import PesSaveFeatureSection from '../components/PesSaveFeatureSection'
// import PesSaveWhyChooseUs from '../components/PesSaveWhyChooseUs'
// import AboutIntroSection from '../components/AboutIntro'
// import MissionBannerSection from '../components/MissionBannerSection'
// // import WhyChoosePrimeShield from '../components/WhyChoosePrimeShield'
// import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'

// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <AboutIntroSection/>
//       <MissionBannerSection/>
//        <IronServices/>
       
//        {/* <WhyChoosePrimeShield/> */}
//        <PrimeShieldTestimonials/>
//        {/* <IronCallback/> */}
//        {/* <CertifiedLogosSection/> */}
//        {/* <StatsSection/> */}
        
//          {/* <PesSaveFeatureSection/> */}
//          {/* <PesSaveWhyChooseUs/> */}
      
    
//       {/* <IronFeatures/> */}
     
//     </div>
//   )
// }

// export default Home
















// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   SearchCheck,
//   Target,
//   LockKeyhole,
//   Home,
//   Building2,
//   Eye,
//   CircleCheck,
//   Check,
// } from "lucide-react";

// const businessName = "PrimeShield Services Sidcup";
// const phoneNumber = "07356 295780";
// const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
// const serviceArea = "Sidcup and nearby areas";

// const brandColors = {
//   orange: "#EE6C1A",
//   dark: "#151414",
//   black: "#050505",
//   grey: "#8B8B8B",
//   soft: "#E8E3DE",
//   muted: "#B9B2AA",
// };

// /* =========================================================
//    SERVICES
// ========================================================= */

// const services = [
//   {
//     number: "01",
//     eyebrow: "RODENT CONTROL",
//     title: "Rat & Mice\nControl",
//     description:
//       "Targeted rodent control for homes, flats, landlords and local businesses. We focus on identifying signs of activity and addressing the conditions that allow rodents to remain.",
//     image: "/images/rodents.webp",
//     path: "/services",
//   },
//   {
//     number: "02",
//     eyebrow: "BED BUG CONTROL",
//     title: "Bed Bug\nTreatment",
//     description:
//       "Careful treatment for bedrooms, rental properties and affected spaces, with the approach planned around the property and the extent of pest activity.",
//     image: "/images/bedbugs.webp",
//     path: "/services",
//   },
//   {
//     number: "03",
//     eyebrow: "WASP CONTROL",
//     title: "Wasp Nest\nTreatment",
//     description:
//       "Professional treatment for active wasp nests around residential and commercial properties, taking account of nest location and the surrounding environment.",
//     image: "/images/wasps.webp",
//     path: "/services",
//   },
// ];

// /* =========================================================
//    WHY CHOOSE
// ========================================================= */

// const reasons = [
//   {
//     number: "01",
//     icon: SearchCheck,
//     title: "Understand The Problem",
//     text: "We look at the signs, location and circumstances before deciding how the situation should be approached.",
//   },
//   {
//     number: "02",
//     icon: Target,
//     title: "Targeted Approach",
//     text: "Treatment is planned around the pest activity and the property rather than relying on a one-size-fits-all approach.",
//   },
//   {
//     number: "03",
//     icon: ShieldCheck,
//     title: "Professional Service",
//     text: "Clear communication from the initial contact through assessment, treatment and next steps.",
//   },
//   {
//     number: "04",
//     icon: LockKeyhole,
//     title: "Focus On Prevention",
//     text: "Where appropriate, we consider the conditions that may allow pest activity to return.",
//   },
// ];

// /* =========================================================
//    PROCESS
// ========================================================= */

// const process = [
//   {
//     number: "01",
//     title: "Get In Touch",
//     text: "Tell us what you are seeing and where the problem is occurring.",
//     icon: Phone,
//   },
//   {
//     number: "02",
//     title: "Assess The Situation",
//     text: "We establish the likely pest activity and understand the property.",
//     icon: Eye,
//   },
//   {
//     number: "03",
//     title: "Plan The Treatment",
//     text: "The appropriate treatment approach is explained before action is taken.",
//     icon: Target,
//   },
//   {
//     number: "04",
//     title: "Take Action",
//     text: "Treatment is carried out with attention to the affected area and surrounding environment.",
//     icon: CircleCheck,
//   },
// ];

// /* =========================================================
//    PROPERTY TYPES
// ========================================================= */

// const propertyTypes = [
//   {
//     number: "01",
//     title: "Homes & Flats",
//     text: "For homeowners, tenants and residential properties dealing with unwanted pest activity.",
//     icon: Home,
//   },
//   {
//     number: "02",
//     title: "Local Businesses",
//     text: "Professional pest-control support for local commercial environments and premises.",
//     icon: Building2,
//   },
// ];

// /* =========================================================
//    TESTIMONIALS
// ========================================================= */

// const testimonials = [
//   {
//     quote:
//       "The service was professional from the initial contact through to the treatment. Everything was explained clearly and the process was straightforward.",
//     name: "Local Homeowner",
//     area: "Sidcup",
//   },
//   {
//     quote:
//       "Very easy to deal with. We were able to explain what was happening and received clear information about the next steps.",
//     name: "Residential Customer",
//     area: "Sidcup",
//   },
//   {
//     quote:
//       "A professional service with good communication. The situation was assessed properly and the treatment was explained before anything was carried out.",
//     name: "Local Customer",
//     area: "South East London",
//   },
// ];

// /* =========================================================
//    ANIMATED NUMBER
// ========================================================= */

// function AnimatedNumber({
//   value,
//   prefix = "",
//   suffix = "",
//   duration = 1400,
// }) {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     amount: 0.55,
//   });

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;

//     let startTime = null;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;

//       const progress = Math.min(
//         (timestamp - startTime) / duration,
//         1
//       );

//       const eased = 1 - Math.pow(1 - progress, 4);
//       const current = Math.round(eased * value);

//       setCount(current);

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(value);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [inView, value, duration]);

//   return (
//     <span ref={ref}>
//       {prefix}
//       {count}
//       {suffix}
//     </span>
//   );
// }

// /* =========================================================
//    SECTION LABEL
// ========================================================= */

// function SectionLabel({ number, children, dark = false }) {
//   return (
//     <div
//       className={`flex items-center gap-3 text-[9px] font-semibold tracking-[0.3em] ${
//         dark ? "text-[#050505]/60" : "text-[#EE6C1A]"
//       }`}
//     >
//       <span
//         className={`flex h-7 w-7 items-center justify-center rounded-full border text-[8px] ${
//           dark
//             ? "border-[#050505]/20"
//             : "border-[#EE6C1A]/40"
//         }`}
//       >
//         {number}
//       </span>

//       <span>{children}</span>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN HOMEPAGE
// ========================================================= */

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   /* =========================================================
//      FORM
//   ========================================================= */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(
//         "https://primeshield-sidcup-backend.vercel.app/api/callback",
//         {
//           ...formData,
//           area: serviceArea,
//           business: businessName,
//           address,
//           phoneNumber,
//         }
//       ),
//       {
//         loading: "Sending your Sidcup callback request...",
//         success: () => {
//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           setLoading(false);

//           return `${businessName} will contact you shortly.`;
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Request failed. Please try again."
//           );
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "3px",
//           padding: "12px 18px",
//         },

//         success: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },

//         error: {
//           style: {
//             background: brandColors.dark,
//             color: "#FFFFFF",
//             border: "1px solid #ef4444",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <div
//       className="min-h-screen overflow-x-hidden bg-[#151414] text-[#E8E3DE]"
//       style={{
//         fontFamily:
//           "Inter, Arial, Helvetica, sans-serif",
//       }}
//     >
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#151414",
//             color: "#FFFFFF",
//             border:
//               "1px solid rgba(238,108,26,0.45)",
//             borderRadius: "3px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow:
//               "0 20px 60px rgba(0,0,0,0.5)",
//           },
//         }}
//       />

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[780px] overflow-hidden bg-[#050505] sm:min-h-[850px] lg:min-h-[900px]">
//         <div className="absolute inset-0">
//           <img
//             src="/images/herohome.webp"
//             alt="PrimeShield Services Sidcup"
//             className="h-full w-full object-cover opacity-55"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/30" />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
//         </div>

//         <div className="absolute left-[8%] top-[22%] hidden h-40 w-40 rounded-full border border-[#EE6C1A]/15 lg:block" />

//         <div className="absolute right-[-140px] top-[20%] h-[500px] w-[500px] rounded-full border border-[#EE6C1A]/10" />

//         <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] items-end px-5 pb-12 pt-32 sm:min-h-[850px] sm:px-8 sm:pb-16 lg:min-h-[900px] lg:px-12 lg:pb-20">
//           <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_370px]">
//             <div>
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                 }}
//                 className="mb-7 flex items-center gap-3"
//               >
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A] shadow-[0_0_20px_rgba(238,108,26,.7)]" />

//                 <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#B9B2AA]">
//                   Local Pest Control · Sidcup
//                 </span>
//               </motion.div>

//               <motion.h1
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.9,
//                   delay: 0.1,
//                 }}
//                 className="max-w-5xl text-[3.7rem] font-bold leading-[0.9] tracking-[-0.055em] text-[#E8E3DE] sm:text-[5.4rem] md:text-[6.8rem] lg:text-[8.2rem]"
//               >
//                 Pest problems
//                 <span className="block italic font-semibold text-[#EE6C1A]">
//                   handled properly.
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.3,
//                 }}
//                 className="mt-10 max-w-3xl"
//               >
//                 <p className="max-w-xl text-sm leading-7 text-[#B9B2AA] sm:text-base">
//                   Professional pest control for homes,
//                   flats and local businesses across
//                   Sidcup and nearby areas. We focus on
//                   understanding the problem before
//                   deciding how it should be treated.
//                 </p>

//                 <div className="mt-7 flex flex-wrap gap-3">
//                   <Link
//                     to="/services"
//                     className="group inline-flex items-center gap-3 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050505]"
//                   >
//                     Explore services

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#EE6C1A] transition-transform group-hover:rotate-45">
//                       <ArrowUpRight size={13} />
//                     </span>
//                   </Link>

//                   <a
//                     href={phoneHref}
//                     className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                   >
//                     <Phone size={13} />
//                     {phoneNumber}
//                   </a>
//                 </div>
//               </motion.div>
//             </div>

//             {/* HERO INFO CARD */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 35,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.25,
//               }}
//               className="relative overflow-hidden rounded-[2rem] border border-[#E8E3DE]/10 bg-[#151414]/85 p-6 backdrop-blur-xl sm:p-7"
//             >
//               <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#EE6C1A]/10" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8B8B8B]">
//                     PrimeShield Sidcup
//                   </span>

//                   <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#EE6C1A]">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
//                     Local
//                   </span>
//                 </div>

//                 <div className="mt-12">
//                   <p className="max-w-xs text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-[#E8E3DE]">
//                     A clearer way to deal with pest problems.
//                   </p>

//                   <p className="mt-5 text-xs leading-6 text-[#8B8B8B]">
//                     Tell us what you are seeing, where it
//                     is happening and we'll discuss the
//                     situation with you.
//                   </p>
//                 </div>

//                 <a
//                   href={phoneHref}
//                   className="mt-8 flex items-center justify-between rounded-2xl bg-[#EE6C1A] px-5 py-4 text-[#050505] transition hover:bg-[#f47c32]"
//                 >
//                   <div>
//                     <p className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60">
//                       Call PrimeShield
//                     </p>

//                     <p className="mt-1 text-base font-bold">
//                       {phoneNumber}
//                     </p>
//                   </div>

//                   <ArrowUpRight size={20} />
//                 </a>

//                 <div className="mt-5 flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-5">
//                   <MapPin
//                     size={15}
//                     className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                   />

//                   <p className="text-[9px] leading-5 text-[#8B8B8B]">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* HERO BOTTOM RAIL */}

//         <div className="absolute bottom-0 left-0 w-full border-t border-[#E8E3DE]/10 bg-[#050505]/80 backdrop-blur-md">
//           <div className="mx-auto grid max-w-[1500px] grid-cols-2 sm:grid-cols-4">
//             {[
//               "Rodent Control",
//               "Bed Bug Treatment",
//               "Wasp Treatment",
//               "Residential + Commercial",
//             ].map((item, index) => (
//               <div
//                 key={item}
//                 className={`flex items-center gap-3 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#8B8B8B] sm:px-8 ${
//                   index < 3
//                     ? "border-r border-[#E8E3DE]/10"
//                     : ""
//                 } ${
//                   index > 1
//                     ? "hidden sm:flex"
//                     : ""
//                 }`}
//               >
//                 <span className="text-[#EE6C1A]">
//                   0{index + 1}
//                 </span>

//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="border-b border-[#E8E3DE]/10 bg-[#151414]">
//         <div className="mx-auto grid max-w-[1500px] grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               value: 10,
//               suffix: "+",
//               label: "Years Experience",
//               text: "Proven track record in pest management.",
//             },
//             {
//               value: 55,
//               suffix: "/",
//               label: "Client Rating",
//               text: "Consistently high standards of service.",
//             },
//             {
//               value: 100,
//               suffix: "%",
//               label: "Safe Methods",
//               text: "Eco-friendly, family-safe treatments.",
//             },
//             {
//               value: 500,
//               suffix: "+",
//               label: "Local Projects",
//               text: "Trusted across Sidcup & nearby areas.",
//             },
//           ].map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`group relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 ${
//                 index % 2 === 0
//                   ? "border-r border-[#E8E3DE]/10"
//                   : ""
//               } ${
//                 index < 2
//                   ? "border-b border-[#E8E3DE]/10 lg:border-b-0"
//                   : ""
//               } ${
//                 index !== 3
//                   ? "lg:border-r"
//                   : ""
//               }`}
//             >
//               <div className="flex items-start justify-between">
//                 <div className="text-[3.4rem] font-bold leading-none tracking-[-0.055em] text-[#E8E3DE] sm:text-[4.5rem] lg:text-[5rem]">
//                   <AnimatedNumber
//                     value={stat.value}
//                     suffix={stat.suffix}
//                   />
//                 </div>

//                 <span className="mt-1 text-[8px] text-[#8B8B8B]">
//                   0{index + 1}
//                 </span>
//               </div>

//               <h3 className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8E3DE]">
//                 {stat.label}
//               </h3>

//               <p className="mt-3 max-w-[240px] text-[11px] leading-5 text-[#8B8B8B]">
//                 {stat.text}
//               </p>

//               <div className="mt-7 h-px w-8 bg-[#EE6C1A] transition-all duration-500 group-hover:w-20" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
//             <SectionLabel number="01">
//               A DIFFERENT APPROACH
//             </SectionLabel>

//             <div>
//               <h2 className="max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl lg:text-8xl">
//                 See the problem.
//                 <br />

//                 <span className="italic font-semibold text-[#EE6C1A]">
//                   Understand the cause.
//                 </span>

//                 <br />

//                 Control it.
//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-[#E8E3DE]/10 pt-8 md:grid-cols-2">
//                 <p className="text-sm leading-7 text-[#B9B2AA]">
//                   Pest control is not simply about
//                   treating what you can see. The
//                   property, signs of activity and
//                   surrounding conditions all matter.
//                 </p>

//                 <p className="text-sm leading-7 text-[#8B8B8B]">
//                   PrimeShield Services Sidcup takes a
//                   clear, structured approach so you
//                   understand what is happening and
//                   what the next step involves.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//             <div>
//               <SectionLabel number="02">
//                 WHAT WE HANDLE
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl lg:text-7xl">
//                 Focused services.
//                 <br />

//                 <span className="italic font-semibold text-[#8B8B8B]">
//                   Clear treatment.
//                 </span>
//               </h2>
//             </div>

//             <Link
//               to="/services"
//               className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9B2AA]"
//             >
//               View all services

//               <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3DE]/15 transition group-hover:border-[#EE6C1A] group-hover:text-[#EE6C1A]">
//                 <ArrowRight size={15} />
//               </span>
//             </Link>
//           </div>

//           <div className="grid gap-5 lg:grid-cols-12">
//             {/* FEATURED */}

//             <motion.div
//               whileHover={{
//                 y: -5,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="group relative min-h-[570px] overflow-hidden rounded-[2rem] bg-[#050505] lg:col-span-7"
//             >
//               <img
//                 src={services[0].image}
//                 alt={services[0].title.replace(
//                   "\n",
//                   " "
//                 )}
//                 className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent" />

//               <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
//                 <span className="text-xs font-semibold text-[#EE6C1A]">
//                   {services[0].number}
//                 </span>

//                 <span className="h-px w-8 bg-[#EE6C1A]" />

//                 <span className="text-[8px] font-bold tracking-[0.2em] text-[#E8E3DE]">
//                   {services[0].eyebrow}
//                 </span>
//               </div>

//               <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
//                 <div className="flex items-end justify-between gap-5">
//                   <div>
//                     <h3 className="whitespace-pre-line text-4xl font-bold leading-[0.92] tracking-[-0.045em] text-[#E8E3DE] sm:text-5xl">
//                       {services[0].title}
//                     </h3>

//                     <p className="mt-5 max-w-xl text-xs leading-6 text-[#B9B2AA]">
//                       {services[0].description}
//                     </p>
//                   </div>

//                   <Link
//                     to={services[0].path}
//                     className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505] transition-transform group-hover:rotate-45"
//                   >
//                     <ArrowUpRight size={19} />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>

//             {/* TWO SMALL SERVICES */}

//             <div className="grid gap-5 lg:col-span-5">
//               {services.slice(1).map((service) => (
//                 <motion.div
//                   key={service.number}
//                   whileHover={{
//                     x: 5,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   className="group relative min-h-[275px] overflow-hidden rounded-[2rem] border border-[#E8E3DE]/10 bg-[#050505]"
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title.replace(
//                       "\n",
//                       " "
//                     )}
//                     className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

//                   <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-semibold text-[#EE6C1A]">
//                         {service.number}
//                       </span>

//                       <span className="text-[8px] font-bold tracking-[0.2em] text-[#8B8B8B]">
//                         {service.eyebrow}
//                       </span>
//                     </div>

//                     <div className="flex items-end justify-between gap-5">
//                       <div>
//                         <h3 className="whitespace-pre-line text-3xl font-bold leading-[0.92] tracking-[-0.04em] text-[#E8E3DE]">
//                           {service.title}
//                         </h3>

//                         <p className="mt-4 max-w-md text-[11px] leading-5 text-[#8B8B8B]">
//                           {service.description}
//                         </p>
//                       </div>

//                       <Link
//                         to={service.path}
//                         className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E8E3DE]/20 text-[#E8E3DE] transition group-hover:border-[#EE6C1A] group-hover:bg-[#EE6C1A] group-hover:text-[#050505]"
//                       >
//                         <ArrowUpRight size={17} />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHY CHOOSE
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               className="relative overflow-hidden rounded-[2rem]"
//             >
//               <img
//                 src="/images/why-choose-pest-control.webp"
//                 alt="PrimeShield professional pest control service"
//                 className="h-[500px] w-full object-cover sm:h-[620px] lg:h-[700px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-[#050505]/10" />

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
//                 <div className="flex items-end justify-between gap-5">
//                   <div>
//                     <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#EE6C1A]">
//                       Why PrimeShield
//                     </p>

//                     <p className="mt-2 max-w-xs text-2xl font-bold leading-tight text-[#E8E3DE]">
//                       A considered approach to pest control.
//                     </p>
//                   </div>

//                   <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#E8E3DE]/20 sm:flex">
//                     <ShieldCheck
//                       size={20}
//                       className="text-[#EE6C1A]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <div className="lg:pl-8">
//               <SectionLabel number="03">
//                 THE PRIMESHIELD WAY
//               </SectionLabel>

//               <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl lg:text-7xl">
//                 Professional service
//                 <span className="block italic font-semibold text-[#8B8B8B]">
//                   without the guesswork.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9B2AA]">
//                 Every pest problem has its own circumstances.
//                 We focus on understanding the situation,
//                 communicating clearly and planning the
//                 appropriate response.
//               </p>

//               <div className="mt-10 grid border-l border-t border-[#E8E3DE]/10 sm:grid-cols-2">
//                 {reasons.map((reason) => {
//                   const Icon = reason.icon;

//                   return (
//                     <motion.div
//                       key={reason.number}
//                       whileHover={{
//                         backgroundColor:
//                           "#151414",
//                       }}
//                       className="group min-h-[260px] border-b border-r border-[#E8E3DE]/10 p-6 transition sm:p-7"
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-[9px] font-bold text-[#EE6C1A]">
//                           {reason.number}
//                         </span>

//                         <Icon
//                           size={19}
//                           strokeWidth={1.5}
//                           className="text-[#8B8B8B] transition group-hover:text-[#EE6C1A]"
//                         />
//                       </div>

//                       <div className="mt-20">
//                         <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#E8E3DE]">
//                           {reason.title}
//                         </h3>

//                         <p className="mt-3 text-[11px] leading-5 text-[#8B8B8B]">
//                           {reason.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VISUAL PROBLEM SECTION
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
//             <div className="relative overflow-hidden rounded-[2rem]">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="Pest control inspection"
//                 className="h-[500px] w-full object-cover sm:h-[650px]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
//                 <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
//                   Inspection first
//                 </p>

//                 <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-[#E8E3DE]">
//                   The visible pest may not be the whole story.
//                 </p>
//               </div>
//             </div>

//             <div className="lg:pl-8">
//               <SectionLabel number="04">
//                 THE RIGHT START
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-[#E8E3DE] sm:text-6xl">
//                 See the signs.
//                 <span className="block italic font-semibold text-[#8B8B8B]">
//                   Understand the situation.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9B2AA]">
//                 Pest activity can be connected to where
//                 pests are entering, feeding, nesting or
//                 moving through a property. Understanding
//                 the situation comes before simply choosing
//                 a treatment.
//               </p>

//               <div className="mt-10 space-y-4">
//                 {[
//                   "Identify signs of activity",
//                   "Understand the affected area",
//                   "Discuss the appropriate treatment",
//                   "Consider prevention where relevant",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-4 border-b border-[#E8E3DE]/10 pb-4"
//                   >
//                     <span className="text-[9px] font-bold text-[#EE6C1A]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-sm text-[#E8E3DE]">
//                       {item}
//                     </span>

//                     <Check
//                       size={15}
//                       className="ml-auto text-[#8B8B8B]"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/about-us"
//                 className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#E8E3DE]/15 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 How we work
//                 <ArrowRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
//             <div>
//               <SectionLabel number="05">
//                 WHERE WE HELP
//               </SectionLabel>

//               <h2 className="mt-7 text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//                 Residential
//                 <span className="block italic font-semibold text-[#EE6C1A]">
//                   or commercial.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-[#8B8B8B]">
//                 Different properties create different
//                 circumstances. The treatment approach
//                 should reflect the environment where the
//                 activity is taking place.
//               </p>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {propertyTypes.map((property) => {
//                 const Icon = property.icon;

//                 return (
//                   <motion.div
//                     key={property.number}
//                     whileHover={{
//                       y: -6,
//                     }}
//                     className="group rounded-[1.8rem] border border-[#E8E3DE]/10 bg-[#151414] p-7 sm:p-9"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-[9px] font-bold text-[#EE6C1A]">
//                         {property.number}
//                       </span>

//                       <Icon
//                         size={21}
//                         strokeWidth={1.5}
//                         className="text-[#8B8B8B] transition group-hover:text-[#EE6C1A]"
//                       />
//                     </div>

//                     <h3 className="mt-20 text-3xl font-bold tracking-[-0.035em] text-[#E8E3DE]">
//                       {property.title}
//                     </h3>

//                     <p className="mt-4 text-xs leading-6 text-[#8B8B8B]">
//                       {property.text}
//                     </p>

//                     <div className="mt-8 h-px w-8 bg-[#EE6C1A] transition-all duration-500 group-hover:w-full" />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] py-24 text-[#050505] sm:py-32">
//         <div className="absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full border border-[#050505]/10" />

//         <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full border border-[#050505]/10" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
//             <div>
//               <SectionLabel
//                 number="06"
//                 dark
//               >
//                 THE PROCESS
//               </SectionLabel>

//               <h2 className="mt-7 max-w-md text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl">
//                 Simple from first contact to treatment.
//               </h2>
//             </div>

//             <div className="relative">
//               <div className="absolute bottom-8 left-[15px] top-8 w-px bg-[#050505]/15 sm:left-[19px]" />

//               <div className="space-y-8">
//                 {process.map((step) => {
//                   const Icon = step.icon;

//                   return (
//                     <motion.div
//                       key={step.number}
//                       whileHover={{
//                         x: 8,
//                       }}
//                       className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
//                     >
//                       <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#050505] text-[#EE6C1A] sm:h-10 sm:w-10">
//                         <Icon size={15} />
//                       </div>

//                       <div className="border-b border-[#050505]/15 pb-8">
//                         <div className="flex items-baseline gap-4">
//                           <span className="text-[9px] font-bold opacity-50">
//                             {step.number}
//                           </span>

//                           <h3 className="text-2xl font-bold tracking-[-0.035em]">
//                             {step.title}
//                           </h3>
//                         </div>

//                         <p className="mt-3 max-w-xl text-sm leading-6 opacity-65">
//                           {step.text}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           REVIEWS
//       ===================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14">
//             <SectionLabel number="07">
//               CUSTOMER EXPERIENCES
//             </SectionLabel>

//             <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//               Clear communication
//               <span className="italic font-semibold text-[#8B8B8B]">
//                 {" "}
//                 matters.
//               </span>
//             </h2>
//           </div>

//           <div className="grid gap-5 lg:grid-cols-12">
//             <div className="relative overflow-hidden rounded-[2rem] bg-[#050505] p-7 sm:p-10 lg:col-span-7 lg:p-14">
//               <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#EE6C1A]/10" />

//               <div className="relative">
//                 <div className="mb-12 flex gap-1 text-[#EE6C1A]">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span key={star}>★</span>
//                   ))}
//                 </div>

//                 <p className="max-w-3xl text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-[#E8E3DE] sm:text-3xl">
//                   “{testimonials[0].quote}”
//                 </p>

//                 <div className="mt-12 flex items-center gap-4 border-t border-[#E8E3DE]/10 pt-6">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE6C1A] text-xs font-bold text-[#050505]">
//                     LH
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold text-[#E8E3DE]">
//                       {testimonials[0].name}
//                     </p>

//                     <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//                       {testimonials[0].area}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-5 lg:col-span-5">
//               {testimonials.slice(1).map(
//                 (review, index) => (
//                   <div
//                     key={review.name}
//                     className="rounded-[2rem] border border-[#E8E3DE]/10 bg-[#050505] p-7 sm:p-9"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#EE6C1A]">
//                         0{index + 2} / Review
//                       </span>

//                       <span className="text-[#EE6C1A]">
//                         ★★★★★
//                       </span>
//                     </div>

//                     <p className="mt-12 text-sm leading-7 text-[#B9B2AA]">
//                       “{review.quote}”
//                     </p>

//                     <div className="mt-8 border-t border-[#E8E3DE]/10 pt-5">
//                       <p className="text-xs font-semibold text-[#E8E3DE]">
//                         {review.name}
//                       </p>

//                       <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//                         {review.area}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA + FORM
//       ===================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="overflow-hidden rounded-[2.5rem] border border-[#E8E3DE]/10 bg-[#151414]">
//             <div className="grid lg:grid-cols-[.9fr_1.1fr]">
//               <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
//                 <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#EE6C1A]/20" />

//                 <SectionLabel number="08">
//                   TALK TO PRIMESHIELD
//                 </SectionLabel>

//                 <h2 className="mt-8 max-w-xl text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[#E8E3DE] sm:text-6xl">
//                   Not sure what you're dealing with?
//                 </h2>

//                 <p className="mt-7 max-w-lg text-sm leading-7 text-[#8B8B8B]">
//                   Give us a few details about the pest
//                   problem and your property. Request a
//                   callback and we'll get back to you.
//                 </p>

//                 <a
//                   href={phoneHref}
//                   className="mt-10 inline-flex items-center gap-3 text-2xl font-bold tracking-[-0.025em] text-[#E8E3DE] transition hover:text-[#EE6C1A] sm:text-3xl"
//                 >
//                   {phoneNumber}

//                   <ArrowUpRight size={22} />
//                 </a>

//                 <div className="mt-10 flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-7">
//                   <MapPin
//                     size={16}
//                     className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                   />

//                   <span className="max-w-xs text-[10px] leading-5 text-[#8B8B8B]">
//                     {address}
//                   </span>
//                 </div>
//               </div>

//               <div className="border-t border-[#E8E3DE]/10 bg-[#050505] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-5"
//                 >
//                   {/* NAME + POSTCODE */}

//                   <div className="grid md:grid-cols-2 gap-5">
//                     <div>
//                       <label
//                         htmlFor="sidcup-name"
//                         className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                       >
//                         Name
//                       </label>

//                       <input
//                         id="sidcup-name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         required
//                         className="w-full h-14 bg-[#151414] border border-white/10 px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none focus:border-[#EE6C1A] transition-colors"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="sidcup-postcode"
//                         className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                       >
//                         Postcode
//                       </label>

//                       <input
//                         id="sidcup-postcode"
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="Your postcode"
//                         required
//                         className="w-full h-14 bg-[#151414] border border-white/10 px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none focus:border-[#EE6C1A] transition-colors"
//                       />
//                     </div>
//                   </div>

//                   {/* PHONE */}

//                   <div>
//                     <label
//                       htmlFor="sidcup-phone"
//                       className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B8B8B]"
//                     >
//                       Phone Number
//                     </label>

//                     <input
//                       id="sidcup-phone"
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className={`w-full h-14 bg-[#151414] border px-4 text-sm text-[#E8E3DE] placeholder:text-white/20 outline-none transition-colors ${
//                         phoneError
//                           ? "border-red-500"
//                           : "border-white/10 focus:border-[#EE6C1A]"
//                       }`}
//                     />
//                   </div>

//                   {phoneError && (
//                     <p className="text-xs font-semibold text-red-400">
//                       {phoneError}
//                     </p>
//                   )}

//                   {/* SUBMIT */}

//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
//                     <p className="text-[10px] leading-6 text-[#8B8B8B] max-w-sm">
//                       By submitting this form, you're asking PrimeShield
//                       Services Sidcup to contact you regarding your enquiry.
//                     </p>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group inline-flex items-center justify-center gap-5 bg-[#EE6C1A] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-white hover:text-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300"
//                     >
//                       {loading
//                         ? "Sending..."
//                         : "Request Contact"}

//                       {!loading && (
//                         <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CONTACT STRIP
//           NO FOOTER / NO NAVBAR
//       ===================================================== */}

//       <section className="border-t border-[#E8E3DE]/10 bg-[#151414]">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-14">
//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
//                 PrimeShield Services Sidcup
//               </p>

//               <p className="mt-3 max-w-xl text-2xl font-bold leading-tight text-[#E8E3DE] sm:text-3xl">
//                 Professional pest control for Sidcup and nearby areas.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center gap-2 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#050505]"
//               >
//                 <Phone size={13} />
//                 Call {phoneNumber}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 Contact us
//                 <ArrowUpRight size={13} />
//               </Link>
//             </div>
//           </div>

//           <div className="border-t border-[#E8E3DE]/10 py-5 text-[8px] uppercase tracking-[0.18em] text-[#8B8B8B]">
//             © {new Date().getFullYear()} PrimeShield Services Sidcup
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }














import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  ShieldCheck,
  Search,
  Target,
  CheckCircle2,
  Home,
  Building2,
  Bug,
  ChevronDown,
  Leaf,
  Menu,
  X,
} from "lucide-react";

/* =========================================================
   GREEN HEAVEN — BUSINESS DETAILS
========================================================= */

const businessName = "Green Heaven Pest Control";
const phoneNumber = "+44 07354 239939";
const email = "info@greenhavenpestcontrol.uk";
const address = "Clapham, London";
const serviceArea = "Clapham, London";

const brandColors = {
  green: "#214217",
  lime: "#39951F",
  white: "#FFFFFF",
};

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Rat & Mice Control",
    shortTitle: "Rodent Control",
    description:
      "Professional control for rat and mouse activity in homes, flats and local businesses. We identify signs of activity, investigate likely access points and plan treatment around the property.",
    image: "/images/rodents.webp",
    icon: Bug,
  },
  {
    number: "02",
    title: "Bed Bug Treatment",
    shortTitle: "Bed Bug Control",
    description:
      "Targeted bed bug treatment for bedrooms, homes, rental properties and affected areas, with the approach adapted to the extent and location of the activity.",
    image: "/images/bedbugs.webp",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Wasp Nest Treatment",
    shortTitle: "Wasp Control",
    description:
      "Professional treatment for active wasp nests around residential and commercial properties, with attention to nest location and surrounding areas.",
    image: "/images/wasps.webp",
    icon: Target,
  },
];

/* =========================================================
   WHY GREEN HEAVEN
========================================================= */

const reasons = [
  {
    number: "01",
    icon: Search,
    title: "Inspection-led",
    text:
      "We first look at the signs, affected areas and property conditions before deciding how the issue should be approached.",
  },
  {
    number: "02",
    icon: Target,
    title: "Targeted treatment",
    text:
      "Treatment is considered around the pest, the property and the circumstances rather than applying a generic solution.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Responsible approach",
    text:
      "Where appropriate, practical and considered treatment options can be combined with measures designed to reduce future activity.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Prevention focused",
    text:
      "Where access points or property conditions contribute to the problem, we can identify practical prevention measures.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Contact",
    text: "Tell us what you have noticed and where the pest activity is occurring.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Assess",
    text: "We establish the likely pest issue and consider the affected property.",
    icon: Search,
  },
  {
    number: "03",
    title: "Treat",
    text: "The appropriate treatment approach is selected around the situation.",
    icon: Target,
  },
  {
    number: "04",
    title: "Protect",
    text: "Where relevant, prevention and proofing measures are considered.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   PROPERTY TYPES
========================================================= */

const propertyTypes = [
  {
    icon: Home,
    title: "Homes & Flats",
    text:
      "Pest-control support for homeowners, tenants, families and residential properties across Clapham.",
  },
  {
    icon: Building2,
    title: "Local Businesses",
    text:
      "Practical pest-management support for shops, offices, landlords and other commercial premises.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What pests do you deal with?",
    answer:
      "Green Heaven Pest Control currently provides professional services for rat and mice control, bed bug treatment and wasp nest treatment. If you are unsure what pest you are dealing with, contact us and explain what you have noticed.",
  },
  {
    question: "Do you cover Clapham?",
    answer:
      "Yes. Green Heaven Pest Control is focused on Clapham, London and surrounding local areas.",
  },
  {
    question: "Do you inspect before treatment?",
    answer:
      "Understanding the signs of activity, affected areas and property conditions is an important part of deciding how the situation should be approached. The exact process depends on the pest and circumstances.",
  },
  {
    question: "Can you help prevent pests coming back?",
    answer:
      "Where relevant, we can consider practical prevention measures such as identifying access points, property conditions and other factors that may contribute to continued pest activity.",
  },
  {
    question: "How can I arrange a callback?",
    answer:
      "You can call Green Heaven directly or complete the callback form on this page. Simply provide your name, postcode and phone number and the team can contact you regarding your enquiry.",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "text-white/60" : "text-[#39951F]"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          light ? "bg-[#39951F]" : "bg-[#39951F]"
        }`}
      />
      {children}
    </div>
  );
}

function FAQItem({ item, index, open, setOpen }) {
  const isOpen = open === index;

  return (
    <div className="border-b border-[#214217]/10">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : index)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <div className="flex gap-5">
          <span className="min-w-[28px] text-sm font-semibold text-[#39951F]">
            0{index + 1}
          </span>

          <span className="text-base font-semibold text-[#214217] sm:text-lg">
            {item.question}
          </span>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#214217]/10 transition ${
            isOpen
              ? "rotate-180 bg-[#214217] text-white"
              : "bg-white text-[#214217]"
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 pl-[48px] text-sm leading-7 text-[#214217]/60">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MAIN HOMEPAGE
========================================================= */

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const phoneHref = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;

  /* =========================================================
     FORM
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://green-haven-backend.vercel.app/api/callback",
        {
          ...formData,
          area: serviceArea,
          business: businessName,
          address,
          phoneNumber,
        }
      ),
      {
        loading: "Sending your Clapham callback request...",

        success: () => {
          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          setLoading(false);

          return `${businessName} will contact you shortly.`;
        },

        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Request failed. Please try again."
          );
        },
      },
      {
        style: {
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "13px 18px",
        },

        success: {
          style: {
            background: brandColors.green,
            color: "#FFFFFF",
            border: `1px solid ${brandColors.lime}`,
          },
        },

        error: {
          style: {
            background: brandColors.green,
            color: "#FFFFFF",
            border: "1px solid #ef4444",
          },
        },
      }
    );
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white text-[#214217]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "90px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,
          style: {
            background: "#214217",
            color: "#FFFFFF",
            border: "1px solid rgba(57,149,31,.5)",
            borderRadius: "8px",
            fontSize: "14px",
          },
        }}
      />

      {/* =====================================================
          MOBILE TOP BAR
      ===================================================== */}


      {/* =====================================================
          DESKTOP TOP NAV
      ===================================================== */}

      <header className="absolute left-0 right-0 top-0 z-40 hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-8 pt-6">
          <div className="flex h-[76px] items-center justify-between border border-white/15 bg-[#214217]/90 px-7 backdrop-blur-md">
            <Link to="/" className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center bg-[#39951F] text-white">
                <Leaf size={21} />
              </div>

              <div>
                <p className="text-[17px] font-bold leading-none text-white">
                  Green Heaven
                </p>

                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-white/45">
                  Pest Control
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className="text-xs font-medium text-white/75 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/services/"
                className="text-xs font-medium text-white/75 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/about/"
                className="text-xs font-medium text-white/75 transition hover:text-white"
              >
                About Us
              </Link>

              <a
                href={`mailto:${email}`}
                className="text-xs font-medium text-white/75 transition hover:text-white"
              >
                Contact
              </a>
            </nav>

            <a
              href={phoneHref}
              className="flex items-center gap-3 bg-[#39951F] px-5 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#214217]"
            >
              <Phone size={14} />
              {phoneNumber}
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#214217]">
        <div className="mx-auto grid min-h-[720px] max-w-[1440px] lg:grid-cols-[46%_54%]">

          {/* LEFT HERO CONTENT */}

          <div className="flex flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-14 lg:pb-20 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
                <MapPin size={12} className="text-[#39951F]" />
                Clapham · London
              </div>

              <h1 className="max-w-[650px] text-[48px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[64px] lg:text-[76px]">
                Professional pest control

                <span className="mt-2 block text-[#39951F]">
                  without the hassle.
                </span>
              </h1>

              <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-white/60">
                Green Heaven Pest Control provides practical,
                professional pest-control services for homes,
                flats and local businesses across Clapham and
                nearby areas.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/services/"
                  className="group flex items-center gap-4 bg-[#39951F] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#214217]"
                >
                  Our services

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={phoneHref}
                  className="flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#39951F] hover:bg-[#39951F]"
                >
                  <Phone size={14} />
                  Call us
                </a>
              </div>

              <div className="mt-12 grid max-w-[530px] grid-cols-2 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div className="border-r border-white/10 pr-5">
                  <p className="text-sm font-semibold text-white">
                    Local
                  </p>

                  <p className="mt-1 text-[10px] text-white/40">
                    Clapham focused
                  </p>
                </div>

                <div className="border-r border-white/10 px-5">
                  <p className="text-sm font-semibold text-white">
                    Residential
                  </p>

                  <p className="mt-1 text-[10px] text-white/40">
                    Homes & flats
                  </p>
                </div>

                <div className="hidden pl-5 sm:block">
                  <p className="text-sm font-semibold text-white">
                    Commercial
                  </p>

                  <p className="mt-1 text-[10px] text-white/40">
                    Local businesses
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              HERO IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[470px] overflow-hidden lg:min-h-[720px]"
          >
            <img
              src="/images/hero-greenhaven.webp"
              alt="Green Haven Pest Control professional"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#214217]/50 via-[#214217]/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#214217]/50 via-transparent to-transparent" />

            {/* IMAGE INFORMATION CARD */}

            <div className="absolute bottom-7 left-5 right-5 sm:left-8 sm:right-8">
              <div className="max-w-[390px] bg-white p-6 shadow-2xl sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#39951F]">
                      Green Heaven
                    </p>

                    <h2 className="mt-3 text-2xl font-bold leading-tight text-[#214217]">
                      A practical approach to pest problems.
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#214217] text-white">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-[#214217]/10 pt-4 text-[10px] text-[#214217]/55">
                  <CheckCircle2
                    size={14}
                    className="text-[#39951F]"
                  />

                  Inspection-led service
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ===================================================== */}

      <section className="border-b border-[#214217]/10 bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Professional",
              text: "Structured pest-control service",
            },
            {
              icon: Search,
              title: "Inspection-led",
              text: "Understand before treating",
            },
            {
              icon: Target,
              title: "Targeted",
              text: "Treatment around the problem",
            },
            {
              icon: MapPin,
              title: "Local",
              text: "Clapham & nearby areas",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 px-5 py-6 sm:px-7 ${
                  index < 3
                    ? "border-r border-[#214217]/10"
                    : ""
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#39951F]"
                />

                <div>
                  <p className="text-xs font-bold text-[#214217]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-[#214217]/45">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <SectionLabel>
                About Green Heaven
              </SectionLabel>

              <p className="max-w-sm text-sm leading-7 text-[#214217]/55">
                A local pest-control service focused on
                making the process clear, practical and
                professional.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#214217] sm:text-[50px]">
                When pests become a problem, knowing
                <span className="text-[#39951F]">
                  {" "}
                  what to do next
                </span>{" "}
                matters.
              </h2>

              <div className="mt-9 grid gap-7 border-t border-[#214217]/10 pt-7 md:grid-cols-2">
                <p className="text-sm leading-7 text-[#214217]/60">
                  Pest activity can affect how comfortable
                  you feel in your own property. From
                  scratching sounds and droppings to bites,
                  nests and visible insects, the signs are
                  not always easy to understand.
                </p>

                <p className="text-sm leading-7 text-[#214217]/60">
                  Green Heaven starts by understanding what
                  is happening and then considering an
                  appropriate treatment approach around the
                  pest and property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#F4F7F1] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>
                Our services
              </SectionLabel>

              <h2 className="max-w-3xl text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#214217] sm:text-[52px]">
                Pest-control services for
                <span className="text-[#39951F]">
                  {" "}
                  common problems.
                </span>
              </h2>
            </div>

            <Link
              to="/services/"
              className="group flex w-fit items-center gap-3 border-b border-[#214217]/20 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#214217]"
            >
              View all services

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group overflow-hidden border border-[#214217]/10 bg-white"
                >
                  <div className="relative h-[250px] overflow-hidden bg-[#214217]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#214217]/70 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-[#214217]">
                      <Icon size={18} />
                    </div>

                    <div className="absolute bottom-5 left-5 text-xs font-bold text-white">
                      {service.number}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-[#214217]">
                        {service.title}
                      </h3>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#214217]/10 text-[#214217] transition group-hover:border-[#39951F] group-hover:bg-[#39951F] group-hover:text-white">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#214217]/55">
                      {service.description}
                    </p>

                    <Link
                      to="/services/"
                      className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#39951F]"
                    >
                      Learn more
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY SECTION
      ===================================================== */}

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[42%_58%]">
            <div className="relative min-h-[560px] overflow-hidden bg-[#214217]">
              <img
                src="/images/why-greenhaven.jpg"
                alt="Professional pest control inspection"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#214217]/90 via-[#214217]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  <span className="h-2 w-2 bg-[#39951F]" />
                  Why Green Heaven
                </div>

                <p className="mt-4 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Pest control should start with
                  understanding the problem.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <SectionLabel>
                Why choose us
              </SectionLabel>

              <h2 className="max-w-2xl text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#214217] sm:text-[52px]">
                A clear process.

                <span className="block text-[#39951F]">
                  A practical approach.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#214217]/55">
                We aim to make pest control straightforward:
                understand the issue, explain the approach
                and deal with the problem professionally.
              </p>

              <div className="mt-10 border-t border-[#214217]/10">
                {reasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <motion.div
                      key={reason.number}
                      whileHover={{
                        x: 5,
                      }}
                      className="grid grid-cols-[42px_1fr_auto] items-start gap-5 border-b border-[#214217]/10 py-6"
                    >
                      <span className="text-sm font-bold text-[#39951F]">
                        {reason.number}
                      </span>

                      <div>
                        <h3 className="text-base font-bold text-[#214217]">
                          {reason.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-[#214217]/50">
                          {reason.text}
                        </p>
                      </div>

                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-[#39951F]"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK INSPECTION SECTION
      ===================================================== */}

      <section className="bg-[#214217] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:items-center">
            <div>
              <SectionLabel light>
                Inspection & treatment
              </SectionLabel>

              <h2 className="max-w-3xl text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[56px]">
                Seeing a pest is only part of the
                <span className="text-[#39951F]">
                  {" "}
                  story.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55">
                Pest activity can be connected to access
                points, food sources, nesting areas or
                conditions within a property. Looking at
                those factors helps create a more informed
                treatment approach.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "Signs of activity",
                  "Affected areas",
                  "Possible access points",
                  "Property conditions",
                  "Appropriate treatment",
                  "Prevention measures",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#39951F]"
                    />

                    <span className="text-xs text-white/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="/images/about-greenhaven.webp"
                alt="Pest control inspection"
                className="h-[480px] w-full object-cover sm:h-[570px]"
              />

              <div className="absolute left-5 top-5 bg-[#39951F] px-5 py-4 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em]">
                  Green Heaven
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Clapham, London
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-[#F4F7F1] py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>
              How it works
            </SectionLabel>

            <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#214217] sm:text-[52px]">
              From first contact to a more
              <span className="text-[#39951F]">
                {" "}
                protected property.
              </span>
            </h2>
          </div>

          <div className="relative mt-12 grid gap-0 border-y border-[#214217]/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  whileHover={{
                    backgroundColor: "#FFFFFF",
                  }}
                  className={`relative min-h-[290px] p-7 transition sm:p-9 ${
                    index < 3
                      ? "border-b md:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#214217] text-xs font-bold text-white">
                      {step.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[#39951F]"
                    />
                  </div>

                  <div className="mt-20">
                    <h3 className="text-xl font-bold text-[#214217]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#214217]/55">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY TYPES
      ===================================================== */}

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[35%_65%] lg:items-center">
            <div>
              <SectionLabel>
                Who we help
              </SectionLabel>

              <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#214217] sm:text-[50px]">
                For the places where

                <span className="block text-[#39951F]">
                  people live & work.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#214217]/55">
                Whether it is a home, flat, shop or local
                business, the surrounding environment can
                affect how pest problems develop.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {propertyTypes.map((property, index) => {
                const Icon = property.icon;

                return (
                  <motion.div
                    key={property.title}
                    whileHover={{
                      y: -5,
                    }}
                    className="border border-[#214217]/10 p-7 sm:p-9"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-[#214217] text-white">
                      <Icon size={21} />
                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.12em] text-[#39951F]">
                      0{index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-[#214217]">
                      {property.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#214217]/55">
                      {property.text}
                    </p>

                    <div className="mt-7 h-1 w-10 bg-[#39951F]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL AREA STRIP
      ===================================================== */}

      <section className="border-y border-[#214217]/10 bg-[#F4F7F1]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center bg-[#214217] text-white">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#214217]">
                Serving Clapham & nearby areas
              </p>

              <p className="mt-1 text-[10px] text-[#214217]/45">
                Local residential and commercial pest-control support
              </p>
            </div>
          </div>

          <a
            href={phoneHref}
            className="flex w-fit items-center gap-3 bg-[#39951F] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#214217]"
          >
            <Phone size={14} />
            {phoneNumber}
          </a>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <SectionLabel>
                Frequently asked questions
              </SectionLabel>

              <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#214217] sm:text-[50px]">
                Need to know

                <span className="block text-[#39951F]">
                  more first?
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#214217]/55">
                If you are unsure what you are dealing
                with, contact Green Heaven and explain what
                you have noticed.
              </p>

              <a
                href={`mailto:${email}`}
                className="mt-7 inline-flex items-center gap-3 bg-[#214217] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#39951F]"
              >
                Email Green Heaven
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="border-t border-[#214217]/10">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  item={faq}
                  index={index}
                  open={openFaq}
                  setOpen={setOpenFaq}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALLBACK SECTION
      ===================================================== */}

      <section className="bg-[#214217] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden bg-[#172F10] lg:grid-cols-[46%_54%]">

            {/* LEFT */}

            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#39951F]/20" />

              <div className="relative">
                <SectionLabel light>
                  Request a callback
                </SectionLabel>

                <h2 className="max-w-xl text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
                  Got a pest problem?

                  <span className="block text-[#39951F]">
                    Let's talk.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
                  Tell us what you have noticed, where the
                  issue is occurring and the best number to
                  reach you on.
                </p>

                <div className="mt-9 space-y-4">
                  <a
                    href={phoneHref}
                    className="flex items-center gap-4 text-xl font-bold text-white transition hover:text-[#39951F] sm:text-2xl"
                  >
                    <span className="flex h-11 w-11 items-center justify-center bg-[#39951F] text-white">
                      <Phone size={18} />
                    </span>

                    {phoneNumber}
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-4 text-sm text-white/55 transition hover:text-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#39951F]">
                      @
                    </span>

                    {email}
                  </a>

                  <div className="flex items-center gap-4 text-sm text-white/55">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#39951F]">
                      <MapPin size={17} />
                    </span>

                    {address}
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="bg-white p-7 text-[#214217] sm:p-10 lg:p-14">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#39951F]">
                  Callback form
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                  Tell us about your enquiry.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#214217]/50">
                  Complete the form and Green Heaven can
                  contact you regarding your pest-control
                  enquiry.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="greenhaven-name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#214217]/50"
                  >
                    Full name
                  </label>

                  <input
                    id="greenhaven-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="h-14 w-full border border-[#214217]/15 bg-white px-4 text-sm text-[#214217] outline-none transition focus:border-[#39951F]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="greenhaven-postcode"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#214217]/50"
                    >
                      Postcode
                    </label>

                    <input
                      id="greenhaven-postcode"
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Your postcode"
                      required
                      className="h-14 w-full border border-[#214217]/15 bg-white px-4 text-sm text-[#214217] outline-none transition focus:border-[#39951F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="greenhaven-phone"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#214217]/50"
                    >
                      Phone number
                    </label>

                    <input
                      id="greenhaven-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className={`h-14 w-full border bg-white px-4 text-sm text-[#214217] outline-none transition ${
                        phoneError
                          ? "border-red-500"
                          : "border-[#214217]/15 focus:border-[#39951F]"
                      }`}
                    />
                  </div>
                </div>

                {phoneError && (
                  <p className="text-xs font-semibold text-red-500">
                    {phoneError}
                  </p>
                )}

                <div className="flex flex-col gap-5 border-t border-[#214217]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[10px] leading-5 text-[#214217]/45">
                    By submitting this form, you are asking
                    Green Heaven Pest Control to contact you
                    regarding your enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-14 shrink-0 items-center justify-center gap-4 bg-[#39951F] px-7 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#214217] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Sending..."
                      : "Request callback"}

                    {!loading && (
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CONTACT / NO FOOTER
      ===================================================== */}

      <section className="bg-[#214217] text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#39951F]">
                  <Leaf size={17} />
                </div>

                <p className="text-sm font-bold">
                  Green Heaven Pest Control
                </p>
              </div>

              <p className="mt-4 text-xs text-white/40">
                Professional pest control for Clapham and
                nearby areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="flex items-center gap-2 bg-[#39951F] px-5 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#214217]"
              >
                <Phone size={14} />
                Call us
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 border border-white/15 px-5 py-3 text-xs font-bold text-white transition hover:border-[#39951F] hover:bg-[#39951F]"
              >
                Email us
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-[9px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Green Heaven Pest Control
            </span>

            <span>
              Clapham · London
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}