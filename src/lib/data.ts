import { Award, Briefcase, GraduationCap, Code, Palette, Star, Linkedin, Mail, MapPin, Phone, Building, Home, Paintbrush, School, FileText } from "lucide-react";

export const personalInfo = {
  name: "Rania Aliyaputri Santoso",
  title: "Architectural Engineering Graduate",
  introduction: "Recent graduate with a Bachelor of Education in Architectural Engineering Education from Universitas Pendidikan Indonesia, equipped with solid academic training in architectural design and building technologies. Seeking to leverage advanced skills in architectural software and hands-on internship experience to contribute to the design and implementation of innovative architectural projects.",
  cv_text: `
Rania Aliyaputri Santoso
Architectural Engineering Graduate

CONTACT
- Phone: +62895346305922
- Email: raniaaliya04@gmail.com
- Location: Tangerang, Indonesia
- LinkedIn: linkedin.com/in/rania-aliya

SUMMARY
Recent graduate with a Bachelor of Education in Architectural Engineering Education from Universitas Pendidikan Indonesia, equipped with solid academic training in architectural design and building technologies. Seeking to leverage advanced skills in architectural software and hands-on internship experience to contribute to the design and implementation of innovative architectural projects.

PROFESSIONAL EXPERIENCE

Project Supervisor Intern | PT Graha Ciptayasha, Cikarang | June - August 2024
- Performed detailed checks on steel reinforcement and precast concrete panels for Perumahan Savasa, Panasonic Homes Deltamas - Precast Concrete Housing.
- Conducted defect inspections and functionality checks of openings.
- Calculated concrete volumes and managed data for precast concrete panels.
- Performed detailed volume calculations for concrete pour phases for Mall Lippo Cikarang Extension Project.
- Mapped project progress to optimize work schedules and resources.
- Prepared construction drawings to guide on-site work and facilitate project execution.
- Made adjustments to existing architectural drawings for Ignite Data Center, Cikarang.
- Collaborated with international consultants to rectify discrepancies in shop drawings.
- Handled simple drafting tasks to support the project’s technical requirements.

EDUCATION

Bachelor of Education in Architectural Engineering | Universitas Pendidikan Indonesia | Sept 2021 - July 2025
- GPA: 3.82
- Courses Include: Architectural Design Studio I-IV, Building Structures I-III, Construction Management, Environmental and Utility Building Design, Interior and Furniture Design, Site Planning, Long-span Architecture, Building Construction and Sanitation Practices, Building Information Modeling (BIM), Digital Architectural Presentation, Budget Planning, Sustainable Architecture.

CERTIFICATIONS
- Construction Work Competency Certificate (SKK) - PUPR, Position: Construction Site Manager (May 2025)

SKILLS
- Architectural Software: Archicad, AutoCAD, SketchUp, Enscape, BIMx
- Design Tools: Adobe Photoshop, Canva
- Administration: Microsoft Office, Google Workspace
- Personal: Strong analytical skills, Effective communicator, Passionate about sustainable practices, Fluent in Indonesian and English.
`,
  contact: [
    { type: 'phone', icon: Phone, text: "+62895346305922", href: "tel:+62895346305922" },
    { type: 'email', icon: Mail, text: "raniaaliya04@gmail.com", href: "mailto:raniaaliya04@gmail.com" },
    { type: 'location', icon: MapPin, text: "Tangerang, Indonesia", href: "#" },
    { type: 'linkedin', icon: Linkedin, text: "linkedin.com/in/rania-aliya", href: "https://www.linkedin.com/in/rania-aliya/", target: "_blank" },
  ],
};

export const experienceData = {
  title: "Professional Experience",
  icon: Briefcase,
  jobs: [
    {
      role: "Project Supervisor Intern",
      company: "PT Graha Ciptayasha",
      location: "Cikarang, Indonesia",
      dates: "June - August 2024",
      description: "Gained hands-on experience in various projects, including precast concrete housing, a mall extension, and a data center. Responsibilities included quality control, project monitoring, and technical drafting.",
      details: [
        "Performed detailed checks on steel reinforcement and precast concrete panels.",
        "Conducted defect inspections and functionality checks of openings.",
        "Calculated concrete volumes and managed data for precast concrete panels.",
        "Mapped project progress to optimize work schedules and resources.",
        "Prepared construction drawings to guide on-site work.",
        "Collaborated with international consultants to rectify discrepancies in shop drawings."
      ],
    }
  ],
};

