"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Power Tool for Your Project",
    excerpt:
      "Selecting the perfect power tool can make or break your project. Learn the key factors to consider when choosing between drills, grinders, saws, and more for construction and manufacturing tasks.",
    image: "/images/blogs/power-tools.jpg",
    category: "Power Tools",
    date: "March 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Essential Safety Equipment Every Workshop Needs",
    excerpt:
      "Workplace safety is non-negotiable. Discover the must-have safety items from helmets and harnesses to goggles and gloves that protect your team on every job site.",
    image: "/images/blogs/safety.jpg",
    category: "Safety",
    date: "March 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "A Complete Guide to Welding Equipment & Techniques",
    excerpt:
      "From MIG to TIG welding, understanding the right equipment and techniques is crucial. Explore our guide covering welding rods, machines, and best practices for quality welds.",
    image: "/images/blogs/welding.jpg",
    category: "Welding",
    date: "March 5, 2026",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Top 10 Hand Tools Every Professional Should Own",
    excerpt:
      "Whether you are a seasoned contractor or just starting out, these hand tools are essential. From measuring tapes to pliers, we cover the tools that deliver precision and reliability.",
    image: "/images/blogs/hand-tools.jpg",
    category: "Hand Tools",
    date: "February 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Understanding Abrasives: Cutting, Grinding & Finishing",
    excerpt:
      "Abrasives play a critical role in metalworking and construction. Learn the differences between cutting wheels, grinding discs, and flap wheels to optimize your surface preparation.",
    image: "/images/blogs/abrasives.jpg",
    category: "Abrasives",
    date: "February 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Industrial Fasteners: Choosing the Right Type for Your Application",
    excerpt:
      "Bolts, nuts, screws, and rivets — selecting the correct fastener is vital for structural integrity. This guide breaks down fastener types, materials, and when to use each one.",
    image: "/images/blogs/fasteners.jpg",
    category: "Fasteners",
    date: "February 14, 2026",
    readTime: "4 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Power Tools": "bg-blue/10 text-blue",
  Safety: "bg-green-100 text-green-700",
  Welding: "bg-orange-100 text-orange-700",
  "Hand Tools": "bg-purple-100 text-purple-700",
  Abrasives: "bg-red-100 text-red-700",
  Fasteners: "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-dark via-blue to-blue-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Blog</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Blog
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Industry insights, product guides, and expert tips from the Hadeed
              Hardware team to help you make informed decisions for your projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${blog.id}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-blue/10 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 bg-gradient-to-br from-blue/20 to-blue-accent/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/60 to-blue/40 flex items-center justify-center">
                        <span className="text-white/30 text-6xl font-bold">
                          {String(blog.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[blog.category] || "bg-blue/10 text-blue"
                          }`}
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-grey mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-blue-dark mb-3 group-hover:text-blue transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-grey text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-blue font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Need Expert Advice?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Our team is ready to help you find the right tools and equipment
              for your projects. Get in touch today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-accent text-white font-semibold rounded-xl hover:bg-white hover:text-blue-dark transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </>
  );
}
