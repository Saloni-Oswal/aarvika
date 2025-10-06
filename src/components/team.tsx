import React from "react";

export default function Team() {
  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <section id='team' className='py-20 bg-muted' data-testid='team-section'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            className='text-3xl md:text-5xl font-bold text-foreground mb-6'
            data-testid='team-title'
          >
            About Dr. Rashmi <small>(BPT, MPT, FOMT)</small>
          </h2>

          {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <img
                src={`${BASE_URL}Dr.Rashmi.jpg`}
                alt='Dr. Rashmi'
                className='rounded-2xl shadow-lg w-full h-auto'
                data-testid='about-image'
              />
            </div> */}
          <p
            className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
            data-testid='team-subtitle'
          >
            From an early age, I was drawn to the medical field and inspired by
            a deep desire to serve others. Growing up with a father who is a
            dedicated medical professional, I was naturally influenced by his
            work and the impact he made in people's lives. This early exposure,
            combined with my keen interest in biology, motivated me to pursue a
            career in healthcare. After completing my 10+2 with a focus on
            science, I appeared for CET and NEET, and chose to specialize in
            Physiotherapy. I earned my Bachelor's degree in Physiotherapy from
            NDMVP’s College of Physiotherapy, followed by a Master’s degree in
            Musculoskeletal Sciences from the same institution. To further
            enhance my clinical skills, I completed a Fellowship in Osteopathic
            Manual Techniques (FOMT) from SBS University, Dehradun. I have also
            received advanced training in Dry Needling, Kinesio Taping, Fascial
            Manipulation, Spinal Mobilization, and am a certified provider of
            Blood Flow Restriction Therapy (BFRT). Over the years, I’ve gained
            valuable experience working alongside reputed physiotherapists and
            orthopedic surgeons in Nashik. My clinical expertise includes
            managing a wide range of post-operative rehabilitation cases such as
            Total Knee Replacement (TKR), Total Hip Replacement (THR), ACL/PCL
            Reconstruction, Meniscus Repairs, Spinal Surgeries, High Tibial
            Osteotomy (HTO), Rotator Cuff Repairs, and other post-fracture
            surgical recoveries. With a patient-centered approach, I strive to
            provide personalized care and evidence-based treatment to help
            individuals restore function, reduce pain, and regain their quality
            of life.
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
