import AcademicBanner from '../components/academics/AcademicBanner.jsx';
import CurriculumOverview from '../components/academics/CurriculumOverview.jsx';
import OurCurriculum from '../components/academics/OurCurriculum.jsx';
import SubjectsWeTeach from '../components/academics/SubjectsWeTeach.jsx';
import LearningApproach from '../components/academics/LearningApproach.jsx';

export default function Academics() {
  return (
    <div className="w-full bg-[#f8fafc]/50">
      {/* ------------------------------------------------------------- */}
      {/* FULL-WIDTH TOP HERO BANNER (Directly below navbar)            */}
      {/* ------------------------------------------------------------- */}
      <AcademicBanner />

      {/* ============================================================== */}
      {/* ACADEMICS PAGE MAIN CONTENT SECTIONS                           */}
      {/* ============================================================== */}
      <main className="container-page relative z-20 -mt-4 sm:-mt-6 lg:-mt-8 pb-14 sm:pb-16 lg:pb-20 space-y-6 sm:space-y-8 lg:space-y-10">
        {/* 1. Curriculum Overview Floating Strip */}
        <CurriculumOverview />

        {/* 2. Our Curriculum Section */}
        <OurCurriculum />

        {/* 3. Subjects We Teach Section */}
        <SubjectsWeTeach />

        {/* 4. Learning Methodology & Academic Features */}
        <LearningApproach />
      </main>
    </div>
  );
}

