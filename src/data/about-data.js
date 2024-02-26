export const bioData = {
  image: '/images/about/zipline.png',
  imageAlt: 'Image of Melissa Miller on a zipline course.',
  imageCaption: 'Me on a zipline course in Hocking Hills.',
  leadText:
    'I am a front-end developer, designer, and leader who has extensive experience with building design systems and other tools to enable content creators.',
  mainText: (
    <>
      <p>
        I have a passion for creating and maintaining design systems and have
        been working in this space for several years. I am currently leading the
        development of the Pantheon Design System. In my previous role at The
        Ohio State University, I was a co-founder of their first university-wide
        design system.
      </p>
      <p>
        With my diverse background in development, design, photography, and
        project management, I am a strong proponent of building and leading
        cross-functional teams.
      </p>
      <p>
        When I'm not building the web, I like to play music (most recently on{' '}
        <a
          href='https://open.spotify.com/album/0Pb37ITfck6eATunsfOgus'
          target='_blank'
        >
          this album
        </a>
        ), research urban history,{' '}
        <a href='https://melissamiller.photoshelter.com' target='_blank'>
          take photos
        </a>
        , and spend time with my partner and our dog.
      </p>
    </>
  ),
};

export const resumeData = [
  {
    sectionName: 'Professional Experience',
    sectionType: 'work-experience',
    finePrint: (
      <>
        Full employment timeline is available on{' '}
        <a
          href='https://www.linkedin.com/in/melissa-a-miller-6a37744/'
          target='_blank'
        >
          LinkedIn
        </a>
        .
      </>
    ),
    items: [
      {
        companyName: 'Pantheon Systems',
        jobLocation: 'San Francisco, CA',
        jobTitle: 'Staff UX Engineer',
        startDate: 'January 2022',
        endDate: 'present',
        description:
          'Product Owner and Tech Lead for the Pantheon Design System. System implementations include React and Twig-based component libraries, a design token library, and a Figma-based UI kit.',
      },
      {
        companyName: 'The Ohio State University',
        jobLocation: 'Columbus, OH',
        jobTitle: 'Director, Web Development and Design',
        startDate: 'August 2013',
        endDate: 'December 2021',
        description: (
          <>
            <p>
              Led a diverse team of developers and designers and was responsible
              for a large portfolio of websites, a website-building platform,
              web applications, digital assets, component libraries, and
              accessible document templates for The Office of the Chief
              Information Office
            </p>
            <p>Co-founded the first university-wide design system.</p>
          </>
        ),
      },
      {
        companyName: 'The Ohio State University',
        jobLocation: 'Columbus, OH',
        jobTitle: 'Web Developer and Graphic Designer',
        startDate: 'July 2012',
        endDate: 'August 2013',
        description:
          'Worked on the Digital First university-wide initiative providing branding, graphic design, and web development.',
      },
      {
        companyName: 'The Ohio State University',
        jobLocation: 'Columbus, OH',
        jobTitle: 'Graphic Designer and Web Communications Specialist',
        startDate: 'March 2008',
        endDate: 'August 2012',
        description:
          'Provided web development, graphic design, photography, and project planning for Ohio State Transportation & Parking Services.',
      },
      {
        companyName: 'Art.com',
        jobLocation: 'Columbus, OH',
        jobTitle: 'Image Production Supervisor',
        startDate: 'September 2006',
        endDate: 'September 2007',
        description:
          'Led a team of production artists and photographers to create product images for a series of retail websites.',
      },
      {
        companyName: 'The Ohio State University',
        jobLocation: 'Columbus, OH',
        jobTitle: 'Visual Communication Coordinator and Lecturer',
        startDate: 'June 2001',
        endDate: 'June 2006',
        description: (
          <>
            <p>
              Supervised all visual-based aspects of the daily college newspaper
              including page production, photography and graphic design.
            </p>
            <p>
              Taught Photojournalism and Newspaper Design courses for the
              Department of Journalism.
            </p>
          </>
        ),
      },
    ],
  },
  {
    sectionName: 'Education',
    sectionType: 'education',
    items: [
      {
        degreeName: 'MCRP, City and Regional Planning',
        schoolName: 'The Ohio State University',
        schoolLocation: 'Columbus, OH',
        graduationDate: 'December 2009',
      },
      {
        degreeName: 'BFA, Photography',
        schoolName: 'The Ohio State University',
        schoolLocation: 'Columbus, OH',
        graduationDate: 'December 2003',
      },
      {
        degreeName: 'BS, Printing Technology and Marketing',
        schoolName: 'Western Michigan University',
        schoolLocation: 'Kalamazoo, MI',
        graduationDate: 'December 1997',
      },
    ],
  },
  {
    sectionName: 'Certifications',
    sectionType: 'resume',
    items: [
      {
        itemTitle: 'Project Management Professional (PMP)',
        subheadPart1: 'Project Management Institute',
        subheadPart2: 'Credential ID: 1980855',
      },
    ],
  },
  {
    sectionName: 'Preferred Tools and Frameworks',
    sectionType: 'skills',
    items: [
      {
        topicTitle: 'Development',
        topicItems: ['React', 'Next.js', 'Gatsby', 'Drupal'],
      },
      {
        topicTitle: 'Design Systems',
        topicItems: ['Storybook', 'Style Dictionary'],
      },
      {
        topicTitle: 'Design',
        topicItems: ['Figma', 'Adobe Creative Suite'],
      },
    ],
  },
  {
    sectionName: 'Selected Presentations',
    sectionType: 'presentations',
    items: [
      {
        presentationName: 'How to Hack Storybook for Drupal',
        eventName: 'Design4Drupal Webinar Series',
        eventDate: 'February 2023',
      },
      {
        presentationName: 'HighEdWeb Drupal Discussion',
        eventName: 'HighEdWeb Association Webinar',
        eventDate: 'July 2020',
      },
      {
        presentationName:
          'Higher Education Summit: Working Together, Yet Apart',
        eventName: 'Bay Area Drupal Camp',
        eventDate: 'October 2019',
      },
      {
        presentationName: 'Higher Education Summit: Community Building',
        eventName: 'Bay Area Drupal Camp',
        eventDate: 'October 2018',
      },
      {
        presentationName:
          'Creating a Successful Service Roadmap for a Higher Ed Web Team',
        eventName: 'Stanford Drupal Camp',
        eventDate: 'April 2018',
      },
      {
        presentationName: 'Scaling Drupal for Higher-Ed',
        eventName: 'DrupalCon New Orleans',
        eventDate: 'May 2016',
      },
      {
        presentationName: 'Everything* You Need to Know About Visual Design',
        eventName: 'The Ohio State University, iBook Bootcamp',
        eventDate: 'January 2014',
      },
      {
        presentationName: "A Beginner's Guide to Drupal Site Building",
        eventName: 'Drupal Camp Ohio',
        eventDate: 'December 2013',
      },
      {
        presentationName: "A Beginner's Guide to Site Building — for Designers",
        eventName: 'Twin Cities Drupal Camp',
        eventDate: 'July 2013',
      },
      {
        presentationName: 'Introduction to Drupal Theming',
        eventName: 'Drupal Camp Ohio',
        eventDate: 'November 2012',
      },
    ],
  },
];
