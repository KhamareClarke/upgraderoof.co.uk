'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { supabase, type BlogPost } from '@/lib/supabase';
import { BlogPostSkeleton, FeaturedBlogSkeleton } from '@/components/LoadingSkeletons';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

const staticPosts = [
  {
    slug: 'emergency-roof-repairs',
    title: 'Emergency Roof Repairs in Cheshire: What to Do When Disaster Strikes',
    excerpt: 'Storm damage, sudden leaks, or fallen debris? Learn how to handle roofing emergencies and when to call professional help.',
    category: 'Emergency',
    image: '/images/1.jpeg',
    date: 'March 15, 2026',
    readTime: '4 min',
  },
  {
    slug: 'roof-maintenance-checklist',
    title: 'Complete Roof Maintenance Checklist for Cheshire Homeowners',
    excerpt: 'Keep your roof in top condition year-round with our comprehensive seasonal maintenance guide.',
    category: 'Maintenance',
    image: '/images/6.jpeg',
    date: 'March 10, 2026',
    readTime: '6 min',
  },
  {
    slug: 'how-long-does-roof-last',
    title: 'How Long Does a Roof Last? Complete UK Guide',
    excerpt: 'Understanding roof lifespans helps you plan for replacement. Learn how long different roofing materials last.',
    category: 'Guide',
    image: '/images/7.jpeg',
    date: 'March 8, 2026',
    readTime: '7 min',
  },
  {
    slug: 'gutter-maintenance-guide',
    title: 'Complete Guide to Gutter Maintenance in Cheshire',
    excerpt: 'Properly maintained gutters protect your home from water damage. Learn how to keep them flowing freely.',
    category: 'Maintenance',
    image: '/images/2.jpeg',
    date: 'March 5, 2026',
    readTime: '5 min',
  },
  {
    slug: 'chimney-repair-guide',
    title: 'Chimney Repairs in Cheshire: Complete Homeowner\'s Guide',
    excerpt: 'From repointing to full rebuilds, learn everything about chimney maintenance and repairs.',
    category: 'Repairs',
    image: '/images/1.jpeg',
    date: 'March 1, 2026',
    readTime: '6 min',
  },
  {
    slug: 'choosing-roofing-contractor',
    title: 'How to Choose a Reliable Roofing Contractor in Cheshire',
    excerpt: 'Avoid cowboy builders and rogue traders. Learn what to look for when hiring a roofing contractor.',
    category: 'Advice',
    image: '/images/6.jpeg',
    date: 'February 25, 2026',
    readTime: '8 min',
  },
  {
    slug: 'skylight-installation-guide',
    title: 'Skylight Installation Guide: Transform Your Home with Natural Light',
    excerpt: 'Everything you need to know about adding skylights to your Cheshire home.',
    category: 'Installation',
    image: '/images/10.jpeg',
    date: 'February 20, 2026',
    readTime: '7 min',
  },
  {
    slug: 'flat-roof-problems',
    title: 'Common Flat Roof Problems and How to Fix Them',
    excerpt: 'Flat roofs need special attention. Learn about common issues and when repairs vs replacement makes sense.',
    category: 'Repairs',
    image: '/images/3.jpeg',
    date: 'February 15, 2026',
    readTime: '6 min',
  },
  {
    slug: 'roof-damage-signs',
    title: 'How to Spot Roof Damage Before It Gets Expensive',
    excerpt: 'Early detection of roof problems can save thousands. Learn the warning signs from our professionals.',
    category: 'Maintenance',
    image: '/images/6.jpeg',
    date: 'November 4, 2024',
    readTime: '5 min',
  },
  {
    slug: 'flat-vs-tile-roofs',
    title: 'Flat vs. Tile Roofs – Which Lasts Longer in the UK?',
    excerpt: 'Compare roofing materials and their longevity in British weather conditions.',
    category: 'Guide',
    image: '/images/3.jpeg',
    date: 'October 28, 2024',
    readTime: '6 min',
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredPosts = posts.slice(0, 2);
  const regularPosts = posts.slice(2);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />
        </div>

        <div className="container-custom relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Expert Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">Roofing Blog</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-2">
            Expert tips, advice, and insights from Cheshire's leading roofing specialists
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <>
              <div className="mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 px-2">Featured Articles</h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <FeaturedBlogSkeleton />
                  <FeaturedBlogSkeleton />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 px-2">Recent Articles</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {[...Array(6)].map((_, i) => (
                    <BlogPostSkeleton key={i} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
          {featuredPosts.length > 0 && (
            <div className="mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 px-2">Featured Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-brand-orange/50 transition-all duration-300"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-200">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                        <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{calculateReadTime(post.content)}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy mb-2 sm:mb-3 group-hover:text-brand-orange transition-colors break-words">
                        {post.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>

                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-brand-orange hover:text-brand-orange/80 font-semibold text-xs sm:text-sm group/btn"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6 sm:mb-8 px-2">All Articles</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {staticPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300"
                >
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                      <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-orange text-white text-[10px] sm:text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-navy mb-1 sm:mb-2 group-hover:text-brand-orange transition-colors break-words">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-brand-orange hover:text-brand-orange/80 font-semibold text-xs sm:text-sm group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
            </>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
        <div className="container-custom text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Need Expert Roofing Advice?</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Our team is here to help with all your roofing questions
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 sm:px-8 md:px-10 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
