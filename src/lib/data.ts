import { Award, Briefcase, GraduationCap, Code, Construction, Languages, Linkedin, Mail, MapPin, Phone, Palette, Star } from "lucide-react";

export const personalInfo = {
  name: "Alexandre Wright",
  title: "Architect & Urban Designer",
  introduction: "A passionate and innovative architect with a flair for sustainable design and urban planning. With over a decade of experience, I transform concepts into tangible, human-centric spaces that inspire and endure.",
  cv_text: `
Alexandre Wright
Architect & Urban Designer

CONTACT
- Phone: +1 (123) 456-7890
- Email: alexandre.wright@email.com
- Location: New York, NY
- LinkedIn: linkedin.com/in/alexandrewright

SUMMARY
A passionate and innovative architect with over 10 years of experience in sustainable design and urban planning. Proven ability to lead projects from conception to completion, delivering high-quality, impactful architectural solutions.

EXPERIENCE

Senior Architect | UrbanScape Architects, New York, NY | 2018 - Present
- Led the design and development of major mixed-use urban renewal projects.
- Managed a team of 5 junior architects, providing mentorship and guidance.
- Key Projects: 'Greenwood Plaza' - a 50-story sustainable residential tower.

Architect | Horizon Designs, San Francisco, CA | 2014 - 2018
- Designed and executed commercial and residential projects.
- Specialized in parametric design and digital fabrication techniques.
- Project: 'The Wave' - an award-winning coastal community center.

Junior Architect | Genesis Firm, Chicago, IL | 2012 - 2014
- Assisted in schematic design, construction documentation, and 3D modeling for various projects.

EDUCATION

Master of Architecture | Columbia University, New York, NY | 2012
- Focus on Advanced Architectural Design and Urban Studies.

Bachelor of Science in Architecture | University of Illinois, Urbana-Champaign | 2010
- Graduated with High Honors.

SKILLS
- Technical: AutoCAD, Revit, Rhino 3D, SketchUp, V-Ray, Grasshopper
- Design: Adobe Creative Suite (Photoshop, InDesign, Illustrator)
- Other: Project Management, Sustainable Design (LEED AP), Building Codes

CERTIFICATIONS
- Licensed Architect, State of New York
- LEED Accredited Professional (LEED AP BD+C)
`,
  contact: [
    { icon: Phone, text: "+1 (123) 456-7890", href: "tel:+11234567890" },
    { icon: Mail, text: "alexandre.wright@email.com", href: "mailto:alexandre.wright@email.com" },
    { icon: MapPin, text: "New York, NY", href: "#" },
    { icon: Linkedin, text: "linkedin.com/in/alexandrewright", href: "https://linkedin.com/in/alexandrewright", target: "_blank" },
  ],
};

export const experienceData = {
  title: "Professional Experience",
  icon: Briefcase,
  jobs: [
    {
      role: "Senior Architect",
      company: "UrbanScape Architects",
      location: "New York, NY",
      dates: "2018 - Present",
      description: "Leading the design and development of major mixed-use urban renewal projects. Responsible for team management, client relations, and ensuring design excellence from concept to construction.",
      details: [
        "Managed a team of 5 junior architects, fostering a collaborative and innovative environment.",
        "Spearheaded the 'Greenwood Plaza' project, a 50-story sustainable residential tower.",
        "Implemented advanced BIM workflows, improving project efficiency by 20%.",
      ],
    },
    {
      role: "Architect",
      company: "Horizon Designs",
      location: "San Francisco, CA",
      dates: "2014 - 2018",
      description: "Designed and executed a variety of commercial and residential projects, with a focus on integrating parametric design and digital fabrication techniques.",
      details: [
        "Recipient of the 'Future Forward' award for 'The Wave' community center design.",
        "Developed complex geometries and facade systems using Rhino and Grasshopper.",
        "Collaborated closely with engineers and contractors to ensure design integrity.",
      ],
    },
    {
      role: "Junior Architect",
      company: "Genesis Firm",
      location: "Chicago, IL",
      dates: "2012 - 2014",
      description: "Assisted senior architects in all phases of the design process, from schematic design to construction documentation and 3D modeling.",
      details: [
        "Contributed to the design development of several high-profile commercial buildings.",
        "Produced detailed construction documents and renderings.",
        "Gained foundational experience in project management and building codes.",
      ],
    },
  ],
};

export const educationData = {
  title: "Education",
  icon: GraduationCap,
  schools: [
    {
      degree: "Master of Architecture",
      university: "Columbia University",
      location: "New York, NY",
      year: "2012",
      details: "Focused on Advanced Architectural Design, Urban Studies, and Digital Fabrication. Thesis project explored adaptive reuse in post-industrial cityscapes."
    },
    {
      degree: "Bachelor of Science in Architecture",
      university: "University of Illinois, Urbana-Champaign",
      location: "Urbana-Champaign, IL",
      year: "2010",
      details: "Graduated with High Honors. Study abroad program in Rome, focusing on classical architecture and urbanism."
    },
  ],
};

export const skillsData = {
    title: "Skills & Certifications",
    icon: Star,
    categories: [
        {
            name: "Software Expertise",
            icon: Code,
            skills: ["AutoCAD", "Revit", "Rhino 3D", "SketchUp", "Grasshopper", "V-Ray", "Lumion"]
        },
        {
            name: "Design & Visualization",
            icon: Palette,
            skills: ["Adobe Creative Suite", "Parametric Design", "3D Modeling", "Architectural Rendering", "Hand Sketching"]
        },
        {
            name: "Professional Skills",
            icon: Construction,
            skills: ["Project Management", "Sustainable Design", "Building Codes", "Construction Documentation", "Client Communication"]
        },
        {
            name: "Certifications",
            icon: Award,
            skills: ["Licensed Architect, NY", "LEED AP BD+C"]
        },
        {
            name: "Languages",
            icon: Languages,
            skills: ["English (Native)", "French (Professional)"]
        }
    ]
};

export const projectsData = {
    title: "Project Portfolio",
    icon: Construction,
    projects: [
        {
            title: "Greenwood Plaza",
            category: "Mixed-Use Tower",
            description: "A 50-story sustainable residential tower in downtown New York, featuring a vertical forest and integrated community spaces.",
            image: "https://placehold.co/600x400.png",
            hint: "modern skyscraper"
        },
        {
            title: "The Wave Center",
            category: "Community Building",
            description: "An award-winning coastal community center in San Francisco, with a dynamic, wave-inspired form and public-facing amenities.",
            image: "https://placehold.co/600x400.png",
            hint: "modern architecture"
        },
        {
            title: "Serenity House",
            category: "Private Residence",
            description: "A minimalist private residence nestled in a forest, designed to blend seamlessly with its natural surroundings.",
            image: "https://placehold.co/600x400.png",
            hint: "forest house"
        },
        {
            title: "Tech Hub Campus",
            category: "Commercial Office",
            description: "A sprawling campus for a tech giant, designed to foster innovation and collaboration with flexible workspaces and green rooftops.",
            image: "https://placehold.co/600x400.png",
            hint: "modern office"
        }
    ]
}

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Alexandre Wright. All Rights Reserved.`,
  socials: [
      { name: "LinkedIn", href: "https://linkedin.com/in/alexandrewright", icon: Linkedin },
      // Add other social links here if needed
  ]
}
