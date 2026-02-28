import React from "react";
import { Check } from "lucide-react";

export default function About() {
  const BASE_URL = import.meta.env.BASE_URL;

  const FEATURES = [
    {
      title: "Expert Care",
      description: "Licensed professional with 9+ years of experience",
    },
    {
      title: "Personalized Treatment",
      description: "Customized plans for your specific condition",
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art facilities and technology",
    },
    {
      title: "Holistic Approach",
      description: "Comprehensive care for mind and body",
    },
  ];

  return (
    <section
      id='about'
      className='bg-muted scroll-mt-20'
      data-testid='about-section'
    >
      <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:p-8'>
        {/* <div className='text-center mb-10'>
          <h2
            className='text-3xl md:text-5xl font-bold text-foreground mb-6'
            data-testid='about-title'
          >
            About Aarvika Physiotherapy
          </h2>
          <p
            className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
            data-testid='about-subtitle'
          >
            Dedicated to providing exceptional physiotherapy services with a
            patient-centered approach, combining expertise with compassionate
            care.
          </p>
        </div> */}
        <h2
          className='text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-6 text-center'
          data-testid='about-title'
        >
          Know Your Doctor
        </h2>
        <p
          className='text-sm md:text-xl text-muted-foreground max-w-7xl mx-auto leading-relaxed'
          data-testid='team-subtitle'
        >
          From an early age, I was drawn to the medical field and inspired by a
          deep desire to serve others. Growing up with a father who is a
          dedicated medical professional, I was naturally influenced by his work
          and the impact he made in people's lives. This early exposure,
          combined with my keen interest in biology, motivated me to pursue a
          career in healthcare. After completing my 10+2 with a focus on
          science, I appeared for CET and NEET, and chose to specialize in
          Physiotherapy. I earned my Bachelor's degree in Physiotherapy from
          NDMVP’s College of Physiotherapy, followed by a Master’s degree in
          Musculoskeletal Sciences from the same institution. To further enhance
          my clinical skills, I completed a Fellowship in Osteopathic Manual
          Techniques (FOMT) from SBS University, Dehradun. I have also received
          advanced training in Dry Needling, Kinesio Taping, Fascial
          Manipulation, Spinal Mobilization, and am a certified provider of
          Blood Flow Restriction Therapy (BFRT). Over the years, I’ve gained
          valuable experience working alongside reputed physiotherapists and
          orthopedic surgeons in Nashik. My clinical expertise includes managing
          a wide range of post-operative rehabilitation cases such as Total Knee
          Replacement (TKR), Total Hip Replacement (THR), ACL/PCL
          Reconstruction, Meniscus Repairs, Spinal Surgeries, High Tibial
          Osteotomy (HTO), Rotator Cuff Repairs, and other post-fracture
          surgical recoveries. With a patient-centered approach, I strive to
          provide personalized care and evidence-based treatment to help
          individuals restore function, reduce pain, and regain their quality of
          life.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 mt-6 md:mt-12'>
          <div>
            <img
              src={`${BASE_URL}Dr.Rashmi_cropped.jpg`}
              alt='Dr. Rashmi'
              className='rounded-2xl shadow-lg w-full h-auto'
              data-testid='about-image'
            ></img>
          </div>
          <div>
            <h3
              className='text-center text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-6'
              data-testid='mission-title'
            >
              My Mission
            </h3>
            <p
              className='text-sm md:text-lg text-muted-foreground sm:text-center mb-2 md:mb-6 leading-relaxed'
              data-testid='mission-description'
            >
              At Aarvika Physiotherapy Clinic, I believe in empowering my
              patients to achieve optimal health and mobility. My evidence-based
              treatments and personalized care plans are designed to address
              your unique needs and goals.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-start'
                  data-testid={`feature-${index}`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "bg-primary" : "bg-accent"
                    } text-white rounded-full p-2 mr-2 md:mr-4 mt-1`}
                  >
                    <Check size={16} />
                  </div>
                  <div>
                    <h4
                      className='md:text-lg font-semibold text-foreground'
                      data-testid={`feature-title-${index}`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className='text-sm md:text-lg text-muted-foreground'
                      data-testid={`feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
