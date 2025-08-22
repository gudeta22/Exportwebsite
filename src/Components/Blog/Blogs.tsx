// Import images directly from assets
import BlogKoji1 from "../../assets/images/koji_2.jpg";
import BlogKoji2 from "../../assets/images/koji_3.jpg";
import BlogKoji3 from "../../assets/images/koji_4.jpg";

// Import Helmet for SEO meta tags and schema
import { Helmet } from "react-helmet";

const blogs = [
  {
    id: 1,
    title: "Ensuring Excellence: The Importance of Quality Medical Supplies in Ethiopia",
    description:
      "Koji Healthcare Solutions is a trusted medical supplies provider in Ethiopia, delivering certified, reliable, and safe products that meet global standards. We help hospitals and clinics improve patient care through high-quality medical equipment and consumables.",
    image: BlogKoji1,
    extended:
      "High-quality medical supplies are essential for protecting patients and improving the efficiency of healthcare facilities. At Koji Healthcare Solutions, we partner with internationally recognized manufacturers to deliver equipment and consumables that comply with strict regulatory guidelines. Our advanced quality-control process ensures that every product—whether it’s surgical tools, diagnostic devices, or hospital consumables—is thoroughly inspected and tested before reaching our clients. This dedication helps hospitals, clinics, and healthcare professionals in Ethiopia build confidence in their operations, reduce risks, and provide exceptional care to patients.",
    datePublished: "2025-08-01", // Added placeholder date for SEO freshness (use actual dates)
  },
  {
    id: 2,
    title: "Revolutionizing Pharmaceutical Care with Koji’s Expertise in Ethiopia",
    description:
      "Discover how Koji Healthcare Solutions is transforming pharmaceutical services in Ethiopia by combining advanced inventory management with personalized support, ensuring patients receive the right medicine at the right time.",
    image: BlogKoji2,
    extended:
      "Pharmaceutical care is more than just supplying medicines—it’s about creating a system that improves treatment outcomes. At Koji Healthcare Solutions, we implement intelligent inventory management systems that track stock levels in real time, reduce waste, and guarantee that essential medicines are always available when patients need them. Our pharmaceutical team works closely with healthcare providers across Ethiopia, offering training, consultation, and customized solutions that help clinics reduce errors and improve patient adherence to treatment plans. By modernizing pharmaceutical services, Koji is playing a key role in raising the standard of healthcare nationwide.",
    datePublished: "2025-08-05",
  },
  {
    id: 3,
    title: "Innovations Driving Ethiopian Healthcare Forward with Koji",
    description:
      "Koji Healthcare Solutions introduces cutting-edge healthcare innovations in Ethiopia—from smart logistics to data-driven supply management—helping hospitals and clinics expand access and improve service delivery.",
    image: BlogKoji3,
    extended:
      "Innovation is at the heart of our mission at Koji Healthcare Solutions. We are reshaping healthcare in Ethiopia with digital inventory tools, real-time tracking of medical supplies, and data analytics that forecast demand accurately. Our solutions empower hospitals and health centers to manage resources more efficiently, minimize shortages, and improve patient care. By leveraging technology and smart logistics, Koji ensures that even facilities in remote areas can access the medical equipment and pharmaceuticals they need. These advancements reflect our commitment to building a healthier, more resilient healthcare system for all Ethiopians.",
    datePublished: "2025-08-10",
  },
];

const Blogs = () => {
  // Define schema for all blog posts
  const blogSchema = blogs.map((blog) => ({
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.image, // This is the import path; in production, use full URL
    datePublished: blog.datePublished,
    description: blog.description,
    author: {
      "@type": "Organization",
      name: "Koji Healthcare Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Koji Healthcare Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://your-site.com/logo.png", // Replace with actual logo URL
      },
    },
  }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans my-10 text-gray-800">
      {/* Helmet for page-level SEO */}
      <Helmet>
        <title>Koji Healthcare Blog: Medical Supplies, Pharmaceutical Services, and Innovations in Ethiopia</title>
        <meta
          name="description"
          content="Explore insights from Koji Healthcare Solutions on quality medical supplies, pharmaceutical care, and healthcare innovations in Ethiopia. Stay updated with tips for hospitals and clinics."
        />
        <meta name="keywords" content="medical supplies Ethiopia, pharmaceutical services Ethiopia, healthcare innovations Ethiopia, Koji Healthcare" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Koji Healthcare Blog" />
        <meta
          property="og:description"
          content="Discover how Koji is transforming healthcare in Ethiopia with reliable medical supplies and innovative solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-site.com/blog" /> {/* Replace with actual URL */}
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Koji Healthcare Blog" />
        <meta
          name="twitter:description"
          content="Insights on medical supplies and healthcare in Ethiopia."
        />
        {/* JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <section className="container mx-auto px-6 md:px-20 pb-28 space-y-28">
        {/* Added main H1 for page hierarchy */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Koji Healthcare Blog: Insights on Medical Supplies and Innovations in Ethiopia
        </h1>
        {blogs.map((blog, idx) => (
          <article
            key={blog.id}
            className={`flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } opacity-0 animate-fadeInOnce`}
            style={{ animationDelay: `${idx * 0.3}s` }}
          >
            {/* Image container with top-left and bottom-right frame */}
            <div className="relative inline-block group flex-shrink-0 w-full md:w-1/2">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-[12px] border-cyan-600 z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-[12px] border-yellow-400 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              <img
                src={blog.image}
                alt={`${blog.title} - Koji Healthcare Solutions in Ethiopia`} // Enhanced alt text with keywords
                loading="lazy"
                className="relative z-10 w-full h-80 md:h-[360px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 max-w-xl">
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
                {blog.title}
              </h2>
              {/* Added publication date with <time> for SEO */}
              <time dateTime={blog.datePublished} className="text-sm text-gray-500 block mb-4">
                Published on {new Date(blog.datePublished).toLocaleDateString()}
              </time>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{blog.description}</p>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{blog.extended}</p>
            </div>
          </article>
        ))}
      </section>

      <style>
        {`
          @keyframes fadeInOnce {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInOnce {
            animation: fadeInOnce 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Blogs;