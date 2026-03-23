"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const blogData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    content: string[];
    relatedIds: number[];
  }
> = {
  "1": {
    title: "How to Choose the Right Power Tool for Your Project",
    category: "Power Tools",
    date: "March 15, 2026",
    readTime: "5 min read",
    author: "Hadeed Hardware Team",
    content: [
      "Choosing the right power tool is one of the most important decisions you can make for any construction, manufacturing, or maintenance project. With so many options on the market — from DeWalt and Stanley to HiKoki — understanding the differences between tool types, power ratings, and applications will save you time, money, and frustration.",
      "When selecting a power tool, the first thing to consider is the nature of your task. Drilling? Cutting? Grinding? Each task demands a specific type of tool. For drilling through concrete or masonry, a rotary hammer drill is your best bet, while a standard drill/driver handles wood and metal screws with ease.",
      "Power source is another critical factor. Corded tools deliver consistent, uninterrupted power for heavy-duty tasks, while cordless tools offer portability and convenience for jobs on the go. Battery technology has advanced significantly — modern lithium-ion batteries provide longer run times and faster charging than ever before.",
      "Ergonomics and weight matter more than most people realize. If you are using a tool for extended periods, a lighter, well-balanced design reduces fatigue and improves precision. Look for tools with rubberized grips and vibration-dampening technology for maximum comfort.",
      "Finally, always consider the brand ecosystem. Sticking with one brand across your toolkit often means interchangeable batteries, consistent quality, and easier access to spare parts. At Hadeed Hardware, we carry complete ranges from DeWalt, Stanley, and HiKoki to ensure you can build a cohesive, professional-grade toolkit.",
      "Whether you are outfitting a workshop or equipping a field crew, our experienced team can help you select the perfect power tools for your specific requirements. Visit our showroom or contact us for personalized recommendations.",
    ],
    relatedIds: [3, 4],
  },
  "2": {
    title: "Essential Safety Equipment Every Workshop Needs",
    category: "Safety",
    date: "March 10, 2026",
    readTime: "4 min read",
    author: "Hadeed Hardware Team",
    content: [
      "Workplace safety is not just a legal requirement — it is a moral obligation. Every year, thousands of workers suffer preventable injuries due to inadequate safety equipment. Whether you are running a construction site, a fabrication workshop, or a manufacturing facility, having the right safety gear is essential.",
      "Head protection is the first line of defense. Quality helmets from brands like 3M and Delta Plus protect against falling objects, electrical hazards, and impact injuries. Modern helmets are lightweight, ventilated, and designed for all-day comfort without compromising protection.",
      "Eye and face protection is equally critical, especially in welding and grinding operations. Safety goggles shield against flying debris and chemical splashes, while welding helmets with auto-darkening lenses from Focus-Holland protect against harmful UV and infrared radiation.",
      "Hand protection varies by application. Ansell gloves offer specialized protection for chemical handling, heat resistance, cut resistance, and general-purpose tasks. Choosing the right glove type for each task significantly reduces the risk of hand injuries.",
      "Respiratory protection is vital in environments with dust, fumes, or chemical vapors. 3M respirators and dust masks provide varying levels of filtration — from simple particulate masks for dusty environments to full-face respirators for hazardous chemical exposure.",
      "At Hadeed Hardware, we stock a comprehensive range of safety equipment from 3M, Delta Plus, Ansell, and Focus-Holland. Our team can help you assess your workplace risks and recommend the appropriate personal protective equipment (PPE) for every situation.",
    ],
    relatedIds: [1, 4],
  },
  "3": {
    title: "A Complete Guide to Welding Equipment & Techniques",
    category: "Welding",
    date: "March 5, 2026",
    readTime: "7 min read",
    author: "Hadeed Hardware Team",
    content: [
      "Welding is both an art and a science. Whether you are joining structural steel for a building project or repairing a pipeline in the oilfield, understanding the right equipment and techniques is essential for producing strong, reliable welds that meet industry standards.",
      "The three most common welding processes are MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and Stick (SMAW) welding. MIG welding is the most versatile and beginner-friendly, ideal for manufacturing and automotive work. TIG welding produces the cleanest welds and is preferred for stainless steel and aluminum. Stick welding is robust and works well outdoors and in windy conditions.",
      "Choosing the right welding consumables is just as important as the machine itself. Kiswel welding rods come in various sizes for different applications, including mild steel and stainless steel variants. ESAB offers a complete range of welding and cutting solutions known for consistent arc performance and low spatter.",
      "Gas equipment is critical for MIG and TIG welding. Victor torches, nozzles, and regulators are industry standards known for precision and durability. Best Welds pipe fittings and accessories complement your welding setup with reliable gas delivery components.",
      "Safety during welding cannot be overlooked. Auto-darkening welding helmets, leather gloves, fire-resistant clothing, and proper ventilation are non-negotiable. Always ensure your workspace is free of flammable materials and that you have appropriate fire suppression equipment nearby.",
      "Hadeed Hardware is your one-stop shop for all welding needs. We carry complete ranges from Kiswel, ESAB, Victor, and Best Welds, along with all the safety gear you need. Our team can help you set up a complete welding station tailored to your specific applications.",
    ],
    relatedIds: [2, 1],
  },
  "4": {
    title: "Top 10 Hand Tools Every Professional Should Own",
    category: "Hand Tools",
    date: "February 28, 2026",
    readTime: "6 min read",
    author: "Hadeed Hardware Team",
    content: [
      "While power tools get most of the attention, hand tools remain the backbone of every professional's toolkit. They are reliable, portable, and require no power source — making them indispensable on any job site. Here are the essential hand tools every professional should own.",
      "A quality measuring tape is arguably the most important tool you will use every day. Stanley measuring tapes are the industry standard, offering durability, accuracy, and a smooth locking mechanism. Pair it with a Mitutoyo Vernier caliper for precision measurements down to hundredths of a millimeter.",
      "Pliers and cutters handle everything from bending wire to cutting cable. A good set of combination pliers, needle-nose pliers, and side cutters from Stanley covers most tasks. For aviation-grade cutting, Stanley's aviation cutters deliver clean, precise cuts in sheet metal.",
      "Hammers come in many forms — ball-peen for metalwork, claw for carpentry, and dead-blow for assembly work. Investing in quality hammers with fiberglass or steel handles and comfortable grips reduces fatigue and improves striking accuracy.",
      "Files are essential for deburring, shaping, and finishing metal surfaces. Nicholson files — including flat, half-round, round, and bastard types — are renowned for their quality and longevity. Keep a variety of cuts on hand for different finishing requirements.",
      "Drill bits and tap sets from Dormer round out the hand tool essentials. Precision-engineered for metal, wood, and composite materials, Dormer products deliver consistent hole quality and thread accuracy. Complete tap and die sets are invaluable for creating and repairing threaded connections.",
      "Rothenberger tools serve the plumbing and HVAC trades with threading sets, cutting torches, pressure testing equipment, and manifold gauges. For cutting-edge precision, Starrett hack saw blades, hole saws, and arbors deliver exceptional performance across materials.",
    ],
    relatedIds: [1, 5],
  },
  "5": {
    title: "Understanding Abrasives: Cutting, Grinding & Finishing",
    category: "Abrasives",
    date: "February 20, 2026",
    readTime: "5 min read",
    author: "Hadeed Hardware Team",
    content: [
      "Abrasives are among the most frequently used consumables in construction, fabrication, and manufacturing. Understanding the differences between types, grades, and applications helps you achieve better results while extending the life of your tools and materials.",
      "Cutting wheels are designed for fast, clean cuts through metal, stainless steel, and stone. They are thin and rigid, typically 1mm to 3mm thick, and should only be used for cutting — never for grinding. Using a cutting wheel for grinding creates dangerous situations as the thin disc can shatter under side pressure.",
      "Grinding wheels are thicker and designed to remove material, smooth welds, and shape metal surfaces. They come in different grades — from coarse for heavy material removal to fine for finishing work. RASTA offers three quality lines: the precision RASTA Specialist, the versatile Multi-Power-Line, and the proven RASTA Classic.",
      "Flap discs combine grinding and finishing in one step. They consist of overlapping abrasive flaps that wear gradually, consistently exposing fresh abrasive. This makes them excellent for blending welds, removing rust, and preparing surfaces for painting or coating.",
      "3M abrasives lead the industry with their comprehensive range of products. From waterproof paper in various grades for wet sanding to Scotch pads for surface conditioning, 3M products provide solutions for every surface preparation need with superior performance and consistency.",
      "Choosing the right abrasive for your material is crucial. Aluminum oxide works well on steel and iron, while silicon carbide is better for stainless steel and non-ferrous metals. Zirconia alumina is the premium choice for heavy grinding on hard steels. At Hadeed Hardware, we stock complete ranges from 3M and RASTA to ensure you always have the right abrasive for the job.",
    ],
    relatedIds: [1, 6],
  },
  "6": {
    title: "Industrial Fasteners: Choosing the Right Type for Your Application",
    category: "Fasteners",
    date: "February 14, 2026",
    readTime: "4 min read",
    author: "Hadeed Hardware Team",
    content: [
      "Fasteners may seem like simple components, but choosing the wrong type can compromise structural integrity, lead to premature failure, and create safety hazards. Understanding fastener types, materials, and applications is essential for any construction or manufacturing professional.",
      "Bolts and nuts are the workhorses of structural connections. They come in various grades — from Grade 4.8 for light-duty applications to Grade 10.9 for high-strength structural connections. Fischer through bolts provide reliable anchoring in concrete and masonry, rated for both static and dynamic loads.",
      "Self-drilling screws eliminate the need for pre-drilling, saving significant time in metal-to-metal and metal-to-wood connections. Self-tapping screws create their own threads in pre-drilled holes, ideal for sheet metal and thin materials. Coach screws handle heavy timber connections with their large hex heads and coarse threads.",
      "Gypsum screws are specifically designed for attaching plasterboard to metal or wood studs. Their bugle heads sit flush with the board surface and their sharp points penetrate without pre-drilling. Using the right screw prevents cracking and ensures a smooth finished surface.",
      "Threaded bars provide versatile solutions for custom-length connections and tensioning applications. Fischer offers these in stainless steel, nickel plate, galvanized, and mild steel variants to suit different environmental conditions. Stainless steel is essential for outdoor and marine environments, while galvanized is cost-effective for general construction.",
      "Blind rivets in aluminum offer permanent, tamper-resistant connections ideal for sheet metal, signage, and enclosure assembly. They require access from only one side, making them perfect for hollow sections and enclosed structures. At Hadeed Hardware, our Fischer range covers all your fastening needs with quality you can trust.",
    ],
    relatedIds: [4, 5],
  },
};

