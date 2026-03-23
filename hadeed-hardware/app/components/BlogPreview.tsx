"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Power Tool for Your Project",
    excerpt:
      "Selecting the perfect power tool can make or break your project. Learn the key factors to consider when choosing between drills, grinders, saws, and more.",
    category: "Power Tools",
    date: "March 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Essential Safety Equipment Every Workshop Needs",
    excerpt:
      "Workplace safety is non-negotiable. Discover the must-have safety items from helmets and harnesses to goggles and gloves that protect your team.",
    category: "Safety",
    date: "March 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "A Complete Guide to Welding Equipment & Techniques",
    excerpt:
      "From MIG to TIG welding, understanding the right equipment and techniques is crucial. Explore our guide covering welding rods, machines, and best practices.",
    category: "Welding",
    date: "March 5, 2026",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Power Tools": "bg-blue/10 text-blue",
  Safety: "bg-green-100 text-green-700",
  Welding: "bg-orange-100 text-orange-700",
};

export default function BlogPreview() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-accent text-sm font-semibold tracking-widest uppercase">
            Latest Insights
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-dark">
            From Our Blog
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-accent mx-auto rounded-full" />
          <p className="mt-4 text-grey max-w-2xl mx-auto">
            Industry tips, product guides, and expert advice to help you make
            the best decisions for your projects.
          </p>
        </motion.div>

        {/* Cards */}
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
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-dark/60 to-blue/40 overflow-hidden flex items-center justify-center">
                    <span className="text-white/20 text-7xl font-bold">
                      {String(blog.id).padStart(2, "0")}
                    </span>
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
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue text-white font-semibold rounded-xl hover:bg-blue-dark transition-colors"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