export const educationData = {
  title: "Education",
  icon: GraduationCap,
  schools: [
    {
      degree: "Bachelor of Education in Architectural Engineering",
      university: "Universitas Pendidikan Indonesia",
      location: "GPA 3.82",
      year: "2021 - 2025",
      details: "Relevant Courses: Architectural Design Studio I-IV, Building Structures I-III, Construction Management, BIM, Sustainable Architecture."
    },
  ],
};

export const skillsData = {
    title: "Skills & Attributes",
    icon: Star,
    categories: [
        {
            name: "Architectural Software",
            icon: Code,
            skills: ["Archicad", "AutoCAD", "SketchUp", "Enscape", "BIMx"]
        },
        {
            name: "Design Tools",
            icon: Palette,
            skills: ["Adobe Photoshop", "Canva"]
        },
        {
            name: "Personal Attributes",
            icon: Star,
            skills: ["Strong Analytical Skills", "Effective Communicator", "Sustainable Practices", "Innovative", "Fluent in Indonesian & English"]
        },
        {
            name: "Certifications",
            icon: Award,
            skills: ["Construction Work Competency (SKK) - Site Manager"]
        },
        {
            name: "Administration",
            icon: FileText,
            skills: ["Microsoft Office", "Google Workspace"]
        }
    ]
};

