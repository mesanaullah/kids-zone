import { BookOpen, Users, FileText, UserCheck, Sparkles, Settings } from 'lucide-react';
import preschoolBuildingImg from '../../assets/images/Academic-images/Colorful Preschool Building Activity.png';

/**
 * Learning Methodology & Academic Features Section
 * Matches reference image design:
 * - 2-Card Layout (side-by-side on desktop):
 *   - Card 1 (Left, wider): Learning Methodology
 *     - Title: "Learning" in Navy + "Methodology" in Red
 *     - Dual red & yellow accent line
 *     - Left: Authentic photo ("Colorful Preschool Building Activity.png")
 *     - Right: 6 checklist bullet points with golden yellow check badges
 *   - Card 2 (Right): Academic Features
 *     - Title: "Academic" in Navy + "Features" in Red
 *     - Dual red & yellow accent line
 *     - 6 feature rows with colored circular badges and white icons:
 *       1. Well Planned Lesson Plans (Green Book)
 *       2. Regular Class Assessments (Orange Users)
 *       3. Progress Reports to Parents (Blue Document)
 *       4. Parent-Teacher Interaction (Coral Interaction)
 *       5. Co-curricular Integration (Purple Activity)
 *       6. Use of Smart Classroom Tools (Yellow Tools)
 * - Fully responsive across mobile, tablet, and desktop
 */
export default function LearningApproach() {
  // 6 Checklist items for Learning Methodology
  const methodologyPoints = [
    'Interactive & activity-based learning',
    'Concept clarity with real-life examples',
    'Use of modern teaching aids',
    'Individual attention to every child',
    'Regular assessments and feedback',
    'Encouragement to explore and ask questions',
  ];

  // 6 Academic Features with colored circular badges
  const academicFeatures = [
    {
      id: 'lesson-plans',
      title: 'Well Planned Lesson Plans',
      badgeBg: 'bg-[#16a34a]',
      icon: <BookOpen className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
    {
      id: 'assessments',
      title: 'Regular Class Assessments',
      badgeBg: 'bg-[#ea580c]',
      icon: <Users className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
    {
      id: 'progress-reports',
      title: 'Progress Reports to Parents',
      badgeBg: 'bg-[#2563eb]',
      icon: <FileText className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
    {
      id: 'pt-interaction',
      title: 'Parent-Teacher Interaction',
      badgeBg: 'bg-[#f43f5e]',
      icon: <UserCheck className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
    {
      id: 'co-curricular',
      title: 'Co-curricular Integration',
      badgeBg: 'bg-[#8b5cf6]',
      icon: <Sparkles className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
    {
      id: 'smart-tools',
      title: 'Use of Smart Classroom Tools',
      badgeBg: 'bg-[#f5b800]',
      icon: <Settings className="h-5 w-5 text-white" strokeWidth={2.3} aria-hidden="true" />,
    },
  ];

  return (
    <section aria-label="Learning Methodology and Academic Features" className="w-full">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        
        {/* ============================================================== */}
        {/* CARD 1 (Left): Learning Methodology                             */}
        {/* ============================================================== */}
        <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 lg:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)] lg:col-span-7 xl:col-span-8">
          <div>
            {/* Title: "Learning Methodology" */}
            <h2 className="font-bubble text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight leading-tight select-none">
              <span className="text-brand-navy">Learning </span>
              <span className="text-brand-red">Methodology</span>
            </h2>
            {/* Dual Red & Yellow Accent Line */}
            <div
              className="mt-1.5 sm:mt-2 mb-5 sm:mb-6 flex h-1 sm:h-1.5 w-14 sm:w-16 items-center overflow-hidden rounded-full select-none"
              aria-hidden="true"
            >
              <span className="h-full w-1/2 bg-[#f0243c]" />
              <span className="h-full w-1/2 bg-[#ffd21f]" />
            </div>

            {/* Inner Content Grid: Image + 6 Checklist Bullet Points */}
            <div className="grid grid-cols-1 items-center gap-5 sm:gap-6 md:grid-cols-12">
              
              {/* Left: Preschool Building Activity Photo */}
              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
                  <img
                    src={preschoolBuildingImg}
                    alt="Teacher engaging preschool kids with colorful building blocks"
                    className="aspect-[4/3] h-full w-full object-cover select-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Right: 6 Checklist Bullet Points */}
              <div className="flex flex-col justify-center space-y-3 sm:space-y-3.5 md:col-span-7">
                {methodologyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {/* Golden Yellow Circle with Checkmark */}
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#f5b800] text-slate-900 shadow-2xs mt-0.5">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        stroke="currentColor"
                        strokeWidth={2.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                      </svg>
                    </span>
                    {/* Bullet Text */}
                    <span className="font-body text-xs sm:text-[13.5px] lg:text-[14px] font-semibold text-brand-navy/90 leading-snug select-none">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARD 2 (Right): Academic Features                               */}
        {/* ============================================================== */}
        <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 lg:p-8 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-200/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_-5px_rgba(0,0,0,0.08)] lg:col-span-5 xl:col-span-4">
          <div>
            {/* Title: "Academic Features" */}
            <h2 className="font-bubble text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight leading-tight select-none">
              <span className="text-brand-navy">Academic </span>
              <span className="text-brand-red">Features</span>
            </h2>
            {/* Dual Red & Yellow Accent Line */}
            <div
              className="mt-1.5 sm:mt-2 mb-5 sm:mb-6 flex h-1 sm:h-1.5 w-14 sm:w-16 items-center overflow-hidden rounded-full select-none"
              aria-hidden="true"
            >
              <span className="h-full w-1/2 bg-[#f0243c]" />
              <span className="h-full w-1/2 bg-[#ffd21f]" />
            </div>

            {/* List of 6 Academic Features with Circular Badges */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4">
              {academicFeatures.map((feat) => (
                <div key={feat.id} className="flex items-center gap-3.5 group">
                  {/* Colored Circular Icon Badge */}
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-white shadow-xs transition-transform duration-300 group-hover:scale-105 ${feat.badgeBg}`}
                  >
                    {feat.icon}
                  </div>
                  {/* Feature Title */}
                  <span className="font-display text-sm sm:text-[15px] font-bold text-brand-navy leading-snug transition-colors group-hover:text-brand-blue select-none">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