const categoryColors: Record<string, string> = {
  "Power Tools": "bg-blue/10 text-blue",
  Safety: "bg-green-100 text-green-700",
  Welding: "bg-orange-100 text-orange-700",
  "Hand Tools": "bg-purple-100 text-purple-700",
  Abrasives: "bg-red-100 text-red-700",
  Fasteners: "bg-amber-100 text-amber-700",
};

const allBlogs = [
  { id: 1, title: "How to Choose the Right Power Tool for Your Project", category: "Power Tools" },
  { id: 2, title: "Essential Safety Equipment Every Workshop Needs", category: "Safety" },
  { id: 3, title: "A Complete Guide to Welding Equipment & Techniques", category: "Welding" },
  { id: 4, title: "Top 10 Hand Tools Every Professional Should Own", category: "Hand Tools" },
  { id: 5, title: "Understanding Abrasives: Cutting, Grinding & Finishing", category: "Abrasives" },
  { id: 6, title: "Industrial Fasteners: Choosing the Right Type for Your Application", category: "Fasteners" },
];

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const blog = blogData[id];

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-dark mb-4">
              Blog Not Found
            </h1>
            <p className="text-grey mb-8">
              The blog post you are looking for does not exist.
            </p>
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue text-white rounded-lg font-semibold hover:bg-blue-dark transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const prevId = Number(id) > 1 ? Number(id) - 1 : null;
  const nextId = Number(id) < 6 ? Number(id) + 1 : null;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-dark via-blue to-blue-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/80 truncate max-w-[200px]">
                {blog.title}
              </span>
            </div>

            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                categoryColors[blog.category] || "bg-blue/10 text-blue"
              }`}
            >
              {blog.category}
            </span>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {blog.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {blog.content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-grey-dark leading-relaxed ${
                  i === 0 ? "text-lg font-medium" : "text-base"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* Divider */}
          <div className="my-12 border-t border-gray-200" />

          {/* Prev / Next Navigation */}
          <div className="flex items-center justify-between gap-4">
            {prevId ? (
              <Link
                href={`/blog/${prevId}`}
                className="flex items-center gap-2 text-blue hover:text-blue-dark transition-colors group"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span className="text-sm font-medium">Previous Post</span>
              </Link>
            ) : (
              <div />
            )}
            {nextId ? (
              <Link
                href={`/blog/${nextId}`}
                className="flex items-center gap-2 text-blue hover:text-blue-dark transition-colors group"
              >
                <span className="text-sm font-medium">Next Post</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-20 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
              Keep Reading
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-blue-dark">
              Related Articles
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blog.relatedIds.map((relId, i) => {
              const related = allBlogs.find((b) => b.id === relId);
              if (!related) return null;
              return (
                <motion.div
                  key={relId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${related.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue/10 transition-all duration-300"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-blue-dark/60 to-blue/40 flex items-center justify-center">
                      <span className="text-white/30 text-5xl font-bold">
                        {String(related.id).padStart(2, "0")}
                      </span>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[related.category] || "bg-blue/10 text-blue"
                          }`}
                        >
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-blue-dark group-hover:text-blue transition-colors">
                        {related.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-blue text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 mb-7 bg-gradient-to-br from-blue-dark via-blue to-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Products?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Our experienced team is here to guide you. Contact us for expert
              advice, product recommendations, and competitive quotations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                All Blog Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