export const projectsData = {
    title: "Project Portfolio",
    icon: Building,
    projects: [
        {
            title: "Boarding House",
            slug: "boarding-house",
            category: "Freelance Project",
            description: "This is a 2-story boarding house project that was designed on a 380 m2 of land. This boarding house consists 24 bedrooms with mezzanine and parking area for cars and motorcycles.\n\nThis building adapts industrial tropical concept, dominated by exposed brick arranged in a rhythmic pattern, giving the structure a solid yet aesthetically pleasing appearance. The building mass is symmetrically composed, with vertical elements and large glass openings at the center that allow for optimal natural lighting into the interior spaces. The black-framed windows emphasize the industrial aesthetic and harmonize with the exposed brick walls that frame them.",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607789/PERSPEKTIF_EKSTERIOR_FIX_uaa8ei.png",
            hint: "modern apartment building",
            status: "On Construction",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607791/LANTAI_2_RENDER_yte0mp.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607782/LANTAI_2_RENDER_2_n5y0pg.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607782/TAMPAK_DEPAN_dlvbxb.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607782/LANTAI_1_RENDER_yzasyg.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753607781/ISOMETRI_KAMAR_2_-_Copy_uy2pqw.png",
            ]
        },
        {
            title: "House Facade Renovation",
            slug: "house-facade-renovation",
            category: "Freelance Project",
            description: "This is a project of house’s facade renovation located in Kelapa Dua, Tangerang Regency. The renovation consists of replacing roof design and the front facade. \n\nThe design of the renovation gives more neutral and calm appearance. Overall, the design is dominated by wood materials and shades of grey that complement each other. It is equipped with ventilation blocks for airflow and wooden-patterned louver panels as sunshading.",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608035/Render_Fasad_fix_cropped_pgiczb.png",
            hint: "house facade modern",
            status: "Finished",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608033/20250725_172902_pqj0uk.jpg",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753612336/PLAFOND_TERAS_WPC_DUMA_j90srq.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753612330/20250725_172802_zry8sx.jpg"
            ]
        },
        {
            title: "House Renovation",
            slug: "house-renovation",
            category: "Freelance Project",
            description: "The purpose of this project is to design a 99 m2 square private carport to a single-story house with 3 bedrooms. This house adopts a modern contemporary concept, emphasizing clean lines and a dynamic composition of geometric forms. The asymmetrical sloped roof becomes the main visual element, reinforcing the overall character of the design, also giving the high ceiling to give the impression of a spacious  room. \n\nThe front façade combines two primary materials: natural stone and neutral white wall paint. Natural stone is prominently applied on the right side and around the entrance area, giving the house a solid yet warm impression. Meanwhile, the ceiling and roof trim feature dark wood accents, creating a harmonious contrast and enhancing the natural aesthetic.",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608415/RENDER_TAMPAK_DEPAN_dg3qmi.png",
            hint: "interior design living room",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608407/RENDER_PERSPEKTIF_EKSTERIOR_oswfaq.png"
            ]
        },
        {
            title: "Japandi House Interior",
            slug: "japandi-house-interior",
            category: "Interior and Furniture Design | Academic",
            description: "The purpose of this project is to design the interior of the 3-story+basement built house located in Dago, Bandung. Japandi style was chosen to provide a natural, clean, and simple appearance that give homey atmosphere.\n\nNatural materials are used by incorporating wood, which is a characteristic feature of the Japandi style. In addition, green plants provide visual balance to the space. The natural colors of the wood and plants create a warm and calming impression.",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608505/R._KELUARGA_JAPANDI_ru8yzm.png",
            hint: "minimalist interior design",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608525/PERSPEKTIF_DAPUR_iogtd2.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608523/PERSPEKTIF_RUANG_KERJA_rn4olz.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608520/PERSPEKTIF_RUANG_MAKAN_vlhuto.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608517/PERSPEKTIF_KAMAR_MANDI_hpl6d4.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608517/PERSPEKTIF_RUANG_TIDUR_2_asahnm.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608511/R._TAMU_JAPANDI_jzs1gl.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608508/R._MAKAN_JAPANDI_a0qryn.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608496/Taman_Depan_Render_jwm3bs.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608495/Taman_Belakang_Render_esjp7n.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608494/Jendela_Render_ugettl.png"
            ]
        },
        {
            title: "Educational Building of Special Needs School",
            slug: "educational-building-of-special-needs-school",
            category: "Architectural Design Studio IV | Academic",
            description: "This educational building is the part of special needs school type D (physically disabled) named Sekolah Luar Biasa-D (SLB-D) Kembangdiri.  Located on Ir. H. Juanda St., Coblong, Bandung, this school accomodates the rights of the physically disabled students to gain knowledge at school just like the ordinary students.  SLB-D Kembangdiri consists three educational levels, which are elementary school, junior high school, and senior high school. All those three educational levels are accomodated in this 3-story educational building.\n\nSLB-D Kembangdiri adopts a smart-therapeutic concept, which combined the concept of smart building and therapeutic architecture, with futuristic style.\n\nThis concept supports the needs of the physically disabled students to do their daily activities comfortably and safely. The smart building concept helps them achieve good accessibility and mobility with the support of Building Automation System (BAS). Meanwhile, the therapeutic architecture concept helps them feel accepted, understood, and given positive energies that could build positive changes to the students.",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608170/Enscape_2024-01-02-16-04-40_tlpufd.png",
            hint: "modern school building",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608165/Enscape_2024-01-02-16-34-21_wqay7l.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608164/poster_6_bi5y2v.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608157/interior_s8ghvf.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608156/poster_8_kr5zut.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608155/poster_7_okd24r.png"
            ]
        },
        {
            title: "Gedong Sawala Nusantara",
            slug: "gedong-sawala-nusantara",
            category: "Long-span Architecture | Academic",
            description: "Gedong Sawala Nusantara is a performing arts hall that features 70 meters span supported by steel truss and pyramidal folded system. This building comes with retail area on the 1st floor and performing hall on the 2nd floor that integrates the cultural values and modern lifestyle.\n\nThe pyramidal system employs triangular folded planes, clad with aluminum panels in this design to enhance both structural expression and material efficiency. Yoshimura pattern or diamond pattern is used as the concept of the folded system of this project",
            image: "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608334/RENDER_EKSTERIOR_2_ve3iv2.png",
            hint: "modern architecture public",
            gallery: [
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608344/RENDER_INTERIOR_TRIBUN_1_flmw6z.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608335/RENDER_INTERIOR_GROUND_FLOOR_ggrrux.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608334/RENDER_ATAP_pjqn4c.png",
                "https://res.cloudinary.com/dpkmslkmk/image/upload/v1753608333/RENDER_TAMPAK_fsee5i.png"
            ]
        }
    ]
}

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Rania Aliyaputri Santoso. All Rights Reserved.`,
  socials: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/rania-aliya/", icon: Linkedin },
  ]
}
