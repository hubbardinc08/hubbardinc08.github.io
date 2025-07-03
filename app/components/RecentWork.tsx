import { Divide } from 'lucide-react'
import React from 'react'
import BlogPost from './BlogPost'

const RecentWork = () => {
    const blogPosts = [
    {
        title: "National Guild Level 16",
        date: "June 23, 2025",
        excerpt: "Passing the highest National Guild piano exam level.",
        imageUrl: "/images/piano-guild.png",
        tags: ["Piano", "Guild", "Level 16"],
        audioUrl: "/videos/guild-audio.mp3"
    },

    {
        title: "Howard @ AstroCon 2025",
        date: "June 24, 2025",
        excerpt: "Attended Astronomical League's AstroCON 2025 event at Bryce Canyon National Park. Class 2 Bortle Level. Life-changing experience.",
        imageUrl: "/images/astrocon25-winners.jpg",
        tags: ["Astronomy", "Conference", "AI", "National Young Astronomer Award", "Bryce Canyon National Park"],
    },

  ];
  return (
    <section className="mt-20 lg:mt-50">
        <div>
            <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Current Endeavors
            </h1>
        </div>
        {/*
        <div>
            <div className="relative w-[600px] h-[500px] lg:w-[800px] lg:h-[600px] mx-auto overflow-hidden border-4 border-white shadow-lg items-center">
                <img
                    src="/images/astrocon25-winners.jpg"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                />
            </div>
        </div>
        */}
        
        <div className="space-y-20">
                {blogPosts.map((post, index) => (
                    <div key={index}>
                        <BlogPost {...post} />
                        {/* Add audio player only for first post */}
                        {index === 0 && post.audioUrl && (
                            <div className="mt-6 max-w-2xl mx-auto">
                                <audio controls className="w-full">
                                    <source src={post.audioUrl} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    Practice recording
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
    </section>
  )
}

export default RecentWork