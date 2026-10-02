


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       icon: Bug,
//       details:
//         "Targeted ant control for kitchens, worktops, floor edges and entry points. We inspect the activity, treat the source and help reduce the chance of ants returning.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Professional bed bug treatment for mattresses, bed frames, furniture and affected rooms. Our approach focuses on inspection, treatment and practical aftercare advice.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       details:
//         "Specialist treatment for carpet moths affecting carpets, rugs, wardrobes and soft furnishings. We help protect fabrics and reduce ongoing moth activity.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       details:
//         "Effective carpet beetle treatment for affected rooms, storage areas and fabric zones. We identify hotspots and apply targeted control methods.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       details:
//         "Cockroach control for homes, kitchens, restaurants and commercial spaces. We inspect harbourage areas and use targeted treatment to reduce infestation risks.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Rodent control for rats and mice in homes, lofts, kitchens and business premises. We focus on inspection, safe treatment and entry-point prevention advice.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       icon: Bug,
//       details:
//         "Flea treatment for affected rooms, carpets and high-traffic areas. We target the infestation cycle and provide clear guidance after treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast wasp nest control for gardens, rooflines, sheds and property exteriors. Our team handles active nests with suitable protective methods.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       icon: Bug,
//       details:
//         "Careful bumble bee support where nests cause access or safety concerns. We always aim for responsible handling and suitable advice.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       details:
//         "Squirrel control for lofts, roof spaces and property voids. We help identify access points and provide practical treatment and proofing advice.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       icon: Home,
//       details:
//         "Hygiene cleaning and proofing support for pest-affected areas. We help reduce contamination risks and support long-term property protection.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       icon: Bird,
//       details:
//         "Bird control and prevention services for roofs, ledges, commercial buildings and exposed areas using practical proofing solutions.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${location.state.scrollToService}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
//             <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
//             Filter Services
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
//           {filteredServices.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 !== 0;

//             return (
//               <article
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
//                   reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="lg:col-span-6">
//                   <div
//                     className={`relative overflow-hidden shadow-2xl ${
//                       reverse
//                         ? "rounded-tl-[180px] md:rounded-tl-[260px]"
//                         : "rounded-tr-[180px] md:rounded-tr-[260px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Services Limited ${service.title} in London`}
//                       className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

//                     {/* Bottom layout elements without the top-left orange tag */}
//                     <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                       <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
//                         {service.cat}
//                       </span>

//                       <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
//                         <ArrowRight size={20} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-6">
//                   <div className="max-w-xl">
//                     <div className="flex items-center gap-4 mb-7">
//                       <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
//                         <Icon size={24} strokeWidth={2.2} />
//                       </div>

//                       <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
//                         {service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
//                       {service.title}
//                     </h2>

//                     <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//                     <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                       {service.details}
//                     </p>

//                     <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
//                       Contact Us
//                       <ArrowRight size={17} />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;






// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ants Control Kensington",
//       image: "/images/ants.webp",
//       icon: Bug,
//       details:
//         "Ant control in Kensington for kitchens, worktops, skirting boards and entry points. PrimeShield Kensington inspects the ant activity, targets the source and provides prevention advice for properties around Kensington and South Kensington.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bugs Control Kensington",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Bed bug treatment in Kensington for mattresses, bed frames, furniture and affected rooms. Our team provides careful inspections, targeted treatment and clear aftercare guidance for homes, flats and rental properties.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment Kensington",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       details:
//         "Carpet moth treatment in Kensington for carpets, rugs, wardrobes and soft furnishings. PrimeShield Kensington helps identify moth activity, protect fabric areas and reduce the risk of repeat infestation.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Treatment Kensington",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       details:
//         "Carpet beetle treatment in Kensington for affected rooms, storage spaces, fabric zones and hidden harbourage areas. We inspect hotspots and apply suitable control methods for long-term property protection.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Service Kensington",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       details:
//         "Cockroach control in Kensington for homes, kitchens, restaurants and commercial premises. Our inspection focuses on harbourage points, food-risk areas and targeted treatment to reduce infestation pressure.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control Kensington",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Rats and mice control in Kensington for homes, lofts, kitchens, basements and business premises. PrimeShield Kensington provides inspection, safe treatment and entry-point advice from our local base at 40 Harrington Rd, South Kensington, London SW7 3ND.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Kensington",
//       image: "/images/flea.webp",
//       icon: Bug,
//       details:
//         "Flea treatment in Kensington for carpets, bedrooms, living spaces and high-traffic areas. Our service targets the flea cycle and includes practical guidance to help reduce activity after treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasps Nest Control Kensington",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Wasp nest control in Kensington for gardens, rooflines, sheds, loft spaces and property exteriors. PrimeShield Kensington handles active nests with suitable protective methods and controlled treatment.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Control Kensington",
//       image: "/images/bee.webp",
//       icon: Bug,
//       details:
//         "Bumble bee support in Kensington where nests create access, safety or property concerns. We focus on responsible advice, careful assessment and suitable handling for homes and commercial sites.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Kensington",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       details:
//         "Squirrel control in Kensington for lofts, roof voids and property entry points. Our team helps identify access routes and provides practical treatment and proofing advice for affected buildings.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services Kensington",
//       image: "/images/hygene.webp",
//       icon: Home,
//       details:
//         "Hygiene and proofing services in Kensington for pest-affected areas, contamination risks and vulnerable entry points. PrimeShield Kensington supports cleaner, safer and better protected properties.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Birds Control Services Kensington",
//       image: "/images/birds.webp",
//       icon: Bird,
//       details:
//         "Bird control services in Kensington for roofs, ledges, commercial buildings and exposed property areas. We provide practical proofing solutions designed to reduce nesting, fouling and repeat bird activity.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${location.state.scrollToService} Kensington"], [data-title="${location.state.scrollToService}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
//             <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
//             Filter Kensington Services
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
//           {filteredServices.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 !== 0;

//             return (
//               <article
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
//                   reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="lg:col-span-6">
//                   <div
//                     className={`relative overflow-hidden shadow-2xl ${
//                       reverse
//                         ? "rounded-tl-[180px] md:rounded-tl-[260px]"
//                         : "rounded-tr-[180px] md:rounded-tr-[260px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Kensington ${service.title} near South Kensington`}
//                       className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

//                     <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                       <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
//                         {service.cat}
//                       </span>

//                       <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
//                         <ArrowRight size={20} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-6">
//                   <div className="max-w-xl">
//                     <div className="flex items-center gap-4 mb-7">
//                       <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
//                         <Icon size={24} strokeWidth={2.2} />
//                       </div>

//                       <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
//                         {service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
//                       {service.title}
//                     </h2>

//                     <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//                     <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                       {service.details}
//                     </p>

//                     <p className="mt-5 text-[#5F5F5F] text-sm leading-relaxed">
//                       Serving Kensington and South Kensington from {address}.
//                     </p>

//                     <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
//                       Contact Kensington Team
//                       <ArrowRight size={17} />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;











// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const phone = "07356 271145";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Bromley",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Targeted control for persistent ant activity around kitchens, entry points and living spaces.",
//       details:
//         "PrimeShield Services Bromley assesses visible activity and likely access routes before applying suitable control measures for residential and commercial properties.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Bromley",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment for bedrooms, furniture and areas affected by bed bug activity.",
//       details:
//         "Our service combines careful inspection, targeted treatment and practical aftercare guidance to help manage bed bug activity throughout the property.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Bromley",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Protection for carpets, rugs, wardrobes and other vulnerable fabric areas.",
//       details:
//         "We investigate signs of carpet moth activity and provide suitable treatment and prevention advice for affected areas.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Bromley",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Control for beetle activity around carpets, furnishings, storage and fabric materials.",
//       details:
//         "PrimeShield Services Bromley identifies likely harbourage areas and recommends an appropriate control approach based on the property.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Bromley",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Professional cockroach control for kitchens, homes, restaurants and commercial premises.",
//       details:
//         "We assess harbourage areas, food-risk zones and signs of activity before carrying out targeted treatment and providing practical prevention advice.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Bromley",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control for kitchens, lofts, garages, wall voids and business premises.",
//       details:
//         "Our approach looks at evidence of activity, possible entry routes and conditions around the property before suitable control measures are recommended.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Bromley",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Treatment support for flea activity affecting carpets, bedrooms and living areas.",
//       details:
//         "We focus treatment on affected areas and provide practical guidance around the flea life cycle and activity following treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Bromley",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional response to active wasp nests around homes, gardens and buildings.",
//       details:
//         "PrimeShield Services Bromley assesses the nest location and applies an appropriate treatment approach for active wasp activity.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Bromley",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Practical assessment and advice when bumble bee nests create property concerns.",
//       details:
//         "We consider the nest location, access and circumstances before recommending the most appropriate course of action.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Bromley",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces and property structures.",
//       details:
//         "Our service investigates signs of squirrel activity and possible access routes before suitable control and proofing options are considered.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Bromley",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Practical property protection against vulnerable pest access and hygiene concerns.",
//       details:
//         "We help identify areas that may allow pests to enter or return while addressing relevant hygiene and property protection concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Bromley",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird control and proofing for roofs, ledges, commercial buildings and exposed areas.",
//       details:
//         "PrimeShield Services Bromley provides practical options designed to reduce unwanted nesting, fouling and repeated bird activity.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Bromley"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   const featuredService = filteredServices[0];
//   const remainingServices = filteredServices.slice(1);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       <ServicesHeroSection />

//       {/* Intro */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">

//             <div>
//               <span className="inline-flex items-center gap-3 text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
//                 <span className="w-8 h-[2px] bg-[#F47B2B]" />
//                 Our Service Range
//               </span>

//               <h2 className="mt-6 text-[#292929] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black uppercase leading-[0.94] tracking-[-0.04em] max-w-4xl">
//                 One property.
//                 <span className="block text-[#F47B2B]">
//                   Many ways
//                 </span>
//                 pests can enter.
//               </h2>
//             </div>

//             <div className="lg:border-l border-[#292929]/15 lg:pl-10">
//               <p className="text-[#292929]/65 text-base md:text-lg leading-7">
//                 From insects appearing indoors to rodents entering hidden
//                 spaces, every pest problem has different circumstances.
//                 PrimeShield Services Bromley provides a range of focused
//                 services for homes, landlords and businesses across Bromley.
//               </p>

//               <div className="flex items-center gap-3 mt-7">
//                 <CheckCircle2
//                   size={18}
//                   className="text-[#F47B2B]"
//                 />

//                 <span className="text-[#292929] text-xs font-black uppercase tracking-[0.16em]">
//                   Residential & Commercial
//                 </span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Filter Bar */}
//       <section className="bg-[#292929]">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5">

//           <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">

//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center">
//                 <Grid3X3 size={17} />
//               </div>

//               <div>
//                 <span className="block text-white text-[10px] font-black uppercase tracking-[0.2em]">
//                   Browse Services
//                 </span>

