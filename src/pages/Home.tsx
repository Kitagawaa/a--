import Navbar from '@/components/Navbar';
import AvatarSection from '@/components/AvatarSection';
import ContentSection from '@/components/ContentSection';
import Skill from '@/components/Skill';
import Projection from '@/components/Projection';
import Suisui from '@/components/suisui'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="-mt-14 pt-1 px-4 md:px-8 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-0 -mt-4">
          <AvatarSection />
          <ContentSection />
        </div>
      </main>

      <div className="-mt-56">
        <div>
          
        </div>
        <Suisui/>
      </div>

      <div className="mt-24">
        <Skill/>
      </div>

      <div id="projects-section" className="mt-52 mb-32 ml-12 mr-12 pb-24">
        <Projection />
      </div>
      
    </div>

  );
}
