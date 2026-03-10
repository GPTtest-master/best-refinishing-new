import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            Recent Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Before & After Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real Seattle-area homes — see the difference expert remodeling makes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              {/* Before/After mini grid */}
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.beforeImage}
                    alt={`Before: ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 17vw"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.afterImage}
                    alt={`After: ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 17vw"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded-full uppercase">
                    After
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#0b66b3]/10 text-[#0b66b3] px-2 py-0.5 rounded-full font-semibold">
                    {project.type}
                  </span>
                  <span className="text-xs text-gray-500">{project.location}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0b66b3] transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex gap-3 text-gray-500">
                    <span>{project.duration}</span>
                    <span>{project.budget}</span>
                  </div>
                  <span className="text-[#0b66b3] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0b66b3] text-white font-bold text-lg hover:bg-[#084c8a] transition"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