//                 <span className="text-white/45 text-[10px] uppercase tracking-[0.15em]">
//                   Choose a category
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {categories.map((cat) => {
//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-4 sm:px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] transition-all ${
//                       active
//                         ? "bg-[#F47B2B] text-white"
//                         : "bg-white/10 text-white/65 hover:bg-white hover:text-[#292929]"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );
//               })}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Service Directory */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           {featuredService && (
//             <article
//               data-title={featuredService.title}
//               onClick={() => navigate("/contact-us")}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   navigate("/contact-us");
//                 }
//               }}
//               className="group relative grid lg:grid-cols-12 min-h-[560px] mb-16 cursor-pointer"
//             >
//               {/* Featured Image */}
//               <div className="lg:col-span-7 relative overflow-hidden min-h-[400px]">

//                 <img
//                   src={featuredService.image}
//                   alt={`PrimeShield Services Bromley ${featuredService.title}`}
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   loading="lazy"
//                   decoding="async"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                   }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent" />

//                 <div className="absolute top-6 left-6">
//                   <span className="bg-[#F47B2B] text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em]">
//                     Featured Service
//                   </span>
//                 </div>

//                 <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
//                   <span className="text-white text-6xl sm:text-8xl font-black leading-none">
//                     {featuredService.id}
//                   </span>

//                   <div className="w-14 h-14 bg-white text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors">
//                     <ArrowUpRight size={23} />
//                   </div>
//                 </div>
//               </div>

//               {/* Featured Content */}
//               <div className="lg:col-span-5 bg-white flex flex-col justify-center p-8 sm:p-10 lg:p-12">

//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-11 h-11 bg-[#292929] text-white flex items-center justify-center">
//                     <featuredService.icon size={19} />
//                   </div>

//                   <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.2em]">
//                     {featuredService.cat}
//                   </span>
//                 </div>

//                 <h3 className="text-[#292929] text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] tracking-tight group-hover:text-[#F47B2B] transition-colors">
//                   {featuredService.title}
//                 </h3>

//                 <div className="w-16 h-[3px] bg-[#F47B2B] mt-7 mb-6" />

//                 <p className="text-[#292929]/65 text-base leading-7">
//                   {featuredService.short}
//                 </p>

//                 <p className="text-[#292929]/50 text-sm leading-6 mt-4">
//                   {featuredService.details}
//                 </p>

//                 <div className="mt-8 pt-6 border-t border-[#292929]/10 flex items-center justify-between">

//                   <span className="text-[#292929] text-[10px] font-black uppercase tracking-[0.17em]">
//                     Bromley Service
//                   </span>

//                   <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.17em] flex items-center gap-2">
//                     Enquire
//                     <ArrowUpRight size={15} />
//                   </span>

//                 </div>
//               </div>
//             </article>
//           )}

//           {/* Remaining Services */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#292929]/15 border border-[#292929]/15">

//             {remainingServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       navigate("/contact-us");
//                     }
//                   }}
//                   className="group bg-white min-h-[430px] flex flex-col cursor-pointer"
//                 >
//                   {/* Card Image */}
//                   <div className="relative h-52 overflow-hidden">

//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Services Bromley ${service.title}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />

//                     <span className="absolute top-4 left-4 bg-[#292929] text-white px-3 py-2 text-[10px] font-black tracking-[0.18em]">
//                       {service.id}
//                     </span>

//                     <span className="absolute bottom-4 left-4 text-white text-[10px] font-black uppercase tracking-[0.17em]">
//                       {service.cat}
//                     </span>

//                   </div>

//                   {/* Card Content */}
//                   <div className="p-6 sm:p-7 flex flex-col flex-1">

//                     <div className="flex items-center justify-between mb-5">

//                       <div className="w-10 h-10 bg-[#F7F3EF] text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors">
//                         <Icon size={18} />
//                       </div>

//                       <ArrowUpRight
//                         size={20}
//                         className="text-[#292929]/30 group-hover:text-[#F47B2B] transition-colors"
//                       />

//                     </div>

//                     <h3 className="text-[#292929] text-xl sm:text-2xl font-black uppercase leading-tight group-hover:text-[#F47B2B] transition-colors">
//                       {service.title}
//                     </h3>

//                     <p className="text-[#292929]/60 text-sm leading-6 mt-4">
//                       {service.short}
//                     </p>

//                     <div className="mt-auto pt-6">
//                       <span className="inline-flex items-center gap-2 text-[#292929] text-[10px] font-black uppercase tracking-[0.18em] group-hover:text-[#F47B2B] transition-colors">
//                         View Service
//                         <ArrowRight size={14} />
//                       </span>
//                     </div>

//                   </div>
//                 </article>
//               );
//             })}

//           </div>

//           {filteredServices.length === 0 && (
//             <div className="bg-white py-20 text-center">
//               <p className="text-[#292929] font-black uppercase tracking-[0.18em]">
//                 No services found in this category.
//               </p>
//             </div>
//           )}

//         </div>
//       </section>

//       {/* Local Bromley Panel */}
//       <section className="bg-[#292929] py-20 md:py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-12 gap-12 items-center">

//             <div className="lg:col-span-7">

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                 Local Pest Control
//               </span>

//               <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-5">
//                 Not sure which
//                 <span className="block text-[#F47B2B]">
//                   service you need?
//                 </span>
//               </h2>

//               <p className="text-white/60 text-sm md:text-base leading-7 max-w-2xl mt-6">
//                 You do not need to identify the pest before getting in touch.
//                 Share what you have noticed, where you have seen it and any
//                 signs of activity around the property. PrimeShield Services
//                 Bromley can help you understand the next step.
//               </p>

//             </div>

//             <div className="lg:col-span-5">

//               <div className="border border-white/15 p-7 sm:p-8">

//                 <div className="flex items-start gap-4 pb-6 border-b border-white/10">
//                   <div className="w-11 h-11 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">
//                     <MapPinIcon />
//                   </div>

//                   <div>
//                     <span className="block text-white text-[10px] font-black uppercase tracking-[0.18em] mb-2">
//                       Bromley Base
//                     </span>

//                     <p className="text-white/60 text-sm leading-6">
//                       {address}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 py-6">
//                   <Phone
//                     size={20}
//                     className="text-[#F47B2B]"
//                   />

//                   <div>
//                     <span className="block text-white/40 text-[9px] font-black uppercase tracking-[0.18em] mb-1">
//                       Call PrimeShield
//                     </span>

//                     <a
//                       href="tel:07356271145"
//                       className="text-white font-black text-lg hover:text-[#F47B2B] transition-colors"
//                     >
//                       {phone}
//                     </a>
//                   </div>
//                 </div>

//                 <Link
//                   to="/contact-us"
//                   className="w-full inline-flex items-center justify-center gap-3 bg-[#F47B2B] text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
//                 >
//                   Contact PrimeShield
//                   <ArrowRight size={16} />
//                 </Link>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// function MapPinIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
//       <circle cx="12" cy="10" r="2.5" />
//     </svg>
//   );
// }

// export default Services;




// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";

// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const phone = "07356 271145";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Bromley",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Targeted control for persistent ant activity around kitchens, entry points and living spaces.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Bromley",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment for bedrooms, furniture and areas affected by bed bug activity.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Bromley",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Protection for carpets, rugs, wardrobes and other vulnerable fabric areas.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Bromley",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Control for beetle activity around carpets, furnishings, storage and fabric materials.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Bromley",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Professional cockroach control for kitchens, homes, restaurants and commercial premises.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Bromley",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control for kitchens, lofts, garages, wall voids and business premises.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Bromley",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Treatment support for flea activity affecting carpets, bedrooms and living areas.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Bromley",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional response to active wasp nests around homes, gardens and buildings.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Bromley",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Practical assessment and advice when bumble bee nests create property concerns.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Bromley",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces and property structures.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Bromley",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Practical property protection against vulnerable pest access and hygiene concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Bromley",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird control and proofing for roofs, ledges, commercial buildings and exposed areas.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";

//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Bromley"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   const handleServiceClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">

//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <ServicesHeroSection />


//       {/* =========================================================
//           INTRO
//       ========================================================= */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">

//             {/* LEFT */}
//             <div>

//               <span className="inline-flex items-center gap-3 text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">

//                 <span className="w-8 h-[2px] bg-[#F47B2B]" />

//                 Our Service Range

//               </span>


//               <h2 className="mt-6 text-[#292929] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black uppercase leading-[0.94] tracking-[-0.04em] max-w-4xl">

//                 One property.

//                 <span className="block text-[#F47B2B]">
//                   Many ways
//                 </span>

//                 pests can enter.

//               </h2>

//             </div>


//             {/* RIGHT */}
//             <div className="lg:border-l border-[#292929]/15 lg:pl-10">

//               <p className="text-[#292929]/65 text-base md:text-lg leading-7">

//                 From insects appearing indoors to rodents entering hidden
//                 spaces, every pest problem has different circumstances.
//                 PrimeShield Services Bromley provides a range of focused
//                 services for homes, landlords and businesses across Bromley.

//               </p>


//               <div className="flex items-center gap-3 mt-7">

//                 <CheckCircle2
//                   size={18}
//                   className="text-[#F47B2B]"
//                 />

//                 <span className="text-[#292929] text-xs font-black uppercase tracking-[0.16em]">
//                   Residential & Commercial
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           CATEGORY FILTER
//       ========================================================= */}
//       <section className="bg-[#292929]">

//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5">

//           <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">

//             {/* FILTER TITLE */}
//             <div className="flex items-center gap-4">

//               <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center">

//                 <Grid3X3 size={17} />

//               </div>


//               <div>

//                 <span className="block text-white text-[10px] font-black uppercase tracking-[0.2em]">
//                   Browse Services
//                 </span>

//                 <span className="text-white/45 text-[10px] uppercase tracking-[0.15em]">
//                   Choose a category
//                 </span>

//               </div>

//             </div>


//             {/* CATEGORY BUTTONS */}
//             <div className="flex flex-wrap gap-2">

//               {categories.map((cat) => {

//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-4 sm:px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] transition-all ${
//                       active
//                         ? "bg-[#F47B2B] text-white"
//                         : "bg-white/10 text-white/65 hover:bg-white hover:text-[#292929]"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );

//               })}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           SERVICES
//       ========================================================= */}
//       <section className="py-20 md:py-28">

//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">


//           {/* SECTION HEADING */}
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

//             <div>

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                 What We Handle
//               </span>


//               <h2 className="mt-4 text-[#292929] text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-[-0.03em]">

//                 Pest Control

//                 <span className="block text-[#F47B2B]">
//                   Services
//                 </span>

//               </h2>

//             </div>


//             <div className="md:max-w-sm">

//               <p className="text-[#292929]/55 text-sm md:text-base leading-6">

//                 Explore the services available across Bromley. Select a
//                 category above or choose a service below to get in touch.

//               </p>

//             </div>

//           </div>


//           {/* =====================================================
//               CONNECTED SERVICE GRID
//           ===================================================== */}
//           {filteredServices.length > 0 ? (

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-[#292929]/10 rounded-xl overflow-hidden">

//               {filteredServices.map((service) => {

//                 const Icon = service.icon;

//                 return (

//                   <article
//                     key={service.id}
//                     data-title={service.title}
//                     onClick={handleServiceClick}
//                     role="button"
//                     tabIndex={0}
//                     onKeyDown={(e) => {

//                       if (e.key === "Enter" || e.key === " ") {
//                         handleServiceClick();
//                       }

//                     }}
//                     className="group bg-white border-r border-b border-[#292929]/10 cursor-pointer flex flex-col overflow-hidden transition-colors duration-300 hover:bg-[#F7F3EF]"
//                   >


//                     {/* =================================================
//                         IMAGE
//                     ================================================= */}
//                     <div className="relative h-56 overflow-hidden">

//                       <img
//                         src={service.image}
//                         alt={`PrimeShield Services Bromley ${service.title}`}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                         loading="lazy"
//                         decoding="async"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />


//                       {/* IMAGE OVERLAY */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-[#292929]/10 to-transparent" />


//                       {/* NUMBER */}
//                       <div className="absolute top-4 left-4">

//                         <span className="inline-flex items-center justify-center min-w-[42px] h-[32px] px-3 bg-[#292929] text-white text-[10px] font-black tracking-[0.16em]">

//                           {service.id}

//                         </span>

//                       </div>


//                       {/* CATEGORY */}
//                       <div className="absolute bottom-4 left-4 right-4">

//                         <span className="text-white text-[9px] font-black uppercase tracking-[0.18em]">

//                           {service.cat}

//                         </span>

//                       </div>

//                     </div>


//                     {/* =================================================
//                         CONTENT
//                     ================================================= */}
//                     <div className="p-6 flex flex-col flex-1">


//                       {/* ICON + ARROW */}
//                       <div className="flex items-center justify-between mb-5">

//                         <div className="w-11 h-11 bg-[#F7F3EF] text-[#292929] flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-white transition-colors duration-300">

//                           <Icon size={19} />

//                         </div>


//                         <div className="w-9 h-9 border border-[#292929]/10 flex items-center justify-center text-[#292929]/40 group-hover:bg-[#292929] group-hover:text-white group-hover:border-[#292929] transition-all duration-300">

//                           <ArrowUpRight size={17} />

//                         </div>

//                       </div>


//                       {/* TITLE */}
//                       <h3 className="text-[#292929] text-lg sm:text-xl font-black uppercase leading-[1.05] tracking-tight group-hover:text-[#F47B2B] transition-colors duration-300">

//                         {service.title}

//                       </h3>


//                       {/* ORANGE LINE */}
//                       <div className="w-10 h-[3px] bg-[#F47B2B] mt-5 mb-4 group-hover:w-16 transition-all duration-300" />


//                       {/* DESCRIPTION */}
//                       <p className="text-[#292929]/55 text-sm leading-6">

//                         {service.short}

//                       </p>


//                       {/* BOTTOM */}
//                       <div className="mt-7 pt-5 border-t border-[#292929]/10 flex items-center justify-between">

//                         <span className="text-[#292929] text-[9px] font-black uppercase tracking-[0.16em]">

//                           Bromley

//                         </span>


//                         <span className="inline-flex items-center gap-2 text-[#F47B2B] text-[9px] font-black uppercase tracking-[0.16em]">

//                           Enquire

//                           <ArrowRight size={13} />

//                         </span>

//                       </div>

//                     </div>

//                   </article>

//                 );

//               })}

//             </div>

//           ) : (

//             /* =====================================================
//                EMPTY STATE
//             ===================================================== */
//             <div className="bg-white border border-[#292929]/10 py-20 text-center">

//               <p className="text-[#292929] font-black uppercase tracking-[0.18em]">

//                 No services found in this category.

//               </p>

//             </div>

//           )}

//         </div>

//       </section>


//       {/* =========================================================
//           LOCAL BROMLEY CTA
//       ========================================================= */}
//       <section className="bg-[#292929] py-20 md:py-24">

//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

//           <div className="grid lg:grid-cols-12 gap-12 items-center">


//             {/* LEFT */}
//             <div className="lg:col-span-7">

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">

//                 Local Pest Control

//               </span>


//               <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-5">

//                 Not sure which

//                 <span className="block text-[#F47B2B]">

//                   service you need?

//                 </span>

//               </h2>


//               <p className="text-white/60 text-sm md:text-base leading-7 max-w-2xl mt-6">

//                 You do not need to identify the pest before getting in touch.
//                 Share what you have noticed, where you have seen it and any
//                 signs of activity around the property. PrimeShield Services
//                 Bromley can help you understand the next step.

//               </p>

//             </div>


//             {/* RIGHT */}
//             <div className="lg:col-span-5">

//               <div className="border border-white/15 p-7 sm:p-8">


//                 {/* ADDRESS */}
//                 <div className="flex items-start gap-4 pb-6 border-b border-white/10">

//                   <div className="w-11 h-11 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

//                     <MapPinIcon />

//                   </div>


//                   <div>

//                     <span className="block text-white text-[10px] font-black uppercase tracking-[0.18em] mb-2">

//                       Bromley Base

//                     </span>


//                     <p className="text-white/60 text-sm leading-6">

//                       {address}

//                     </p>

//                   </div>

//                 </div>


//                 {/* PHONE */}
//                 <div className="flex items-center gap-4 py-6">

//                   <Phone
//                     size={20}
//                     className="text-[#F47B2B]"
//                   />


//                   <div>

//                     <span className="block text-white/40 text-[9px] font-black uppercase tracking-[0.18em] mb-1">

//                       Call PrimeShield

//                     </span>


//                     <a
//                       href="tel:07356271145"
//                       className="text-white font-black text-lg hover:text-[#F47B2B] transition-colors"
//                     >

//                       {phone}

//                     </a>

//                   </div>

//                 </div>


//                 {/* CTA */}
//                 <Link
//                   to="/contact-us"
//                   className="w-full inline-flex items-center justify-center gap-3 bg-[#F47B2B] text-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
//                 >

//                   Contact PrimeShield

//                   <ArrowRight size={16} />

//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           ABOUT CALLBACK
//       ========================================================= */}
//       <AboutCallbackSection />

//     </main>
//   );
// };


// /* =============================================================
//    MAP PIN ICON
// ============================================================= */
// function MapPinIcon() {

//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >

//       <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

//       <circle
//         cx="12"
//         cy="10"
//         r="2.5"
//       />

//     </svg>
//   );
// }


// export default Services;












// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
//   Phone,
//   CheckCircle2,
//   Building2,
//   MapPin,
//   Search,
//   ShieldCheck,
// } from "lucide-react";

// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   /* =========================================================
//      PRIME SHIELD CARSHALTON DETAILS
//   ========================================================== */

//   const companyName = "PrimeShield Services Carshalton";
//   const phone = "07438 756809";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   /* =========================================================
//      CATEGORIES
//   ========================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =========================================================
//      SERVICES
//   ========================================================== */

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Carshalton",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Professional support for recurring ant activity around kitchens, food areas, entry points and other parts of a property.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Carshalton",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment for suspected bed bug activity in bedrooms, furniture, sleeping areas and surrounding spaces.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Carshalton",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Treatment support for carpet moth activity affecting carpets, rugs, wardrobes, furnishings and fabric materials.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Carshalton",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Practical control for carpet beetle activity around fabrics, carpets, furnishings, storage areas and vulnerable materials.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Carshalton",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Targeted cockroach control for kitchens, food preparation areas, homes, workplaces and commercial premises.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Carshalton",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control support for signs of rats or mice around kitchens, lofts, garages, wall spaces and business properties.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Carshalton",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Professional treatment support where flea activity is affecting carpets, furnishings, bedrooms or living areas.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Carshalton",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional assistance with active wasp nests located around roofs, gardens, walls, buildings and other property areas.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Carshalton",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Assessment and practical guidance where a bumble bee nest is creating concern around a residential or commercial property.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Carshalton",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces, cavities and other parts of the property structure.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Carshalton",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Property-focused measures designed to address vulnerable access areas and pest-related hygiene concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Carshalton",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird management and property protection for roofs, ledges, buildings, commercial premises and exposed areas.",
//     },
//   ];

//   /* =========================================================
//      HANDLE ROUTING STATE
//   ========================================================== */

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";

//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Carshalton"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   /* =========================================================
//      FILTER SERVICES
//   ========================================================== */

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   /* =========================================================
//      SERVICE CLICK
//   ========================================================== */

//   const handleServiceClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">

//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <ServicesHeroSection />


//       {/* =========================================================
//           SERVICE INTRO
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">

//         <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-[#EE6C1A]/20" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">

//             <div className="relative">

//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30">
//                   {companyName}
//                 </span>
//               </div>

//               <p className="mt-7 text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 02 / Service Directory
//               </p>

//               <div className="mt-8 hidden h-40 w-px bg-gradient-to-b from-[#EE6C1A] to-transparent lg:block" />

//             </div>


//             <div>

//               <h2 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">

//                 Every pest problem
//                 <br />

//                 <span className="text-white/20">
//                   has its own pattern.
//                 </span>

//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_0.7fr]">

//                 <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
//                   From insects appearing around living spaces to rodents
//                   moving through hidden areas, the signs and circumstances
//                   can vary from one property to another. Our service range
//                   covers common pest problems affecting homes, rentals,
//                   workplaces and commercial premises across Carshalton.
//                 </p>

//                 <div className="border-l border-[#EE6C1A] pl-6">

//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                     Service Range
//                   </p>

//                   <p className="mt-3 text-2xl font-black leading-tight">
//                     {servicesData.length}
//                     <span className="text-white/25"> specialist areas</span>
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           CATEGORY SELECTOR
//       ========================================================== */}

//       <section className="border-y border-white/10 bg-[#151414]">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">

//             <div className="flex items-center gap-4">

//               <div className="flex h-10 w-10 items-center justify-center border border-[#EE6C1A]">
//                 <Search
//                   size={16}
//                   className="text-[#EE6C1A]"
//                 />
//               </div>

//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/60">
//                   Explore Service Areas
//                 </p>

//                 <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/20">
//                   Showing {filteredServices.length} services
//                 </p>
//               </div>

//             </div>


//             <div className="flex flex-wrap gap-2">

//               {categories.map((cat) => {

//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-5 py-3 text-[8px] font-black uppercase tracking-[0.16em] transition-all duration-300 ${
//                       active
//                         ? "bg-[#EE6C1A] text-black"
//                         : "border border-white/10 text-white/35 hover:border-white/30 hover:text-white"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );

//               })}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           SERVICE VISUAL DIRECTORY
//           COMPLETELY NEW IMAGE-LED DESIGN
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 03 / Treatment Directory
//               </p>

//               <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-7xl">

//                 Find the
//                 <br />

//                 <span className="text-white/20">
//                   right service.
//                 </span>

//               </h2>

//             </div>


//             <div className="flex items-center gap-5">

//               <div className="text-right">

//                 <p className="text-4xl font-black text-[#EE6C1A]">
//                   {String(filteredServices.length).padStart(2, "0")}
//                 </p>

//                 <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
//                   Available
//                 </p>

//               </div>

//               <div className="h-12 w-px bg-white/10" />

//               <p className="max-w-[190px] text-xs leading-5 text-white/25">
//                 Select any service to start an enquiry with PrimeShield.
//               </p>

//             </div>

//           </div>


//           {/* =====================================================
//               LARGE ALTERNATING IMAGE PANELS
//           ====================================================== */}

//           <div className="space-y-6">

//             {filteredServices.map((service, index) => {

//               const Icon = service.icon;

//               const reversed = index % 2 !== 0;

//               return (
//                 <article
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={handleServiceClick}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       handleServiceClick();
//                     }
//                   }}
//                   className="group relative cursor-pointer overflow-hidden bg-black"
//                 >

//                   <div
//                     className={`grid min-h-[420px] lg:min-h-[500px] lg:grid-cols-2 ${
//                       reversed ? "lg:flex-row-reverse" : ""
//                     }`}
//                   >

//                     {/* =================================================
//                         IMAGE
//                     ================================================= */}

//                     <div
//                       className={`relative min-h-[300px] overflow-hidden ${
//                         reversed ? "lg:order-2" : "lg:order-1"
//                       }`}
//                     >

//                       <img
//                         src={service.image}
//                         alt={`PrimeShield Services Carshalton ${service.title}`}
//                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
//                         loading="lazy"
//                         decoding="async"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />

//                       <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/5" />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />


//                       {/* IMAGE NUMBER */}

//                       <div className="absolute left-6 top-6">

//                         <div className="flex h-12 min-w-[55px] items-center justify-center bg-[#EE6C1A] px-4 text-sm font-black text-black">
//                           {service.id}
//                         </div>

//                       </div>


//                       {/* CATEGORY */}

//                       <div className="absolute bottom-6 left-6">

//                         <span className="border border-white/20 bg-black/50 px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
//                           {service.cat}
//                         </span>

//                       </div>

//                     </div>


//                     {/* =================================================
//                         INFORMATION PANEL
//                     ================================================= */}

//                     <div
//                       className={`relative flex flex-col justify-between overflow-hidden bg-[#151414] p-8 sm:p-12 lg:p-14 ${
//                         reversed ? "lg:order-1" : "lg:order-2"
//                       }`}
//                     >

//                       {/* Decorative number */}

//                       <div className="pointer-events-none absolute right-[-20px] top-[-55px] select-none text-[180px] font-black leading-none tracking-[-0.12em] text-white/[0.025]">
//                         {service.id}
//                       </div>


//                       {/* Top */}

//                       <div className="relative">

//                         <div className="flex items-center justify-between">

//                           <div className="flex h-12 w-12 items-center justify-center border border-[#EE6C1A]/40 transition-all duration-300 group-hover:border-[#EE6C1A] group-hover:bg-[#EE6C1A]">

//                             <Icon
//                               size={20}
//                               strokeWidth={1.5}
//                               className="text-[#EE6C1A] transition-colors duration-300 group-hover:text-black"
//                             />

//                           </div>

//                           <ArrowUpRight
//                             size={22}
//                             className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
//                           />

//                         </div>


//                         <p className="mt-12 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                           {service.cat}
//                         </p>


//                         <h3 className="mt-5 max-w-xl text-3xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
//                           {service.title}
//                         </h3>


//                         <div className="mt-7 h-[2px] w-14 bg-[#EE6C1A] transition-all duration-500 group-hover:w-24" />


//                         <p className="mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
//                           {service.short}
//                         </p>

//                       </div>


//                       {/* Bottom */}

//                       <div className="relative mt-12 border-t border-white/10 pt-6">

//                         <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                           <div>

//                             <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
//                               Service Location
//                             </p>

//                             <p className="mt-2 text-xs font-bold text-white/50">
//                               Carshalton & nearby areas
//                             </p>

//                           </div>


//                           <div className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#EE6C1A]">

//                             Discuss This Service

//                             <div className="flex h-9 w-9 items-center justify-center border border-[#EE6C1A]/40 transition-all duration-300 group-hover:bg-[#EE6C1A]">

//                               <ArrowRight
//                                 size={15}
//                                 className="transition-colors group-hover:text-black"
//                               />

//                             </div>

//                           </div>

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 </article>
//               );
//             })}

//           </div>


//           {/* EMPTY STATE */}

//           {filteredServices.length === 0 && (

//             <div className="border border-white/10 bg-black px-6 py-24 text-center">

//               <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
//                 No services found in this category.
//               </p>

//             </div>

//           )}

//         </div>

//       </section>


//       {/* =========================================================
//           SERVICE ENVIRONMENTS
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">

//             {/* LEFT STATEMENT */}

//             <div className="relative flex min-h-[500px] flex-col justify-between border border-white/10 bg-[#151414] p-8 sm:p-12">

//               <div>

//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   04 / Property Types
//                 </p>

//                 <h2 className="mt-7 text-5xl font-black leading-[0.86] tracking-[-0.055em] sm:text-6xl">

//                   Different
//                   <br />

//                   spaces.
//                   <br />

//                   <span className="text-white/20">
//                     Different
//                   </span>
//                   <br />

//                   conditions.

//                 </h2>

//               </div>


//               <div>

//                 <div className="mb-6 h-px w-16 bg-[#EE6C1A]" />

//                 <p className="max-w-md text-sm leading-7 text-white/35">
//                   Pest activity can develop in homes, rental properties,
//                   workplaces and commercial premises. The surroundings,
//                   access points and affected areas can all influence the
//                   situation.
//                 </p>

//               </div>

//             </div>


//             {/* RIGHT ENVIRONMENT LIST */}

//             <div className="grid border-y border-white/10 sm:grid-cols-2">

//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:border-r sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <Home
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     01
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Homes & Flats
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Residential properties, bedrooms, kitchens, lofts,
//                     garages and other living spaces.
//                   </p>

//                 </div>

//               </div>


//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <Building2
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     02
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Commercial
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Offices, shops, workplaces and other customer-facing
//                     or commercial environments.
//                   </p>

//                 </div>

//               </div>


//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <ShieldCheck
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     03
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Property Care
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Attention to areas where pests may enter, shelter,
//                     remain active or create recurring concerns.
//                   </p>

//                 </div>

//               </div>


//               <div className="group flex min-h-[250px] flex-col justify-between bg-[#EE6C1A] p-8 text-black transition-colors duration-300 hover:bg-white sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <MapPin
//                     size={23}
//                     strokeWidth={1.4}
//                   />

//                   <span className="text-[9px] font-black">
//                     SM5
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Local Coverage
//                   </h3>

//                   <p className="mt-4 text-xs font-semibold leading-6 text-black/55">
//                     {serviceArea} with a local point of contact in
//                     Carshalton.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           LOCAL SERVICE BAND
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="absolute left-0 top-1/2 hidden h-px w-[20%] bg-[#EE6C1A]/25 lg:block" />

//         <div className="absolute right-0 top-1/2 hidden h-px w-[14%] bg-white/10 lg:block" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-12 border-y border-white/10 py-14 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 05 / Carshalton Coverage
//               </p>

//               <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">

//                 Local knowledge.
//                 <br />

//                 <span className="text-white/20">
//                   Practical response.
//                 </span>

//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
//                 PrimeShield Services Carshalton provides pest control
//                 services for properties across Carshalton and nearby areas.
//                 If you have noticed unwanted activity, tell us what is
//                 happening and where it has been occurring.
//               </p>

//             </div>


//             <div className="min-w-[280px] border-l border-[#EE6C1A] pl-7 sm:min-w-[350px] sm:pl-10">

//               <div className="flex items-start gap-4">

//                 <MapPin
//                   size={20}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>

//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                     Carshalton Address
//                   </p>

//                   <p className="mt-3 text-sm font-black leading-6 text-white/75">
//                     {address}
//                   </p>

//                 </div>

//               </div>


//               <div className="mt-8 border-t border-white/10 pt-7">

//                 <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                   Direct Contact
//                 </p>

//                 <a
//                   href="tel:07438756809"
//                   className="mt-3 inline-flex items-center gap-3 text-xl font-black text-[#EE6C1A] transition-colors hover:text-white"
//                 >
//                   <Phone size={17} />
//                   {phone}
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

//         <div className="pointer-events-none absolute right-[-50px] top-[-70px] select-none text-[240px] font-black leading-none tracking-[-0.13em] text-black/[0.06]">
//           06
//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 xl:px-20">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/55">
//                 06 / Start An Enquiry
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.85] tracking-[-0.065em] sm:text-6xl lg:text-8xl">

//                 See a pest.
//                 <br />

//                 <span className="text-black/35">
//                   Tell us about it.
//                 </span>

//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 You do not need to identify the exact pest before contacting
//                 us. Describe what you have noticed, where it is happening and
//                 where your property is located.
//               </p>

//             </div>


//             <div className="flex flex-col gap-3">

//               <a
//                 href="tel:07438756809"
//                 className="inline-flex items-center justify-center gap-3 bg-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
//               >
//                 <Phone size={17} />
//                 Call {phone}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-black hover:text-white"
//               >
//                 Contact PrimeShield
//                 <ArrowUpRight size={16} />
//               </Link>

//             </div>

//           </div>


//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">

//             <div className="flex items-center gap-3">

//               <CheckCircle2 size={17} />

//               <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//                 Residential & Commercial
//               </span>

//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">

//               <MapPin size={13} />

//               {serviceArea}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =========================================================
//           ABOUT CALLBACK
//       ========================================================== */}

//       <AboutCallbackSection />

//     </main>
//   );
// };

// export default Services;

















// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Phone,
//   CheckCircle2,
//   Building2,
//   MapPin,
//   Search,
//   ShieldCheck,
// } from "lucide-react";

// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   /* =========================================================
//      PRIME SHIELD CARSHALTON DETAILS
//   ========================================================== */

//   const companyName = "PrimeShield Services Carshalton";
//   const phone = "07438 756809";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   /* =========================================================
//      CATEGORIES
//   ========================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =========================================================
//      SERVICES
//   ========================================================== */

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Carshalton",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Professional support for recurring ant activity around kitchens, food areas, entry points and other parts of a property.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Carshalton",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment for suspected bed bug activity in bedrooms, furniture, sleeping areas and surrounding spaces.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Carshalton",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Treatment support for carpet moth activity affecting carpets, rugs, wardrobes, furnishings and fabric materials.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Carshalton",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Practical control for carpet beetle activity around fabrics, carpets, furnishings, storage areas and vulnerable materials.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Carshalton",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Targeted cockroach control for kitchens, food preparation areas, homes, workplaces and commercial premises.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Carshalton",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control support for signs of rats or mice around kitchens, lofts, garages, wall spaces and business properties.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Carshalton",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Professional treatment support where flea activity is affecting carpets, furnishings, bedrooms or living areas.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Carshalton",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional assistance with active wasp nests located around roofs, gardens, walls, buildings and other property areas.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Carshalton",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Assessment and practical guidance where a bumble bee nest is creating concern around a residential or commercial property.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Carshalton",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces, cavities and other parts of the property structure.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Carshalton",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Property-focused measures designed to address vulnerable access areas and pest-related hygiene concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Carshalton",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird management and property protection for roofs, ledges, buildings, commercial premises and exposed areas.",
//     },
//   ];

//   /* =========================================================
//      HANDLE ROUTING STATE
//   ========================================================== */

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";

//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Carshalton"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   /* =========================================================
//      FILTER SERVICES
//   ========================================================== */

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   /* =========================================================
//      SERVICE CLICK
//   ========================================================== */

//   const handleServiceClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">

//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <ServicesHeroSection />

//       {/* =========================================================
//           SERVICE INTRO
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">

//         <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-[#EE6C1A]/20" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">

//             <div className="relative">

//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30">
//                   {companyName}
//                 </span>
//               </div>

//               <p className="mt-7 text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 02 / Service Directory
//               </p>

//               <div className="mt-8 hidden h-40 w-px bg-gradient-to-b from-[#EE6C1A] to-transparent lg:block" />

//             </div>

//             <div>

//               <h2 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">

//                 Every pest problem
//                 <br />

//                 <span className="text-white/20">
//                   has its own pattern.
//                 </span>

//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_0.7fr]">

//                 <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
//                   From insects appearing around living spaces to rodents
//                   moving through hidden areas, the signs and circumstances
//                   can vary from one property to another. Our service range
//                   covers common pest problems affecting homes, rentals,
//                   workplaces and commercial premises across Carshalton.
//                 </p>

//                 <div className="border-l border-[#EE6C1A] pl-6">

//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                     Service Range
//                   </p>

//                   <p className="mt-3 text-2xl font-black leading-tight">
//                     {servicesData.length}
//                     <span className="text-white/25">
//                       {" "}
//                       specialist areas
//                     </span>
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           CATEGORY SELECTOR
//       ========================================================== */}

//       <section className="border-y border-white/10 bg-[#151414]">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">

//             <div className="flex items-center gap-4">

//               <div className="flex h-10 w-10 items-center justify-center border border-[#EE6C1A]">
//                 <Search
//                   size={16}
//                   className="text-[#EE6C1A]"
//                 />
//               </div>

//               <div>

//                 <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/60">
//                   Explore Service Areas
//                 </p>

//                 <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/20">
//                   Showing {filteredServices.length} services
//                 </p>

//               </div>

//             </div>

//             <div className="flex flex-wrap gap-2">

//               {categories.map((cat) => {

//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-5 py-3 text-[8px] font-black uppercase tracking-[0.16em] transition-all duration-300 ${
//                       active
//                         ? "bg-[#EE6C1A] text-black"
//                         : "border border-white/10 text-white/35 hover:border-white/30 hover:text-white"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );

//               })}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           SERVICE VISUAL DIRECTORY
//           IMAGE DESIGN KEPT SAME — ONLY IMAGES ARE CIRCULAR
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 03 / Treatment Directory
//               </p>

//               <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-7xl">

//                 Find the
//                 <br />

//                 <span className="text-white/20">
//                   right service.
//                 </span>

//               </h2>

//             </div>

//             <div className="flex items-center gap-5">

//               <div className="text-right">

//                 <p className="text-4xl font-black text-[#EE6C1A]">
//                   {String(filteredServices.length).padStart(2, "0")}
//                 </p>

//                 <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
//                   Available
//                 </p>

//               </div>

//               <div className="h-12 w-px bg-white/10" />

//               <p className="max-w-[190px] text-xs leading-5 text-white/25">
//                 Select any service to start an enquiry with PrimeShield.
//               </p>

//             </div>

//           </div>

//           {/* =====================================================
//               LARGE ALTERNATING IMAGE PANELS
//               IMAGE ITSELF IS CIRCULAR
//           ====================================================== */}

//           <div className="space-y-6">

//             {filteredServices.map((service, index) => {

//               const Icon = service.icon;

//               const reversed = index % 2 !== 0;

//               return (
//                 <article
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={handleServiceClick}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       handleServiceClick();
//                     }
//                   }}
//                   className="group relative cursor-pointer overflow-hidden bg-black"
//                 >

//                   <div
//                     className={`grid min-h-[420px] lg:min-h-[500px] lg:grid-cols-2 ${
//                       reversed ? "lg:flex-row-reverse" : ""
//                     }`}
//                   >

//                     {/* =================================================
//                         CIRCULAR IMAGE
//                     ================================================= */}

//                     <div
//                       className={`relative flex min-h-[300px] items-center justify-center overflow-hidden ${
//                         reversed ? "lg:order-2" : "lg:order-1"
//                       }`}
//                     >

//                       <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]">

//                         <img
//                           src={service.image}
//                           alt={`PrimeShield Services Carshalton ${service.title}`}
//                           className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
//                           loading="lazy"
//                           decoding="async"
//                           onError={(e) => {
//                             e.currentTarget.style.display = "none";
//                           }}
//                         />

//                         <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/5" />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

//                         {/* IMAGE NUMBER */}

//                         <div className="absolute left-5 top-5">

//                           <div className="flex h-12 min-w-[55px] items-center justify-center bg-[#EE6C1A] px-4 text-sm font-black text-black">
//                             {service.id}
//                           </div>

//                         </div>

//                         {/* CATEGORY */}

//                         <div className="absolute bottom-5 left-5">

//                           <span className="border border-white/20 bg-black/50 px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
//                             {service.cat}
//                           </span>

//                         </div>

//                       </div>

//                     </div>

//                     {/* =================================================
//                         INFORMATION PANEL
//                     ================================================= */}

//                     <div
//                       className={`relative flex flex-col justify-between overflow-hidden bg-[#151414] p-8 sm:p-12 lg:p-14 ${
//                         reversed ? "lg:order-1" : "lg:order-2"
//                       }`}
//                     >

//                       {/* Decorative number */}

//                       <div className="pointer-events-none absolute right-[-20px] top-[-55px] select-none text-[180px] font-black leading-none tracking-[-0.12em] text-white/[0.025]">
//                         {service.id}
//                       </div>

//                       {/* Top */}

//                       <div className="relative">

//                         <div className="flex items-center justify-between">

//                           <div className="flex h-12 w-12 items-center justify-center border border-[#EE6C1A]/40 transition-all duration-300 group-hover:border-[#EE6C1A] group-hover:bg-[#EE6C1A]">

//                             <Icon
//                               size={20}
//                               strokeWidth={1.5}
//                               className="text-[#EE6C1A] transition-colors duration-300 group-hover:text-black"
//                             />

//                           </div>

//                           <ArrowUpRight
//                             size={22}
//                             className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
//                           />

//                         </div>

//                         <p className="mt-12 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                           {service.cat}
//                         </p>

//                         <h3 className="mt-5 max-w-xl text-3xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
//                           {service.title}
//                         </h3>

//                         <div className="mt-7 h-[2px] w-14 bg-[#EE6C1A] transition-all duration-500 group-hover:w-24" />

//                         <p className="mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
//                           {service.short}
//                         </p>

//                       </div>

//                       {/* Bottom */}

//                       <div className="relative mt-12 border-t border-white/10 pt-6">

//                         <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                           <div>

//                             <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
//                               Service Location
//                             </p>

//                             <p className="mt-2 text-xs font-bold text-white/50">
//                               Carshalton & nearby areas
//                             </p>

//                           </div>

//                           <div className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#EE6C1A]">

//                             Discuss This Service

//                             <div className="flex h-9 w-9 items-center justify-center border border-[#EE6C1A]/40 transition-all duration-300 group-hover:bg-[#EE6C1A]">

//                               <ArrowRight
//                                 size={15}
//                                 className="transition-colors group-hover:text-black"
//                               />

//                             </div>

//                           </div>

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 </article>
//               );
//             })}

//           </div>

//           {/* EMPTY STATE */}

//           {filteredServices.length === 0 && (

//             <div className="border border-white/10 bg-black px-6 py-24 text-center">

//               <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
//                 No services found in this category.
//               </p>

//             </div>

//           )}

//         </div>

//       </section>

//       {/* =========================================================
//           SERVICE ENVIRONMENTS
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">

//             {/* LEFT STATEMENT */}

//             <div className="relative flex min-h-[500px] flex-col justify-between border border-white/10 bg-[#151414] p-8 sm:p-12">

//               <div>

//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   04 / Property Types
//                 </p>

//                 <h2 className="mt-7 text-5xl font-black leading-[0.86] tracking-[-0.055em] sm:text-6xl">

//                   Different
//                   <br />

//                   spaces.
//                   <br />

//                   <span className="text-white/20">
//                     Different
//                   </span>
//                   <br />

//                   conditions.

//                 </h2>

//               </div>

//               <div>

//                 <div className="mb-6 h-px w-16 bg-[#EE6C1A]" />

//                 <p className="max-w-md text-sm leading-7 text-white/35">
//                   Pest activity can develop in homes, rental properties,
//                   workplaces and commercial premises. The surroundings,
//                   access points and affected areas can all influence the
//                   situation.
//                 </p>

//               </div>

//             </div>

//             {/* RIGHT ENVIRONMENT LIST */}

//             <div className="grid border-y border-white/10 sm:grid-cols-2">

//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:border-r sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <Home
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     01
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Homes & Flats
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Residential properties, bedrooms, kitchens, lofts,
//                     garages and other living spaces.
//                   </p>

//                 </div>

//               </div>

//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <Building2
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     02
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Commercial
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Offices, shops, workplaces and other customer-facing
//                     or commercial environments.
//                   </p>

//                 </div>

//               </div>

//               <div className="group flex min-h-[250px] flex-col justify-between border-b border-white/10 p-8 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <ShieldCheck
//                     size={23}
//                     strokeWidth={1.4}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black text-white/15">
//                     03
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Property Care
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/30">
//                     Attention to areas where pests may enter, shelter,
//                     remain active or create recurring concerns.
//                   </p>

//                 </div>

//               </div>

//               <div className="group flex min-h-[250px] flex-col justify-between bg-[#EE6C1A] p-8 text-black transition-colors duration-300 hover:bg-white sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <MapPin
//                     size={23}
//                     strokeWidth={1.4}
//                   />

//                   <span className="text-[9px] font-black">
//                     SM5
//                   </span>

//                 </div>

//                 <div>

//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Local Coverage
//                   </h3>

//                   <p className="mt-4 text-xs font-semibold leading-6 text-black/55">
//                     {serviceArea} with a local point of contact in
//                     Carshalton.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           LOCAL SERVICE BAND
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="absolute left-0 top-1/2 hidden h-px w-[20%] bg-[#EE6C1A]/25 lg:block" />

//         <div className="absolute right-0 top-1/2 hidden h-px w-[14%] bg-white/10 lg:block" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-12 border-y border-white/10 py-14 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 05 / Carshalton Coverage
//               </p>

//               <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">

//                 Local knowledge.
//                 <br />

//                 <span className="text-white/20">
//                   Practical response.
//                 </span>

//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
//                 PrimeShield Services Carshalton provides pest control
//                 services for properties across Carshalton and nearby areas.
//                 If you have noticed unwanted activity, tell us what is
//                 happening and where it has been occurring.
//               </p>

//             </div>

//             <div className="min-w-[280px] border-l border-[#EE6C1A] pl-7 sm:min-w-[350px] sm:pl-10">

//               <div className="flex items-start gap-4">

//                 <MapPin
//                   size={20}
//                   className="mt-1 shrink-0 text-[#EE6C1A]"
//                 />

//                 <div>

//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                     Carshalton Address
//                   </p>

//                   <p className="mt-3 text-sm font-black leading-6 text-white/75">
//                     {address}
//                   </p>

//                 </div>

//               </div>

//               <div className="mt-8 border-t border-white/10 pt-7">

//                 <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                   Direct Contact
//                 </p>

//                 <a
//                   href="tel:07438756809"
//                   className="mt-3 inline-flex items-center gap-3 text-xl font-black text-[#EE6C1A] transition-colors hover:text-white"
//                 >
//                   <Phone size={17} />
//                   {phone}
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

//         <div className="pointer-events-none absolute right-[-50px] top-[-70px] select-none text-[240px] font-black leading-none tracking-[-0.13em] text-black/[0.06]">
//           06
//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 xl:px-20">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/55">
//                 06 / Start An Enquiry
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.85] tracking-[-0.065em] sm:text-6xl lg:text-8xl">

//                 See a pest.
//                 <br />

//                 <span className="text-black/35">
//                   Tell us about it.
//                 </span>

//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 You do not need to identify the exact pest before contacting
//                 us. Describe what you have noticed, where it is happening and
//                 where your property is located.
//               </p>

//             </div>

//             <div className="flex flex-col gap-3">

//               <a
//                 href="tel:07438756809"
//                 className="inline-flex items-center justify-center gap-3 bg-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
//               >
//                 <Phone size={17} />
//                 Call {phone}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-black hover:text-white"
//               >
//                 Contact PrimeShield
//                 <ArrowUpRight size={16} />
//               </Link>

//             </div>

//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">

//             <div className="flex items-center gap-3">

//               <CheckCircle2 size={17} />

//               <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//                 Residential & Commercial
//               </span>

//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">

//               <MapPin size={13} />

//               {serviceArea}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           ABOUT CALLBACK
//       ========================================================== */}

//       <AboutCallbackSection />

//     </main>
//   );
// };

// export default Services;














// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import {
//   ShieldAlert,
//   ArrowUpRight,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Phone,
//   CheckCircle2,
//   Building2,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Layers3,
//   LocateFixed,
// } from "lucide-react";

// // import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [hoveredService, setHoveredService] = useState(null);

//   /* =========================================================
//      PRIME SHIELD SIDCUP DETAILS
//   ========================================================== */

//   const companyName = "PrimeShield Services Sidcup";
//   const phone = "07356 295780";
//   const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
//   const serviceArea = "Sidcup and nearby areas";

//   /* =========================================================
//      CATEGORIES
//   ========================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =========================================================
//      SERVICES
//   ========================================================== */

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ant Control Sidcup",
//       image: "/images/ants.webp",
//       icon: Bug,
//       short:
//         "Support for recurring ant activity around kitchens, food areas, entry points and other parts of the property.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bug Treatment Sidcup",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       short:
//         "Focused treatment support for suspected bed bug activity around bedrooms, furniture, sleeping areas and surrounding spaces.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Treatment Sidcup",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       short:
//         "Treatment support for carpet moth activity affecting carpets, rugs, wardrobes, furnishings and fabric materials.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Control Sidcup",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       short:
//         "Practical control support for carpet beetle activity around fabrics, carpets, furnishings, storage and vulnerable materials.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Sidcup",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       short:
//         "Targeted cockroach control support for kitchens, food preparation areas, homes, workplaces and commercial premises.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rat & Mice Control Sidcup",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       short:
//         "Rodent control support for signs of rats or mice around kitchens, lofts, garages, wall spaces and business properties.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control Sidcup",
//       image: "/images/flea.webp",
//       icon: Bug,
//       short:
//         "Professional treatment support where flea activity is affecting carpets, furnishings, bedrooms or living areas.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasp Nest Removal Sidcup",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       short:
//         "Professional assistance with active wasp nests around roofs, gardens, walls, buildings and other property areas.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Nest Support Sidcup",
//       image: "/images/bee.webp",
//       icon: Bug,
//       short:
//         "Assessment and practical guidance where a bumble bee nest is creating concern around a residential or commercial property.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control Sidcup",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       short:
//         "Support for squirrel activity affecting lofts, roof spaces, cavities and other parts of the property structure.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Property Proofing Sidcup",
//       image: "/images/hygene.webp",
//       icon: Home,
//       short:
//         "Property-focused measures designed to address vulnerable access areas and pest-related hygiene concerns.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Bird Control Services Sidcup",
//       image: "/images/birds.webp",
//       icon: Bird,
//       short:
//         "Bird management and property protection for roofs, ledges, buildings, commercial premises and exposed areas.",
//     },
//   ];

//   /* =========================================================
//      HANDLE ROUTING STATE
//   ========================================================== */

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";

//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName} Sidcup"], [data-title="${serviceName}"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   /* =========================================================
//      FILTER SERVICES
//   ========================================================== */

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.cat === selectedCategory
//         );

//   /* =========================================================
//      SERVICE CLICK
//   ========================================================== */

//   const handleServiceClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <ServicesHeroSection />

//       {/* =========================================================
//           INTRO — NEW VISUAL DIRECTION
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-white/[0.04]" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
//             {/* LEFT INDEX */}

//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30">
//                   {companyName}
//                 </span>
//               </div>

//               <div className="mt-12 flex items-end gap-5">
//                 <span className="text-[100px] font-black leading-[0.7] tracking-[-0.09em] text-[#EE6C1A]/15 sm:text-[150px]">
//                   {String(servicesData.length).padStart(2, "0")}
//                 </span>

//                 <div className="pb-2">
//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                     Service
//                   </p>

//                   <p className="mt-2 text-sm font-black uppercase">
//                     Areas Covered
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT TEXT */}

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 02 / What We Handle
//               </p>

//               <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-[82px]">
//                 One property.
//                 <br />
//                 <span className="text-white/15">Many possibilities.</span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
//                 Pest activity can look very different from one property to
//                 another. PrimeShield Services Sidcup covers a broad range of
//                 common pest problems, from insects and rodents to birds,
//                 wildlife and property protection.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CATEGORY NAVIGATION
//       ========================================================== */}

//       <section className="sticky top-0 z-30 border-y border-white/10 bg-black/95 backdrop-blur-md">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-center gap-3">
//               <Layers3
//                 size={17}
//                 strokeWidth={1.5}
//                 className="text-[#EE6C1A]"
//               />

//               <div>
//                 <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                   Browse Services
//                 </p>

//                 <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/15">
//                   {String(filteredServices.length).padStart(2, "0")} results
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {categories.map((cat) => {
//                 const active = selectedCategory === cat;

//                 return (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`relative overflow-hidden px-5 py-3 text-[8px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
//                       active
//                         ? "bg-[#EE6C1A] text-black"
//                         : "border border-white/10 text-white/30 hover:border-[#EE6C1A]/50 hover:text-white"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           COMPLETELY NEW SERVICE EXPERIENCE
          
//           NO CARDS
//           NO STANDARD GRID
//           NO ALTERNATING PANELS
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32 lg:py-40">
//         {/* Decorative vertical axis */}

//         <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.035] lg:block" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           {/* SECTION HEADER */}

//           <div className="relative mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.34em] text-[#EE6C1A]">
//                 03 / Service Archive
//               </p>

//               <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-6xl lg:text-[88px]">
//                 Choose your
//                 <br />
//                 <span className="text-white/15">problem.</span>
//               </h2>
//             </div>

//             <div className="max-w-xs border-l border-[#EE6C1A] pl-5">
//               <p className="text-xs leading-6 text-white/30">
//                 Select a service to start an enquiry. Each service is designed
//                 around the type of pest activity and the environment involved.
//               </p>
//             </div>
//           </div>

//           {/* =====================================================
//               SERVICE RUNWAY
//           ====================================================== */}

//           <div className="relative">
//             {/* Central line */}

//             <div className="pointer-events-none absolute bottom-0 left-[31px] top-0 w-px bg-white/10 sm:left-[51px] lg:left-1/2 lg:-translate-x-1/2" />

//             <div className="space-y-0">
//               {filteredServices.map((service, index) => {
//                 const Icon = service.icon;
//                 const isHovered = hoveredService === service.id;
//                 const isEven = index % 2 === 0;

//                 return (
//                   <article
//                     key={service.id}
//                     data-title={service.title}
//                     onClick={handleServiceClick}
//                     role="button"
//                     tabIndex={0}
//                     onMouseEnter={() => setHoveredService(service.id)}
//                     onMouseLeave={() => setHoveredService(null)}
//                     onFocus={() => setHoveredService(service.id)}
//                     onBlur={() => setHoveredService(null)}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" || e.key === " ") {
//                         handleServiceClick();
//                       }
//                     }}
//                     className="group relative cursor-pointer"
//                   >
//                     {/* =================================================
//                         DESKTOP SERVICE ROW
//                     ================================================== */}

//                     <div className="hidden lg:grid lg:grid-cols-[1fr_100px_1fr]">
//                       {/* LEFT SIDE */}

//                       <div
//                         className={`relative flex min-h-[370px] items-center pr-14 transition-all duration-700 ${
//                           isEven ? "lg:order-1" : "lg:order-3"
//                         }`}
//                       >
//                         {isEven ? (
//                           <div className="relative ml-auto w-full max-w-[510px]">
//                             <div
//                               className={`relative h-[300px] overflow-hidden transition-all duration-700 ${
//                                 isHovered
//                                   ? "w-full translate-x-0"
//                                   : "w-[82%] translate-x-8"
//                               }`}
//                             >
//                               <img
//                                 src={service.image}
//                                 alt={`PrimeShield Services Sidcup ${service.title}`}
//                                 className="h-full w-full object-cover grayscale-[15%] transition duration-[900ms] group-hover:scale-105"
//                                 loading="lazy"
//                                 decoding="async"
//                                 onError={(e) => {
//                                   e.currentTarget.style.display = "none";
//                                 }}
//                               />

//                               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20" />

//                               <div className="absolute bottom-5 left-6 flex items-center gap-3">
//                                 <Icon
//                                   size={17}
//                                   className="text-[#EE6C1A]"
//                                   strokeWidth={1.5}
//                                 />

//                                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/65">
//                                   {service.cat}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="relative ml-auto w-full max-w-[510px]">
//                             <div className="relative h-[300px] overflow-hidden">
//                               <img
//                                 src={service.image}
//                                 alt={`PrimeShield Services Sidcup ${service.title}`}
//                                 className="h-full w-full object-cover grayscale-[15%] transition duration-[900ms] group-hover:scale-105"
//                                 loading="lazy"
//                                 decoding="async"
//                                 onError={(e) => {
//                                   e.currentTarget.style.display = "none";
//                                 }}
//                               />

//                               <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-black/20" />

//                               <div className="absolute bottom-5 right-6 flex items-center gap-3">
//                                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/65">
//                                   {service.cat}
//                                 </span>

//                                 <Icon
//                                   size={17}
//                                   className="text-[#EE6C1A]"
//                                   strokeWidth={1.5}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* CENTER NODE */}

//                       <div className="relative z-10 flex items-center justify-center lg:order-2">
//                         <div
//                           className={`flex h-[74px] w-[74px] items-center justify-center rounded-full border transition-all duration-500 ${
//                             isHovered
//                               ? "border-[#EE6C1A] bg-[#EE6C1A] text-black scale-110"
//                               : "border-white/15 bg-[#151414] text-white/30"
//                           }`}
//                         >
//                           <span className="text-[11px] font-black">
//                             {service.id}
//                           </span>
//                         </div>
//                       </div>

//                       {/* RIGHT SIDE */}

//                       <div
//                         className={`relative flex min-h-[370px] items-center pl-14 ${
//                           isEven ? "lg:order-3" : "lg:order-1"
//                         }`}
//                       >
//                         <div
//                           className={`w-full max-w-[520px] transition-transform duration-500 ${
//                             isHovered
//                               ? isEven
//                                 ? "translate-x-3"
//                                 : "-translate-x-3"
//                               : ""
//                           }`}
//                         >
//                           <div className="flex items-center gap-4">
//                             <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                               {String(index + 1).padStart(2, "0")} /{" "}
//                               {service.cat}
//                             </span>

//                             <span className="h-px w-10 bg-white/10" />
//                           </div>

//                           <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white xl:text-5xl">
//                             {service.title}
//                           </h3>

//                           <p className="mt-6 max-w-lg text-sm leading-7 text-white/30">
//                             {service.short}
//                           </p>

//                           <div className="mt-8 flex items-center gap-4">
//                             <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/20">
//                               Sidcup & nearby areas
//                             </span>

//                             <div
//                               className={`flex h-10 w-10 items-center justify-center border transition-all duration-500 ${
//                                 isHovered
//                                   ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                                   : "border-white/10 text-white/25"
//                               }`}
//                             >
//                               <ArrowUpRight size={16} />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* =================================================
//                         MOBILE / TABLET VERSION
//                     ================================================== */}

//                     <div className="relative flex min-h-[430px] items-end border-b border-white/10 pl-[65px] py-8 sm:min-h-[480px] sm:pl-[95px] lg:hidden">
//                       {/* Image */}

//                       <div className="absolute inset-y-8 left-[65px] right-0 overflow-hidden sm:left-[95px]">
//                         <img
//                           src={service.image}
//                           alt={`PrimeShield Services Sidcup ${service.title}`}
//                           className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                           loading="lazy"
//                           decoding="async"
//                           onError={(e) => {
//                             e.currentTarget.style.display = "none";
//                           }}
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
//                       </div>

//                       {/* Number */}

//                       <div
//                         className={`absolute left-0 top-1/2 z-10 flex h-[64px] w-[64px] -translate-y-1/2 items-center justify-center rounded-full border ${
//                           isHovered
//                             ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                             : "border-white/15 bg-[#151414] text-white/40"
//                         }`}
//                       >
//                         <span className="text-[10px] font-black">
//                           {service.id}
//                         </span>
//                       </div>

//                       {/* Content */}

//                       <div className="relative z-10 w-full pb-5 pr-5">
//                         <div className="flex items-center gap-3">
//                           <Icon
//                             size={16}
//                             className="text-[#EE6C1A]"
//                             strokeWidth={1.5}
//                           />

//                           <span className="text-[8px] font-black uppercase tracking-[0.24em] text-white/60">
//                             {service.cat}
//                           </span>
//                         </div>

//                         <h3 className="mt-4 max-w-xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-4xl">
//                           {service.title}
//                         </h3>

//                         <p className="mt-4 max-w-xl text-xs leading-6 text-white/45">
//                           {service.short}
//                         </p>

//                         <div className="mt-6 flex items-center gap-3">
//                           <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]">
//                             Discuss Service
//                           </span>

//                           <ArrowUpRight
//                             size={15}
//                             className="text-[#EE6C1A]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* EMPTY STATE */}

//           {filteredServices.length === 0 && (
//             <div className="border border-white/10 bg-black px-6 py-24 text-center">
//               <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
//                 No services found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICE PHILOSOPHY — DIFFERENT VISUAL
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="grid gap-0 border border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
//             {/* LARGE STATEMENT */}

//             <div className="relative overflow-hidden border-b border-white/10 bg-[#151414] p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
//               <div className="pointer-events-none absolute right-[-80px] top-[-90px] text-[260px] font-black leading-none tracking-[-0.15em] text-white/[0.025]">
//                 PS
//               </div>

//               <p className="relative text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                 04 / Our Focus
//               </p>

//               <h2 className="relative mt-8 max-w-xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
//                 The right
//                 <br />
//                 response
//                 <br />
//                 <span className="text-white/15">starts with</span>
//                 <br />
//                 understanding.
//               </h2>
//             </div>

//             {/* THREE PRINCIPLES */}

//             <div className="grid sm:grid-cols-3">
//               <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-9">
//                 <div className="flex h-11 w-11 items-center justify-center border border-[#EE6C1A]/40">
//                   <Search
//                     size={18}
//                     strokeWidth={1.5}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <p className="mt-9 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                   01
//                 </p>

//                 <h3 className="mt-3 text-xl font-black uppercase">
//                   Identify
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/25">
//                   Look at the signs, location and circumstances surrounding
//                   the pest activity.
//                 </p>
//               </div>

//               <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-9">
//                 <div className="flex h-11 w-11 items-center justify-center border border-[#EE6C1A]/40">
//                   <LocateFixed
//                     size={18}
//                     strokeWidth={1.5}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <p className="mt-9 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                   02
//                 </p>

//                 <h3 className="mt-3 text-xl font-black uppercase">
//                   Respond
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/25">
//                   Consider the affected environment and the type of support
//                   the situation may require.
//                 </p>
//               </div>

//               <div className="p-7 sm:p-9">
//                 <div className="flex h-11 w-11 items-center justify-center border border-[#EE6C1A]/40">
//                   <ShieldCheck
//                     size={18}
//                     strokeWidth={1.5}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <p className="mt-9 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//                   03
//                 </p>

//                 <h3 className="mt-3 text-xl font-black uppercase">
//                   Protect
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/25">
//                   Focus on practical measures that help address the problem
//                   and reduce future pest activity.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROPERTY ENVIRONMENTS
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="mb-14 max-w-3xl">
//             <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//               05 / Where We Work
//             </p>

//             <h2 className="mt-6 text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
//               Homes.
//               <br />
//               <span className="text-white/15">Businesses.</span>
//               <br />
//               Properties.
//             </h2>
//           </div>

//           <div className="grid gap-px bg-white/10 md:grid-cols-3">
//             {/* HOME */}

//             <div className="group relative min-h-[360px] bg-[#151414] p-8 transition-colors duration-500 hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//               <div className="flex items-start justify-between">
//                 <Home
//                   size={24}
//                   strokeWidth={1.3}
//                   className="text-[#EE6C1A] transition-colors group-hover:text-black"
//                 />

//                 <span className="text-[8px] font-black opacity-20">
//                   01
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-4 max-w-sm text-xs leading-6 text-white/25 transition-colors group-hover:text-black/55">
//                   Residential properties, bedrooms, kitchens, lofts, garages
//                   and other living spaces across Sidcup.
//                 </p>
//               </div>
//             </div>

//             {/* COMMERCIAL */}

//             <div className="group relative min-h-[360px] bg-[#151414] p-8 transition-colors duration-500 hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//               <div className="flex items-start justify-between">
//                 <Building2
//                   size={24}
//                   strokeWidth={1.3}
//                   className="text-[#EE6C1A] transition-colors group-hover:text-black"
//                 />

//                 <span className="text-[8px] font-black opacity-20">
//                   02
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
//                   Commercial
//                 </h3>

//                 <p className="mt-4 max-w-sm text-xs leading-6 text-white/25 transition-colors group-hover:text-black/55">
//                   Offices, shops, workplaces and other commercial environments
//                   where pest activity can become a concern.
//                 </p>
//               </div>
//             </div>

//             {/* LOCAL */}

//             <div className="group relative min-h-[360px] bg-[#EE6C1A] p-8 text-black transition-colors duration-500 hover:bg-black hover:text-white sm:p-10">
//               <div className="flex items-start justify-between">
//                 <MapPin size={24} strokeWidth={1.3} />

//                 <span className="text-[8px] font-black opacity-40">
//                   03
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
//                   Sidcup & Nearby
//                 </h3>

//                 <p className="mt-4 max-w-sm text-xs font-semibold leading-6 text-black/55 transition-colors group-hover:text-white/35">
//                   Local pest control support from PrimeShield Services Sidcup
//                   for properties across Sidcup and surrounding areas.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SIDCUP LOCAL BAND
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-black py-24 sm:py-32">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="relative overflow-hidden border border-white/10 bg-[#151414]">
//             {/* Giant decorative circle */}

//             <div className="pointer-events-none absolute right-[-120px] top-[-150px] h-[430px] w-[430px] rounded-full border border-[#EE6C1A]/10" />

//             <div className="relative grid lg:grid-cols-[1fr_0.8fr]">
//               <div className="border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
//                 <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
//                   06 / Local Service
//                 </p>

//                 <h2 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
//                   Pest control
//                   <br />
//                   <span className="text-white/15">in Sidcup.</span>
//                 </h2>

//                 <p className="mt-8 max-w-xl text-sm leading-7 text-white/30">
//                   PrimeShield Services Sidcup provides practical pest control
//                   support for homes, flats, rental properties, workplaces and
//                   commercial premises across Sidcup and nearby areas.
//                 </p>
//               </div>

//               <div className="p-8 sm:p-12 lg:p-16">
//                 <div className="flex items-start gap-4">
//                   <MapPin
//                     size={20}
//                     className="mt-1 shrink-0 text-[#EE6C1A]"
//                   />

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/20">
//                       Local Address
//                     </p>

//                     <p className="mt-3 max-w-sm text-sm font-black leading-6 text-white/65">
//                       {address}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-10 border-t border-white/10 pt-8">
//                   <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/20">
//                     Direct Enquiries
//                   </p>

//                   <a
//                     href="tel:07356295780"
//                     className="mt-3 flex items-center gap-3 text-2xl font-black text-[#EE6C1A] transition-colors hover:text-white"
//                   >
//                     <Phone size={18} />
//                     {phone}
//                   </a>
//                 </div>

//                 <div className="mt-8 flex items-center gap-3">
//                   <CheckCircle2
//                     size={16}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/35">
//                     {serviceArea}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">
//         <div className="pointer-events-none absolute right-[-80px] top-[-120px] text-[300px] font-black leading-none tracking-[-0.15em] text-black/[0.055]">
//           07
//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 xl:px-20">
//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/55">
//                 07 / Start An Enquiry
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-6xl lg:text-[88px]">
//                 Not sure what
//                 <br />
//                 <span className="text-black/30">you are dealing with?</span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 You do not need to know the exact pest before getting in
//                 touch. Tell PrimeShield Services Sidcup what you have noticed,
//                 where it is happening and where your property is located.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">
//               <a
//                 href="tel:07356295780"
//                 className="inline-flex items-center justify-center gap-3 bg-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
//               >
//                 <Phone size={17} />
//                 Call {phone}
//               </a>

//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-black hover:text-white"
//               >
//                 Contact PrimeShield
//                 <ArrowUpRight size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <CheckCircle2 size={17} />

//               <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//                 Residential & Commercial
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
//               <MapPin size={13} />
//               {serviceArea}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CALLBACK
//       ========================================================== */}

//       {/* <AboutCallbackSection /> */}
//     </main>
//   );
// };

// export default Services;





















// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Rat,
//   Bird,
//   ShieldCheck,
//   Home,
//   Building2,
//   MapPin,
//   Search,
//   Leaf,
//   Phone,
//   CheckCircle2,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [hoveredService, setHoveredService] = useState(null);

//   /* =========================================================
//      GREEN HAVEN DETAILS
//   ========================================================== */

//   const companyName = "Green Haven Pest Control";
//   const phone = "+44 07354 239939";
//   const phoneHref = "tel:+447354239939";
//   const email = "info@greenhavenpestcontrol.uk";
//   const address = "Clapham, London";
//   const serviceArea = "Clapham & Nearby Areas";

//   /* =========================================================
//      CATEGORIES
//   ========================================================== */

//   const categories = [
//     "All",
//     "Rodents",
//     "Insects",
//     "Fleas & Bed Bugs",
//     "Moths & Beetles",
//     "Birds & Prevention",
//     "Other Pests",
//   ];

//   /* =========================================================
//      ALL SERVICES
//   ========================================================== */

//   const servicesData = [
//     {
//       id: "01",
//       category: "Rodents",
//       title: "Rat & Mice Control",
//       image: "/images/greenhaven-rats-mice.webp",
//       icon: Rat,
//       eyebrow: "Rodent Control",
//       description:
//         "Practical pest-control support for signs of rats or mice around kitchens, lofts, garages, wall spaces and other parts of a property.",
//     },

//     {
//       id: "02",
//       category: "Insects",
//       title: "Wasp, Bee & Hornet Control",
//       image: "/images/greenhaven-wasps.webp",
//       icon: Bug,
//       eyebrow: "Stinging Insects",
//       description:
//         "Assessment and treatment support for wasp, bee and hornet activity around homes, gardens, roofs, walls and other property areas.",
//     },

//     {
//       id: "03",
//       category: "Insects",
//       title: "Ant & Cockroach Eradication",
//       image: "/images/greenhaven-ants-cockroaches.webp",
//       icon: Bug,
//       eyebrow: "Crawling Insects",
//       description:
//         "Targeted pest-control support for ant and cockroach activity in kitchens, food areas, storage spaces, homes and commercial environments.",
//     },

//     {
//       id: "04",
//       category: "Birds & Prevention",
//       title: "Bird Control & Deterrents",
//       image: "/images/greenhaven-bird-control.webp",
//       icon: Bird,
//       eyebrow: "Bird Management",
//       description:
//         "Property-focused bird control and deterrent solutions for roofs, ledges, buildings, commercial premises and exposed areas.",
//     },

//     {
//       id: "05",
//       category: "Fleas & Bed Bugs",
//       title: "Bed Bug Control",
//       image: "/images/greenhaven-bed-bugs.webp",
//       icon: Bug,
//       eyebrow: "Bed Bug Control",
//       description:
//         "Targeted support for bed bug activity in bedrooms, mattresses, furniture and other areas where signs of infestation may be present.",
//     },

//     {
//       id: "06",
//       category: "Fleas & Bed Bugs",
//       title: "Flea Control",
//       image: "/images/greenhaven-fleas.webp",
//       icon: Bug,
//       eyebrow: "Flea Treatment",
//       description:
//         "Pest-control support for flea activity in carpets, furnishings, bedrooms and other areas where fleas may be present.",
//     },

//     {
//       id: "07",
//       category: "Moths & Beetles",
//       title: "Carpet Moth Control",
//       image: "/images/greenhaven-carpet-moth.webp",
//       icon: Bug,
//       eyebrow: "Carpet Moths",
//       description:
//         "Support for carpet moth activity and signs of damage around carpets, natural fibres, edges and less frequently disturbed areas.",
//     },

//     {
//       id: "08",
//       category: "Moths & Beetles",
//       title: "Carpet Beetle Control",
//       image: "/images/greenhaven-carpet-beetle.webp",
//       icon: Bug,
//       eyebrow: "Carpet Beetles",
//       description:
//         "Targeted pest-control support for carpet beetles and their larvae around carpets, fabrics, furniture and other affected areas.",
//     },

//     {
//       id: "09",
//       category: "Other Pests",
//       title: "Squirrel Control",
//       image: "/images/greenhaven-squirrels.webp",
//       icon: Rat,
//       eyebrow: "Squirrel Control",
//       description:
//         "Property-focused support for squirrel activity around roofs, lofts, roof spaces and potential access points.",
//     },

//     {
//       id: "10",
//       category: "Other Pests",
//       title: "Spider Control",
//       image: "/images/greenhaven-spiders.webp",
//       icon: Bug,
//       eyebrow: "Spider Control",
//       description:
//         "Practical pest-control support for spider activity around homes, buildings, storage areas and other affected spaces.",
//     },

//     {
//       id: "11",
//       category: "Other Pests",
//       title: "Fly Control",
//       image: "/images/greenhaven-flies.webp",
//       icon: Bug,
//       eyebrow: "Fly Control",
//       description:
//         "Support for fly activity in kitchens, commercial areas, waste areas and other parts of a property where flies are causing concern.",
//     },

//     {
//       id: "12",
//       category: "Other Pests",
//       title: "Silverfish Control",
//       image: "/images/greenhaven-silverfish.webp",
//       icon: Bug,
//       eyebrow: "Silverfish",
//       description:
//         "Pest-control support for silverfish activity in bathrooms, storage areas, kitchens and other suitable indoor environments.",
//     },

//     {
//       id: "13",
//       category: "Other Pests",
//       title: "Moth Control",
//       image: "/images/greenhaven-moths.webp",
//       icon: Bug,
//       eyebrow: "Moth Control",
//       description:
//         "Support for household moth activity and identification of areas where moths, eggs or larvae may be present.",
//     },

//     {
//       id: "14",
//       category: "Other Pests",
//       title: "Proofing & Prevention",
//       image: "/images/greenhaven-proofing.webp",
//       icon: ShieldCheck,
//       eyebrow: "Pest Prevention",
//       description:
//         "Practical measures to help address potential access points and reduce opportunities for pests to enter or remain around a property.",
//     },
//   ];

//   /* =========================================================
//      ROUTING STATE
//   ========================================================== */

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";

//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const serviceName = location.state.scrollToService;

//           const element = document.querySelector(
//             `[data-title="${serviceName}"], [data-title="${serviceName} Clapham"]`
//           );

//           if (element) {
//             element.scrollIntoView({
//               behavior: "smooth",
//               block: "center",
//             });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   /* =========================================================
//      FILTER SERVICES
//   ========================================================== */

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter(
//           (service) => service.category === selectedCategory
//         );

//   /* =========================================================
//      SERVICE CLICK
//   ========================================================== */

//   const handleServiceClick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main
//       className="min-h-screen overflow-x-hidden bg-white text-[#214217]"
//       style={{
//         fontFamily: "Arial, Helvetica, sans-serif",
//       }}
//     >
//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <ServicesHeroSection />

//       {/* =========================================================
//           INTRODUCTION
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#214217] py-24 sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-white/[0.035]" />

//         <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[430px] w-[430px] rounded-full bg-[#39951F]/10" />

//         <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#39951F]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
//                   Our Services
//                 </span>
//               </div>

//               <div className="mt-12 flex items-end gap-5">
//                 <span className="text-[100px] font-bold leading-[0.7] tracking-[-0.08em] text-white/[0.07] sm:text-[150px]">
//                   {String(servicesData.length).padStart(2, "0")}
//                 </span>

//                 <div className="pb-2">
//                   <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
//                     Core
//                   </p>

//                   <p className="mt-2 text-sm font-bold text-white">
//                     Service Areas
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#39951F]">
//                 Practical pest control
//               </p>

//               <h2 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-[78px]">
//                 The right service
//                 <br />
//                 <span className="text-white/25">
//                   for the problem.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
//                 Green Haven Pest Control provides pest-control support for
//                 homes and businesses across Clapham and nearby areas. Our
//                 services cover common rodent, insect and bird-related pest
//                 problems, with attention given to the property and the
//                 activity involved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICE FILTER
//       ========================================================== */}

//       <section className="sticky top-0 z-30 border-b border-[#214217]/10 bg-white/95 backdrop-blur-xl">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#39951F]/10">
//                 <Leaf
//                   size={16}
//                   className="text-[#39951F]"
//                   strokeWidth={1.8}
//                 />
//               </div>

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#214217]/45">
//                   Browse Services
//                 </p>

//                 <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#214217]/25">
//                   {String(filteredServices.length).padStart(2, "0")} services
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => {
//                 const active = selectedCategory === category;

//                 return (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category)}
//                     className={`rounded-full px-5 py-3 text-[8px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
//                       active
//                         ? "bg-[#214217] text-white shadow-lg shadow-[#214217]/10"
//                         : "border border-[#214217]/10 bg-white text-[#214217]/45 hover:border-[#39951F]/40 hover:text-[#214217]"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#F7F9F5] py-24 sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#39951F]/[0.045]" />

//         <div className="pointer-events-none absolute right-[-160px] bottom-[10%] h-[380px] w-[380px] rounded-full border-[55px] border-[#214217]/[0.025]" />

//         <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#39951F]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#214217]/45">
//                   Green Haven Services
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-[82px]">
//                 What we
//                 <br />
//                 <span className="text-[#39951F]">
//                   help with.
//                 </span>
//               </h2>
//             </div>

//             <div className="max-w-sm lg:pb-2">
//               <p className="text-sm leading-7 text-[#214217]/50">
//                 From unwanted rodents to insects and bird-related problems,
//                 choose the service that best matches what you have noticed at
//                 your property.
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2">
//             {filteredServices.map((service) => {
//               const Icon = service.icon;
//               const isHovered = hoveredService === service.id;

//               return (
//                 <article
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={handleServiceClick}
//                   role="button"
//                   tabIndex={0}
//                   onMouseEnter={() =>
//                     setHoveredService(service.id)
//                   }
//                   onMouseLeave={() =>
//                     setHoveredService(null)
//                   }
//                   onFocus={() =>
//                     setHoveredService(service.id)
//                   }
//                   onBlur={() =>
//                     setHoveredService(null)
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       handleServiceClick();
//                     }
//                   }}
//                   className="group relative cursor-pointer"
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-[2rem] border border-[#214217]/10 bg-white transition-all duration-500 ${
//                       isHovered
//                         ? "-translate-y-1 shadow-2xl shadow-[#214217]/10"
//                         : "shadow-sm"
//                     }`}
//                   >
//                     <div className="relative h-[310px] overflow-hidden sm:h-[370px]">
//                       <img
//                         src={service.image}
//                         alt={`${companyName} ${service.title}`}
//                         className={`h-full w-full object-cover transition duration-700 ${
//                           isHovered ? "scale-105" : "scale-100"
//                         }`}
//                         loading="lazy"
//                         decoding="async"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#214217]/85 via-[#214217]/10 to-transparent" />

//                       <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#214217]/70 text-white backdrop-blur-md">
//                         <span className="text-[10px] font-bold tracking-[0.1em]">
//                           {service.id}
//                         </span>
//                       </div>

//                       <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-md">
//                         <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#214217]">
//                           {service.eyebrow}
//                         </span>
//                       </div>

//                       <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#39951F] text-white">
//                           <Icon size={18} strokeWidth={1.7} />
//                         </div>

//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#214217] transition-transform duration-500 group-hover:rotate-45">
//                           <ArrowUpRight size={17} />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-7 sm:p-9">
//                       <div className="flex items-center justify-between gap-5">
//                         <h3 className="max-w-lg text-3xl font-bold leading-[0.95] tracking-[-0.045em] text-[#214217] sm:text-4xl">
//                           {service.title}
//                         </h3>
//                       </div>

//                       <p className="mt-5 max-w-xl text-sm leading-7 text-[#214217]/50">
//                         {service.description}
//                       </p>

//                       <div className="mt-7 flex items-center justify-between border-t border-[#214217]/10 pt-5">
//                         <span className="text-[8px] font-bold uppercase tracking-[0.23em] text-[#214217]/35">
//                           Clapham & nearby areas
//                         </span>

//                         <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#39951F]">
//                           Discuss Service
//                           <ArrowRight
//                             size={13}
//                             className="transition-transform duration-300 group-hover:translate-x-1"
//                           />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="rounded-[2rem] border border-[#214217]/10 bg-white px-6 py-24 text-center">
//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#214217]/45">
//                 No services found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           HOW WE APPROACH PEST PROBLEMS
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
//             <div>
//               <div className="inline-flex items-center gap-3 rounded-full bg-[#39951F]/10 px-4 py-2">
//                 <Leaf size={14} className="text-[#39951F]" />

//                 <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#214217]">
//                   Our Approach
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-7xl">
//                 Look at the
//                 <br />
//                 <span className="text-[#39951F]">
//                   whole problem.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-lg text-sm leading-7 text-[#214217]/50">
//                 Pest control is not simply about what is visible. The location
//                 of activity, possible access points and the surrounding
//                 environment can all be relevant when deciding how to respond.
//               </p>

//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#214217] px-6 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#39951F]"
//               >
//                 Talk To Green Haven

//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
//                   <ArrowRight size={13} />
//                 </span>
//               </button>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-3">
//               <div className="group rounded-[1.75rem] bg-[#F5F8F2] p-7 transition-all duration-300 hover:bg-[#214217]">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#39951F] shadow-sm">
//                   <Search size={19} strokeWidth={1.7} />
//                 </div>

//                 <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F]">
//                   01
//                 </span>

//                 <h3 className="mt-3 text-xl font-bold text-[#214217] transition-colors group-hover:text-white">
//                   Inspect
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
//                   Understand the signs of activity and where the problem is
//                   occurring.
//                 </p>
//               </div>

//               <div className="group rounded-[1.75rem] bg-[#214217] p-7 transition-all duration-300 hover:bg-[#39951F]">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#39951F]">
//                   <ShieldCheck size={19} strokeWidth={1.7} />
//                 </div>

//                 <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F] group-hover:text-white">
//                   02
//                 </span>

//                 <h3 className="mt-3 text-xl font-bold text-white">
//                   Treat
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/45">
//                   Address the pest activity according to the situation and
//                   affected environment.
//                 </p>
//               </div>

//               <div className="group rounded-[1.75rem] bg-[#F5F8F2] p-7 transition-all duration-300 hover:bg-[#214217]">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#39951F] shadow-sm">
//                   <CheckCircle2 size={19} strokeWidth={1.7} />
//                 </div>

//                 <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F]">
//                   03
//                 </span>

//                 <h3 className="mt-3 text-xl font-bold text-[#214217] transition-colors group-hover:text-white">
//                   Prevent
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
//                   Consider practical measures that can help reduce future
//                   access and pest activity.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROPERTY TYPES
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#F5F8F2] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
//             <div>
//               <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#39951F]">
//                 Where We Work
//               </p>

//               <h2 className="mt-6 text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-[72px]">
//                 Homes,
//                 <br />
//                 <span className="text-[#214217]/20">
//                   businesses
//                 </span>
//                 <br />
//                 & properties.
//               </h2>
//             </div>

//             <p className="max-w-2xl text-sm leading-7 text-[#214217]/50 lg:justify-self-end">
//               Green Haven Pest Control supports pest-control requirements in
//               residential and commercial environments across Clapham and
//               surrounding areas.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-4 md:grid-cols-3">
//             <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-white p-8 transition-all duration-500 hover:bg-[#214217] sm:p-10">
//               <div className="flex items-start justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39951F]/10 text-[#39951F] transition-colors group-hover:bg-white/10">
//                   <Home size={20} strokeWidth={1.5} />
//                 </div>

//                 <span className="text-[9px] font-bold text-[#214217]/15 group-hover:text-white/20">
//                   01
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-bold tracking-[-0.04em] text-[#214217] transition-colors group-hover:text-white">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
//                   Residential properties including kitchens, bedrooms, lofts,
//                   garages and other living spaces.
//                 </p>
//               </div>
//             </div>

//             <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#214217] p-8 transition-all duration-500 hover:bg-[#39951F] sm:p-10">
//               <div className="flex items-start justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#39951F]">
//                   <Building2 size={20} strokeWidth={1.5} />
//                 </div>

//                 <span className="text-[9px] font-bold text-white/20">
//                   02
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-bold tracking-[-0.04em] text-white">
//                   Commercial
//                 </h3>

//                 <p className="mt-4 text-xs leading-6 text-white/45">
//                   Offices, shops, workplaces and other commercial
//                   environments where pest activity may become a concern.
//                 </p>
//               </div>
//             </div>

//             <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#39951F] p-8 transition-all duration-500 hover:bg-white sm:p-10">
//               <div className="flex items-start justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-[#39951F]/10 group-hover:text-[#39951F]">
//                   <MapPin size={20} strokeWidth={1.5} />
//                 </div>

//                 <span className="text-[9px] font-bold text-white/35 group-hover:text-[#214217]/20">
//                   03
//                 </span>
//               </div>

//               <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
//                 <h3 className="text-3xl font-bold tracking-[-0.04em] text-white transition-colors group-hover:text-[#214217]">
//                   Clapham & Nearby
//                 </h3>

//                 <p className="mt-4 text-xs font-medium leading-6 text-white/65 transition-colors group-hover:text-[#214217]/45">
//                   Local pest-control support for properties across Clapham and
//                   nearby areas.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL GREEN HAVEN SECTION
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#214217] py-24 sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border-[75px] border-[#39951F]/10" />

//         <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-white/[0.025]" />

//         <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#39951F]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
//                   Local Pest Control
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl lg:text-[82px]">
//                 Pest control
//                 <br />
//                 <span className="text-[#39951F]">
//                   in Clapham.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
//                 Green Haven Pest Control provides practical support for
//                 residential and commercial properties across Clapham and
//                 nearby areas. If you have noticed pest activity and need to
//                 discuss the situation, our team can help you identify the
//                 appropriate service.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-3">
//                 <button
//                   onClick={() => navigate("/contact-us")}
//                   className="group inline-flex items-center gap-3 rounded-full bg-[#39951F] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
//                 >
//                   Contact Green Haven

//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#214217]/10">
//                     <ArrowUpRight
//                       size={14}
//                       className="transition-transform duration-300 group-hover:rotate-45"
//                     />
//                   </span>
//                 </button>

//                 <a
//                   href={phoneHref}
//                   className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#39951F] hover:text-[#39951F]"
//                 >
//                   <Phone size={14} />
//                   {phone}
//                 </a>
//               </div>
//             </div>

//             <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#39951F] text-white">
//                   <MapPin size={18} />
//                 </div>

//                 <div>
//                   <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
//                     Location
//                   </p>

//                   <p className="mt-2 text-lg font-bold text-white">
//                     {address}
//                   </p>

//                   <p className="mt-2 text-xs leading-6 text-white/35">
//                     {serviceArea}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-8 h-px bg-white/10" />

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
//                   Direct Enquiries
//                 </p>

//                 <a
//                   href={phoneHref}
//                   className="mt-3 block text-xl font-bold text-[#39951F] transition-colors hover:text-white sm:text-2xl"
//                 >
//                   {phone}
//                 </a>

//                 <a
//                   href={`mailto:${email}`}
//                   className="mt-2 block break-all text-xs text-white/40 transition-colors hover:text-[#39951F]"
//                 >
//                   {email}
//                 </a>
//               </div>

//               <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4">
//                 <CheckCircle2
//                   size={17}
//                   className="shrink-0 text-[#39951F]"
//                 />

//                 <span className="text-[8px] font-bold uppercase leading-5 tracking-[0.16em] text-white/40">
//                   Residential & Commercial Pest Control
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#39951F]">
//         <div className="pointer-events-none absolute right-[-80px] top-[-130px] h-[430px] w-[430px] rounded-full border-[65px] border-white/[0.07]" />

//         <div className="relative mx-auto max-w-[1450px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div>
//               <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/55">
//                 Start A Conversation
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl lg:text-[82px]">
//                 Seen signs of
//                 <br />
//                 <span className="text-white/35">
//                   pest activity?
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base">
//                 Tell Green Haven Pest Control what you have noticed and where
//                 the activity is occurring. We can discuss the situation and
//                 the appropriate pest-control service for your property.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center justify-center gap-3 rounded-full bg-[#214217] px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
//               >
//                 <Phone size={16} />
//                 Call {phone}
//               </a>

//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
//               >
//                 Contact Green Haven
//                 <ArrowUpRight size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <Leaf size={16} className="text-white" />

//               <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/70">
//                 Green Haven Pest Control
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.18em] text-white/55">
//               <MapPin size={13} />
//               {serviceArea}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Services;




























import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Rat,
  Bird,
  ShieldCheck,
  Home,
  Building2,
  MapPin,
  Search,
  Leaf,
  Phone,
  CheckCircle2,
} from "lucide-react";

import ServicesHeroSection from "../components/ServicesHeroSection";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredService, setHoveredService] = useState(null);

  /* =========================================================
     GREEN HAVEN DETAILS
  ========================================================== */

  const companyName = "Green Haven Pest Control";
  const phone = "+44 07354 239939";
  const phoneHref = "tel:+447354239939";
  const email = "info@greenhavenpestcontrol.uk";
  const address = "Clapham, London";
  const serviceArea = "Clapham & Nearby Areas";

  /* =========================================================
     CATEGORIES
  ========================================================== */

  const categories = [
    "All",
    "Insects",
    "Rodents & Wildlife",
    "Birds & Prevention",
  ];

  /* =========================================================
     SERVICES
  ========================================================== */

  const servicesData = [
    {
      id: "01",
      category: "Rodents & Wildlife",
      title: "Rat & Mice Control in Clapham",
      image: "/images/rodents.webp",
      icon: Rat,
      eyebrow: "Rodent Control",
      description:
        "Rodent control support for signs of rats or mice around kitchens, lofts, garages, wall spaces and residential or commercial properties in Clapham.",
    },

    {
      id: "02",
      category: "Insects",
      title: "Cockroach Control Clapham",
      image: "/images/cockroach.webp",
      icon: Bug,
      eyebrow: "Cockroach Control",
      description:
        "Targeted cockroach control support for kitchens, food preparation areas, homes, workplaces and commercial premises across Clapham.",
    },

    {
      id: "03",
      category: "Insects",
      title: "Ants Control Clapham",
      image: "/images/ants.webp",
      icon: Bug,
      eyebrow: "Ant Control",
      description:
        "Support for recurring ant activity around kitchens, food areas, entry points and other parts of properties throughout Clapham.",
    },

    {
      id: "04",
      category: "Insects",
      title: "Carpet Moth Control Clapham",
      image: "/images/moths.webp",
      icon: Bug,
      eyebrow: "Carpet Moth Control",
      description:
        "Treatment support for carpet moth activity affecting carpets, rugs, wardrobes, furnishings and fabric materials in Clapham properties.",
    },

    {
      id: "05",
      category: "Insects",
      title: "Carpet Beetle Control Clapham",
      image: "/images/beetle.webp",
      icon: Bug,
      eyebrow: "Carpet Beetle Control",
      description:
        "Practical control support for carpet beetle activity around fabrics, carpets, furnishings, storage and vulnerable materials in Clapham.",
    },

    {
      id: "06",
      category: "Insects",
      title: "Bumble Bee Nest Control Clapham",
      image: "/images/bee.webp",
      icon: Bug,
      eyebrow: "Bumble Bee Nest",
      description:
        "Assessment and practical support where a bumble bee nest is creating concern around a residential or commercial property in Clapham.",
    },

    {
      id: "07",
      category: "Insects",
      title: "Wasps Nest Control Clapham",
      image: "/images/wasps.webp",
      icon: ShieldCheck,
      eyebrow: "Wasp Nest Control",
      description:
        "Professional assistance with active wasp nests around roofs, gardens, walls, buildings and other property areas across Clapham.",
    },

    {
      id: "08",
      category: "Birds & Prevention",
      title: "Birds Control Clapham",
      image: "/images/birds.webp",
      icon: Bird,
      eyebrow: "Bird Control",
      description:
        "Bird management and property protection for roofs, ledges, buildings, commercial premises and exposed areas throughout Clapham.",
    },

    {
      id: "09",
      category: "Insects",
      title: "Bed Bugs Control Clapham",
      image: "/images/bedbugs.webp",
      icon: Bug,
      eyebrow: "Bed Bug Control",
      description:
        "Focused treatment support for suspected bed bug activity around bedrooms, furniture, sleeping areas and surrounding spaces in Clapham.",
    },

    {
      id: "10",
      category: "Insects",
      title: "Fleas Control Clapham",
      image: "/images/flea.webp",
      icon: Bug,
      eyebrow: "Flea Control",
      description:
        "Professional treatment support where flea activity is affecting carpets, furnishings, bedrooms or living areas across Clapham.",
    },

    {
      id: "11",
      category: "Rodents & Wildlife",
      title: "Squirrel Control Clapham",
      image: "/images/squirrel.webp",
      icon: Rat,
      eyebrow: "Squirrel Control",
      description:
        "Support for squirrel activity affecting lofts, roof spaces, cavities and other parts of the property structure in Clapham.",
    },

    {
      id: "12",
      category: "Birds & Prevention",
      title: "Proofing & Prevention Service Clapham",
      image: "/images/hygene.webp",
      icon: Home,
      eyebrow: "Proofing & Prevention",
      description:
        "Property-focused measures designed to address vulnerable access areas and help reduce opportunities for pest entry and activity in Clapham.",
    },
  ];

  /* =========================================================
     ROUTING STATE
  ========================================================== */

  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";

      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const timer = setTimeout(() => {
          const serviceName = location.state.scrollToService;

          const element = document.querySelector(
            `[data-title="${serviceName}"], [data-title="${serviceName} Clapham"]`
          );

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  /* =========================================================
     FILTER SERVICES
  ========================================================== */

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter(
          (service) => service.category === selectedCategory
        );

  /* =========================================================
     SERVICE CLICK
  ========================================================== */

  const handleServiceClick = () => {
    navigate("/contact-us/");
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-white text-[#214217]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================== */}

      <ServicesHeroSection />

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#214217] py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-white/[0.035]" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[430px] w-[430px] rounded-full bg-[#39951F]/10" />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39951F]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
                  Our Services
                </span>
              </div>

              <div className="mt-12 flex items-end gap-5">
                <span className="text-[100px] font-bold leading-[0.7] tracking-[-0.08em] text-white/[0.07] sm:text-[150px]">
                  {String(servicesData.length).padStart(2, "0")}
                </span>

                <div className="pb-2">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                    Core
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    Service Areas
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#39951F]">
                Practical pest control
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-[78px]">
                The right service
                <br />
                <span className="text-white/25">
                  for the problem.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                Green Haven Pest Control provides pest-control support for
                homes and businesses across Clapham and nearby areas. Our
                services cover common rodent, insect and bird-related pest
                problems, with attention given to the property and the
                activity involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE FILTER
      ========================================================== */}

      <section className="sticky top-0 z-30 border-b border-[#214217]/10 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#39951F]/10">
                <Leaf
                  size={16}
                  className="text-[#39951F]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#214217]/45">
                  Browse Services
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#214217]/25">
                  {String(filteredServices.length).padStart(2, "0")} services
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-3 text-[8px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                      active
                        ? "bg-[#214217] text-white shadow-lg shadow-[#214217]/10"
                        : "border border-[#214217]/10 bg-white text-[#214217]/45 hover:border-[#39951F]/40 hover:text-[#214217]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F7F9F5] py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#39951F]/[0.045]" />

        <div className="pointer-events-none absolute right-[-160px] bottom-[10%] h-[380px] w-[380px] rounded-full border-[55px] border-[#214217]/[0.025]" />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#39951F]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#214217]/45">
                  Green Haven Services
                </span>
              </div>

              <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-[82px]">
                What we
                <br />
                <span className="text-[#39951F]">
                  help with.
                </span>
              </h2>
            </div>

            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-[#214217]/50">
                From unwanted rodents to insects and bird-related problems,
                choose the service that best matches what you have noticed at
                your property.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <article
                  key={service.id}
                  data-title={service.title}
                  onClick={handleServiceClick}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() =>
                    setHoveredService(service.id)
                  }
                  onMouseLeave={() =>
                    setHoveredService(null)
                  }
                  onFocus={() =>
                    setHoveredService(service.id)
                  }
                  onBlur={() =>
                    setHoveredService(null)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleServiceClick();
                    }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-[2rem] border border-[#214217]/10 bg-white transition-all duration-500 ${
                      isHovered
                        ? "-translate-y-1 shadow-2xl shadow-[#214217]/10"
                        : "shadow-sm"
                    }`}
                  >
                    <div className="relative h-[310px] overflow-hidden sm:h-[370px]">
                      <img
                        src={service.image}
                        alt={`${companyName} ${service.title}`}
                        className={`h-full w-full object-cover transition duration-700 ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#214217]/85 via-[#214217]/10 to-transparent" />

                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#214217]/70 text-white backdrop-blur-md">
                        <span className="text-[10px] font-bold tracking-[0.1em]">
                          {service.id}
                        </span>
                      </div>

                      <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur-md">
                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#214217]">
                          {service.eyebrow}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#39951F] text-white">
                          <Icon size={18} strokeWidth={1.7} />
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#214217] transition-transform duration-500 group-hover:rotate-45">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>
                    </div>

                    <div className="p-7 sm:p-9">
                      <div className="flex items-center justify-between gap-5">
                        <h3 className="max-w-lg text-3xl font-bold leading-[0.95] tracking-[-0.045em] text-[#214217] sm:text-4xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#214217]/50">
                        {service.description}
                      </p>

                      <div className="mt-7 flex items-center justify-between border-t border-[#214217]/10 pt-5">
                        <span className="text-[8px] font-bold uppercase tracking-[0.23em] text-[#214217]/35">
                          Clapham & nearby areas
                        </span>

                        <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#39951F]">
                          Discuss Service
                          <ArrowRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="rounded-[2rem] border border-[#214217]/10 bg-white px-6 py-24 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#214217]/45">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          HOW WE APPROACH PEST PROBLEMS
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[#39951F]/10 px-4 py-2">
                <Leaf size={14} className="text-[#39951F]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#214217]">
                  Our Approach
                </span>
              </div>

              <h2 className="mt-7 max-w-xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-7xl">
                Look at the
                <br />
                <span className="text-[#39951F]">
                  whole problem.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#214217]/50">
                Pest control is not simply about what is visible. The location
                of activity, possible access points and the surrounding
                environment can all be relevant when deciding how to respond.
              </p>

              <button
                onClick={() => navigate("/contact-us/")}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#214217] px-6 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#39951F]"
              >
                Talk To Green Haven

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={13} />
                </span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="group rounded-[1.75rem] bg-[#F5F8F2] p-7 transition-all duration-300 hover:bg-[#214217]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#39951F] shadow-sm">
                  <Search size={19} strokeWidth={1.7} />
                </div>

                <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F]">
                  01
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#214217] transition-colors group-hover:text-white">
                  Inspect
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
                  Understand the signs of activity and where the problem is
                  occurring.
                </p>
              </div>

              <div className="group rounded-[1.75rem] bg-[#214217] p-7 transition-all duration-300 hover:bg-[#39951F]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#39951F]">
                  <ShieldCheck size={19} strokeWidth={1.7} />
                </div>

                <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F] group-hover:text-white">
                  02
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  Treat
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/45">
                  Address the pest activity according to the situation and
                  affected environment.
                </p>
              </div>

              <div className="group rounded-[1.75rem] bg-[#F5F8F2] p-7 transition-all duration-300 hover:bg-[#214217]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#39951F] shadow-sm">
                  <CheckCircle2 size={19} strokeWidth={1.7} />
                </div>

                <span className="mt-10 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#39951F]">
                  03
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#214217] transition-colors group-hover:text-white">
                  Prevent
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
                  Consider practical measures that can help reduce future
                  access and pest activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROPERTY TYPES
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#F5F8F2] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#39951F]">
                Where We Work
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-[#214217] sm:text-6xl lg:text-[72px]">
                Homes,
                <br />
                <span className="text-[#214217]/20">
                  businesses
                </span>
                <br />
                & properties.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#214217]/50 lg:justify-self-end">
              Green Haven Pest Control supports pest-control requirements in
              residential and commercial environments across Clapham and
              surrounding areas.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-white p-8 transition-all duration-500 hover:bg-[#214217] sm:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39951F]/10 text-[#39951F] transition-colors group-hover:bg-white/10">
                  <Home size={20} strokeWidth={1.5} />
                </div>

                <span className="text-[9px] font-bold text-[#214217]/15 group-hover:text-white/20">
                  01
                </span>
              </div>

              <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
                <h3 className="text-3xl font-bold tracking-[-0.04em] text-[#214217] transition-colors group-hover:text-white">
                  Homes & Flats
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#214217]/45 transition-colors group-hover:text-white/45">
                  Residential properties including kitchens, bedrooms, lofts,
                  garages and other living spaces.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#214217] p-8 transition-all duration-500 hover:bg-[#39951F] sm:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#39951F]">
                  <Building2 size={20} strokeWidth={1.5} />
                </div>

                <span className="text-[9px] font-bold text-white/20">
                  02
                </span>
              </div>

              <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
                <h3 className="text-3xl font-bold tracking-[-0.04em] text-white">
                  Commercial
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/45">
                  Offices, shops, workplaces and other commercial
                  environments where pest activity may become a concern.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-[#39951F] p-8 transition-all duration-500 hover:bg-white sm:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-[#39951F]/10 group-hover:text-[#39951F]">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>

                <span className="text-[9px] font-bold text-white/35 group-hover:text-[#214217]/20">
                  03
                </span>
              </div>

              <div className="absolute bottom-9 left-8 right-8 sm:left-10 sm:right-10">
                <h3 className="text-3xl font-bold tracking-[-0.04em] text-white transition-colors group-hover:text-[#214217]">
                  Clapham & Nearby
                </h3>

                <p className="mt-4 text-xs font-medium leading-6 text-white/65 transition-colors group-hover:text-[#214217]/45">
                  Local pest-control support for properties across Clapham and
                  nearby areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL GREEN HAVEN SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#214217] py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border-[75px] border-[#39951F]/10" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-white/[0.025]" />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#39951F]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                  Local Pest Control
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl lg:text-[82px]">
                Pest control
                <br />
                <span className="text-[#39951F]">
                  in Clapham.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Green Haven Pest Control provides practical support for
                residential and commercial properties across Clapham and
                nearby areas. If you have noticed pest activity and need to
                discuss the situation, our team can help you identify the
                appropriate service.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact-us/")}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#39951F] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
                >
                  Contact Green Haven

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#214217]/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </button>

                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#39951F] hover:text-[#39951F]"
                >
                  <Phone size={14} />
                  {phone}
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#39951F] text-white">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    {address}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/35">
                    {serviceArea}
                  </p>
                </div>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Direct Enquiries
                </p>

                <a
                  href={phoneHref}
                  className="mt-3 block text-xl font-bold text-[#39951F] transition-colors hover:text-white sm:text-2xl"
                >
                  {phone}
                </a>

                <a
                  href={`mailto:${email}`}
                  className="mt-2 block break-all text-xs text-white/40 transition-colors hover:text-[#39951F]"
                >
                  {email}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#39951F]"
                />

                <span className="text-[8px] font-bold uppercase leading-5 tracking-[0.16em] text-white/40">
                  Residential & Commercial Pest Control
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#39951F]">
        <div className="pointer-events-none absolute right-[-80px] top-[-130px] h-[430px] w-[430px] rounded-full border-[65px] border-white/[0.07]" />

        <div className="relative mx-auto max-w-[1450px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/55">
                Start A Conversation
              </p>

              <h2 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl lg:text-[82px]">
                Seen signs of
                <br />
                <span className="text-white/35">
                  pest activity?
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base">
                Tell Green Haven Pest Control what you have noticed and where
                the activity is occurring. We can discuss the situation and
                the appropriate pest-control service for your property.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#214217] px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
              >
                <Phone size={16} />
                Call {phone}
              </a>

              <button
                onClick={() => navigate("/contact-us/")}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#214217]"
              >
                Contact Green Haven
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Leaf size={16} className="text-white" />

              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/70">
                Green Haven Pest Control
              </span>
            </div>

            <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.18em] text-white/55">
              <MapPin size={13} />
              {serviceArea}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

